'use strict';

let readInts = require('./read-ints');

let readUHeader = module.exports = exports = function(bitmap, cb) {
  let header = {};

  header.type = bitmap.toString('utf-8', 0, 2);
  header.size = readInts.read32(bitmap, 2);
  header.pixelArrayStart = readInts.read32(bitmap, 10);
  cb(null, header);
};
