const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketio(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('I am the home route');
  res.sendFile('index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  console.log(`client socket: ${socket.id}`)
})

server.listen(3000, () => {
  console.log('listening on port 3000');
});
