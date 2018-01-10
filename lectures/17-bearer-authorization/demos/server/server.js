'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/auth_dev', {useMongoClient: true});

const app = module.exports = require('express')();

app.use(require(__dirname + '/routes/auth-routes'));
app.use(require(__dirname + '/routes/notes-routes'));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500 || err.statusCode).send(err.message || 'server error');
});
