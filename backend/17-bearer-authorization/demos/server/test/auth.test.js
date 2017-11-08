'use strict';

process.env.MONGODB_URI = 'mongodb://localhost:27017/auth_test'
process.env.SECRET = 'testsecret';
const server = require(__dirname  + '/../server');
server.listen(5000);

const User = require(__dirname + '/../models/user');
const request = require('superagent');
const jwt = require('jsonwebtoken');

beforeAll(() => {
  return User.remove({});
});

it('should be able to create a user', () => {
  return request
    .post('localhost:5000/signup')
    .send({username: 'test', password: 'guest1234'})
    .then(res => {
      let decoded = jwt.verify(res.text, 'testsecret');
      expect(decoded.id.length).not.toBe(0);
      return User.findOne({username: 'test'})
        .then(user => expect(user._id.toString()).toEqual(decoded.id));
    });
});

it('should be able to sign into a user', () => {
  return request
    .get('localhost:5000/signin')
    .auth('test', 'guest1234')
    .then(res => {
      let decoded = jwt.verify(res.text, 'testsecret');
      expect(decoded.id.length).not.toBe(0);
      return User.findOne({username: 'test'})
        .then(user => expect(user._id.toString()).toEqual(decoded.id));
    });

});
