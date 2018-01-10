'use strict'

function selectionSort(array, compare){
  // this algorythm is considerd to be "O(n^2)" because
  // it run "n" times "n" times in the worst case
  // so if 8 items are in the object the algorythm will run 8^2 (64) times
  // so if "n" items are in the object the algorythm will run n^2 times

  // by default sort is smallest to largest
  compare = compare ? compare : (a, b) => a < b;

  for(let i=0; i<array.length; ++i){ // runs n times
    var swapIndex = i;

    for(var j=i+1; j<array.length; ++j){ // runs n times in the worst case
      // set the swapIndex to the last value that needs to be swapped
      if(compare(array[j],  array[swapIndex]))
        swapIndex = j;
    }

    if (swapIndex != i){
      // swap the swapIdex value with the current value at i
      let tmp = array[i];
      array[i] = array[swapIndex];
      array[swapIndex] = tmp;
    }
  }
  return array
}

let greater = (a, b) => a > b;
let less = (a, b) => a < b;

let nums = [9,5,8,2,7,2,1]
console.log(selectionSort(nums));
console.log(selectionSort(nums, less));
console.log(selectionSort(nums, greater));

let users = [
  {
    name: 'tterrag',
    followers: 91232,
  },
  {
    name: 'nacnud',
    followers: 8000,
  },
  {
    name: 'maharg',
    followers: 3332,
  },
  {
    name: 'anen',
    followers: 1444,
  },
  {
    name: 'divad',
    followers: 1001,
  },
]

let mostFollowers = (a, b) => a.followers > b.followers;
console.log(selectionSort(users, mostFollowers));
