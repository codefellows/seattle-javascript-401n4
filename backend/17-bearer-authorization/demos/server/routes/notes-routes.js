'use strict';

const Note = require('../models/note');
const bearAuth = require('../lib/bearer-authentication');
const jsonParser = require('body-parser').json();
const notesRoutes = module.exports = require('express').Router();

notesRoutes.post('/notes', jsonParser, bearAuth, (req, res, next) => {
  req.body.userId = req.user._id;
  (new Note(req.body)).save()
    .then(res.send.bind(res))
    .catch(next);
});

notesRoutes.get('/notes', jsonParser, bearAuth, (req, res, next) => {
  Note.find({userId: req.user._id})
    .then(res.send.bind(res))
    .catch(next);
});

notesRoutes.delete('/notes/:id', jsonParser, bearAuth, (req, res, next) => {
  Note.find({_id: req.params.id})
    .then(note => {
      if (note.userId != req.user._id.toString()) return next({statusCode: 403});

      Note.remove({_id: req.params.id}) 
        .then(() => res.send('success1'))
        .catch(next);
    })
    .catch(next);
});
