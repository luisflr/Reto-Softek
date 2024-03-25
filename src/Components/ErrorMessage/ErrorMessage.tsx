import { ErrorMessageInterface } from '../../Interfaces'
import './error-message.scss'

const ErrorMessage = ({ wrapperClassName='', textMessage}: ErrorMessageInterface) => {
  return (
    <span className={`${wrapperClassName} error-message`}>{textMessage}</span>
  )
}

export default ErrorMessage