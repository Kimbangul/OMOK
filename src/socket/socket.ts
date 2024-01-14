import {io} from 'socket.io-client';

// Class Socket(){
//   constructor(){
//     this.socket;
//   }

//   initClientSocket(){
//     this.socket = io("http://127.0.0.1:8000", {
//       reconnectionDelayMax: 10000,
//       withCredentials: true,
//     });
  
//     socket.on("connect", () => {
//       console.log(socket.id); // x8WIv7-mJelg7on_ALbx
//     });
//     socket.on("disconnect", () => {
//       console.log(socket.id); // undefined
//     });
//   }
// }

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

   
// $("#msgForm").on('submit', (e)=>{
//   // 소켓메세지 전송
//   let msg = $('#msg').val();
//   socket.emit('newMsg', msg)
//   e.preventDefault();
// });
