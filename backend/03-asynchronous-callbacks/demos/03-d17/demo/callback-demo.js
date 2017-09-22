'use strict';

var someCallback = function(data) {
  console.log('got some data:', data);
}

var useCallback = function(cb) {
  cb('data that i wanted to get');
}

var someCallback = function(err, data) {
  if (err) throw err;
  console.log('got some data:', data);
}

var useCallback = function(cb) {
  cb(null, 'the data that i wanted to get');
}

var someCallback = function(err, data) {
  if (err) throw err;
  console.log('got some data:', data);
}

var useCallback = function(cb) {
  var sampleError = new Error('throwing a simulated error');
  cb(sampleError, 'the data that i wish i got');
}

useCallback(someCallback);
