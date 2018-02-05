'use strict'

import {Router} from 'express'
import User from '../model/user.js'
import bodyParser from 'body-parser'
import basicAuth from '../middleware/basic-auth.js'
import superagent from 'superagent'

export default new Router()
.get('/oauth/google/code', (req, res, next) => {
  console.log('req.query', req.query)
  if(!req.query.code) {
    // user has denied access
    res.redirect(process.env.CLIENT_URL)
  } else {
    // exchange the code for a google access token
    superagent.post('https://www.googleapis.com/oauth2/v4/token')
    .type('form')
    .send({
      code: req.query.code,
      grant_type: 'authorization_code',
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.API_URL}/oauth/google/code`,
    })
    .then(response => {
      console.log('google token data', response.body)
      // get the user profile
      return superagent.get('https://www.googleapis.com/plus/v1/people/me/openIdConnect')
      .set('Authorization', `Bearer ${response.body.access_token}`)
    })
    .then(response => {
      console.log('google profile', response.body)
      // login or create user from profile
      return User.handleOAUTH(response.body)
    })
    .then(user => user.tokenCreate())
    .then(token => {
      res.cookie('X-Slugchat-Token', token)
      res.redirect(process.env.CLIENT_URL)
    })
    .catch((error) => {
      console.error(error)
      res.redirect(process.env.CLIENT_URL)
    })
  }
})
.post('/signup', bodyParser.json() , (req, res, next) => {
  new User.createFromSignup(req.body)
  .then(user => user.tokenCreate())
  .then(token => {
    res.cookie('X-Slugchat-Token', token)
    res.send(token)
  })
  .catch(next)
})
.get('/login', basicAuth, (req, res, next) => {
  req.user.tokenCreate()
  .then((token) => {
    res.cookie('X-Slugchat-Token', token)
    res.send(token)
  })
  .catch(next)
})
.get('/usernames/:username', (req, res, next) => {
  User.findOne({username: req.params.username})
  .then(user => {
    if(!user)
      return res.sendStatus(200)
    return res.sendStatus(409)
  })
  .catch(next)
})
