import { useState } from "react";
import styled, {css} from "styled-components";
import { InputContainerStyle as IC, StartInputContainer as SC } from "../info/InputContainerStyle";
import Button from "../common/Button";
import InputContainer from "../info/InputContainer";
import { RoomStateType } from "./type";


const Room = () => {
  const [roomState, setRoomState] = useState<RoomStateType>('lobby');

  // FUNCTION 

  return(
    <IC.Container>
      {
        roomState === 'lobby' &&
        <RoomStyle.Inner>
          <Button onClick={()=>setRoomState('make')}>방 만들기</Button>
          <Button color='linear-gradient(to right,#7cb9fac0  ,#7146f1c0)' onClick={()=>setRoomState('join')}>방에 참가하기</Button>
        </RoomStyle.Inner>
      }
      {
        roomState === 'make' &&
        <RoomStyle.Inner>
          <div>{Math.random()*1000}</div>
          <p>플레이할 사람에게 코드를 알려주세요.</p>
          <Button color='linear-gradient(to right,#7cb9fac0  ,#7146f1c0)' onClick={()=>setRoomState('lobby')}>취소하기</Button>
        </RoomStyle.Inner>
      }
      {
        roomState === 'join' &&
        <RoomStyle.Inner>
          <div>
            <RoomStyle.Input type="text" />
            <Button color='linear-gradient(to right,#7cb9fac0  ,#7146f1c0)' onClick={()=>setRoomState('lobby')}>취소하기</Button>
          </div>
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
  `
}

export default Room;