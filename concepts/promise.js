let composer = (fn,...defaults) => (...args) => fn(...defaults, ...args);

let success = composer(console.log, "Success");
let fail = composer(console.log, "Error")

// let getName = () => new Promise( (resolve, reject) => {
//   setTimeout( ()=> {
//       resolve("Johnny");
//   }, 0);
// });

// getName = () => Promise.resolve("John");
getName = () => Promise.reject("Nobody here by that name");

getName()
  .then( name => name.toUpperCase() )
  .then( success )
  .catch( fail );
  
  
// Promise.reject(2)
//   .then(success)
//   .catch( (number) => number*2)
//   .then(success);


