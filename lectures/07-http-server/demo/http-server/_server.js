'use strict';

const http = require('http');
const url = require('url');

let sendResponse = function(res, status, body) {
  res.writeHead(status, {'Content-Type': 'text/plain'});
  res.write(body);
  res.end();
};

const server = module.exports = http.createServer((req, res) => {
  req.url = url.parse(req.url);
  if (req.method === 'GET' && req.url.pathname === '/') {
    sendResponse(res, 200, 'such GET, much request');
  } else if (req.method === 'GET' && req.url.pathname === '/query') {
    sendResponse(res, 200, req.url.query);
  } else if (req.method === 'POST' && req.url.pathname === '/') {
    let body = '';
    req.on('data', function(data) {
      body += data.toString();
    });

    req.on('end', function() {
      let json;
      try {
        json = JSON.parse(body);
      } catch(e) {
        return sendResponse(res, 400, 'bad json!');
      }
      console.log(json);
      sendResponse(res, 200, 'got the JSON');
    });
  } else {
    sendResponse(res, 400, 'bad request');
  }
});
