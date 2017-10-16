'use strict';

require("dotenv").config();

// require("./lib/server").start(process.env.PORT);

const server = require("./lib/server");

server.start(process.env.PORT)
      .then(console.log)
      .catch(console.log);
      
      
// server.stop()
//       .then(console.log)
//       .catch(console.log);