// Simple Function Composer

// Done with arrow functions
let composer = (fn,...defaults) => (...args) => fn(...defaults, ...args);

// Decomposed into old school ...
// These are the same. For a while, you'll need to translate the arrow way into
// the old school way, but soon you'll be thinking that way naturally

let composerOldSchool = function(fn, ...defaults) { 
  
  return function( ...args ) { 
    return fn(...defaults, ...args);
  };
}

// Use that to create composed functions that do very tactial things.
// Here, "2" goes to ...defaults and when you call it, 3 becomes the ...args to the fn
let twoToThePowerOf = composer(Math.pow, 2);
let number = twoToThePowerOf(3);
console.log("2 to the power of ... ", number);

// You could do that without defaults, and get anything to the power of anything
let showMeThePowerOf = composer(Math.pow);
let pow = showMeThePowerOf(3,9);
console.log("Power of", pow);

// Or a square root ...
let squareRootOf = composer(Math.sqrt);
let sqrt = squareRootOf(9);
console.log("The Square Root is", sqrt);

// Similarly, the fn is console.log, which will say "Hello, " by ...default and "John" via ...args
let sayHelloTo = composer(console.log, "Hello, ");
sayHelloTo("John");