import io from 'socket.io'

export default (http, subscribers) => {
  return io(http)
  .on('connection', (socket) => {
    // handle the client connection
    Object.keys(subscribers)
    .map(type => ({type, handler: subscribers[type]}))
    .forEach(subscriber => {
      socket.on(subscriber.type, (payload) => {
        console.log('__SUBSCRIBE_EVENT__', subscriber.type, payload)
        try {
          subscriber.handler(socket)(payload)
        } catch(error){
          console.log('__SUBSCRIBE_ERROR__', error)
        }
      })
    })
  })
  .on('error', (error) => {
    console.error('__SOCKET_IO_ERROR__', error)
  })
}
