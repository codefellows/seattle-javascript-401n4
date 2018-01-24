'use strict'

import {Router} from 'express';
import User from '../model/user.js';
import bodyParser from 'body-parser';
import basicAuth from '../middleware/basic-auth.js';
import bearerAuth from '../middleware/bearer-auth.js';
import superagent from 'superagent';

let URL = process.env.CLIENT_URL;

export default new Router()

    .put('/user', bearerAuth, bodyParser.json(), (req, res, next) => {
        
        let user = req.user;
        
        try {
            
            User.findOne({_id:user._id})
                .then( record => {
                    Object.assign(record, req.body);
                    return record.save();
                })
                .then( record => res.send(record) )
                .catch(next);
    
        }
        catch(e) {
            next(e.message);
        }
    })
    
    .get('/user', bearerAuth, (req, res, next) => {
        let user = req.user;
        if ( user ) { 
            res.send(user);
        }
        else {
            next();
        }
    })

    .post('/signup', bodyParser.json() , (req, res, next) => {
        
        new User.createFromSignup(req.body)
            .then(user => user.tokenCreate())
            .then(token => {
                console.log("(signup) Token", token);
                res.cookie('X-BBB-Token', token);
                res.send(token);
            })
            .catch(next);
    })
    
    .get('/usernames/:username', (req, res, next) => {
    
        User.findOne({username: req.params.username})
            .then(user => {
                if(!user) {
                    return res.sendStatus(200);
                }
                return res.sendStatus(409);
            })
            .catch(next);
    })
    
    .get('/login', basicAuth, (req, res, next) => {
        
        req.user.tokenCreate()
            .then((token) => {
                console.log("(login) Token", token);
                res.cookie('X-BBB-Token', token);
                res.send(token);
            })
            .catch(next);
    })
    
    .get('/oauth/google/code', (req, res, next) => {
      
        let code = req.query.code;
      
        console.log('(1) code', code);
        
        // exchange the code or a token
        superagent.post('https://www.googleapis.com/oauth2/v4/token')
            .type('form')
            .send({
                code: code,
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_secret: process.env.GOOGLE_CLIENT_SECRET,
                redirect_uri: `${process.env.API_URL}/oauth/google/code`,
                grant_type: 'authorization_code'
            })
            .then( response => {
                let googleToken = response.body.access_token;
                console.log("(2) google token", googleToken); 
                return googleToken;
            })
            // use the token to get a user
            .then ( token => {
                return superagent.get('https://www.googleapis.com/plus/v1/people/me/openIdConnect')
                    .set('Authorization', `Bearer ${token}`)
                    .then (response => {
                        let user = response.body;
                        console.log("(3) Google User", user); 
                        return user;
                    })
            })
            .then(googleUser => {
                return User.createFromOAuth(googleUser);
            })
            .then ( user => {
                console.log("(4) Our User", user);
                return user.tokenCreate();
            })
            .then ( token => {
                console.log("(5) Token", token);
                res.cookie('X-BBB-Token', token);
                res.redirect(URL);
            }) 
            .catch( error => {
                console.error(error);
                res.redirect(URL);
            });
        
    })
        
;