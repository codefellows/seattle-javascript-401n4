import User from '../model/user.js'

const LOGIN = (socket) => (payload) => {
  User.fromToken(payload)
  .then(user => {
    socket.username = user.username

    let result = {
      username: socket.username, 
      content: `joined the chat`,
      meta: true,
    }

    socket.broadcast.emit('USER_CONNECTED', result)
  })
}

const LOGOUT = (socket) => (payload) => {
  let result = {
    username: socket.username, 
    content: `left the chat`,
    meta: true,
  }
  socket.broadcast.emit('USER_DISCONNECTED', result)
  delete socket.username 
}

export default {LOGIN, LOGOUT}
