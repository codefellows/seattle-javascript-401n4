'use strict'

const {Router} = require('express')
const httpErrors = require('http-errors')
const jsonParser = require('body-parser').json()
const bearerAuth = require('../lib/bearer-auth-middleware.js')
const Profile = require('../model/profile.js')

module.exports = new Router()
.post('/profiles', bearerAuth, jsonParser, (req, res, next) => {
  if(!req.account)
    return next(httpErrors(401, '__REQUEST_ERROR__ no account found'))
  return new Profile({
    bio: req.body.bio,
    avatar: req.body.avatar,
    birthday: req.body.birthday,
    location: req.body.location,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    account: req.account._id,
    username: req.account.username,
    email: req.account.email,
  }).save()
  .then(profile => res.json(profile))
  .catch(next)
})
