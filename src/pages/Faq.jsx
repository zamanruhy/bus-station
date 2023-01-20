import Feedback from '@/components/Feedback'
import Finder from '@/components/Finder'
import Intro from '@/components/Intro'
import Pagination from '@/components/Pagination'

import './Faq.css'

export default function Faq() {
  return (
    <>
      <Intro concise title="Вопрос-ответ" />
      <Finder />
      <div className="faq">
        <div className="container">
          <div className="faq__layout">
            <div className="faq__main">
              <h2 className="faq__title title">
                Отзывы и предложения о работе автовокзала г.&nbsp;Улан-Удэ
              </h2>
              <div className="faq__item">
                <div className="faq__item-question">
                  <h3 className="faq__item-title">Кристина:</h3>
                  <p className="faq__item-text">
                    Не могу найти билеты от Горячинска до Улан-Удэ, подскажите
                    где купить если на сайте нет?
                  </p>
                  <time className="faq__item-date">14.11.2022 09:31</time>
                </div>
                <div className="faq__item-answer">
                  <h3 className="faq__item-title">Ответ:</h3>
                  <p className="faq__item-text">
                    Здравствуйте. Перевозчик отключил продажу билетов онлайн,
                    билеты можно приобрести только в кассе Горячинска.
                  </p>
                </div>
              </div>

              <div className="faq__item">
                <div className="faq__item-question">
                  <h3 className="faq__item-title">Александр:</h3>
                  <p className="faq__item-text">
                    Здравствуйте, купил билет онлайн, но понял, что взял
                    довольно много багажа. Что делать, если я не оплатил
                    дополнительное кол-во ручной клади?
                  </p>
                  <time className="faq__item-date">12.11.2022 23:49</time>
                </div>
                <div className="faq__item-answer">
                  <h3 className="faq__item-title">Ответ:</h3>
                  <p className="faq__item-text">
                    Здравствуйте. Можно рассчитаться с водителем при посадке в
                    автобус, но следует учитывать, что место в автобусе для
                    размещения вещей ограничено.
                  </p>
                </div>
              </div>

              <Pagination />
            </div>
            <aside className="faq__side">
              <div>
                <h3 className="mb-[35px] text-[20px] font-black">
                  Оставить отзыв или предложение
                </h3>
                <Feedback />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
