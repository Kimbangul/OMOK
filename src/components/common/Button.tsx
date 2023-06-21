import { ButtonPropsType } from "./type"

const Button = ({children, type}: ButtonPropsType) => {
  return(
    <button type={type}>{children}</button>
  )
}

export default Button;