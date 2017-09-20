function map(arr, callback) {
  if (!arr) throw new Error('array not provided');
  return Array.prototype.map.call(arr, callback);
}

map([1,2,3,4], function(n) { console.log(n * 2) });

function filter(arr, callback) {
  if (!arr) throw new Error('array not provided');
  return Array.prototype.filter.call(arr, callback);
}

filter([1, 2, 3, 4], function(n) { return n !== 2 });

function concat(arr1, arr2) {
  if (!arr1) throw new Error('initial array not provided');
  return Array.prototype.concat.apply(arr1, arr2);
};

concat([1,2,3], [4,5,6]);
