'use strict';

// 1 - native node modules
// 2 - npm modules
// 3 - custom app modules
// 4 - module constant
// 5 - module logic
const fs = require('fs');

fs.readFile(`${__dirname}/data/data.txt`, function(err, data) {
  if (err) throw err;
  console.log('content of my file:', data.toString());
});
