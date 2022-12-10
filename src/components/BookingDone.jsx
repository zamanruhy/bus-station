import { onMount } from 'solid-js'
import Button from './Button'
import Input from './Input'

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
    <dialog
      id="bookingModal"
      className="booking-done max-h-[calc(100%-20px)] w-[calc(100%-20px)] max-w-[558px] rounded bg-primary
      p-[30px] text-center text-white backdrop:pointer-events-none backdrop:bg-black/60
      open:animate-scale-in open:backdrop:animate-fade-in sm:p-[50px]"
    >
      <h5 className="mb-[10px] text-[24px] font-black leading-tight sm:text-[28px]">
        Завершение бронирования
      </h5>
      <form method="dialog" className="mx-auto max-w-[362px]">
        <p className="mb-[30px]">
          Для завершения бронирования введите реквизиты электронного билета. Они
          поступят в виде СМС на указанный номер телефона
        </p>
        <div className="mb-[30px] grid gap-[30px]">
          <Input
            variant="secondary"
            required
            placeholder="Реквизиты"
            name="req"
          />
          <div className="">
            <p className="mb-[10px] opacity-50">
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

        <Button type="submit" variant="secondary" size="md" class="w-full">
          Отправить
        </Button>
      </form>
    </dialog>
  )
}
