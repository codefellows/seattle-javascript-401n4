'use strict';

const mongoose = require('mongoose');

const bearSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  favoriteFood: {type: String, default: 'salmons'},
  birthday: {type: Date, default: Date.now}
});

const Bear = module.exports = mongoose.model('Bear', bearSchema);
