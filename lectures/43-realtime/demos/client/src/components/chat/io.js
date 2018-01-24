/* global __API_URL__ */
import io from 'socket.io-client'

// Setup a socket between this client and our backend server
export const socket = io(`${__API_URL__}`)

export const ioMiddleware = (store) => (next) => (action) => {
    if( typeof action === "object" && ! action.blocked ) {
        socket.emit(action.type, action.payload);
    }
    next(action)
}

export default (store, subscribers) => {

    Object.keys(subscribers)
        .map(type => {
            let handler = subscribers[type];
            return {type, handler};
        })
        .forEach(subscriber => {
            
            socket.on( subscriber.type, (payload) => {
                
                console.log("_SUBSCRIBE_EVENT_", subscriber.type, payload);
                try {
                    let fakeStore = {
                      dispatch: (action) => {
                        action.blocked = true
                        return store.dispatch(action)
                      },
                      getState: () => store.getState(),
                    }
                    subscriber.handler(fakeStore)(socket)(payload);
                }
                catch(e) {
                    console.error("_SUBSCRIBE_ERROR_", e.message);
                }
            })
        
            // TODO: Create a fakeStore (with dispatch, getState) where the dispatch blocks the action via property
                   // The fake store just calls real store.dispatch and store.getState
                   // This prevents actions being run until they are complete
                   
    })
}
