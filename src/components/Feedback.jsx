import Button from './Button'
import Checkbox from './Checkbox'
import Input from './Input'
import './Feedback.css'

export default function Feedback() {
  return (
    <form class="feedback">
      <div class="feedback__inner">
        <p className="feedback__text">
          Для того, чтобы оставить отзыв, заполните форму ниже. Обратите
          внимание, что поля отмеченные звёздочкой обязательны к заполнению
        </p>
        <Input
          class="mb-5"
          name="name"
          variant="secondary"
          placeholder="Имя*"
          required
        />
        <Input
          class="mb-5"
          name="phone"
          variant="secondary"
          placeholder="Телефон"
        />
        <Input
          class="mb-5"
          name="number"
          variant="secondary"
          placeholder="Номер заказа"
        />
        <Input
          class="mb-2.5"
          name="text"
          variant="secondary"
          placeholder="Текст отзыва*"
          multiline
          required
          rows="5"
        />
        <Checkbox
          class="xl:whitespace-nowrap"
          name="allow"
          label="Я согласен на обработку своих персональных данных"
        />
        <Button
          as="input"
          type="submit"
          class="feedback__button"
          size="md"
          variant="secondary"
          value="Отправить"
        />
      </div>
    </form>
  )
}
