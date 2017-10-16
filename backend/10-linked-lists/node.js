'use strict';

Node = module.exports = function(value, next) {
  this.value = value;
  this.next = next;
};

Node.prototype.append = function(node){
  if(!this.next){
    this.next = node;
    return this;
  }
  this.next.append(node)
  return this;
}

Node.prototype.map = function(cb){
  let result = new Node(null);
  let current = this; 
  let i=0
  while(current){
    result.append(cb(current, i++, this))
    current = current.next
  }
  return result.next;
}

head = new Node(3)

head.append(new Node(5))

head.map(n => n.value * 2)

