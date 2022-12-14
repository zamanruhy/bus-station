import Attention from '@/components/Attention'
import Finder from '@/components/Finder'
import Flight from '@/components/Flight'
import Intro from '@/components/Intro'

import LicenseIcon from '../icons/license.svg?component'
import BagIcon from '../icons/bag.svg?component'

import './Seats.css'

export default function Seats() {
  return (
    <>
      <Intro concise title="Бронь" />
      <Finder />
      <div className="seats">
        <div className="container">
          <h2 className="seats__title title">Ваши места</h2>
          <div className="seats__layout">
            <div className="seats__main">
              <div className="seats__headline">
                <h3 className="seats__headline-title">
                  Маршрут № 260 Кяхта — Улан-Удэ, 01.11.2022, 07:00
                </h3>
              </div>
              <Flight variant="seats" />
            </div>
            <aside className="seats__side">
              <Attention Icon={BagIcon} variant="blue">
                <p>
                  На одном пассажирском месте БЕСПЛАТНО можно провезти 1 сумку
                  (пакет, коробку, рюкзак и т.п.) размером не более 120 см
                  (сумма длины, ширины и высоты) либо одну пару лыж в чехле,
                  детские санки, детскую коляску. Каждое ДОПОЛНИТЕЛЬНОЕ место
                  ручной клади провозится по согласованию с водителем ЗА ПЛАТУ.
                  Запрещается размещение ручной клади на пассажирских местах и в
                  проходах, если такое размещение будет препятствовать проходу
                  пассажиров
                </p>
              </Attention>
              <Attention Icon={LicenseIcon} variant="gray">
                <p>
                  Данные билеты являются электронными. Для посадки в автобус
                  распечатывать билеты не требуется. В случае необходимости вы
                  можете получить печатный вариант билетов на бланке строгой
                  отчетности в кассах автовокзала г. Улан-Удэ
                </p>
              </Attention>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
