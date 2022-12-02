import './Office.css'

export default function Office(props) {
  return (
    <article className="office">
      <h3 className="office__title">
        Автовокзал г.Улан-Удэ «Байкал {props.index + 1}»
      </h3>
      <p className="office__text">
        Здесь вы можете приобрести билеты на все рейсы проходящие через
        Автовокзал г. Улан-Удэ и оформить возврат
      </p>
      <dl className="office__spec">
        <dt className="office__spec-t">Адрес:</dt>
        <dd className="office__spec-d">г. Улан-Удэ, ул. Советская, 1Б</dd>
        <dt className="office__spec-t">Режим работы:</dt>
        <dd className="office__spec-d">с 07:00 до 19:00</dd>
        <dt className="office__spec-t">Бронирование:</dt>
        <dd className="office__spec-d">
          +7 950 383-55-55 (ежедневно с 8:00 до 20:00)
        </dd>
        <dt className="office__spec-t">Справочная служба:</dt>
        <dd className="office__spec-d">
          +7 3012 71-77-17 (ежедневно с 7:00 до 19:00)
        </dd>
      </dl>
      <div className="office__imgs">
        {Array.from({ length: 2 }).map((_) => (
          <img
            className="office__img"
            src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
            alt="#"
          />
        ))}
      </div>
    </article>
  )
}
