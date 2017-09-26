'use strict';

const List = module.exports = function(length=0){
  this.length = length; 
}

List.prototype.append = function(value){
  this[this.length++] = value;
  return this;
};

List.prototype.prepend = function(value){
  for(let i=this.length++; i>0; i--)
    this[i] = this[i-1];
  this[0] = value;
  return this;
};

List.prototype.reduce = function(cb, state){
  for(let i =0; i<this.length; i++)
    state = cb(state, this[i], i, this);
  return state;
};

List.prototype.map = function(cb){
  let i=0;
  return this.reduce((p, n) => p.append(cb(n, i++, this)), new List());
};

List.prototype.filter = function(cb){
  let i=0;
  return this.reduce((p, n) => cb(n, i++, this) ? p.append(n) : p, new List());
}

List.prototype.each = function(cb){
  for(let i =0; i<this.length; i++)
    cb(this[i], i, this);
}

