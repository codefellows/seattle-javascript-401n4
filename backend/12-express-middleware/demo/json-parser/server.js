'use strict';

const app = require('express')();

app.use((req, res, next) => {
  let text = '';
  req.on('data', data => text += data.toString());
  req.on('end', () => {
    try {
      req.text = text;
      console.log(req.headers);
      if (req.headers['content-type'] === 'application/json')
        req.body = JSON.parse(text);
    } catch(e) {
      next({statusCode: 422, message: 'invalid JSON', error: e});
    }
    next();
  })
});

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  next()
});

app.get('/stuff', (req, res) => {
  res.send('<h1>some stuff</h1>');
});

app.post('/parse', (req, res) => {
  res.send(req.body || req.text);
});

app.use((err, req, res, next) => {
  console.log(err.error);
  console.log(req.text);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(3000);
