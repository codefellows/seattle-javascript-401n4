import User from '../../../model/user.js'

const LOGIN = (socket) => (payload) => {
    
    let tokenSeed = payload.tokenSeed;
    
    User.findOne({tokenSeed})
        .then(user => {
            socket.username = user.username;
            
            let packet = {
                username: user.username,
                content: 'entered the chat',
                meta: true
            }
            
            socket.broadcast.emit("USER_CONNECTED", packet);
        })
}

const LOGOUT = (socket) => (payload) => {
    
    let packet = {
        username: socket.username,
        content: 'left the chat',
        meta: true
    }
    
    socket.broadcast.emit("USER_DISCONNECTED", packet);
    
    delete socket.username;
}

export default {LOGIN, LOGOUT}
