'use strict';

const readInOrder = require('./lib/read-in-order');
const fileList = process.argv.slice(2);

readInOrder(fileList, function(err, data) {
  if (err) throw err;

  data.forEach((content) => {
    console.log(content);
  });
});
