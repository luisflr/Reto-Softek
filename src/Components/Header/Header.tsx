
import PhoneIcon from '../../assets/icons/PhoneIcon'

import './header.scss'
import LogoIcon from '../../assets/icons/LogoIcon'

function Header() {
  return (
    <header className='header'>
      <nav className='container'>
        <div className='header__logo'>
          <LogoIcon wrapperClassName='logo-icon'/>
        </div>
        <div className='text-header'>
          <button className='text-header__button'>¡Compra por este medio!</button>
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
