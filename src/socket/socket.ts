import {io} from 'socket.io-client';

export default function initClientSocket(){
  const socket = io("http://127.0.0.1:8000", {
    reconnectionDelayMax: 10000,
    withCredentials: true,
  });

  socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });
  socket.on("disconnect", () => {
    console.log(socket.id); // undefined
  });
}