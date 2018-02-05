'use strict'

// DEPENDENCIES
import cors from 'cors'
import io from './io.js'
import morgan from 'morgan'
import {Server} from 'http'
import express from 'express'
import * as mongo from './mongo.js'

// routers
import authRouter from '../router/auth.js'
import fourOhFour from '../middleware/four-oh-four.js'
import errorHandler from '../middleware/error-middleware.js'

// subscribers
import authSubscriber from '../subscribe/auth.js'
import messageSubscriber from '../subscribe/message.js'

// STATE
const app = express()

// global middleware
app.use(morgan('dev'))
app.use(cors({
  origin: process.env.CORS_ORIGINS.split(' '),
  credentials: true, 
}))


// routers
app.use(authRouter)

// handle errors
app.use(fourOhFour)
app.use(errorHandler)

const state = {
  isOn: false, 
  http: null,
}

// INTERFACE 
export const start = () => {
  return new Promise((resolve, reject) => {
    if (state.isOn) 
      return reject(new Error('USAGE ERROR: the state is on'))
    state.isOn = true
    mongo.start()
    .then(() => {
      // create an http server
      state.http = Server(app)
      // connect our io moulue to the server
      let subscribers = Object.assign( authSubscriber, messageSubscriber)
      io(state.http, subscribers)
      // start the server
      state.http.listen(process.env.PORT, () => {
        console.log('__SERVER_UP__', process.env.PORT)
        resolve()
      })
    })
    .catch(reject)
  })
}

export const stop = () => {
  return new Promise((resolve, reject) => {
    if(!state.isOn)
      return reject(new Error('USAGE ERROR: the state is off'))
    return mongo.stop()
    .then(() => {
      state.http.close(() => {
        console.log('__SERVER_DOWN__')
        state.isOn = false
        state.http = null
        resolve()
      })
    })
    .catch(reject)
  })
}
