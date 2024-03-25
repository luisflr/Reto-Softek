import { SpecialButtonInterface } from "../../Interfaces" 

import "./underline-button.scss"

function UnderlineButton({wrapperClassName='', textButton} :SpecialButtonInterface) {
  return (
    <button className={`underline-button ${wrapperClassName}`}>
      {textButton}
    </button>
  )
}

export default UnderlineButton