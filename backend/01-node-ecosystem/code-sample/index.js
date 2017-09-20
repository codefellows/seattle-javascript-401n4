'use strict';

const greet = require("./lib/greet.js");
const mathy = require("./lib/arithmetic.js");

console.log(greet("JOHN"));

console.log(mathy.add(1,3));
console.log(mathy.add("foo",3));
