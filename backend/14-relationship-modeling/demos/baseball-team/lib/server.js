'use strict';

require('dotenv').config();

const morgan = require('morgan');

// expressy stuff
const express = require('express');
let app = express();

// mongoosey stuff
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI, {useMongoClient:true});

let http = null;
let isRunning = false;

app.use(morgan('dev'));

// Our Routes
app.use(require("../routes/teams"));
app.use(require("../routes/players"))

// 404 Handler
app.use("*", (req,res,next) => {
   res.sendStatus(404); 
   next();
});

app.use(require('./middleware/error'));

module.exports = {
    
    start: (port) => {
        let usePort = port || process.env.PORT;
        if ( isRunning ) {
            throw Error ("Server is already running");
        }
        http = app.listen(usePort, () => {
            isRunning = true;
            console.log("Server up and running on port", usePort);
        });
    },
    
    stop: () => {
        if(! isRunning) {
            throw Error("Server is already off");
        }
        if ( ! http ) {
            throw Error("Invalid Server");
        }
        
        http.close( () => {
           http = null;
           isRunning = false;
           console.log("Bye Bye");
        });
    }
    
}