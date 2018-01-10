'use strict'

const faker = require('faker')
const accountMock = require('./account-mock.js')
const Profile = require('../../model/profile.js')

let create = () => {
  let result = {}
  return accountMock.create()
  .then(tempAccount => {
    result.tempAccount = tempAccount
    return new Profile({
      username: tempAccount.request.username, 
      email: tempAccount.request.email, 
      account: tempAccount.account._id, 
      bio: faker.lorem.words(100),
      firstName: fake.name.firstName(),
      lastName: fake.name.lastName(),
      avatar: faker.random.image(),
      location: faker.address.city(),
    }).save()
  })
  .then(profile => {
    result.proile = profile
    return result
  })
}

let remove = () => {
  return Promise.all([
    accountMock.remove(),
    Profile.remove({}),
  ])
}

module.exports = {create, remove}
