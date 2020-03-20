const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

const app = express()
const server = http.createServer(app)
const sockets = socketio(server)


app.use(express.static('public'))


var list = [1,2,3]
var id = 0

var jogadores = []

var card1 = {nivel:5}


app.get('/',function(req,res) { 
    //res.sendFile(path.join(__dirname+'/public/styles.css'));
    res.sendFile(path.join(__dirname+'/public/index.html')); 
    
  });

sockets.on('connection', (socket) => {
    const playerId = socket.id
    var c = socket.handshake.address;
    console.log(`> Player connected: ${playerId} with cookie ${c}`)
    jogadores.push()

    socket.on('entra-jogo', function(msg){
        socket.emit('msg1', list[id]);
        id++;
    })

    socket.on('disconnect', () => {
        console.log(`> Player disconnected: ${playerId}`)
    })

})

server.listen(25565, () => {
    console.log(`> Server listening on port: 3000`)
})