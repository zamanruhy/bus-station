import Button from './Button'
import Checkbox from './Checkbox'
import Input from './Input'
import './OrderSearch.css'

export default function OrderSearch() {
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
          name="allow"
          label="Я согласен на обработку своих персональных данных"
        />
        <Button
          as="input"
          type="submit"
          class="order-search__button"
          size="md"
          variant="secondary"
          value="Найти"
        />
      </div>
    </form>
  )
}
