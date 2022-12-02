import Logo from './Logo'
import PhoneIcon from '../icons/phone.svg?component'
import ClockIcon from '../icons/clock.svg?component'
import Button from './Button'
import Input from './Input'
import Social from './Social'

import './Footer.css'

const links = [
  { name: 'Соглашения', href: '#' },
  { name: 'Информация', href: '#board' },
  { name: 'Как оплатить', href: '#payment' },
  { name: 'Кассы', href: '#offices' },
  { name: 'Вопрос-ответ', href: '#questions' },
  { name: 'Расписание рейсов', href: '#' }
]

export default function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div className="footer__grid">
          <div className="footer__main">
            <div className="footer__stuff">
              <div className="footer__brand">
                <Logo className="footer__logo" />
                <p>Официальный сайт Автовокзала Улан-Удэ «Байкал»</p>
              </div>
              <div className="footer__contact">
                <div className="footer__info">
                  <a href="tel:+79503835555" className="footer__info-item">
                    <PhoneIcon /> +7 950 383 55 55
                  </a>
                  <span className="footer__info-item">
                    <ClockIcon /> Eжедневно с 8:00 до 20:00
                  </span>
                </div>
                <Social className="footer__social" />
              </div>
            </div>
            <p className="footer__text">
              © 2013-2022 ООО "ОнлайнСервис". Все права защищены
              <br />
              Использование материалов сайта с целью распространения информации
              осуществляется при условии указания ссылки на сайт
              АВТОВОКЗАЛ-ОНЛАЙН.РФ
            </p>
          </div>

          <div className="footer__side">
            <ul className="footer__list">
              {links.map(({ name, href }) => (
                <li>
                  <a className="footer__list-link" href={href}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>

            <form className="footer__form">
              <h3 className="footer__form-title">Заказать звонок</h3>
              <div className="footer__form-inputs">
                <Input
                  variant="secondary"
                  required
                  placeholder="Имя"
                  name="name"
                />
                <Input
                  variant="secondary"
                  required
                  placeholder="Телефон"
                  name="phone"
                />
              </div>
              <Button
                class="footer__form-button"
                type="submit"
                variant="secondary"
                size="md"
              >
                Отправить
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
