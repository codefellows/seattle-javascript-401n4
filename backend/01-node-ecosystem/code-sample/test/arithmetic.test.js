'use strict';

const arithmetic = require("../lib/arithmetic.js");
const expect = require("expect");

describe("Arithmetic", function() {
    
    describe("addition", function() {
        
        it("properly handles a string", function() {
            
            let result = arithmetic.add("foo",4);
            expect(result).toBe(null);
            
        });
        
        it("properly handles an object", function() {
            
            let result = arithmetic.add({},4);
            expect(result).toBe(null);
            
        });        
        
        it("properly handles an array", function() {
            
            let result = arithmetic.add([],4);
            expect(result).toBe(null);
            
        });     
        
        it("requires a minimum of 2 arguments", function() {
            
            let result = arithmetic.add(4);
            expect(result).toBe(null);
            
        });
        
        it("can add 2 numbers properly", function() {
            
            let result = arithmetic.add(1,4);
            expect(result).toEqual(5);
            
        });
        
    });
    
    describe("subtraction", function() {
        
        it("properly handles a string", function() {
            
            let result = arithmetic.subtract("foo",4);
            expect(result).toBe(null);
            
        });
        
        it("properly handles an object", function() {
            
            let result = arithmetic.subtract({},4);
            expect(result).toBe(null);
            
        });        
        
        it("properly handles an array", function() {
            
            let result = arithmetic.subtract([],4);
            expect(result).toBe(null);
            
        });     
        
        it("requires a minimum of 2 arguments", function() {
            
            let result = arithmetic.subtract(4);
            expect(result).toBe(null);
            
        });
        
        it("can subtract 2 numbers properly", function() {
            
            let result = arithmetic.subtract(4,1);
            expect(result).toEqual(3);
            
        });
        
    });
    
});