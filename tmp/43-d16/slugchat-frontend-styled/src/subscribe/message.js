import * as chat from '../action/chat.js'

const MESSAGE = (store) => (socket) => (payload) => {
  store.dispatch(chat.message(payload))
}

export default {MESSAGE}
