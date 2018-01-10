'use strict';

const fs = require('fs');

fs.readFile('./fs-demo.js', (err, data) => {
  if(err) 
    return console.error(err);
  console.log('booyea', data.toString());

  fs.readFile('./data/0.txt', (err, data) => {
    if(err) 
      return console.log(err);
    console.log('sweeet', data.toString());
  });
});


console.log('started reading file');
