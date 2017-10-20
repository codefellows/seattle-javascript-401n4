'use strict';

const Promise = require('bluebird');
const prom = Promise.promisify;
const promAll = Promise.promisifyAll;
const MongoClient = promAll(require('mongodb').MongoClient);
const connection = MongoClient.connectAsync('mongodb://localhost:27017/mongopromisify')
  .then(db => {
    const col = promAll(db.collection('notes'));
    col.insertAsync({noteBody: 'here is our first note'})
    .catch(console.log)
    .catch(db.close.bind(db))
    return db;
  });

connection.then(db => {
  const col = promAll(db.collection('notes'));
  col.findAsync({}).then(cur => {
    promAll(cur).toArrayAsync()
      .then(console.log)
      .catch(console.log)
      .then(db.close.bind(db))
  })
})
