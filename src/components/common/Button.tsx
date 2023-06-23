import styled from "styled-components";
import { ButtonPropsType } from "./type";

const Button = ({children, type, onClick}: ButtonPropsType) => {
  return(
    <B.Container type={type} onClick={onClick}>{children}</B.Container>
  )
}

const B = {
  Container: styled.button`
    ${props => props.theme.ButtonStyle};
  `
}

export default Button;