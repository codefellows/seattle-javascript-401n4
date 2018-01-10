/* global jest, describe, it, expect, beforeAll, afterAll */

'use strict';

// Mock req, res, next

let res = { sendStatus:jest.fn() };
let req = {};
let next = jest.fn();

const error = require("../error.js");

describe('Error Middleware', () => {
   
    it("responds with a given status code", () => {
        error({statusCode:409}, req, res, next);
        expect(res.sendStatus).toHaveBeenLastCalledWith(409);   
    });
   
    it("defaults to 500 when no error is given", () => {
       error("Foobar", req, res, next);
       expect(res.sendStatus).toHaveBeenLastCalledWith(500);
    });
   
    it("defaults to 500 when there is an error but no status code is present", () => {
       error("Foobar", req, res, next);
       expect(res.sendStatus).toHaveBeenLastCalledWith(500);
    });
   

   
});