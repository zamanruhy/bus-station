import { onMount } from 'solid-js'
import Button from './Button'
import Checkbox from './Checkbox'
import Input from './Input'
import './OrderRepair.css'

function script() {
  const el = document.querySelector('.order-repair')
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

export default function OrderRepair() {
  onMount(script)
  return (
    <form class="order-repair">
      <div class="order-repair__inner">
        <p className="order-repair__text">
          Для восстановления номера заказа укажите станцию отправления, дату
          бронирования и мобильный телефон, который был указан при бронировании
        </p>
        <Input
          class="mb-5"
          name="station"
          variant="secondary"
          placeholder="Станция отправления"
          required
        />
        <Input
          class="mb-5"
          name="date"
          variant="secondary"
          placeholder="Дата бронирования"
          required
        />
        <Input
          class="mb-2.5"
          name="number"
          variant="secondary"
          placeholder="Номер заказа"
          required
        />
        <Checkbox
          class="xl:whitespace-nowrap"
          name="confirm"
          label="Я согласен на обработку своих персональных данных"
        />
        <Button
          as="input"
          type="submit"
          class="order-repair__button"
          size="md"
          variant="secondary"
          value="Восстановить"
          disabled
        />
      </div>
    </form>
  )
}
