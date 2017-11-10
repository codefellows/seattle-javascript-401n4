'use strict'

require('./lib/setup.js')

const superagent = require('superagent')
const server = require('../lib/server.js')
const accountMock = require('./lib/account-mock.js')
const profileMock = require('./lib/profile-mock.js')

const apiURL = `http://localhost:${process.env.PORT}`

describe('/profiles', () => {
  beforeAll(server.start)
  afterAll(server.stop)
  afterEach(profileMock.remove)

  describe('POST /profiles', () => {
    test('200 should return a profile', () => {
      let tempAccount
      return accountMock.create()
      .then(mock => {
        tempAccount = mock
        return superagent.post(`${apiURL}/profiles`)
        .set('Authorization', `Bearer ${tempAccount.token}`)
        .send({
          bio: 'hello world',
          firstName: 'Mary', 
          lastName: 'Bean', 
        })
      })
      .then(res => {
        expect(res.status).toEqual(200)
        expect(res.body.username).toEqual(tempAccount.request.username)
        expect(res.body.email).toEqual(tempAccount.request.email)
        expect(res.body.account).toEqual(tempAccount.account._id.toString())
        expect(res.body.bio).toEqual('hello world')
        expect(res.body.firstName).toEqual('Mary')
        expect(res.body.lastName).toEqual('Bean')
      })
    })

    test('401 should', () => {
      return superagent.post(`${apiURL}/profiles`)
      .set('Authorization', `Bearer badtoken`)
      .send({
        bio: 'hello world',
        firstName: 'Mary', 
        lastName: 'Bean', 
      })
      .then(Promise.reject)
      .catch(res => {
        expect(res.status).toEqual(401)
      })
    })
  })
})

