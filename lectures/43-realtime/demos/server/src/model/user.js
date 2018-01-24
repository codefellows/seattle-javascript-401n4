'use strict';

// DEPENDECIES
import * as bcrypt from 'bcrypt';
import {randomBytes} from 'crypto';
import * as jwt from 'jsonwebtoken';
import createError from 'http-errors';
import promisify from '../lib/promisify.js';
import Mongoose, {Schema} from 'mongoose';
import faker from 'faker';

// SCHEMA
const userSchema =    new Schema({
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    passwordHash: {type: String},
    tokenSeed: {type: String, unique: true, default: ''},
});

// INSTANCE METHODS
userSchema.methods.passwordCompare = function(password){
    return bcrypt.compare(password, this.passwordHash)
        .then(success => {
            if (!success) {
                throw createError(401, 'AUTH ERROR: wrong password');
            }
            return this;
        });
};

userSchema.methods.tokenCreate = function(){
  
    this.tokenSeed = randomBytes(32).toString('base64');
  
    console.log('tokenCreate - seed', this.tokenSeed, this);
    return this.save()
        .then(user => {
            console.log('tokenCreate - user', user)
            return jwt.sign({tokenSeed: this.tokenSeed}, process.env.SECRET);
        })
        .then(token => {
            console.log('tokenCreate - token', token);
            return token;
        });
    
};

// MODEL
const User = Mongoose.model('user', userSchema);

// STATIC METHODS
User.createFromSignup = function (user) {
  
    if(!user.password || !user.email || !user.username) {
        return Promise.reject( createError(400, 'VALIDATION ERROR: missing username email or password ') );
    }

    let {password} = user;
    user = Object.assign({}, user, {password: undefined});

    return bcrypt.hash(password, 1)
        .then(passwordHash => {
            let data = Object.assign({}, user, {passwordHash});
            return new User(data).save();
        });
    
};

User.createFromOAuth = function (OAuthUser) { 
  
  /* 
      Google User Object: 
      { kind: 'plus#personOpenIdConnect',
      gender: 'male',
      sub: '117393462759043938336',
      name: 'John Cokos',
      given_name: 'John',
      family_name: 'Cokos',
      profile: 'https://plus.google.com/117393462759043938336',
      picture: 'https://lh3.googleusercontent.com/-vBtnARGbFww/AAAAAAAAAAI/AAAAAAAAAAA/USr3VMUfUMU/photo.jpg?sz=50',
      email: 'highlander.44@gmail.com',
      email_verified: 'true',
      locale: 'en' }
  
  */
  
  if ( ! OAuthUser || ! OAuthUser.email ) {
      return Promise.reject( createError(400, 'VALIDATION ERROR: missing username email or password ') );
  }
  
  return User.findOne({email:OAuthUser.email})
      .then(user => {
          if ( ! user ) { throw new Error ("User Not Found"); }
          console.log("Welcome Back", user.username);
          return user;
      })
      .catch( error => {
          // Create the user
          let username = faker.internet.userName();
          console.log("Welcome To Our World", username);
          return new User({
              username: username,
              email: OAuthUser.email
          }).save();
      })
  
    
};

// INTERFACE
export default User;
