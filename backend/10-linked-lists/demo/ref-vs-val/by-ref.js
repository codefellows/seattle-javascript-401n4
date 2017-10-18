'use strict';

var a = {value: 0};
var b = a;
var c = b;
c = {value: 5};
b.value++;
c.value++;

console.log('a: ', a.value);
console.log('b: ', b.value);
console.log('c: ', c.value);

c = a;
c.value++;

console.log('a2: ', a.value);
console.log('b2: ', b.value);
console.log('c2: ', c.value);

var d = c.value;
d++;

console.log('a3: ', a.value);
console.log('b3: ', b.value);
console.log('c3: ', c.value);
console.log('d3, the mighty ducks: ', d);
