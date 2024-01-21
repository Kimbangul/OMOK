import styled from "styled-components";
import { ButtonPropsType } from "components/common/type";

const Button = ({children, type, onClick,color}: ButtonPropsType) => {
  return(
    <B.Container color={color} type={type} onClick={onClick}>{children}</B.Container>
  )
}

const B = {
  Container: styled.button`
    ${props => props.theme.ButtonStyle};
  `
}

export default Button;