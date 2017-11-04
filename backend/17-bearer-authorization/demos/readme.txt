eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5ZmRmYzM4NWIyZTEwNTI3MjZjMGQ2NSIsImlhdCI6MTUwOTgxNzUxMn0.EPHQ8myCzw7Upus3IUzacllE5Wt0yMFTjYB9ykS7Avo


let someVariable = false || "hello";
let someVariable = someOtherVariable ? someOtherVariable : "hello";

Start basic authorization  Username & Password
    to the server
    
Following the login: Send JWT
    to the client (browser)
    
Following the logout: Clear the JWT
    
Subsequent Requests from Client must include the JWT

Headers:
    Authorization: Bearer asldfkjasdljdsfalkjfsdlj
    Method: GET
    Path: /balance
    










PROMISIFY
==================================
const promiseify = (fn) => (...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (err, data) => {
      if(err) return reject(err)
      resolve(data)
    })
  })
}



MIDDLEWARE
==================================

'use strict';

const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

module.exports = (req, res, next) => {

    if( ! req.headers.authorization ) {
        throw new Error('authorization required');
    }
    
    const token = req.headers.authorization.split("Bearer ")[1];
    if( ! token ) {
        throw new Error('Token Required');
    }
    
    try {
        
        let decrypted = jwt.verify(token, process.env.SECRET || "changethis");
        console.log("Locating", decrypted.id);
        User.findOne({_id: decrypted.id})
        .then( account => {
            if( ! account ) {
                throw new Error('account not found');
            }
            req.account = account;
            next();
        })
        .catch();
        
    }
    catch(err) {
        console.log("ERR", err);
       next(err); 
    }

};
