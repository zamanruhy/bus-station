import './Board.css'

export default function Board() {
  return (
    <section id="board" className="board">
      <h2 className="board__title">Информационное табло</h2>

      <div className="scrollbar board__inner">
        <div className="board__content">
          <div className="board__head">
            <span className="board__head-cell">Время</span>
            <span className="board__head-cell">Маршрут</span>
            <span className="board__head-cell">Гос.номер</span>
          </div>
          <ul className="scrollbar board__list">
            {Array.from({ length: 30 }).map((_) => (
              <li className="board__item">
                <span className="board__item-cell">08:00</span>
                <span className="board__item-cell">
                  Улан-Удэ <span className="board__muted">(автовокзал)</span> —
                  Курумкан <span className="board__muted">(автовокзал)</span>
                </span>
                <span className="board__item-cell">а123бв</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
