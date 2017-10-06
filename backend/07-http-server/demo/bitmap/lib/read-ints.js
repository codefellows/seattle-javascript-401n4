'use strict';

const os = require('os');

let readInts = module.exports = exports = {
  read16: function(buf, offset) {
    return buf['readUInt16' + os.endianness()](offset);
  },
  read32: function(buf, offset) {
    return buf[`readUInt32${os.endianness()}`](offset);
  }
};

let ternary = {
  read16: function(buf, offset) {
    return os.endianness() === 'LE' ? buf.readUInt16LE(offset) : buf.readUInt16BE(offset);
  }
}
