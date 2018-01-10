'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.DB_URL || 'mongodb://localhost:27017/bears_dev', {useMongoClient: true});

const app = module.exports = require('express')();

app.use('/api/v1', require(__dirname + '/routes/bear-routes'));

app.use((err, req, res, next) => {
  console.log(err.error);
  res.status(err.statusCode || 500).send(err.message || 'server error');
});
