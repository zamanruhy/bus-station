import Button from '@/components/Button'
import Finder from '@/components/Finder'
import Intro from '@/components/Intro'
import Stops from '@/components/Stops'
import Weekdays from '@/components/Weekdays'

import './Schedule.css'

export default function Schedule() {
  return (
    <>
      <Intro concise title="Расписание рейсов" />
      <Finder />
      <div className="schedule">
        <div className="container">
          <h2 className="schedule__title title">
            Расписание и карта междугородних автобусов Республики Бурятия
          </h2>
          <div className="schedule__layout">
            <aside className="schedule__side">
              <h3 className="schedule__side-title">Выберите маршрут</h3>
              <div className="schedule__side-table">
                <div className="schedule__side-head">
                  <span className="schedule__side-cell">№</span>
                  <span className="schedule__side-cell">Маршрут</span>
                </div>
                <div className="scrollbar schedule__side-content">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <>
                      <a
                        href="#"
                        className="schedule__side-item"
                        classList={{ active: i === 1 }}
                      >
                        <span className="schedule__side-item-cell">010</span>
                        <span className="schedule__side-item-cell">
                          Кяхта — Наушки
                        </span>
                      </a>
                      <a href="#" className="schedule__side-item">
                        <span className="schedule__side-item-cell">
                          301/ 302
                        </span>
                        <span className="schedule__side-item-cell">
                          Улан-Удэ — Максимиха — Усть-Баргузин
                        </span>
                      </a>
                    </>
                  ))}
                </div>
              </div>
            </aside>
            <div className="">
              <div className="schedule__headline">
                <h3 className="schedule__headline-title">
                  Маршрут № 260 Кяхта — Улан-Удэ
                </h3>
                <span className="schedule__headline-extra">
                  Ежедневный маршрут
                </span>
              </div>
              <Weekdays className="schedule__weekdays" />
              <div className="schedule__date">
                <div className="">
                  <h4 className="schedule__date-subtitle">Дата</h4>
                  <time className="schedule__date-self">01.11.2022</time>
                </div>
                <div className="">
                  <h4 className="schedule__date-subtitle">Время отправления</h4>
                  <div className="schedule__date-times">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <a
                        href="#"
                        className="schedule__date-time"
                        classList={{ active: i === 1 }}
                      >
                        07:00
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <Stops hasLegend />
              <div className="schedule__footer">
                <span className="schedule__suminfo">
                  Маршрут № 260 Кяхта — Улан-Удэ, 01.11.2022, 08:00
                </span>
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  size="md"
                  class="schedule__button"
                >
                  Выбрать
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
