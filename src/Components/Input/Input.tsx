import { InputInterface } from '../ComponentInterfaces';

import './input.scss';

function Input({ wrapperClassName='', placeholder }: InputInterface) {
  return (
    <div className={`${wrapperClassName} input`}>
      <input className='input-form' type="text" placeholder={placeholder} maxLength={9}/>
    </div>
  )
}

export default Input