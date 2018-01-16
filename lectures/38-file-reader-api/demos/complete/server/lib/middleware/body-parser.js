// DEPENDENCIES
const multer = require('multer');
const bodyParser = require('body-parser');

const upload = multer({dest: `${__dirname}/../../temp`})

// INTERFACE
module.exports = (req, res, next) => {
  let contentType = req.headers['content-type']

  if(contentType.indexOf('application/json') > -1)
    return bodyParser.json()(req, res, next)

  if(contentType.indexOf('multipart/form-data') > -1)
    return upload.any()(req, res, next) 

  next();
  
}