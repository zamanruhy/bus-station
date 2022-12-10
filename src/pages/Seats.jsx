import Attention from '@/components/Attention'
import Finder from '@/components/Finder'
import Flight from '@/components/Flight'
import Intro from '@/components/Intro'
import Input from '@/components/Input'

import AttentionIcon from '../icons/attention.svg?component'
import GirlIcon from '../icons/girl.svg?component'
import LicenseIcon from '../icons/license.svg?component'
import BagIcon from '../icons/bag.svg?component'

import Radio from '@/components/Radio'
import Select from '@/components/Select'
import Button from '@/components/Button'

export default function Seats() {
  return (
    <>
      <Intro concise title="Бронь" />
      <Finder />
      <div className="booking pt-[60px] pb-[100px]">
        <div className="container">
          <h2 className="mb-[40px] max-w-[57ch] text-[26px] font-black uppercase md:mb-[50px] md:text-[28px]">
            Ваши места
          </h2>
          <div className="grid grid-cols-1 gap-x-[30px] gap-y-[60px] lg:grid-cols-[minmax(0,1fr)_26%] xl:gap-x-[50px]">
            <div className="">
              <div className="mb-[40px] flex flex-wrap items-center justify-between gap-x-[30px] gap-y-3 md:mb-[50px]">
                <h3 className="text-[20px] font-semibold">
                  Маршрут № 260 Кяхта — Улан-Удэ, 01.11.2022, 07:00
                </h3>
              </div>
              <Flight variant="seats" />
            </div>
            <aside className="grid content-start items-start gap-[30px]">
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
