const multer = require('multer');
const bodyParser = require('body-parser');

const multiPartHandler = multer({dest: `${__dirname}/../../temp`});

module.exports = (req, res, next) => {
    
    let contentType = req.headers['content-type'];
    
    if ( contentType.indexOf('application/json') >= 0 ) { 
        return bodyParser.json()(req,res,next);
    }
    
    if ( contentType.indexOf('multipart/form-data') >= 0 ) { 
        return multiPartHandler.any()(req,res,next);
    }
    
}
