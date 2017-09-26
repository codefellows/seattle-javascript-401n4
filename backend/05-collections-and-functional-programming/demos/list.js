'use strict';

function List() {
  for(let key in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
}

List.prototype.copy = function() {
  let result = new List();
  for (let key in this) {
    result[key] = this[key];
  }
  return result;
}

List.prototype.push = function(value) {
  let result = this.copy();
  result[result.length++] = value;
  return result;
}

List.prototype.forEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

let nums = new List(1, 2, 3, 4, 8, 10, 12);

// console.log('copied list:', nums.copy());
console.log('pushed 6000', nums.push(6000));

console.log('original list', nums);

nums.forEach(function(n) {
  console.log('each iteration:', n);
});
