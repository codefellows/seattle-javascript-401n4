'use strict';

const express = require('express');
const jsonParser = require('body-parser').json();
const Team = require(__dirname + '/../models/teams');

const teamRouter = module.exports = express.Router();

teamRouter.post('/teams', jsonParser, (req,res,next) => {
    let newTeam = new Team(req.body);
    newTeam.save()
           .then(team => res.send(team) )
           .catch(err => next(err));
});

teamRouter.delete('/team/:id', (req,res,next) => {
    let teamId = req.params.id;
    
    Team.remove({_id:teamId})
        .then( () => res.send("Bye Bye Team") )
        .catch({statusCode:500,message:"I have no idea whats wrong"})
});

teamRouter.get('/teams', (req,res,next) => {
    
    Team.find({})
        .then( teams => res.send(teams) )
        .catch(next);
        
});

teamRouter.get('/team/:id', (req,res,next) => {
    
    let teamId = req.params.id;
    
    Team.findOne({_id:teamId})
        .then( team => res.send(team) )
        .catch(next);
});