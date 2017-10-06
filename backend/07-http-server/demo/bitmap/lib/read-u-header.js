'use strict';

let readUHeader = module.exports = exports = function(bitmap, cb) {
  let header = {};

  header.type = bitmap.toString('utf-8', 0, 2);
  header.size = bitmap.
};
