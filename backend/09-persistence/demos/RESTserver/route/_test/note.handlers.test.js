/* global jest, expect */

// Mock the "storage" module
/*
    The "storage" module has created a mock version of itself.  By convention, if a module is created
    in the "__mocks__" folder where it normally lives, jest.mock will find that and use it instead of
    the real thing whenever it is required() by any other module.  
    
    Whenever the note handler calls any method in the storage module, it'll use this fake version
    in the exact same way.
    
    Can't stress enough how cool this is. You test modules can rely on mocks that act the same
    way as the real thing, without doing real stuff.  This lets you test out your units (this file)
    in isolation and safety
*/
jest.mock('../../lib/storage');

// Mock the "send" module
jest.mock('../../lib/send');

// Because this test will need to make some assertions on the methods in the send module
// I'm requiring it here, so that we can assert that methods get called right
const send = require("../../lib/send");

// Pull in the real note handler
// THIS IS THE MODULE UNDER TEST
const handler = require("../note.handlers.js");

describe("Note Handlers", () => {
    
    beforeEach( () => {
       handler.storage.init(); 
    });
    
    describe("post()", () => {
       
       it("raises a 400 error if the title is missing", () => {
           
           let res = {};
           let req = {
               body: {
                   content: "Some Content"
               }
           };
           
           handler.post(req,res);
           
           // Just make sure that in the case where our post() fails because the object is bad
           // our assertion is not that it failed to store ... 
           // it is that when it fails, we are capturing it the same way that code that uses this module will capture it.
           // In this case, we're sending out a 400 error
           //
           expect(send.message).toHaveBeenCalledWith(res, 400, expect.anything());
           
       });
       
       it("raises a 400 error if the content is missing", () => {
           
           let res = {};
           let req = {
               body: {
                   title: "Some Title"
               }
           };
           
           handler.post(req,res);
           
           expect(send.message).toHaveBeenCalledWith(res, 400, expect.anything());
           
       });
       
       it("returns a 201 if it created a note", () => {
           
           let res = {};
           let req = {
               body: {
                   title: "Some Title",
                   content: "Some Content"
               }
           };
           
           return handler.post(req,res)
              .then( (note) => {
                    console.log(note);
                    expect(send.json).toHaveBeenCalledWith(res, 201, expect.anything());
              });
           
           
       });
       
    });
    
    describe("get()", () => {
       
       it("gets all notes", () => {
            
                       
           let res = {};
           let req = {};
           
           return handler.get(req,res)
              .then( (notes) => {
                    console.log(notes);
                    expect(send.json).toHaveBeenCalledWith(res, 200, expect.anything());
              });
              
       });
       
        it("gets a specific note by id", () => {
                       
           let res = {};
           let req = {
               url: {
                   query: {
                   }
               }
           };
           
           return handler.get(req,res)
              .then( (note) => {
                    expect(send.json).toHaveBeenCalledWith(res, 200, expect.anything());
              });
              
       });
       
    });
    
    
    describe("delete()", () => {
       
       it("", () => {
            
       });
       
    });    
    
});