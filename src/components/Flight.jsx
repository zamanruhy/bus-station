import CaretIcon from '../icons/caret.svg?component'
import bagImg from '../images/bag.jpg'
import dogImg from '../images/dog.jpg'
import Button from './Button'
import Stops from './Stops'

import './Flight.css'

export default function Flight(props) {
  return (
    <article
      className="flight"
      classList={{ [`flight_${props.variant}`]: Boolean(props.variant) }}
    >
      <div className="flight__inner">
        <div className="flight__main">
          <span className="flight__line" />
          <div className="flight__end">
            <div className="flight__end-date">Вт, 01 нояб</div>
            <div>
              <div className="flight__end-time">
                <div className="flight__end-mask" />
                07:00
              </div>
              <div className="flight__end-city">Кяхта</div>
              <div className="flight__end-type">автовокзал</div>
            </div>
          </div>
          <div className="flight__duration">3&nbsp;ч. 30&nbsp;мин.</div>
          <div className="flight__end">
            <div className="flight__end-date">Вт, 01 нояб</div>
            <div>
              <div className="flight__end-time">
                <div className="flight__end-mask" />
                10:30
              </div>
              <div className="flight__end-city">Улан-Удэ</div>
              <div className="flight__end-type">автовокзал</div>
            </div>
          </div>
        </div>

        <div className="flight__side">
          <div className="flight__group">
            <div className="flight__allowed">
              <img
                className="flight__allowed-img"
                src={bagImg}
                width="17"
                height="17"
                alt="#"
                loading="lazy"
                decoding="async"
              />
              <img
                className="flight__allowed-img"
                src={dogImg}
                width="17"
                height="17"
                alt="#"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flight__info">
              <div className="flight__info-car">Автобус</div>
              <div className="flight__info-seats">
                <div className="opacity-50">Мест: 15</div>
                <div className="">
                  {props.variant === 'seats' ? (
                    <>
                      <span className="opacity-50">Ваше место:</span>{' '}
                      <b>1, 2</b>
                    </>
                  ) : (
                    <>
                      <span className="opacity-50">Свободных:</span> 7
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flight__extra">
            <div className="flight__cost">
              573,00&nbsp;₽{' '}
              <span className="flight__muted">(серв.сбор 23,00&nbsp;₽)</span>
            </div>
            <div className="flight__slot">
              {props.variant === 'choice' && (
                <Button
                  class="flight__button"
                  as="a"
                  href="#"
                  variant="primary"
                  size="md"
                >
                  Выбрать
                </Button>
              )}
              {props.variant === 'seats' && (
                <>
                  Итого: <br />
                  1146,00&nbsp;₽{' '}
                  <span className="flight__muted">
                    (серв.сбор 46,00&nbsp;₽)
                  </span>
                </>
              )}
            </div>
            <span className="flight__benefits">Льгот нет</span>
          </div>
        </div>
      </div>
      <details className="flight__details">
        <summary className="flight__more">
          Остановочные пункты <CaretIcon className="flight__more-icon" />
        </summary>
        <Stops className="flight__stops" />
      </details>
    </article>
  )
}
