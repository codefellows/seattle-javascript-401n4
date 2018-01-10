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

userSchema.methods.genHash = function(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return reject(err);
      resolve(hash);
    }) 
  })
  .then(hash => {
    this.password = hash;
    return this;
  });
};

userSchema.methods.genHashCb = function(password, callback) {
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) callback(err);
    this.password = hash;
    callback(null, this);
  });
};

//newUser.genHashCb(password, function(err, user) {
//  if (err) res.status(500);
//  user.save(function(err, data) {
//    if(err) return res.status(500);
//      res.send(data); 
//  });
//});

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
