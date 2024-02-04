import { BLACK } from 'recoil/stage';
import { GameInfoStateType, ScoreStateType } from 'recoil/type';
import {Socket, io} from 'socket.io-client';
import { StartGameParamsType } from 'socket/type';

class ClientSocket{
  socket: Socket;
  id: undefined | string;
  constructor(){
    this.socket = io(process.env.REACT_APP_API_URL || '', {
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

   // 게임 종료
   endGame(code: string, member: string[], msg: string){
    this.socket.emit('endGame', code, member, msg);
   }

  // 진행상황 업데이트
  update(code:string, info: Partial<GameInfoStateType>){
    console.log('====== 서버 업데이트');
    this.socket.emit('updateServer', code, info);
  }

  // 게임 리셋
  reset(code: string, score?: ScoreStateType){
    // const newInfo = {
    //   ...info,
    //   gameState: null,
    //   turn: BLACK
    // }
    // this.socket.emit('updateServer', code, newInfo);
    console.log('send reset');
    const newScore = score || {};
    this.socket.emit('resetRoom', code, newScore);
  }
}

const socket = new ClientSocket();



export default socket;
