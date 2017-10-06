'use strict';

const fs = require('fs');
const readUHeader = require('./lib/read-u-header');

fs.readFile(process.argv[2], (err, data) => {
  if (err) throw err;
  readUHeader(data, function(err, bitmapHeader) {
    console.log(bitmapHeader);
  });
});
