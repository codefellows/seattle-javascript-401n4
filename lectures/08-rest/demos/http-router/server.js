'use strict';

const http = require('http');
const url = require('url');
const router = require('./lib/router');

router.get('/', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello world!');
  res.end();
});

router.post('/', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello from post');
  res.end();
});

router.patch('/', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello from patch');
  res.end();
});

const server = http.createServer(function(req, res) {
  req.url = url.parse(req.url);

  (router.routes[req.method][req.url.pathname] || router.fourOhFour)(req, res);
});

server.listen(3000);
