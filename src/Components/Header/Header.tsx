
import PhoneIcon from '../../assets/icons/PhoneIcon'

import './header.scss'
import LogoIcon from '../../assets/icons/LogoIcon'
import UnderlineButton from '../UnderlineButton/UnderlineButton'

function Header() {
  return (
    <header className='header'>
      <nav className='container'>
        <div className='header__logo'>
          <LogoIcon wrapperClassName='logo-icon'/>
        </div>
        <div className='text-header'>
          <UnderlineButton textButton='¡Compra por este medio!'/>
          <a className='text-header__contact'>
            <PhoneIcon wrapperClassName='phone-icon' />
            <span className='phone-number'>
              (01) 411 6001
            </span>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
