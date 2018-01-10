'use strict';

require('dotenv').config();

// mongoosey stuff
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI, {useMongoClient:true});

// express server
require('./lib/server.js').start();
