/* global describe, it, expect, beforeAll, afterAll */

'use strict';

process.env.MONGODB_URI = "mongodb://localhost/testing";

const superagent = require('superagent');
const server = require('../lib/server');

let testPort = 5555;
let testDB = "mongodb://localhost/testing";

describe('Multi Model REST App', () => {
    
    beforeAll( (done) => {
        server.start(testPort, testDB);
        done();
    });
    
    afterAll( (done) => {
        server.stop();
        done();
    });
    
    it("is awesome", () => {
        console.log("IT");
    });
    
});