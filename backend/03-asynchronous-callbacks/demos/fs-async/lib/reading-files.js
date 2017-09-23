'use strict';

const fs = require('fs');

let readFirstFile = module.exports = exports = function() {
  fs.readFile(__dirname + '/../data/file-one.txt', (err, data) => {
    if (err) throw err;

    console.log(data.toString());
    readSecondFile();
  });
};

let readSecondFile = function() {
  fs.readFile(__dirname + '/../data/second-file.txt', (err, data) => {
    if (err) throw err;

    console.log(data.toString());
  });

}

console.log('here!');
