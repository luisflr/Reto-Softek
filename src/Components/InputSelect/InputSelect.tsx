import { InputSelectInterface } from "../ComponentInterfaces"

import ArrowDown from "../../assets/icons/ArrowDown"

import './input-select.scss'

function InputSelect({
  wrapperClassName='', 
  placeholder, 
  options }: InputSelectInterface) {
  return (
    <div className={`${wrapperClassName} input-select`}>
      <div className="input-select__select">
        <select>
          {options.map( option =>
            <option value={option}>{option}</option>)
          }
        </select>
        <ArrowDown wrapperClassName="arrow-select"/>
      </div>
      <div className="input-select__input">
        <input className='input-form' type="text" placeholder={placeholder} maxLength={8}/>
      </div>
    </div>
  )
}

export default InputSelect