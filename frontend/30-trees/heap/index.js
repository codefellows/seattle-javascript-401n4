'use strict';

HEAP = module.exports = function(value, left, right){
  this.value = value;
  this.left = left || null;
  this.right = right || null;

  this.parrent = null;
};

HEAP.prototype.insert = function(node){
  // check 
  // breadth first traversal to find first node with missing child
  // then insert and bubble
  let queue = [];
  let findEmpty = (node) => {
    if(!node.left || !node.right) return node;
    if(node.left) queue.unshift(node.left)
    if(node.right) queue.unshift(node.right)
    return findEmpty(queue.pop());
  }
  let empty = findEmpty(this);
  if(!empty.left) 
    empty.left = node;
  else 
    empty.right = node;
  node.parrent = empty;
  //node.bubble()
}

HEAP.prototype.swap = function(node){
  let tmp = node.value;
  node.value = this.value;
  this.value = tmp;
  return this;
};

HEAP.prototype.bubble = function(){
  console.log('hit bubble');
};

