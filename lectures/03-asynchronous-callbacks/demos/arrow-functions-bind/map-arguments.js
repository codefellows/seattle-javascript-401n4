'use strict';

let map = function() {
  let cb = typeof arguments[arguments.length - 1] === 'function' ? Array.prototype.pop.apply(arguments) : function(num) { return num; };
  return Array.prototype.map.call(arguments, cb);
};

let doubled = map(1,2,3,4, function(num) {
  return num * 2;
});

console.log(doubled);

console.log(map(1,2,3, function(num) {
  return num / 2;
}));

console.log(map(1,2,3,4));
