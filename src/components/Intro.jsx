import Image from './Image'
import introImg from '../images/intro.jpg?jpg'
import Social from './Social'
import './Intro.css'

export default function Intro(props) {
  return (
    <section className="intro" classList={{ [`intro_concise`]: props.concise }}>
      <Image
        src={introImg}
        alt="Intro"
        className="intro__img"
        fetchpriority="high"
      />
      <div className="container">
        <div className="intro__inner">
          <div className="intro__content">
            <h1 className="intro__title">
              {props.title ?? 'Сервис Автовокзал-Онлайн.РФ'}
            </h1>
            {!props.concise && (
              <p className="intro__text">
                Узнайте расписание, заброниронируйте и купите билеты в режиме
                online на автобусные рейсы, проходящие по территории Республики
                Бурятия и Иркутской области
              </p>
            )}
          </div>
          <Social className="intro__social" />
        </div>
      </div>
    </section>
  )
}

// h-[426px]
