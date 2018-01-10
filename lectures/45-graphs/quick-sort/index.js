'use strict';

const quicksort = module.exports = function (items, compare, left, right){
   left = left || 0;  
   right = right || items.length -1;

   // by default compare will sort things smallet to largest
   // but this will break if the items can't be compared with > or < 
   compare = compare ? compare : (a,b) => a < b;

  // TODO: uncomment this to see how the partitioning works
  //console.log(items.slice(left, right));

  if (items.length > 1){
    // partition returns the position to the right of the last pivot
    // which is one right of half of the current partition
    var pivot = partition(items, compare, left, right);

    // sort the left side of the pivot if not yet sorted
    if (left < (pivot - 1)){
      quicksort(items, compare, left, pivot);
    }

    // sort the right side of the pivot if not yet sorted
    if ((pivot + 1) < right){
      quicksort(items, compare, pivot + 1, right);
    }
    
  }

  return items;
}

function swap(items, left, right){
  //TODO: comment out to watch the swapping in action
  //console.log('swaping', items[left], items[right]);
  let tmp = items[left];
  items[left] = items[right];
  items[right] = tmp;
}

function partition(items, compare, left, right, pivot){
  // only create the pivot if the current partition has not yet
  // created a pivot. pivit will be the index of the middle of the 
  // current partion
  pivot = pivot || Math.floor((left + right) / 2);

  // continue swaping around the pivot until all items on 
  // left of the pivot are less than the pivot and all items
  // on the right of the pivot are greater than the pivot
  if (left <= right){ // go until the right side 

    // move the left index right until its value should
    // be on the other side of the pivot
    left = advanceLeft(items, compare, left, pivot);
    // move the right index left until its value should 
    // be on the other side of the pivot
    right = advanceRight(items, compare, right, pivot);
    
    // now that the indexes have moved check if more swaps need
    // to be done
    if (left <= right){
      // swap the items around the pivot
      // but dont swap an item with its self (aka leftIndex == rightIndex)
      if (left < right) 
        swap(items, left, right);
      // continue sorting items around the pivot until 
      // both sides are sorted (aka left > right)
      return partition(items, compare, left + 1, right - 1, pivot);
    }
  }

  // if the left index is greater than the right 
  // there can be no more sorting around the pivot
  return pivot;
}

function advanceLeft(items, compare, left, pivot){
  if (compare(items[left], items[pivot]))
    return advanceLeft(items, compare, left + 1, pivot);
  return left;
}

function advanceRight (items, compare, right, pivot){
  if (compare(items[pivot], items[right]))
    return advanceRight(items, compare, right -1, pivot);
  return right;
}
