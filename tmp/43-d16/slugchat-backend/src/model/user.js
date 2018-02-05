'use strict'

// DEPENDECIES
import faker from 'faker'
import * as bcrypt from 'bcrypt'
import {randomBytes} from 'crypto'
import * as jwt from 'jsonwebtoken'
import createError from 'http-errors'
import promisify from '../lib/promisify.js'
import Mongoose, {Schema} from 'mongoose'

// SCHEMA
const userSchema =  new Schema({
  email: {type: String, required: true, unique: true},
  username: {type: String, required: true, unique: true},
  passwordHash: {type: String},
  tokenSeed: {type: String,  unique: true, default: ''},
})

// INSTANCE METHODS
userSchema.methods.passwordCompare = function(password){
  return bcrypt.compare(password, this.passwordHash)
  .then(success => {
    if (!success)
      throw createError(401, 'AUTH ERROR: wrong password')
    return this
  })
}

userSchema.methods.tokenCreate  = function(){
  this.tokenSeed = randomBytes(32).toString('base64')
  return this.save()
  .then(user => {
    return jwt.sign({tokenSeed: this.tokenSeed}, process.env.SECRET)
  })
  .then(token => {
    return token
  })
}

// MODEL
const User = Mongoose.model('user', userSchema)

// STATIC METHODS
User.createFromSignup = function (user) {
  if(!user.password || !user.email || !user.username)
    return Promise.reject(
      createError(400, 'VALIDATION ERROR: missing username email or password '))

  let {password} = user
  user = Object.assign({}, user, {password: undefined})

  return bcrypt.hash(password, 1)
  .then(passwordHash => {
    let data = Object.assign({}, user, {passwordHash}) 
    return new User(data).save()
  })
}

User.handleOAUTH = function(data) {
  if(!data || !data.email)
    return Promise.reject(
      createError(400, 'VALIDATION ERROR: missing email'))
  return User.findOne({email: data.email})
  .then(user => {
    if(!user)
      throw new Error('create the user')
    console.log('loggin in account')
    return user
  })
  .catch(() => {
    // create user from the email
    console.log('creating account')
    return new User({
      username: faker.internet.userName(),
      email: data.email,
    }).save()
  })
}

User.fromToken = function(token){
  return promisify(jwt.verify)(token, process.env.SECRET)
  .then(({tokenSeed}) => User.findOne({tokenSeed}))
  .then((user) => {
    if(!user)
      throw createError(401, 'AUTH ERROR: user not found')
    return user
  })
}

// INTERFACE
export default User
