/*global beforeAll,afterAll,expect*/
'use strict';

process.env.PORT = 5500;
const server = require("../lib/server");
const superagent = require("superagent");

describe("api/notes", function() {
    
    beforeAll(server.start);
    afterAll(server.stop);
  
    describe("POST /api/notes", () => {
        
        test('should respond with a 200', () =>{
           return superagent.post('http://localhost:5500/api/notes')
            .set("Content-Type", "application/json")
            .send({
                title:"hello world",
                content: "this is my first note"
            })
            .then(res=>{
                expect(res.status).toEqual(200);
                expect(res.body.title).toEqual('hello world');
                expect(res.body.content).toEqual('this is my first note');
            })
        });
        
        test('should respond with a 400', () =>{
           return superagent.post('http://localhost:5500/api/notes')
            .set("Content-Type", "application/json")
            .send({
                content: "this is my first note"
            })
            .then(Promise.reject)
            .catch(res=>{
                expect(res.status).toEqual(400);
            })
        });
        
        test('should respond with a 400', () =>{
           return superagent.post('http://localhost:5500/api/notes')
            .set("Content-Type", "application/json")
            .send({
                title: "my title"
            })
            .then(Promise.reject)
            .catch(res=>{
                expect(res.status).toEqual(400);
            })
        });
        
    });
    
});
