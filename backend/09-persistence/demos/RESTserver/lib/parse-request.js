'use strict';

const url = require('url');
const queryString = require('querystring');

let Parser = module.exports = {};

Parser.parse = (req) => {
    
    return new Promise( (resolve, reject) => {
        
        // URL
        req.url = url.parse(req.url);
        req.url.query = queryString.parse(req.url.query);
        
        if (! ( req.method === "PUT" || req.method === "POST" || req.method === "PATCH" ) ) {
            resolve(req);
        }
        
        let text = "";
        
        req.on("data", (buffer) => {
            text += buffer.toString();
        });
        
        req.on("end", () => {
        
            try{
                if ( req.headers["content-type"] === "application/json" ) { 
                    req.body = JSON.parse(text);
                }
                resolve(req);
            } 
            catch(e) {
                reject(e);
            }
        });
        
        req.on("error", reject);
    });
    
};