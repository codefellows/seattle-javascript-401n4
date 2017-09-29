'use strict';

const os = require('os');
console.log(os.endianness());

let buf1 = new Buffer('hello world');
buf1[1] = 0x66;
console.log(buf1.readUInt32LE(4));
console.log(buf1);
console.log(buf1.toString());
console.log(buf1.readUInt32LE());
console.log(buf1[0]);

let buf2 = new Buffer('DEADBEEF', 'hex');
console.log(buf2);
console.log(buf2.readUInt32());
console.log(buf2.toString());

console.log(buf2[1]);
