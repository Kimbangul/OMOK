import { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { roomState as RecoilRoomState, RoomStateType as RecoilRoomType } from "../../recoil/stage";
import styled from "styled-components";
import { InputContainerStyle as IC, StartInputContainer as SC } from "../info/InputContainerStyle";
import Button from "../common/Button";
import { RoomStateType } from "./type";
import axios from "../../axios";
import errHandler from "../../axios/errHandler";
import socket from "../../socket/socket";


const Room = () => {
  const [roomState, setRoomState] = useState<RoomStateType>('lobby');
  const [roomCode, setRoomCode] = useRecoilState(RecoilRoomState);
  const inputRef = useRef<HTMLInputElement>(null);

  const makeRoom = () => {
    axios.post(`/room/add`).then((res) => {
      console.log(res.data);
      setRoomCode(res.data.code);
    }).catch(errHandler);
    setRoomState('make');
  }

  const joinRoom = (e: React.MouseEvent) => {
    e.preventDefault();
    axios.post(`/room/join`,{code: inputRef.current?.value}).then((res) => {
      console.log(inputRef.current?.value);      
    }).catch(errHandler);
  }

  const leaveRoom = (e: React.MouseEvent) => {
    e.preventDefault();
    socket.leaveRoom(roomCode||'');
    setRoomState('lobby');
  }

  return(
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