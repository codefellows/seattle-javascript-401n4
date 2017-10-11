'use strict';

const parser = require("./parse-request");

// Route Registry
// Store route handlers for each of the verbs ...
/*
    i.e.
    GET: {
        "/api/note" : (req, res) => {},  ....
    }
*/
const routeHandlers = {
    GET: {},
    PUT: {},
    POST: {},
    PATCH: {},
    DELETE: {}
};

module.exports = {
    get: (uri, callback) => {
        routeHandlers.GET[uri] = callback;
    },
    route: (req, res) => {
        // parse the request
        // Return a 400 if the request itself is invalid
        // Find the handler
            // 404 if it's not there
        // Execute Handler
    }
};
