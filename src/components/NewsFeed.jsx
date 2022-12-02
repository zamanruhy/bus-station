import CaretRightIcon from '../icons/caret-right.svg?component'
import News from './News'
import './NewsFeed.css'

export default function NewsFeed() {
  return (
    <section className="news-feed">
      <h2 className="news-feed__title">Новости</h2>
      <div className="news-feed__items">
        <News
          main
          src="https://images.unsplash.com/photo-1503694978374-8a2fa686963a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
        />
        <News />
        <News src="https://images.unsplash.com/photo-1503694978374-8a2fa686963a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" />
      </div>
      <div className="news-feed__footer">
        <a href="#" className="news-feed__more">
          Все новости
          <CaretRightIcon />
        </a>
      </div>
    </section>
  )
}
