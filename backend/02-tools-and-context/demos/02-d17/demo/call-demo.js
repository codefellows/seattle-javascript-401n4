let person = {
  name: 'brian',
  age: 32,
  speak: function() {
    return `${this.name} is ${this.age}`;
  }
}

console.log('person obj:', person);
console.log('speak method:', person.speak());
console.log('new context:', person.speak.call({ name: 'john', age: 21 }));
