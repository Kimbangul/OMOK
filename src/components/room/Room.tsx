import { useEffect, useState } from "react";
import styled, {css} from "styled-components";
import { InputContainerStyle as IC, StartInputContainer as SC } from "../info/InputContainerStyle";
import Button from "../common/Button";
import InputContainer from "../info/InputContainer";
import { RoomStateType } from "./type";
import useApiCall from "../../hooks/useApiCall";
import axios from "../../axios";

const Room = () => {
  const [roomState, setRoomState] = useState<RoomStateType>('lobby');

  const makeRoom = () => {
    axios.get(`/room/add`,{params: {player: 'black'}});
    setRoomState('make');
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
          <RoomStyle.Code>{Math.random()*1000}</RoomStyle.Code>
          <RoomStyle.Text>플레이할 사람에게 코드를 알려주세요.</RoomStyle.Text>
          <Button color='linear-gradient(to right,#7cb9fac0  ,#7146f1c0)' onClick={()=>setRoomState('lobby')}>취소하기</Button>
        </RoomStyle.Inner>
      }
      {
        roomState === 'join' &&
        <RoomStyle.Inner>
           <RoomStyle.Text>플레이할 사람에게 코드를 알려주세요.</RoomStyle.Text>
            <RoomStyle.Input type="text" />
            <Button onClick={()=>setRoomState('lobby')}>입장하기</Button>
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