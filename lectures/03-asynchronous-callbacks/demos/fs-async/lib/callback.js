'use strict';

let errorExample = function(cb) {
  cb(new Error('this is an error'), 'we should never see this');
};

let successExample = function(cb) {
  cb(null, 'here is some data');
};


errorExample((err, data) => {
  if (err) return console.log(err);

  console.log(data);
});

successExample((err, data) => {
  if (err) return console.log(err);

  console.log(data);
});
