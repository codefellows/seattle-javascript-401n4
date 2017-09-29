// Old School OOP ... built to mutate objects
function Account(name) {
  
  this.name = name;
  
  this.getName = function() {
    this.doSomeCrazyStuff();
    return this.name;
  }
  
  // Here's a non-functional method that takes no params and returns no value
  // It mutates the data in this object
  // The calling function has no way to know that this might happen
  this.doSomeCrazyStuff = function() {
     // let foo = someService.load(this.name);
     // let bar = someOtherService.fetch(this.id);
     this.name = this.name.toUpperCase();
     return;
  }
  
}

var account = new Account("john");
console.log(account.getName());

// The right way to mutate an object is using Object.assign, which is a static method
// on the Object constructor.
// It layers the object from left to right, returning the result.

let person  = {
  firstName: "John",
  family: ["Cat", "Zach", "Allie"]
};

// Notice the leading empty object here: {}
// If you led with person, this would end up mutating the original person object,
// but the empty object becomes the root instead.
let updatedPerson = Object.assign({}, person, {lastName:"Cokos"});

// If we log out person you will see the original object.
console.log(person);

// But updatedPerson shows the layered mutations
console.log(updatedPerson);

// We can even add family members or other deeply nested things
let updatedPerson2 = Object.assign({}, person, {lastName:"Cokos", family:person.family.concat("Rosie")});
console.log(updatedPerson2);