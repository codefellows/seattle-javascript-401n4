'use strict';

let fp = require('./lib/fp.js');

let toUpper = module.exports = () => {
  let list = fp.splice(process.argv, 2);
  list = fp.map(list, word => word.toUpperCase());

  let result = list.join(' ')
  console.log(result);
  return result;
};

toUpper();


// ['first ','second']
