import styled, {css} from "styled-components";
import { InputContainerStyle as IC, StartInputContainer as SC } from "../info/InputContainerStyle";
import Button from "../common/Button";


const Room = () => {
  return(
    <IC.Container>
      <Button>방 만들기</Button>
      <Button>방에 참가하기</Button>
    </IC.Container>
  )
}

export default Room;