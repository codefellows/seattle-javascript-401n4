'use strict';

const net = require("net");
const port = 3000;
const server = net.createServer();


let socketPool = [];

// "on" is the equivalent of addEventListener on the server side.
// The callback -- we get a socket.  What's a socket?  An individual connection
// IP: Building, Port: Apartment Number, Socket: Cubicle
server.on('connection', (socket) => {

    socket.username = `User ${Math.random()}`;

    socketPool = [...socketPool, socket];

    socket.on("data", (buffer) => {

        let text = buffer.toString();

        //  Use /nickname <something> to change my name
        if ( text.startsWith("/nickname"))  {
            socket.username = text.trim().split(" ").slice(1).join(" ");
        }

        // Direct Message a specific user
        if ( text.startsWith("/dm")){

            // get the username
            // Send that socket your text

        }

        // Outta Here!
        if ( text.startsWith("/quit")) {
            // delete your socket from the clientpool
        }

        // Broadcast the message
        console.log(socket.username, ":", text);

        socketPool.forEach(function(connection) {
            connection.write(text);
        });

    });

    // socket.on('error');
    // socket.on('close');
    // socket.on('disconnect');


});

server.listen(port, ()=>{
    console.log("Alive on port", port);
});
