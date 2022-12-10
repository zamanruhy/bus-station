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
          <div className="finder__head scrollbar-thin">
            <a className="finder__tab active" href="#">
              <span>Республика Бурятия</span>
            </a>
            {Array.from({ length: 1 }).map((_) => (
              <a className="finder__tab" href="#">
                <span>Иркутская область</span>
              </a>
            ))}
          </div>
          <form className="finder__form">
            <div className="finder__grid">
              <Input
                variant="primary"
                name="from"
                required
                placeholder="Пункт отправки"
                icon={<MagIcon className="w-[18px]" />}
              />
              <Input
                variant="primary"
                name="to"
                required
                placeholder="Пункт прибытия"
                icon={<MagIcon className="w-[18px]" />}
              />
              <Input
                variant="primary"
                name="date"
                required
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
