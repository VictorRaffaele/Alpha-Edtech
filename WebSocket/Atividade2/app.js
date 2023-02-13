import express from'express';
import {Server} from'socket.io';
import http from'http';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const history = [];

app.use('/', express.static('./src/front'));

io.on('connection', (socket) => {
  io.emit(`A new Client connected with ${socket.id}`);

  socket.on('user_join', (data) => {
    io.emit('user_join', data);
  });

  socket.on('message', (received) => {
    history.push(received);
    console.log(history)
    io.emit('message', received);
  });

  socket.on('user_leave', (data) => {
    io.emit('user_leave', data);
    socket.disconnect();
  });

  socket.on('disconnect', () => {
    console.log(`Client disconnected`);
  });
});

server.listen(8000, () => {
  console.log('Server running on: http://localhost:8080');
});
