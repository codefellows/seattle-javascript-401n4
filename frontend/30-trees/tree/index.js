'use strict';

const SLL = require('../singly-linked-list');

const TreeNode = module.exports = function(value){
  this.value = value;
  this.children = null;
  this.childrenCount = 0;
}

TreeNode.prototype.appendChild = function(node){
  if(!(node instanceof TreeNode)) 
    throw new Error('child must be instanceof TreeNode');
  this.childrenCount++
  if(!this.children){
    this.children = new SLL(node);
    return this;
  }
  this.children.append(new SLL(node));
  return this;
}

TreeNode.prototype.getNthChild = function(n){
  if(!this.children) 
    return undefined;
  let result = this.children.getNth(n);
  if (result) return result.value;
};

TreeNode.prototype.getFirstChild = function(){
  return this.getNthChild(0);
};

TreeNode.prototype.getSecondChild = function(){
  return this.getNthChild(1);
};

TreeNode.prototype.find = function(value){
  if (this.value === value) return this;
  if (!this.children) return undefined;
  let result = this.children.reduce((p, n) => {
    if(p) return p
    if(n.value.value === value) return n.value
    return p
  }, null);

  console.log('result')
  return result;
};

TreeNode.prototype.removeChild = function(node){
  if(!this.children) return false;
  this.children = this.children.filter(n => node !== n.value);
};
