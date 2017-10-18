'use strict';

var a = {subObj: {value: 0}};
var b = a.subObj;
b.value++;

console.log(a);
console.log(b);
