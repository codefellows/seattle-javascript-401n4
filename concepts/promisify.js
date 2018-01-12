let someFunction = function(word, cb) { 
  /// do something cool with word ...
  cb(null, word);
};

someFunction("foo", (err, data) => {
  if(err) { console.log("ERR", err); }
  else { console.log("OK", data); }
});


let promisify = (fn) => (...args) => {
  return new Promise( (resolve, reject) => {
    fn(...args, (err, data) => {
      if ( err ) { reject(err); }
      else { resolve(data); }
    });
  });
};

let someNewFunction = promisify(someFunction);

// someNewFunction("foo")
//   .then(data => console.log("DATA", data))
//   .catch(err=>console.log("ERR", err));
  
  