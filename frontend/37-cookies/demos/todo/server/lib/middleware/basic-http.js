'use strict';

module.exports = (req, res, next) => {

    try {
        let authHeader = req.headers.authorization;
        let base64Header = authHeader.split('Basic ')[1];
        let base64Buf = new Buffer(base64Header, 'base64');
        let stringHeader = base64Buf.toString();
        let authArray = stringHeader.split(':');
        let authObject = {
          username: authArray[0],
          password: authArray[1]
        };

        if (!authObject.username || !authObject.password) {
            throw new Error('Invalid Credentials');
        }

        req.auth = authObject;
        next();

    }
    catch(e) {
        next(e);
    }
};
