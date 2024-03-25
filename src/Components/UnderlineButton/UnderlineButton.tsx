import { SpecialButtonInterface } from "../../Interfaces" 

import "./underline-button.scss"

function UnderlineButton({wrapperClassName='', textButton, onPress}: SpecialButtonInterface) {
  return (
    <button className={`underline-button ${wrapperClassName}`} onClick={onPress}>
      {textButton}
    </button>
  )
}

export default UnderlineButton