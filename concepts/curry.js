// Currying -- a function returns a function
// Should take one argument and return functions
// that take one argument and so on ...


// Old School
let greetF = (greeting, name) => {
    console.log(greeting, name);
}
greetF("Hello", "John");


// With currying, we get a function back, and then
// can call that function with it's arg.
let greetC = function(greeting) {
  return function(name) {
    console.log(greeting, name);
  };
};

// Here, we do it with a named instigator
let sayHello = greetC("Hello");
sayHello("John");

// Here, we do it as a series
greetC("Hi")("Johnny");



var greetDeeplyCurried = function(greeting) {
  return function(separator) {
    return function(emphasis) {
      return function(name) {
        console.log(greeting + separator + name + emphasis);
      };
    };
  };
};

var greetAwkwardly = greetDeeplyCurried("Hello")("...")("?");
greetAwkwardly("John"); //"Hello...Eddie?"

