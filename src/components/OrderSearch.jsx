import { onMount } from 'solid-js'
import Button from './Button'
import Checkbox from './Checkbox'
import Input from './Input'
import './OrderSearch.css'

function script() {
  const el = document.querySelector('.order-search')
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

export default function OrderSearch() {
  onMount(script)
  return (
    <form class="order-search">
      <div class="order-search__inner">
        <p className="order-search__text">
          Для поиска заказанных мест введите номер своего мобильного телефона и
          номер заказа:
        </p>
        <Input
          class="mb-5"
          name="phone"
          variant="secondary"
          placeholder="Телефон"
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
          class="order-search__button"
          size="md"
          variant="secondary"
          value="Найти"
          disabled
        />
      </div>
    </form>
  )
}
