'use strict';

const app = require('express')();

app.get('/success', (req, res, next) => {
  res.send('successful get');
  next();
});

app.get('/error', (req, res, next) => {
  return next('server error!');
  res.send('should not see this');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('error caught');
});

app.listen(3000);
