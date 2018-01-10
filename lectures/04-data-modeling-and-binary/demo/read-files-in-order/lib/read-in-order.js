'use strict';

const fs = require('fs');

const readFilesInOrder = module.exports = exports = function(fileList, cb) {
  cb = cb || function() {};
  if (!(fileList instanceof Array)) return cb(new Error('the first paramter has to be an Array'));

  let completed = 0;
  let dataArr = [];

  fileList.map((filename, index) => {
    fs.readFile(filename, (err, data) => {
      if (err) return cb(err);

      dataArr[index] = data.toString();
      completed++;
      if (completed === fileList.length) cb(null, dataArr);
    });
  });
};
