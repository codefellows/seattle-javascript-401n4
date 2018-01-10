'use strict';

var nums = [1, 2, 3, 4];

// O(n)
function contains(input, find) {
  for(let i = 0; i < input.length; i++) {
    if (input[i] === find) return true;
  }
  return false;
}

// console.log('contains 2:', contains(nums, 2)); // return true
// console.log('contains 37:', contains(nums, 37)); // return false

// n of 5
var colors = {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
  white: '#ffffff',
  black: '#000000'
}

// O(1)
function match(input, find) {
  if(input[find]) return true;
  return false;
};

console.log('matches red:', match(colors, 'red')); // return true
console.log('matches purple:', match(colors, 'purple')); // return false
