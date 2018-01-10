'use strict'

const faker = require('faker')
const Account = require('../../model/account.js')

const create = () => {
  // { account, 
  //   request, 
  //   token, }
  let result = {
    request: {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.lorem.words(10),
    },
  }

  return Account.create(result.request)
  .then(account => {
    result.account = account // cache the account on result
    return account.tokenCreate() //genorate the token
  })
  .then(token => {
    result.token = token // cache the token
    return Account.findById(result.account._id) // req the updated account
  })
  .then(account => {
    result.account = account // overwrite the cached account with the updated account
    return result 
  })
}

const remove = () => Account.remove({})

module.exports = {create, remove}
