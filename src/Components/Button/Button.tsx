import { ButtonInterface } from "../Interfaces"

import "./button.scss"
const Button = ({textButton, type, wrapperClassName= '' }: ButtonInterface) => {
  return (
    <button
      className={`${wrapperClassName} form-button ${type}`}>
        {textButton}
    </button>
  )
}

export default Button