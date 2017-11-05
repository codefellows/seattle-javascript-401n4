'use strict';

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bluebird').promisifyAll(require('bcrypt'));

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashAsync(password, 10)
    .then((hash) => {
      this.password = hash;
      return this;
    });
};

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareAsync(password, this.password)
    .then(res => {
      if (res) return this;
      throw new Error('password did not match');
    });
};

userSchema.methods.generateToken = function() {
  let secret = process.env.SECRET || 'changethis';
  return jwt.sign({id: this._id}, secret);
};

module.exports = mongoose.model('User', userSchema);
