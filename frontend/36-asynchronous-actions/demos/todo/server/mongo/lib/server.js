'use strict';

const morgan = require('morgan');
const cors = require('cors');

// expressy stuff
const express = require('express');
let app = express();

let http = null;
let isRunning = false;

app.use(morgan('dev'));
app.use(cors());

// Our Routes
app.use(require("../routes/api"));

// 404 Handler
app.use("*", (req,res,next) => {
   res.sendStatus(404);
   next();
});

app.use(require('./middleware/error'));

module.exports = {

    start: (port) => {
        let usePort = port || process.env.SERVER_PORT;
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