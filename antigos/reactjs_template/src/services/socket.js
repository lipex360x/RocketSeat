import socketio from 'socket.io-client';
import { toast } from 'react-toastify';

const baseURL = 'http://localhost:3333';
const socket = socketio(baseURL, { autoConnect: false });

function connect() {
  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

socket.on('backend', data => {
  toast.success(data);
});

export { connect, disconnect };
