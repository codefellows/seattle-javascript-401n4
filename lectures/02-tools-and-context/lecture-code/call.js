let person1 = { name: "John", age: 49 };
let person2 = { name: "Cathy", age: NaN };

var sayHello = function() {
    console.log( `Hello ${this.name}` );
}

sayHello();
sayHello.call(person1);
sayHello.call(person2);


////////

function sayHello(name) {
    this.name = name;
    console.log(this.name, this.lastName)
    return this.name;
}

let person = {
    name: "foo",
    lastName: "cokos"
};

let hello2 = sayHello.call(person, "johnathan");

console.log(hello2.name);


///////////
// Map Example

let nums = [1,2,3];

nums.map( n => n*2 );


function map(list, callback) {
  return Array.prototype.map.call( list, callback );
}

map(nums, n=>n*3);
