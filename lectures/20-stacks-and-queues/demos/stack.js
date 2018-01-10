'use strict';

const stackConstructor = require("./stack-constructor");
// const stackFactory = require("./stack-factory");
// const stackSLL = require("./stack-sll");
// const stackArray = require("./stack-constructor-array");

module.exports = class stack {
    
    constructor() {
        this.stack = new stackConstructor();
    }
    
    push(value) {
        this.stack.push(value);
    }
    
    pop() {
        return this.stack.pop();
    }
    
};