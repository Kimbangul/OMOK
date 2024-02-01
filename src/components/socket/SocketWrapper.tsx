import useReset from "components/reset/useReset";
import { ReactNode, useEffect } from "react"
import { useRecoilState } from "recoil";
import { gameState, inputState, playerState, stageState, gameInfoState, roomState, scoreState } from "recoil/stage";
import { GameStateType, InputStateType } from "recoil/type";
import socket from "socket/socket";

const SocketWrapper = ({children} : {children: ReactNode}) => {
  const [player, setPlayer] = useRecoilState(playerState);
  const [gameStage, setGameStage] = useRecoilState(stageState);
  const [gameInfo, setGameInfo] = useRecoilState(gameInfoState);
  const [game, setGame] = useRecoilState<GameStateType>(gameState);
  const [table, setTable] = useRecoilState<InputStateType>(inputState);
  const [roomCode, setRoomCode] = useRecoilState(roomState);
  const [score, setScore] = useRecoilState(scoreState);
  const reset = useReset();

  useEffect(()=>{
    console.log('wrapper 실행');
    // FUNCTION 클라이언트 데이터 업데이트
    socket.socket.on('updateClient', (data) => {
      console.log('=====update client=====');
      console.log(data);
      setGameInfo(data);
      setGameStage(data.stageState);
      setGame(data.gameState);
      setPlayer(data.turn);   
      setScore(data.score);
    });

    socket.socket.on('resetClient', ()=>{
      console.log('reset client');
      reset.reset();
    })

    
    // // FUNCTION 서버에 행,열 설정이 정상적으로 넘겨졌을 때
    // socket.socket.on('doneStartGame', (data) => {
    //   console.log(data);
    //   setGameInfo(data);
    //   setGame('start');   
    // });

    // FUNCTION 신규 방 생성 시 코드 불러오기
    socket.socket.on('getNewRoomCode', (code) => {
      setRoomCode(code);
    });
  
    // // FUNCTION 방에 2인 참가 시 게임 매칭
    // socket.socket.on('setMatch', (data) => {
    //   console.log('matching');
    //   console.log(data);
    //   setGame('ready');
    //   setGameInfo(data);
    // });
  
     // FUNCTION 서버측에서 메세지 수신
      socket.socket.on('alertToClient', (msg) => {
        alert(msg);
      });
  }, [socket]);

  return(
    <>
      {children}
    </>
  )
}

export default SocketWrapper