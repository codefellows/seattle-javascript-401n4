import * as chat from '../action/chat.js'

const USER_CONNECTED = (store) => (socket) => (payload) => {
  store.dispatch(chat.userConnected(payload))
}

const USER_DISCONNECTED = (store) => (socket) => (payload) => {
  store.dispatch(chat.userDisconnected(payload))
}

export default {USER_CONNECTED, USER_DISCONNECTED}
