'use strict';

const Stack = require('./stack.js');

let myStack = new Stack();

myStack.push('john is short');
myStack.push('john is fat');
myStack.push('john is bald');
myStack.push('john is old');
myStack.push('john is cool');
myStack.push('john is smart');
myStack.push('john is funny');
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());