/* global jest, expect */

// Mock the parsers
jest.mock('url', () => {
    
    return {
        
        parse: (url) => {
            
            return {
                pathname: "/foo/bar",
                query: url.queryString ? {foo:'bar'} : {}
            };
            
        }
    };
    
});

jest.mock('querystring', () => {
    
    return { 
        parse: (url) => {
            return {
                foo:"bar",
                fizz:"buzz"
            };
        }
    };
    
});

const parser = require("../lib/parse-request");

describe("Request Parser", () => {
    
    describe("parses a URL", () => {
       
       it("parses read only request's URL", () => {
           
           let req = {
               method: "GET",
               url: 'http://www.foo.com',
               queryString: "?this=that"
           };
           
           return parser.parse(req)
             .then( () => {
                 expect(typeof req.url).toBe('object');
                 expect(typeof req.url.query).toBe('object');
             })
             .catch();

       });
       
       it("constructs a body from data", () => {
           
        
            
       });
        
    });
    
});