'use strict';

module.exports = class stack {
    
    constructor() {
        this.length = 0;
    }
    
    push(value) {
        this[this.length++] = value;
    }
    
    pop() {
        let value = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return value;
    }
    
};