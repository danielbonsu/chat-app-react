const express = require('express');
const app = express();

const server = require('http').createServer(app);
const socketio = require('socket.io');
const formatMsg = require('./utils/formatMessage');
const {
  addUser,
  getCurrentUser,
  userLeaves,
} = require('./utils/users');

const io = socketio(server);

// bot nane
const BotName = 'Admin';

io.on('connection', (socket) => {
  socket.emit(
    'message',
    formatMsg({
      username: BotName,
      msg: 'welcome to zappychat',
    })
  );

  socket.on('clientSent', (msg) => {
    console.log(msg);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(
    `server is listening on port ${PORT}`
  );
});
