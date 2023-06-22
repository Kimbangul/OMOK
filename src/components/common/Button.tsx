import styled from "styled-components";
import { ButtonPropsType } from "./type";

const Button = ({children, type}: ButtonPropsType) => {
  return(
    <B.Container type={type}>{children}</B.Container>
  )
}

const B = {
  Container: styled.button`
    ${props => props.theme.ButtonStyle};
  `
}

export default Button;