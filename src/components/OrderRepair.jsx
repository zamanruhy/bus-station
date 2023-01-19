import Button from './Button'
import Checkbox from './Checkbox'
import Input from './Input'
import './OrderRepair.css'

export default function OrderRepair() {
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
          name="allow"
          label="Я согласен на обработку своих персональных данных"
        />
        <Button
          as="input"
          type="submit"
          class="order-repair__button"
          size="md"
          variant="secondary"
          value="Восстановить"
        />
      </div>
    </form>
  )
}
