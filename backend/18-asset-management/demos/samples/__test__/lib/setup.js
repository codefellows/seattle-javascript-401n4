'use strict'
const faker = require('faker')

// mock env
process.env.PORT = 7000
process.env.MONGODB_URI = 'mongodb://localhost/testing'
process.env.CORS_ORIGIN = 'http://localhost:8080'
process.env.IMAGECLOUD_SECRET = 'sometotallysecretthing'
process.env.AWS_BUCKET='johnnycloud'
process.env.AWS_ACCESS_KEY_ID='SECRET'
process.env.AWS_SECRET_ACCESS_KEY='SECRETER'