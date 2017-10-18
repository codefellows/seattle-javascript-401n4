'use strict';

var Node = module.exports = function(value, next) {
  this.value = value;
  this.next = next || null;
};
