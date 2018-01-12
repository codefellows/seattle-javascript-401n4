let person1 = { name: 'John', age: 49 };
let person2 = { name: 'Cathy', age: NaN };

var sayHello = function() {
    console.log(`Hello ${this.name}`);
};

sayHello();
sayHello.call(person1);
sayHello.call(person2);

let sayHiToJohn = sayHello.bind(person1);
let sayHiToCathy = sayHello.bind(person2);

sayHiToJohn();
sayHiToCathy();

/////////////////////////

// avoiding ugly stuff like:
// let that = this;

var myObj = {
    foo: function() {
        console.log('foo');
    },

    bar: function() {
        console.log('bar');
    },

    baz: function(fn) {
        fn.call();
    },

    runbadly: function() {
        let that = this;
        this.baz(function() {
            that.bar();
            that.foo();
        });
    },

    run: function() {
        this.baz(
            function() {
                this.bar();
                this.foo();
            }.bind(this)
        );
    },
};

myObj.run();

