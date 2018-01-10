'use strict'

const fs = require('fs-extra')
const aws = require('aws-sdk')
const s3 = new aws.S3()

// resolve a url

const upload = (path, key) => {
  return s3.upload({
    Bucket: process.env.AWS_BUCKET,
    Key: key,
    ACL: 'public-read',
    Body: fs.createReadStream(path),
  })
  .promise()
  .then(res => { // onSuccess
    return fs.remove(path) // delete local file
    .then(() => res.Location) // resolve s3 url 
  })
  .catch(err => { // onFailure
    return fs.remove(path) // delete local file
    .then(() => Promise.reject(err)) // continue rejecting error
  })
    
}

const remove = (key) => {
  return s3.deleteObject({
    Key: key,
    Bucket: process.env.Bucket,
  })
  .promise()
} 


module.exports = {upload, remove}


