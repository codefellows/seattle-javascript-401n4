'use strict';

// Define a constructor 
function Note(content){
  this.content = content;
  this.lulwat = () => {}
}

// Create a note with out new keyword
let ourNote = {}
Note.call(ourNote, 'eat a popcycle')
Note.call(null, 'eat a popcycle')





//function map(array, callback){
  //return array.map(callback)
//}


function map(list, callback){
  return Array.prototype.map.call(list, callback);
}


//nums = [1,2,3,4]

//nums.map(n => n * 2)

//map(document.body.children, n => n.textContent = '')


//let reduce = (list, args) => Array.prototype.reduce.apply(list, args)

function reduce(list, args){
  return Array.prototype.reduce.apply(list, args)
}

[1,2,3].reduce((a,c) => a + c, 10) 
reduce([1,2,3], [(a, c) => a + c, 100]) 
lulwat('hello', 'world')


let max = (nums) => Math.max.apply(null, nums)

max(nums)













