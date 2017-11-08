'use strict';

const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  noteBody: {type: String, required: true},
  userId: String
});

module.exports = mongoose.model('Note', noteSchema);
