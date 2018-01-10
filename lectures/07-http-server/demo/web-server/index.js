'use strict';

// Read in settings from a .env file
require('dotenv').config();

const server = require("./lib/server");

server.start(process.env.PORT, () => console.log("Server up at", process.env.PORT));