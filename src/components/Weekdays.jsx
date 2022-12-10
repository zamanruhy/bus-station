import PrevIcon from '../icons/prev.svg?component'
import NextIcon from '../icons/next.svg?component'
import EmblaCarousel from 'embla-carousel'
import { onMount } from 'solid-js'

function script() {
  const els = Array.from(document.querySelectorAll('[data-weekdays]'))
  if (!els.length) return

  els.forEach((el) => {
    const sliderEl = el.querySelector('[data-slider]')
    const prevEl = el.querySelector('[data-prev]')
    const nextEl = el.querySelector('[data-next]')
    const itemEls = Array.from(el.querySelectorAll('.item'))
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
      data-weekdays
    >
      <div className="flex">
        <button
          className="flex w-[25px] shrink-0 items-center justify-center rounded pr-[10px] disabled:opacity-50"
          data-prev
        >
          <PrevIcon className="h-3 fill-current" />
        </button>
        <button
          className="order-last flex w-[25px] shrink-0 items-center justify-center rounded pl-[10px] disabled:opacity-50"
          data-next
        >
          <NextIcon className="h-3 fill-current" />
        </button>
        <div className="grow overflow-hidden" data-slider>
          <ul className="-ml-5 flex select-none">
            {Array.from({ length: 10 }).map((_, i) => (
              <li
                className="item flex w-full shrink-0 pl-5 sm:w-1/2 md:w-1/4"
                classList={{ active: i === 5 }}
              >
                <a
                  href="#"
                  className="w-full rounded border border-[#323232]/10 p-1 text-center text-[#323232]/50 transition hover:border-[#323232]/30 hover:text-[#323232]/90 [.active>&]:border-[#323232] [.active>&]:text-[#323232]"
                >
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
