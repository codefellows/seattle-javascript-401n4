'use strict';

const os = require('os');

let readInts = module.exports = exports = {
  read16: function(buf, offset) {
    return os.endianness() === 'LE' ? buf.readUIntLE16(offset) : buf.readUInt16BE(offset);
  }  
};
