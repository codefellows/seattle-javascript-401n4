/* global jest, expect */

// Mock the 'fs' module so that we don't do anything real
let fs = require("fs-extra");

let mockDb = {
   a: { foo:'bar' },
   b: { bar:'baz' }
};

let mockPathExists = (file) => {
    if ( file ) { return Promise.resolve(true); }
    else { return Promise.resolve(false) }
};

let mockReadJson = (file) => {
    if ( file ) { return Promise.resolve(mockDb); }
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

describe("Storage Module", () => {
    
    xdescribe("constructor()", () => {
       
       it("creates an empty database file the specified file does not exist", () => {
           let badstorage = require("../lib/storage");
           expect(fs.outputJson).toHaveBeenCalledWith("foo");
       });
        
    });
    
    describe("getItems()", () => {
       
       it("returns all items in the database", () => {
           
           return storage.getItems()
             .then( (items) => {
                 expect(items).toEqual(mockDb);
             })
             .catch()
            
       });
       
    });
    
    describe("getItem()", () => {
       
       it("returns one item from database when it exists", () => {
           
           return storage.getItem('a')
             .then( (item) => {
                 expect(item).toEqual(mockDb['a']);
             })
             .catch()
            
       });
       
       it("rejects when no id is provided", () => {
           
           return storage.getItem()
             .then( (item) => {
                 expect(item).toBeFalsy(); // should never get here
             })
             .catch( (err) => {
                expect(err).toBeTruthy();
             });
            
       });
       
       it("rejects when an invalid id from database is requested", () => {
           
           return storage.getItem('x')
             .then( (item) => {
                 expect(item).toBeFalsy(); // should never get here
             })
             .catch( (err) => {
                expect(err).toBeTruthy();
             });
            
       });
       
    });
    
    describe("deleteItem()", () => {
       
       it("deletes an item database when it exists", () => {
           
           return storage.deleteItem('a')
             .then( (ret) => {
                 expect(ret).toBeTruthy();
             })
             .catch()
            
       });
       
       it("rejects when no id is provided", () => {
           
           return storage.getItem()
             .then( (ret) => {
                 expect(ret).toBeFalsy(); // should never get here
             })
             .catch( (err) => {
                expect(err).toBeTruthy();
             });
            
       });
       
       it("rejects when an invalid id from database is requested", () => {
           
           return storage.deleteItem('x')
             .then( (ret) => {
                 expect(ret).toBeFalsy(); // should never get here
             })
             .catch( (err) => {
                expect(err).toBeTruthy();
             });
            
       });
       
    });
    
    describe("saveItem()", () => {
       
       it("returns the created item when a valid item is saved", () => {
           
           let thing = { 
               id: 1,
               name:"house",
               size:"large"
           };
           
           return storage.saveItem(thing)
             .then( (res) => {
                 expect(res).toEqual(thing);
             })
             .catch()
            
       });
       
       it("rejects when we try to create an invalid item", () => {
           
           return storage.saveItem()
             .then( (res) => {
                 expect(res).toBeFalsy()
             })
             .catch( (err) => {
                 expect(err).toBeTruthy()
             })
            
       });
        
    });
    
});