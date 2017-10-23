/* global jest, expect */

// Mock the 'fs' module so that we don't do anything real
let fs = require("fs-extra");

let mockPathExists = (file) => {
    if ( file ) { return Promise.resolve(true); }
    else { return Promise.resolve(false) }
};

let mockReadJson = (file) => {
    let json = {
        foo:"bar"
    };
    if ( file ) { return Promise.resolve(json); }
    else { return Promise.reject() }
};

let mockOutputJson = (file, json) => {
    if ( file && json ) { return Promise.resolve(true); }
    else { return Promise.reject() }
};

jest.spyOn(fs, 'outputJson').mockImplementation(mockOutputJson);
jest.spyOn(fs, 'readJson').mockImplementation(mockReadJson);
jest.spyOn(fs, 'pathExists').mockImplementation(mockPathExists);

const storage = require("../lib/storage")("foo");

describe("Node Model", () => {
    
    describe("constructor()", () => {
       
       it("", () => {
           

            
       });
       
       it("", () => {
           

            
       });
        
    });
    
});