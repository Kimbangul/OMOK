import {Socket, io} from 'socket.io-client';

class ClientSocket{
  socket: Socket;
  id: undefined | string;
  constructor(){
    this.socket = io("http://127.0.0.1:8000", {
      reconnectionDelayMax: 10000,
      withCredentials: true,
    });  
  }

  init(){
    // this.socket = io("http://127.0.0.1:8000", {
    //   reconnectionDelayMax: 10000,
    //   withCredentials: true,
    // });  
    this.socket.on("connect", () => {
      console.log(this.socket.id); // x8WIv7-mJelg7on_ALbx
      this.id = this.socket.id;
    });
    this.socket.on("disconnect", () => {
      console.log(this.socket.id); // undefined
    });
  }

  // 방 생성
  addRoom(){
    this.socket.emit('addRoom', this.id);
  }

  // 방 입장
  joinRoom(code:string){
    this.socket.emit('joinRoom', code);
  }

  // 방 삭제
  leaveRoom(code: string){
    this.socket.emit('leaveRoom', code);
  }
}

const socket = new ClientSocket();


 // FUNCTION 서버측에서 메세지 수신
 socket.socket.on('alertToClient', (msg) => {
  alert(msg);
 });


export default socket;

// export default function initClientSocket(){
//   const socket = io("http://127.0.0.1:8000", {
//     reconnectionDelayMax: 10000,
//     withCredentials: true,
//   });

//   socket.on("connect", () => {
//     console.log(socket.id); // x8WIv7-mJelg7on_ALbx
//   });
//   socket.on("disconnect", () => {
//     console.log(socket.id); // undefined
//   });
// }

   
// $("#msgForm").on('submit', (e)=>{
//   // 소켓메세지 전송
//   let msg = $('#msg').val();
//   socket.emit('newMsg', msg)
//   e.preventDefault();
// });
