import orderCallImg from '../images/order-call.jpg?jpg'
import Button from './Button'
import Checkbox from './Checkbox'
import Image from './Image'
import Input from './Input'

import './OrderCall.css'

export default function OrderCall() {
  return (
    <section className="order-call">
      <Image
        className="order-call__img"
        src={orderCallImg}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div className="order-call__overlay" />
      <div className="order-call__grid">
        <div className="order-call__content">
          <h2 className="order-call__title">Заказать звонок</h2>
          <p className="order-call__text">
            Заполните форму обратной связи, наш специалист свяжется с вами в
            ближайшее время и ответит на все интересующие вопросы
          </p>
        </div>
        <form className="order-call__form">
          <Input variant="secondary" required placeholder="Имя" name="name" />
          <Input
            variant="secondary"
            required
            placeholder="Телефон"
            name="phone"
          />
          <Checkbox label="Я согласен на обработку своих персональных данных" />
          <Button type="submit" variant="secondary" size="md">
            Отправить
          </Button>
        </form>
      </div>
    </section>
  )
}
