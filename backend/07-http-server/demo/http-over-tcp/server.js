'use strict';

const net = require('net');

const server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    console.log(data.toString());
  });
});

server.listen(3000);
