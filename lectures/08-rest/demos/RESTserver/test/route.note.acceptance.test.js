/*global beforeAll,afterAll,expect*/
'use strict';

process.env.PORT = 5500;
const server = require("../lib/server");
const superagent = require("superagent");

describe("api/notes", function() {
    
    beforeAll( () => {
        return server.start(process.env.PORT); 
    });
    
    beforeEach( () => {
       return superagent.post('http://localhost:5500/api/notes/init');
    });
    
    afterAll( () => {
        return server.stop();
    });
  
    describe("POST /api/notes", () => {
        
        test('should respond with a 201 when a note has been added', () =>{
           return superagent.post('http://localhost:5500/api/notes')
            .set("Content-Type", "application/json")
            .send({
                title:"hello world",
                content: "this is my first note"
            })
            .then(res=>{
                expect(res.status).toEqual(201);
                expect(res.body.title).toEqual('hello world');
                expect(res.body.content).toEqual('this is my first note');
            })
        });
        
        test("should respond with a 400 if I don't send a title", () =>{
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
        
        test("should respond with a 400 if I don't send content", () =>{
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
    
    describe("GET /api/notes", () => {
        
        test('should respond with a 200 and an empty list of notes at server start', () =>{
            
           let expected = {notes:{}};
            
           return superagent.get('http://localhost:5500/api/notes')
            .then(res=>{
                expect(res.status).toEqual(200);
                expect(res.body).toEqual(expected);
            })
        });
        
        test('should respond with a list of notes if there are any in the database', () =>{
            
           let expected = {notes:{}};
            
           return superagent.get('http://localhost:5500/api/notes')
            .then(res=>{
                expect(res.status).toEqual(200);
                expect(res.body).toEqual(expected);
            })
        });        
        
    });
    
});
