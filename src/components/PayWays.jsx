import cardsImg from '../images/cards.jpg?jpg'
import sberOnlineImg from '../images/sber-online.jpg?jpg'
import sberImg from '../images/sber.jpg?jpg'
import Image from './Image'

import './PayWays.css'

export default function PayWays() {
  return (
    <section id="payment" className="pay-ways">
      <h2 className="pay-ways__title">Способы оплаты</h2>
      <div className="pay-ways__items">
        <a href="#" className="pay-ways__item">
          <Image src={cardsImg} className="pay-ways__item-img" alt="" />
          <p className="pay-ways__item-text">
            Оплата банковской картой Visa, Mastercard, МИР{' '}
            <span className="pay-ways__item-muted">(все банки)</span>
          </p>
        </a>

        <a href="#" className="pay-ways__item">
          <Image src={sberOnlineImg} className="pay-ways__item-img" alt="" />
          <p className="pay-ways__item-text">Оплата в «СберБанк Онлайн»</p>
        </a>

        <a href="#" className="pay-ways__item">
          <Image src={sberImg} className="pay-ways__item-img" alt="" />
          <p className="pay-ways__item-text">
            Оплата в отделениях и терминалах ПАО «СберБанк»
          </p>
        </a>
      </div>
    </section>
  )
}
