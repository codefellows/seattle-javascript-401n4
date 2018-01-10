'use strict';

const Stack = require("../stack");

describe("Stacks", () => {
        
    it(`implements last on first out functionality`, () => {
        
        let testStack = new Stack();
        
        testStack.push(1);
        testStack.push(2);
        testStack.push(3);
        
        expect(testStack.pop()).toEqual(3);
        expect(testStack.pop()).toEqual(2);
        expect(testStack.pop()).toEqual(1);
    
    });
        
})