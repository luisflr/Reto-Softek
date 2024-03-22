import { CheckBoxInterface } from "../ComponentInterfaces"

import './checkbox.scss';

const Checkbox = ({ wrapperClassName='', labelText}: CheckBoxInterface) => {
  return (
    <label className={`checkbox-login ${wrapperClassName}`} id="c1">
      <input type="checkbox"/>
      {labelText}
    </label>
    
  )
}

export default Checkbox