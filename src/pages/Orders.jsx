import Finder from '@/components/Finder'
import Intro from '@/components/Intro'
import OrderRepair from '@/components/OrderRepair'
import OrderSearch from '@/components/OrderSearch'

import './Orders.css'

export default function Orders() {
  return (
    <>
      <Intro concise title="Мои заказы" />
      <Finder />
      <div className="orders">
        <div className="container">
          <div className="orders__main">
            <div className="orders__left">
              <h2 className="orders__title title">Поиск заказа</h2>
              <OrderSearch />
            </div>
            <div className="orders__right">
              <h2 className="orders__subtitle">Найденные заказы:</h2>
              <div className="scrollbar orders__board">
                <div className="orders__content">
                  <div className="orders__head">
                    <span className="orders__head-cell">Время</span>
                    <span className="orders__head-cell">Маршрут</span>
                    <span className="orders__head-cell">Гос.номер</span>
                  </div>
                  <ul className="scrollbar orders__list">
                    {Array.from({ length: 6 }).map((_) => (
                      <li className="orders__item">
                        <span className="orders__item-cell">08:00</span>
                        <span className="orders__item-cell">
                          Улан-Удэ{' '}
                          <span className="orders__muted">(автовокзал)</span> —
                          Курумкан{' '}
                          <span className="orders__muted">(автовокзал)</span>
                        </span>
                        <span className="orders__item-cell">а123бв</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="orders__main">
            <div className="orders__left">
              <h2 className="orders__title title">Забыли номер заказа?</h2>
              <OrderRepair />
            </div>
            <div className="orders__right">
              <h2 className="orders__subtitle">Найденные заказы:</h2>
              <div className="scrollbar orders__board orders__board_other">
                <div className="orders__content">
                  <div className="orders__head">
                    <span className="orders__head-cell">Маршрут</span>
                    <span className="orders__head-cell">Дата</span>
                    <span className="orders__head-cell">Телефон</span>
                    <span className="orders__head-cell">Номер заказа</span>
                  </div>
                  <ul className="scrollbar orders__list">
                    {Array.from({ length: 6 }).map((_) => (
                      <li className="orders__item">
                        <span className="orders__item-cell">
                          Улан-Удэ{' '}
                          <span className="orders__muted">(автовокзал)</span> —
                          Курумкан{' '}
                          <span className="orders__muted">(автовокзал)</span>
                        </span>
                        <span className="orders__item-cell">12.02.2022</span>
                        <span className="orders__item-cell">
                          8 9051 123 45 67
                        </span>
                        <span className="orders__item-cell">1123456789</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
