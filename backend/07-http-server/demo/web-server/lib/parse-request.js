'use strict';

const url = require('url');
const queryString = require('querystring');

let parser = module.exports = {};
    
parser.execute = (req) => {
    
    req.url = url.parse(req.url);
    req.url.query = queryString.parse(req.url.query);
    
    return;
    
};