'use strict';

const http = require("http");
const router = require("./router");
const noteRouter = require("../route/note.js");

let isRunning = false;

// Just get a server running
const app = http.createServer( router.route );

// That is the same as ... 
// const server = http.createServer();
// server.on('request', (request, response) => { ... }

module.exports = {
    start: (port) => {
        
        return new Promise( (resolve, reject) => {
            if ( ! isRunning ) { 
                app.listen( port, (err) =>{
                    if ( err ) { 
                        reject(err);
                    }
                    else {
                        isRunning = true;
                        resolve(`Server up on port ${port}`);
                    }
                });
            }
            else { 
                reject("Server is already running");
            }
            
        })
    },
    stop: () => {
        return new Promise( (resolve,reject) => {
            if ( ! isRunning ) { 
                reject("Server is already off");
            }
            else {
                app.close( err => {
                    if ( err ) { 
                        reject(err);
                    }
                    else { 
                        isRunning = false;
                        resolve("Shutting Down");
                    }
                });
            }
            
        });
            
    }
}