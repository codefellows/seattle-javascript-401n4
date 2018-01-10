'use strict';

// merge sort
const mergeSort = module.exports = function (items, compare){
  // lists of length 0 and 1 dont need sorting so stop cutting 
  // the merge sort in half

  // the default sort is smallest to largest
  compare = compare ? compare : (a, b) => a < b;
  
  // TODO: uncomment the log to see how items get cut down to length one
  //console.log('items', items);
  if (items.length < 2) return items;

  let middle = Math.floor(items.length / 2);
  // cut the list in to two halfs
  let left = items.slice(0, middle);
  let right = items.slice(middle);
  
  // merge wont run until both mergesStorts calls have returnd
  // and they wont return until its cut the lists down to a length 
  // of one. 
  return merge(mergeSort(left, compare), mergeSort(right, compare), compare);
}

// merge can only merge sorted lists correctly
// lists of length one are sorted
function merge(left, right, compare){
  // TODO: uncomment the log to see whats getting merged
  //console.log('left', left, 'right', right);

  var result  = [];

  while (left.length || right.length){
    if (!left.length) {
      result.push(right.shift())
      continue;
    }

    if (!right.length) {
      result.push(left.shift())
      continue;
    }

    if (compare(left[0], right[0])){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  //TODO: uncomment the log to see the result of the merge
  //console.log('result', result);
  return result.concat(left).concat(right);
}


