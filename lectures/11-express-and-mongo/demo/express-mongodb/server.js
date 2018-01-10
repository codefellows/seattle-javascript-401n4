'use strict';

const express = require('express');
const promAll = require('bluebird').promisifyAll;
const mongodb = require('mongodb');
const MongoClient = promAll(mongodb.MongoClient);
const connection = MongoClient.connectAsync('mongodb://localhost:27017/expressmongo');
const jsonParser = require('body-parser').json();

const app = express();
const PORT = process.env.PORT || 3000;

app.post('/api/notes', jsonParser, (req, res) => {
  connection.then(db => {
    const col = promAll(db.collection('notes'));
    col.insertAsync(req.body)
      .then(mongoRes => mongoRes.ops[0])
      .then(res.send.bind(res))
      .catch(console.log)
      .catch(() => res.status(500).send('server error'));
    return db;
  });
});

app.get('/api/notes', (req, res) => {
  let findQuery = req.query.id ? {_id: mongodb.ObjectId(req.query.id)} : {};
  connection.then(db => {
    const col = promAll(db.collection('notes'));
    col.findAsync(findQuery).then(cur => {
      promAll(cur).toArrayAsync()
      .then(res.send.bind(res))
      .catch(console.log)
      .catch(() => res.status(500).send('server error'));
    })
    return db;
  });
});

app.listen(PORT, () => console.log('server up on port: ' + PORT));
