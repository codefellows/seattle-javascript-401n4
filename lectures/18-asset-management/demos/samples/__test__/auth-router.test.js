'use strict'

require('./lib/setup.js')
const superagent = require('superagent')
const server = require('../lib/server.js')
const accountMock = require('./lib/account-mock.js')

const apiURL = `http://localhost:${process.env.PORT}`

console.log('apiURL', apiURL)
describe('AUTH router', () => {
  beforeAll(server.start)
  afterAll(server.stop)
  afterEach(accountMock.remove)

  describe('POST /signup', () => {
    test('POST /signup with 200', () => {
      return superagent.post(`${apiURL}/signup`)
      .send({
        username: 'slorg', 
        email: 'slorg@example.com', 
        password: 'topsecret', 
      })
      .then(res => {
        expect(res.status).toEqual(200)
        expect(res.body.token).toBeTruthy()
      })
    })

    test('POST /signup with 400', () => {
      return superagent.post(`${apiURL}/signup`)
      .send({
        email: 'slorg@example.com', 
        password: 'topsecret', 
      })
      .then(Promise.reject)
      .catch(res => {
        expect(res.status).toEqual(400)
      })
    })
  })

  describe('GET /login', () => {
    test('GET /login 200', () => {
      let tempMock
      accountMock.create()
      .then(mock => {
        tempMock = mock
        return superagent.get(`${apiURL}/login`)
        .auth(mock.request.username, mock.request.password)
      })
      .then(res => {
        expect(res.status).toEqual(200)
        expect(res.body.token).toBeTruthy()
      })
    })

    test('GET /login 401 due to bad password', () => {
      let tempMock
      accountMock.create()
      .then(mock => {
        tempMock = mock
        return superagent.get(`${apiURL}/login`)
        .auth(mock.request.username, 'hello world')
      })
      .then(Promise.reject)
      .catch(res => {
        expect(res.status).toEqual(401)
      })
    })

    test('GET /login 401 due to bad account', () => {
      return superagent.get(`${apiURL}/login`)
      .auth('shark_slug_789','hello world')
      .then(Promise.reject)
      .catch(res => {
        expect(res.status).toEqual(401)
      })
    })
  })
})







