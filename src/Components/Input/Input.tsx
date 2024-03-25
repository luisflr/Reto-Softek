import { InputInterface } from '../../Interfaces'; 

import './input.scss';

function Input({ wrapperClassName='', placeholder, inputValue, handleInput }: InputInterface) {
  return (
    <div className={`${wrapperClassName} input`}>
      <input
        className='input-form'
        type="text"
        placeholder={placeholder}
        maxLength={9}
        value={inputValue}
        onChange={handleInput}
      />
    </div>
  )
}

export default Input