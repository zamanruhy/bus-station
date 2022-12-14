import PrevIcon from '../icons/prev.svg?component'
import NextIcon from '../icons/next.svg?component'
import EmblaCarousel from 'embla-carousel'
import { onMount } from 'solid-js'
import './Weekdays.css'

function script() {
  const els = Array.from(document.querySelectorAll('.weekdays'))
  if (!els.length) return

  els.forEach((el) => {
    const sliderEl = el.querySelector('.weekdays__viewport')
    const prevEl = el.querySelector('.weekdays__prev')
    const nextEl = el.querySelector('.weekdays__next')
    const itemEls = Array.from(el.querySelectorAll('.weekdays__item'))
    const activeIndex = itemEls.findIndex((item) =>
      item.classList.contains('active')
    )
    const options = {
      loop: false,
      containScroll: 'trimSnaps',
      align: 'start',
      slidesToScroll: 1,
      speed: 20,
      skipSnaps: true,
      startIndex: activeIndex,
      breakpoints: {
        '(min-width: 640px)': {
          slidesToScroll: 2,
          startIndex: Math.ceil((activeIndex + 1) / 2) - 1
        },
        '(min-width: 768px)': {
          slidesToScroll: 4,
          startIndex: Math.ceil((activeIndex + 1) / 4) - 1
        }
      }
    }

    const embla = EmblaCarousel(sliderEl, options)

    function update() {
      prevEl.disabled = !embla.canScrollPrev()
      nextEl.disabled = !embla.canScrollNext()
    }

    embla.on('select', update)
    embla.on('init', update)

    prevEl.addEventListener('click', (e) => embla.scrollPrev())
    nextEl.addEventListener('click', (e) => embla.scrollNext())
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Weekdays(props) {
  onMount(script)
  return (
    <div
      className="weekdays"
      classList={{ [props.className]: Boolean(props.className) }}
    >
      <div className="weekdays__inner">
        <button className="weekdays__prev">
          <PrevIcon />
        </button>
        <button className="weekdays__next">
          <NextIcon />
        </button>
        <div className="weekdays__viewport">
          <ul className="weekdays__container">
            {Array.from({ length: 10 }).map((_, i) => (
              <li className="weekdays__item" classList={{ active: i === 5 }}>
                <a href="#" className="weekdays__link">
                  Понедельник
                  <br />
                  31.10.2022
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
