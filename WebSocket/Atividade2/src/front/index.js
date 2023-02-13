const sender = document.querySelector('#sender');
const msg = document.querySelector('#msg');
const btSend = document.querySelector('#send');
const btLeave = document.querySelector('#leave');
const chat = document.querySelector('#chat');
const socket = io();
let username = null;

function send_msg(){
  if (!username) {
    username = sender.value;
    socket.emit('user_join', {"username": username, "date": Date.now()});
    socket.emit('message', {"username": username, "message": msg.value, "date": Date.now()});
  } else {
    socket.emit('message', {"username": username, "message": msg.value, "date": Date.now()});
  }
}

function leave() {
  socket.emit('user_leave', {"username": username, "date": Date.now()});
}

socket.on('user_join', (data) => {
  chat.innerHTML += `[${new Date(data.date).toLocaleString()}] ${data.username} joined the chat\n`;
});

socket.on('message', (received) => {
  chat.innerHTML += `[${new Date(received.date).toLocaleString()}] ${received.username} said: ${received.message}\n`;
  chat.scrollTop = chat.scrollHeight;
});

socket.on('user_leave', (data) => {
  chat.innerHTML += `[${new Date(data.date).toLocaleString()}] ${data.username} left the chat\n`;
});

btSend.addEventListener('click', send_msg);
btLeave.addEventListener('click', leave);