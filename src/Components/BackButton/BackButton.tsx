import { SpecialButtonInterface } from "../../Interfaces"
import ArrowLeft from "../../assets/icons/ArrowLeft"

import './back-button.scss'

const BackButton = ({ wrapperClassName='', textButton}: SpecialButtonInterface) => {
  return (
    <button className={`back-button ${wrapperClassName}`}>
        <div className='icon-back-button'>
          <ArrowLeft wrapperClassName='arrow-left'/>
        </div>
        {textButton}
      </button>
  )
}

export default BackButton