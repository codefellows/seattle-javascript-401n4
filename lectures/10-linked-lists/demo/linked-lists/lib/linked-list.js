'use strict';

const Node = require(__dirname + '/node');

const LinkedList = module.exports = function(node) {
  this.head = node || null; 
};

LinkedList.prototype.prepend = function(value) {
  let oldHead = this.head;
  this.head = new Node(value, oldHead);
};

LinkedList.prototype.append = function(value) {
  if (this.head === null) return this.head = new Node(value);
  let current = this.head;
  while(current.next !== null)
    current = current.next;
  current.next = new Node(value);
};

LinkedList.prototype.remove = function(index) {
  let current = this.head;
  for(let i = 0; i < index - 1; i++)
    current = current.next;
  current.next = current.next.next;
};

LinkedList.prototype.find = function(value) {
  let current = this.head;
  while(current.value !== value) {
    if (current.next === null) return null;
    current = current.next;
  }
  return current;
};

LinkedList.prototype.print = function() {
  let current = this.head;
  while(current !== null) {
    console.log(current.value);
    current = current.next;
  }
};
