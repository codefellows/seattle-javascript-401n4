let composer = (fn,...defaults) => (...args) => fn(...defaults, ...args);

// WTF?
// this is the same ..
let readableComposer = function(fn, ...defaults) {
    return function(...args) { 
        return fn(...defaults, ...args)
    }
}

let sayHi = composer(console.log, "Hello");
sayHi("John");

let powerOf = composer(Math.pow);
console.log(powerOf(3,3));

let squareRoot = composer(Math.sqrt);
console.log(squareRoot(2));

/// And with the exploded version ...

let sayHello = readableComposer(console.log, "Hello");
sayHello("John");

let readablePowerOf = readableComposer(Math.pow);
console.log(readablePowerOf(3,3));

let readableSquareRoot = readableComposer(Math.sqrt);
console.log(readableSquareRoot(2));