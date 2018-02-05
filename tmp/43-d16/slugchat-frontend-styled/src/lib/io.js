import io from 'socket.io-client'

export const socket = io(`${__API_URL__}`)

export const reduxIO = (store) => (next) => (action) => {
  if(typeof action === 'object'){
    if(!action.blockPublish)
      socket.emit(action.type, action.payload)
  }
  next(action)
}

export default (store, subscribers) => {
  Object.keys(subscribers)
  .map(type => ({type, handler: subscribers[type]}))
  .forEach(subscriber => {
    socket.on(subscriber.type, (payload) => {
      console.log('__SUBSCRIBE_EVENT__', subscriber.type, payload)
      try {
        let fakeStore = {
          dispatch: (action) => {
            action.blockPublish = true
            return store.dispatch(action)
          },
          getState: () => store.getState(),
        }
        subscriber.handler(fakeStore)(socket)(payload)
      } catch(error) {
        console.error('__SUBSCRIBE_ERROR__', error)
      }
    })
  })
}
