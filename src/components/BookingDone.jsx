import { onMount } from 'solid-js'
import Button from './Button'
import Input from './Input'

import './BookingDone.css'

function script() {
  const els = Array.from(document.querySelectorAll('dialog'))
  if (!els.length) return

  els.forEach((el) => {
    function outsideClick(e) {
      if (el.open && !el.contains(e.target)) {
        el.close()
      }
    }

    window.addEventListener('click', outsideClick, { capture: true })
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function BookingDone() {
  onMount(script)
  return (
    <dialog id="bookingModal" className="booking-done scrollbar-dark">
      <h5 className="booking-done__title">Завершение бронирования</h5>
      <form className="booking-done__form">
        <p className="booking-done__lead">
          Для завершения бронирования введите реквизиты электронного билета. Они
          поступят в виде СМС на указанный номер телефона
        </p>
        <div className="booking-done__inputs">
          <Input
            variant="secondary"
            required
            placeholder="Реквизиты"
            name="req"
          />
          <div className="">
            <p className="booking-done__msg">
              Если вы хотите получить копию билета и кассовый чек на электронную
              почту, то укажите еe ниже
            </p>
            <Input
              variant="secondary"
              required
              type="email"
              placeholder="Почта"
              name="email"
            />
          </div>
        </div>

        <Button
          type="submit"
          variant="secondary"
          size="md"
          class="booking-done__button"
        >
          Отправить
        </Button>
      </form>
    </dialog>
  )
}
