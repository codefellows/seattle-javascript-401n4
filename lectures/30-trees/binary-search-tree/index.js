'use strict';

const BSTNode = module.exports = function(value, left, right){
  this.value = value;
  this.left = left || null;
  this.right = right || null;
  this.size = 1;
};

// Static methods
// fromArray will make a ballanced-ish array :) 
BSTNode.fromArray = function(data){
  let result;
  let addItems = (items) => {
    if(items.length == 0 ) return;
    let middle = Math.floor(items.length / 2) 
    if(!result) 
      result = new BSTNode(items[middle])
    else 
      result.addNode(new BSTNode(items[middle]))
    let left = items.slice(0, middle)
    let right = items.slice(middle + 1);
    addItems(left)
    addItems(right)
  }
  data = data.sort();
  addItems(data);
  return result;
};

// Instance methods
BSTNode.prototype.addNode = function(node){
  this.size++;
  if(!(node instanceof BSTNode))
    throw new Error('node must be BSTNode');
  if(node.value == this.value) 
    return this; 
  if(node.value < this.value){
    if (!this.left) {
      this.left = node; 
    } else {
      this.left.addNode(node);
    }
    return this;
  }
  if(!this.right){
    this.right = node;
  } else {
    this.right.addNode(node);
  }
  return this;
}

BSTNode.prototype.find = function(value){
  if(this.value == value)
    return this;
  if(value < this.value){
    if(!this.left)
      return null;
    return this.left.find(value);
  }
  if(!this.right)
    return null;
  return this.right.find(value);
}

BSTNode.prototype.min = function(){
  if(this.left) 
    return this.left.min()
  return this.value
}

BSTNode.prototype.max = function(){
  if(this.right) 
    return this.right.max()
  return this.value
}

// O(n)
BSTNode.prototype.toString = function(){
  let result = ''
  let _toString = (node, pad = '') => {
    result += `\n${pad}${node.value}`
    if(node.left) _toString(node.left, pad + ' ');
    if(node.right) _toString(node.right, pad + ' ');
  }
  _toString(this);
  return result;
};

BSTNode.prototype.prettyPrint = function(){
  console.log(this.toString());
}
