import Logo from './Logo'
import PhoneIcon from '../icons/phone.svg?component'
import ClockIcon from '../icons/clock.svg?component'
import UserIcon from '../icons/user.svg?component'
import Hamburger from './Hamburger'
import './Header.css'

export default function Header() {
  return (
    <header class="header">
      <div className="container">
        <div className="header__inner">
          <Logo className="header__logo" />
          <p className="header__slogan">
            Официальный сайт Автовокзала Улан-Удэ «Байкал»
          </p>
          <span className="grow" />
          <div className="header__side">
            <a href="tel:+79503835555" className="header__item">
              <PhoneIcon /> +7 950 383 55 55
            </a>
            <span className="header__item">
              <ClockIcon /> Eжедневно с 8:00 до 20:00
            </span>
            <a href="#" className="header__item header__item_auth">
              <UserIcon />
              <span className="hidden md:block">Личный кабинет</span>
            </a>
          </div>
          <Hamburger />
        </div>
      </div>
    </header>
  )
}
