'use strict';

const jwt = require('jsonwebtoken');
const User = require(__dirname + "/../models/user");

module.exports = (req,res,next) => {
    
    // Do we have any authorization?
    if ( ! req.headers.authorization ) {
        throw new Error("You must authorize");
    }
    
    // check that we even have a JWT
    let token = req.headers.authorization.split('Bearer ')[1];
    if ( ! token ) { 
        throw new Error("Invalid Authorization Provided");
    }
    
    // Take the ID out of it
    let secret = process.env.SECRET || "changethis";
    let decodedToken = jwt.verify(token, secret);
    req.userId = decodedToken.id;
    User.findOne({_id: req.userId})
      .then(user => {
        if (!user) next({statusCode: 403, err: new Error('no such user corresponding to jwt')});
        req.user = user;
        next();
      });
};
