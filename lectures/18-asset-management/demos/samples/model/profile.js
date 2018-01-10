'use strict'

const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  account: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true},
  bio: {type: String},
  avatar: {type: String},
  birthday: {type: Date},
  location: {type: String},
  lastName: {type: String},
  firstName: {type: String},
})

module.exports = mongoose.model('profile', profileSchema)
