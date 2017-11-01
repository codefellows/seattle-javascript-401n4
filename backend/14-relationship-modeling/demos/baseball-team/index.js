'use strict';

require('dotenv').config();

require('./lib/server.js').start(process.env.PORT);
