import styled, {css} from "styled-components";
import { InputContainerStyle as IC, StartInputContainer as SC } from "../info/InputContainerStyle";
import Button from "../common/Button";


const Room = () => {
  return(
    <IC.Container>
      <div>
        <Button>방 만들기</Button>
        <Button color='linear-gradient(to right,#7cb9fac0  ,#7146f1c0)'>방에 참가하기</Button>
      </div>
    </IC.Container>
  )
}

export default Room;