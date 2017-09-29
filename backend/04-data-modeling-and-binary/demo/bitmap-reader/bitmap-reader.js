'use strict';

const fs = require('fs');
const bitmap = fs.readFileSync(`${__dirname}/assets/palette-bitmap.bmp`);

const bmp = {};

//the first value tells the type of bitmap
console.log(bitmap.toString('ascii', 0, 2));
//size if the file in bytes
console.log(bitmap.readUInt32LE(2));
//the offset of the start of the pixel array
console.log(bitmap.readUInt32LE(10));
//the number of bits per pixel, since we have a palette bitmap
//the pixel only needs to point at one of our palette colors
//so it only needs to be large enough to point to any of colors (256)
//256 can all be represented in one byte of data.
console.log(bitmap.readUInt16LE(28));
//number of colors, should be 256
console.log(bitmap.readUInt32LE(46));
//1078 is the first pixel which will give us the palette color number, 
//the number is 28 for the first pixel
console.log(bitmap[1078]);
//1079 is the second pixel in the pixel array
console.log(bitmap[1079]);

//the 4 bytes of palette color #28
//to get the offset take the color number, multiply it by the number
//of bytes that each color occupies and add the number of bytes in 
//the header.
//54 + 28 * 4 = 166 => the first byte of four for the palette color
console.log(bitmap[166]);
console.log(bitmap[167]);
console.log(bitmap[168]);
console.log(bitmap[169]);

console.log(bitmap[54]);
console.log(bitmap[55]);
console.log(bitmap[56]);
console.log(bitmap[57]);
