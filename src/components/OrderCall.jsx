import { onMount } from 'solid-js'
import orderCallImg from '../images/order-call.jpg?jpg'
import Button from './Button'
import Checkbox from './Checkbox'
import Image from './Image'
import Input from './Input'

import './OrderCall.css'

function script() {
  const el = document.querySelector('.order-call')
  if (!el) return

  const buttonEl = el.querySelector('[type="submit"]')
  const confirmEl = el.querySelector('[name="confirm"]')

  confirmEl.addEventListener('change', (e) => {
    buttonEl.disabled = !e.target.checked
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function OrderCall() {
  onMount(script)
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
          <Checkbox
            name="confirm"
            label="Я согласен на обработку своих персональных данных"
          />
          <Button
            as="input"
            type="submit"
            variant="secondary"
            size="md"
            disabled
            class="order-call__button"
            value="Отправить"
          />
        </form>
      </div>
    </section>
  )
}
