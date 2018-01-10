'use strict'

const DLL = require('../doubly-linked-list');

const HashTable = module.exports = function(size=1000){
  this.size = size;
}

HashTable.prototype.hash = function(key){
  return key.split('').reduce((p, n) => p + n.charCodeAt(0), 0) % this.size;
}

HashTable.prototype.set = function(key, value){
  let index = this.hash(key);
  if(!this[index]) {
    this[index] = new DLL({key, value})
    return this;
  }
  let found = false;
  let current = this[index];
  while(current){
    if(current.value.key == key){
      current.value.value = value;
      return this;
    }
    if(current.next === null) break;
    current = current.next;
  }
  if(!found){
    current.append(new DLL({key, value}))
  }
  return this;
}

HashTable.prototype.get = function(key){
  let result;
  let index = this.hash(key)
  if(!this[index]) return undefined; 
  let current = this[index];
  while(current){
    if(current.value.key === key){
      return current.value.value;
    }
    current = current.next
  }
  return undefined;
}

HashTable.prototype.remove = function(key){
  let result;
  let index = this.hash(key)
  if(!this[index]) return false; 
  let found = false;
  let current = this[index];
  while(current){
    if(current.value.key === key){
      if(current.prev === null){
        this[index] = current.next
        if(this[index]) this[index].prev = null
      } else {
        current.prev.next = current.next;
      }
      return true;
    }
    current = current.next
  }
  return false;
}
