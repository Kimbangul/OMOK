import { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { GameStateType, roomState as RecoilRoomState, RoomStateType as RecoilRoomType, gameInfoState, gameState } from "../../recoil/stage";
import styled from "styled-components";
import { InputContainerStyle as IC, StartInputContainer as SC } from "../info/InputContainerStyle";
import Button from "../common/Button";
import { RoomStateType } from "./type";
import axios from "../../axios";
import errHandler from "../../axios/errHandler";
import socket from "../../socket/socket";


const Room = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [roomState, setRoomState] = useState<RoomStateType>('lobby');

  const [game, setGame] = useRecoilState<GameStateType>(gameState);
  const [gameInfo, setGameInfo] = useRecoilState(gameInfoState);
  const [roomCode, setRoomCode] = useRecoilState(RecoilRoomState);


  // FUNCTION 신규 방 생성 시 코드 불러오기
  socket.socket.on('getNewRoomCode', (code) => {
    setRoomCode(code);
  });

  // FUNCTION 방에 2인 참가 시 게임 매칭
  socket.socket.on('setMatch', (data) => {
    console.log('matching');
    console.log(data);
    setGame('ready');
  });

  const makeRoom = () => {
    socket.addRoom();
    setRoomState('make');
  }

  const joinRoom = (e: React.MouseEvent) => {
    e.preventDefault();
    socket.joinRoom(inputRef.current?.value||'');
  }

  const leaveRoom = (e: React.MouseEvent) => {
    e.preventDefault();
    socket.leaveRoom(roomCode||'');
    setRoomState('lobby');
  }

  return(
    <>
   {
     game === 'room' &&
      <IC.Container>
        {
          roomState === 'lobby' &&
          <RoomStyle.Inner>
            <Button onClick={makeRoom}>방 만들기</Button>
            <Button color='linear-gradient(to right,#7cb9fac0  ,#7146f1c0)' onClick={()=>setRoomState('join')}>방에 참가하기</Button>
          </RoomStyle.Inner>
        }
        {
          roomState === 'make' &&
          <RoomStyle.Inner>
            <RoomStyle.Code>{roomCode || ''}</RoomStyle.Code>
            <RoomStyle.Text>플레이할 사람에게 코드를 알려주세요.</RoomStyle.Text>
            <Button color='linear-gradient(to right,#7cb9fac0  ,#7146f1c0)' onClick={leaveRoom}>취소하기</Button>
          </RoomStyle.Inner>
        }
        {
          roomState === 'join' &&
          <RoomStyle.Inner>
            <RoomStyle.Text>입장할 방의 코드를 입력해주세요.</RoomStyle.Text>
              <RoomStyle.Input type="text" ref={inputRef}/>
              <Button onClick={joinRoom}>입장하기</Button>
              <Button color='linear-gradient(to right,#7cb9fac0  ,#7146f1c0)' onClick={()=>setRoomState('lobby')}>취소하기</Button>
          </RoomStyle.Inner>
        }
      </IC.Container>
    }
    {
      (game === 'ready') &&  (gameInfo?.host === socket.id )&&
      <IC.Container>
        
      </IC.Container>
    }
    </>
  )
}

const RoomStyle ={
  Inner: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;    
  `,
  Input:styled.input`
  ${props => props.theme.GlassInputStyle};
  `,
  Code: styled.div`
    font-size: 2.4rem;
    font-weight: 800;
    color: #fff;
    text-align: center;
    margin-bottom: -1.6rem;
  `,
  Text: styled.p`
    font-size: 1.6rem;
    color: #fff;
    text-align: center;
  `
}

export default Room;