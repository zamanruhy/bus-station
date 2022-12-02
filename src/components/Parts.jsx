import StarIcon from '../icons/star.svg?component'
import ScheduleIcon from '../icons/schedule.svg?component'
import ConfirmedIcon from '../icons/confirmed.svg?component'
import './Parts.css'

const items = [
  {
    Icon: StarIcon,
    name: 'Мои заказы',
    text: 'Поиск заказанных (забронированных) мест на автобусные рейсы',
    href: '#'
  },
  {
    Icon: ScheduleIcon,
    name: 'Раписание рейсов',
    text: 'Расписание и карта междугородних автобусов Республики Бурятия',
    href: '#'
  },
  {
    Icon: ConfirmedIcon,
    name: 'Оплата',
    text: 'Инструкция и способы оплаты, с помощью карт, терминалов и отделений банков',
    href: '#'
  }
]

export default function Parts() {
  return (
    <section className="parts">
      {items.map(({ Icon, name, text, href }) => (
        <a href={href} className="parts__item">
          <div className="parts__item-head">
            <Icon className="parts__item-icon" />
            <h2 className="parts__item-title">{name}</h2>
          </div>
          <p>{text}</p>
        </a>
      ))}
    </section>
  )
}
