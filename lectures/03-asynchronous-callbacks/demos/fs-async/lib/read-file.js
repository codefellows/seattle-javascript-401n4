'use strict';

const fs = require('fs');

let readFile = module.exports = function(cb) {
  cb = cb || function() {};
  fs.readFile(process.argv[2], (err, data) => {
    if (err) {
      console.log(err);
      return cb(err);
    }

    console.log(data.toString());
    cb(null, data.toString());
  });
};
