import Route from './Route'
import './Populars.css'

export default function Populars() {
  return (
    <section className="populars">
      <h2 className="populars__title">Популярные направления</h2>
      <div className="populars__grid">
        <div className="populars__main">
          <Route />
          <Route />
          <Route />
          <Route />
        </div>
        <div>
          <ul className="populars__list">
            <li className="populars__list-item">
              Улан-Удэ <span className="populars__muted">(автовокзал)</span> —
              Кяхта <span className="populars__muted">(автовокзал)</span>
            </li>
            <li className="populars__list-item">
              Улан-Удэ <span className="populars__muted">(автовокзал)</span> —
              Петропавловка
            </li>
            <li className="populars__list-item">
              Кяхта <span className="populars__muted">(автовокзал)</span> —
              Улан-Удэ <span className="populars__muted">(автовокзал)</span>
            </li>
            <li className="populars__list-item populars__list-item_active">
              Улан-Удэ <span className="populars__muted">(автовокзал)</span> —
              Хоринск <span className="populars__muted">(автовокзал)</span>
            </li>
            <li className="populars__list-item">
              Улан-Удэ <span className="populars__muted">(автовокзал)</span>—
              Усть-Баргузин
            </li>
            <li className="populars__list-item">
              Улан-Удэ <span className="populars__muted">(автовокзал)</span> —
              Бичура <span className="populars__muted">(автовокзал)</span>
            </li>
          </ul>
          <hr className="populars__divider" />
          <ul className="populars__list">
            <li className="populars__list-item">
              Улан-Удэ <span className="populars__muted">(автовокзал)</span> —
              Баргузин
            </li>
            <li className="populars__list-item">
              Улан-Удэ <span className="populars__muted">(автовокзал)</span> —
              Курумкан <span className="populars__muted">(автовокзал)</span>
            </li>
            <li className="populars__list-item">
              Улан-Удэ <span className="populars__muted">(автовокзал)</span> —
              Мухоршибирь
            </li>
            <li className="populars__list-item">
              Улан-Удэ <span className="populars__muted">(автовокзал)</span> —
              Горячинск
            </li>
            <li className="populars__list-item">
              Улан-Удэ <span className="populars__muted">(автовокзал)</span> —
              Закаменск <span className="populars__muted">(автокасса)</span>
            </li>
            <li className="populars__list-item">
              Усть-Баргузин — Улан-Удэ{' '}
              <span className="populars__muted">(автовокзал)</span>
            </li>
          </ul>
          <hr className="populars__divider" />
          <ul className="populars__list">
            <li className="populars__list-item">
              Аршан <span className="populars__muted">(автостанция)</span> —
              Иркутск <span className="populars__muted">(автовокзал)</span>
            </li>
            <li className="populars__list-item">
              Улан-Удэ <span className="populars__muted">(автовокзал)</span> —
              Баянгол
            </li>
            <li className="populars__list-item">
              Улан-Удэ <span className="populars__muted">(автовокзал)</span> —
              Саган-Нур{' '}
              <span className="populars__muted">(маг. «Фламинго»)</span>
            </li>
            <li className="populars__list-item">
              Нилова Пустынь{' '}
              <span className="populars__muted">(п/т «Энергетик»)</span> —
              Иркутск
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
