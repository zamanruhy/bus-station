import Input from './Input'
import MagIcon from '../icons/mag.svg?component'
import CalendarIcon from '../icons/calendar.svg?component'
import Button from './Button'
import './Finder.css'

export default function Finder() {
  return (
    <section className="finder">
      <div className="container">
        <div className="finder__inner">
          <div className="finder__head">
            <a className="finder__tab finder__tab_active" href="#">
              <span>Республика Бурятия</span>
            </a>
            <a className="finder__tab" href="#">
              <span>Иркутская область</span>
            </a>
          </div>
          <form className="finder__content">
            <div className="finder__grid">
              <Input
                variant="primary"
                name="from"
                placeholder="Пункт отправки"
                icon={<MagIcon className="w-[18px]" />}
              />
              <Input
                variant="primary"
                name="to"
                placeholder="Пункт прибытия"
                icon={<MagIcon className="w-[18px]" />}
              />
              <Input
                variant="primary"
                name="date"
                placeholder="Дата"
                icon={<CalendarIcon className="w-[20px]" />}
              />
              <Button type="submit" variant="primary" size="md">
                Найти рейсы
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
