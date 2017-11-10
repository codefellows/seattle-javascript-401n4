'use strict'

const {Router} = require('express')
const jsonParser = require('body-parser').json()
const Account = require('../model/account.js')
const httpErrors = require('http-errors')
const basicAuth = require('../lib/basic-auth-middleware.js')

module.exports = new Router()
.post('/signup', jsonParser, (req, res, next) => {
  if(!req.body.username || !req.body.email || !req.body.password)
    return next(httpErrors(400, '__REQUEST_ERROR__ username, email, and password are required'))

  Account.create(req.body)
  .then(user => user.tokenCreate())
  .then(token => res.json({token}))
  .catch(next)
})
.get('/login', basicAuth, (req, res, next) => {
  if(!req.account)
    return next(httpErrors(401, '__REQUEST_ERROR__ account not found'))
  req.account.tokenCreate()
  .then(token => res.json({token}))
  .catch(next)
})

