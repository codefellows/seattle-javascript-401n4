'use strict';

const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('from a .use middleware');
  next();
});

app.all('/something', (req, res, next) => {
  console.log('from a .all middleware');
  next();
});

app.get('/broken', (req, res, next) => {
  next();
  res.send('from middleware');
}, (req, res) => {
  res.send('hello from the server');
});

app.get('/something', (req, res, next) => {
  console.log('from the .get middleware');
  next();
}, (req, res, next) => {
  console.log('final middleware');
  res.send('final middleware');
});

app.use((req, res, next) => {
  console.log('after routes .use middleware');
  next();
});

app.listen(3000);
