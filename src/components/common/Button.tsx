import { ButtonPropsType } from "./type"

const Button = ({children}: ButtonPropsType) => {
  return(
    <button>{children}</button>
  )
}

export default Button;