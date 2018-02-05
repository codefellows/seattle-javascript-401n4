import {combineReducers} from 'redux'

import token from './token.js'
import route from './route.js'
import history from './history.js'

export default combineReducers({token, route, history})
