import { onMount } from 'solid-js'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox.css'

import './Gallery.css'

function script() {
  const els = Array.from(document.querySelectorAll('.gallery'))
  if (!els.length) return

  els.forEach((el) => {
    const imgEl = el.querySelector('.gallery__img')
    const linkEl = el.querySelector('.gallery__link')
    const miniEls = Array.from(el.querySelectorAll('.gallery__mini'))
    let startIndex = 0

    miniEls.forEach((miniEl, i) => {
      miniEl.addEventListener('click', (e) => {
        e.preventDefault()
        imgEl.src = ''
        imgEl.src = miniEl.href
        startIndex = i
      })
    })

    const gallery = miniEls.map((miniEl) => ({
      src: miniEl.href,
      thumb: miniEl.firstElementChild.src
    }))

    linkEl.addEventListener('click', (e) => {
      e.preventDefault()
      Fancybox.show(gallery, {
        startIndex
      })
    })
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

const images = [
  {
    src: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    thumb:
      'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
  },
  {
    src: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    thumb:
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
  },
  {
    src: 'https://images.unsplash.com/photo-1520442922418-8211a6fe605c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    thumb:
      'https://images.unsplash.com/photo-1520442922418-8211a6fe605c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
  }
]

export default function Gallery() {
  onMount(script)
  return (
    <article className="gallery">
      <a href="#" className="gallery__link">
        <img
          className="gallery__img"
          src="https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&q=80"
          alt="#"
          loading="lazy"
          decoding="async"
        />
      </a>
      <div className="gallery__minis">
        {images.map(({ src, thumb }) => (
          <a href={src} className="gallery__mini">
            <img
              className="gallery__mini-img"
              src={thumb}
              alt="#"
              loading="lazy"
              decoding="async"
            />
          </a>
        ))}
      </div>
    </article>
  )
}
