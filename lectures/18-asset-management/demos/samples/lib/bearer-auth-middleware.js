'use strict'

const jwt = require('jsonwebtoken')
const httpErrors = require('http-errors')
const Account = require('../model/account.js')

const promiseify = (fn) => (...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (err, data) => {
      if(err) return reject(err)
      resolve(data)
    })
  })
}

module.exports = (req, res, next) => {
  if(!req.headers.authorization)
    return next(httpErrors(400, '__REQUEST_ERROR__ authorization header required'))
  
  const token = req.headers.authorization.split('Bearer ')[1]
  if(!token)
    return next(httpErrors(400, '__REQUEST_ERROR__ Basic auth required'))

  promiseify(jwt.verify)(token, process.env.IMAGECLOUD_SECRET)
  .catch(err => Promise.reject(httpErrors(401, err)))
  .then((decrypted) => {
    return Account.findOne({tokenSeed: decrypted.tokenSeed})
  })
  .then(account => {
    if(!account)
      throw httpErrors(401, '__REQUEST_ERROR__ account not found')
    req.account = account
    next()
  })
  .catch(next)
}



