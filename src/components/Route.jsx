import MoreIcon from '../icons/more.svg?component'
import './Route.css'

export default function Route() {
  return (
    <a className="route" href="#">
      <img
        className="route__img"
        src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
        alt="#"
        loading="lazy"
        decoding="async"
      />
      <div className="route__content">
        <h3 className="route__title">Улан-Удэ — Кяхта</h3>
        <p className="route__desc">Отправление с автовокзала</p>
        <div className="route__footer">
          <span className="route__price">от 1 500 ₽</span>
          <span className="route__more">
            Найти рейсы
            <MoreIcon />
          </span>
        </div>
      </div>
    </a>
  )
}
