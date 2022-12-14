import Attention from '@/components/Attention'
import Finder from '@/components/Finder'
import Flight from '@/components/Flight'
import Intro from '@/components/Intro'
import Weekdays from '@/components/Weekdays'

import AttentionIcon from '../icons/attention.svg?component'
import GirlIcon from '../icons/girl.svg?component'
import LicenseIcon from '../icons/license.svg?component'

import './Choice.css'

export default function Choice() {
  return (
    <>
      <Intro concise title="Поиск рейса" />
      <Finder />
      <div className="choice">
        <div className="container">
          <h2 className="choice__title title">Выберите рейс</h2>
          <div className="choice__layout">
            <div className="choice__main">
              <div className="choice__headline">
                <h3 className="choice__headline-title">
                  Маршрут № 260 Кяхта — Улан-Удэ
                </h3>
                <span className="choice__headline-extra">
                  Ежедневный маршрут
                </span>
              </div>
              <Weekdays className="choice__weekdays" />
              <div className="choice__flights">
                <Flight variant="choice" />
                <Flight variant="choice" />
                <Flight variant="choice" />
                <Flight variant="choice" />
                <Flight variant="choice" />
              </div>
            </div>
            <aside className="choice__side">
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
