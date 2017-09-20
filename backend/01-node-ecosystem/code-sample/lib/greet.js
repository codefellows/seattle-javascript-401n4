'use strict';

console.log("Test");

module.exports = function(name) {
    return foo() + name;
};


function foo() {
    return "HI ";
}