import { GameInfoStateType } from 'recoil/type';
import {Socket, io} from 'socket.io-client';
import { StartGameParamsType } from 'socket/type';

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
    this.socket.emit('joinRoom', code, this.id);
  }

  // 방 삭제
  leaveRoom(code: string){
    this.socket.emit('leaveRoom', code);
  }

  // 게임 시작
  startGame(info: StartGameParamsType){
    this.socket.emit('startGame', info);
  }

  // 진행상황 업데이트
  update(code:string, info: Partial<GameInfoStateType>){
    this.socket.emit('updateServer', code, info);
  }
}

const socket = new ClientSocket();


 // FUNCTION 서버측에서 메세지 수신
 socket.socket.on('alertToClient', (msg) => {
  alert(msg);
 });


export default socket;
