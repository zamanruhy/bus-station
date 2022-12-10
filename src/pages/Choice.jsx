import Attention from '@/components/Attention'
import Finder from '@/components/Finder'
import Flight from '@/components/Flight'
import Intro from '@/components/Intro'
import Weekdays from '@/components/Weekdays'

import AttentionIcon from '../icons/attention.svg?component'
import GirlIcon from '../icons/girl.svg?component'
import LicenseIcon from '../icons/license.svg?component'

export default function Choice() {
  return (
    <>
      <Intro concise title="Поиск рейса" />
      <Finder />
      <div className="choice pt-[60px] pb-[100px]">
        <div className="container">
          <h2 className="mb-[40px] max-w-[57ch] text-[26px] font-black uppercase md:mb-[50px] md:text-[28px]">
            Выберите рейс
          </h2>
          <div className="grid grid-cols-1 gap-x-[30px] gap-y-[60px] lg:grid-cols-[minmax(0,1fr)_26%] xl:gap-x-[50px]">
            <div className="">
              <div className="mb-[40px] flex flex-wrap items-center justify-between gap-x-[30px] gap-y-3 md:mb-[50px]">
                <h3 className="text-[20px] font-semibold">
                  Маршрут № 260 Кяхта — Улан-Удэ
                </h3>
                <span className="text-[14px] opacity-50">
                  Ежедневный маршрут
                </span>
              </div>
              <Weekdays className="mb-[35px]" />
              <div className="grid gap-[30px]">
                <Flight variant="choice" />
                <Flight variant="choice" />
                <Flight variant="choice" />
                <Flight variant="choice" />
                <Flight variant="choice" />
              </div>
            </div>
            <aside className="grid content-start items-start gap-[30px]">
              <Attention Icon={AttentionIcon} variant="blue">
                <p>В одном заказе вы можете выбрать до 4-х мест</p>
                <p>
                  Перевозка детей производится только в сопровождении взрослых
                </p>
              </Attention>
              <Attention Icon={GirlIcon} variant="yellow">
                <p>
                  Приобретая детский билет, будьте готовы по первому требованию
                  предоставить водителю документ, подтверждающий возраст ребeнка
                  (свидетельство о рождении)
                </p>
              </Attention>
              <Attention Icon={LicenseIcon} variant="gray">
                <p>Указывать персональные данные необязательно.</p>
                <p>
                  Но если вам требуется предоставить билет для отчётности в
                  организацию, рекомендуем указать их
                </p>
              </Attention>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
