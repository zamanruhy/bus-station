import CaretIcon from '../icons/caret.svg?component'
import './Questions.css'

export default function Questions() {
  return (
    <section id="questions" className="questions">
      <h2 className="questions__title">полезная информация</h2>
      <div className="questions__content">
        {Array.from({ length: 7 }).map((_) => (
          <details className="questions__item">
            <summary className="questions__head">
              Как предъявить контроллеру (водителю) электронный билет?
              <CaretIcon className="questions__icon" />
            </summary>
            <div className="questions__body">
              <p className="">
                В автобусах малой вместимости отсеки для размещения ручной клади
                либо небольшие либо отсутствуют, что не позволяет провозить
                крупногабаритные вещи, в том числе велосипеды. В автобусах,
                имеющих багажные отсеки, можно провозить вещи, сумма габаритных
                размеров (длина + ширина + высота) которых не превышает 180 см.
                Таким образом, для провоза велосипеда в автобусе он должен быть
                в разобранном виде и не загрязнять транспортное средство или
                вещи других пассажиров.
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
