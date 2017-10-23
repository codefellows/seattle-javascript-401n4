/* global jest, expect */

// Mock the parser
jest.mock('../lib/parse-request', () => {
    
    return {
        
        parse: (req) => {
            
            let obj = {bar:'baz'};
            
            req.url = {
                pathname: req.path,
                query: {foo:'bar'}
            };
            
            req.body =  JSON.stringify(obj);
            
            return Promise.resolve(req);
            
        }
    };
});

let res = {
    write: () => {},
    writeHead: () => {},
    end: () => {}
};

let writeHead = jest.spyOn(res, "writeHead");


let router = require("../lib/router");

describe("Router", () => {
    
    describe("can register routes", () => {
        
       it("rejects requests to a non-existent valid route", () => {
           
           let req = {
               method:"GET",
               path: "/fizz/buzz"
           };
           
           return router.route(req, res)
            .then( () => {
                expect(writeHead).toHaveBeenCalledWith(404);
            });
           
       });
       
       it("registers and responds to a valid route", () => {
           
           let req = {
               method:"GET",
               path: "/foo/bar"
           };
           
           let handler = jest.fn(() => true);
           
           router.get("/foo/bar", handler );
           
           return router.route(req, res)
            .then( () => {
                expect(handler).toHaveBeenCalled();
            });
           
       });
       
       it("does not register and does not respond to a RESTless route", () => {
           
           let req = {
               method:"FOO",
               path: "/bad/method"
           };
           
           let handler = jest.fn(() => true);
           
           router.get("/bad/method", handler );
           
           return router.route(req, res)
            .then( () => {
                expect(handler).not.toHaveBeenCalled();
                expect(writeHead).toHaveBeenCalledWith(400);
            });
           
       });
       
    });
    
});