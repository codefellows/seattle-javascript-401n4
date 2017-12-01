'use strict';

const express = require('express');
const jsonParser = require('body-parser').json();
const Player = require(__dirname + '/../models/players');

const playerRouter = module.exports = express.Router();

playerRouter.post('/players', jsonParser, (req,res,next) => {
    let newPlayer = new Player(req.body);
    newPlayer.save()
           .then(player => res.send(player) )
           .catch(err => next(err));
});

playerRouter.delete('/player/:id', (req,res,next) => {
    let playerId = req.params.id;
    
    // TODO: Lookup the Player first so that we can include it's name in the response
    
    Player.remove({_id:playerId})
        .then( () => res.send("Bye Bye Player") )
        .catch({statusCode:500,message:"I have no idea whats wrong"})
});

playerRouter.get('/players', (req,res,next) => {
    
    // TODO: support "random" querying, not just a vomit of all players
    Player.find({})
        .then( players => res.send(players) )
        .catch(next);
        
});

playerRouter.get('/Player/:id', (req,res,next) => {
    
    let playerId = req.params.id;
    
    Player.findOne({_id:playerId})
        .then( player => res.send(player) )
        .catch(next);
});