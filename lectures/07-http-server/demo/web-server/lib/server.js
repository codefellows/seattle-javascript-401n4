'use strict';

// Node Dependencies
const http = require('http');

// Internal dependencies
const requestParser = require("./parse-request");
const bodyParser = require("./parse-body");


// Constants
const app = http.createServer( (req,res) => {
    
    // Parse the URL + Params
    requestParser.execute(req);
    
    // Log the interesting parts
    console.log("Status", req.statusCode);
    console.log("Headers", req.headers);
    console.log("Method", req.method);
    console.log("URL", req.url);
    
    // Do some unintelligent routing
    if ( req.method === "GET" && req.url.pathname === "/" ) { 
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.statusMessage = "OK";
        res.write(`Hello ${Math.random()}`);
        res.end();
        return;
    }
    
    else if ( req.method === "POST" && req.url.pathname === "/json" ) { 
        bodyParser.execute(req)
            .then( (req) => {
                res.setHeader('Content-Type', 'text/json');
                res.statusCode = 200;
                res.statusMessage = "OK";
                res.write( JSON.stringify(req.body) );
                res.end();
                return;
            })
            .catch( (err) => {
                let errObject = { error:err };
                console.log(err);
                res.setHeader('Content-Type', 'text/json');
                res.statusCode = 400;
                res.statusMessage = "Bad Request";
                res.write( JSON.stringify(errObject) );
                res.end();
                return;
            });
            
    }
    
    else {
        res.statusCode = 404;
        res.statusMessage = "Resource not Found";
        res.setHeader('Content-Type', 'text/html');
        res.write("<h1>Resource Not Found</h1>");
        res.end();
        return;
    }
    
    
});

// Export the interface
module.exports = {
    start: (port, callback) => app.listen(port, callback),
    stop: (callback) => app.close(callback)
}