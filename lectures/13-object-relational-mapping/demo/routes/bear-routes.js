'use strict';

const express = require('express');
const jsonParser = require('body-parser').json();
const Bear = require(__dirname + '/../models/bear');

const bearRouter = module.exports = express.Router();

bearRouter.get('/bears', (req, res, next) => {
  let findObj = req.query || {};
  Bear.find(findObj)
    .then(bears => res.send(bears))
    .catch(err => next({error: err}));
});

bearRouter.get('/bears/:id', (req, res, next) => {
  Bear.findOne({_id: req.params.id})
    .then(bears => res.send(bears))
    .catch(err => next({error: err}));
});

bearRouter.post('/bears', jsonParser, (req, res, next) => {
  let newBear = new Bear(req.body);
  newBear.save()
    .then(data => res.send(data))
    .catch(err => next({statusCode: 500, message: 'error creating bear', error: err}))
});

bearRouter.put('/bears/:id', jsonParser, (req, res, next) => {
  delete req.body._id;
  Bear.findOneAndUpdate({_id: req.params.id}, req.body)
    .then(data => res.send('success!'))
    .catch(err => next({error: error}));
});

bearRouter.patch('/bears/:id', jsonParser, (req, res, next) => {
  delete req.body._id;
  //$set will only update the supplied fields
  //instead of replacing the entire object
  Bear.findOneAndUpdate({_id: req.params.id}, {$set: req.body})
    .then(data => res.send('success!'))
    .catch(err => next({error: err}))
});

bearRouter.delete('/bears/:id', (req, res, next) => {
  Bear.remove({_id: req.params.id})
    .then(data => res.send('bear successfully murdered'))
    .catch(err => next({error: err}));
});
