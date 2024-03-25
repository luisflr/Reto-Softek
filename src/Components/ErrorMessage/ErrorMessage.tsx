import './error-message.scss'

const ErrorMessage = ({ wrapperClassName='', textMessage}: { wrapperClassName?: string, textMessage: string}) => {
  return (
    <span className={`${wrapperClassName} error-message`}>{textMessage}</span>
  )
}

export default ErrorMessage