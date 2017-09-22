'use strict';

let fp = module.exports = {};

fp.map = (list, callback) => {
  if(typeof list === 'object')
    return Array.prototype.map.call(list, callback);
  throw new Error('invalid input');
};

fp.filter = (list, callback) => {
  if(typeof list === 'object')
    return Array.prototype.filter.call(list, callback);
  throw new Error('invalid input');
};

fp.reduce = (list, callback, startNum) => {
  if(typeof list === 'object')
    return Array.prototype.reduce.call(list, callback, startNum);
  throw new Error('invalid input');
};

fp.concat = (list, ...itemsToConcat) => {
  if(typeof list === 'object')
    return Array.prototype.concat.apply(list, itemsToConcat);
  throw new Error('invalid input');
};


fp.splice = (list, ...args) => {
  // list === ['/path/to/node', '/path/to/your_file', 'first ','second'].splice(2)
  // args === [2]
  if(typeof list === 'object')
    return Array.prototype.splice.apply(list, args);
  throw new Error('invalid input');
};
