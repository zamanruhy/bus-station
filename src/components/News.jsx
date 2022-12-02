import MoreIcon from '../icons/more.svg?component'
import './News.css'

export default function News(props) {
  return (
    <a href="#" className="news" classList={{ news_main: props.main }}>
      {props.src && (
        <img
          className="news__img"
          src={props.src}
          alt="#"
          loading="lazy"
          decoding="async"
        />
      )}
      <time className="news__date">25.06.2021</time>
      <h3 className="news__title">
        О мерах по борьбе с коронави-русной инфекцией в Республике Бурятия
      </h3>
      <p className="news__text">
        В соответствии с дополнениями в Указ главы Бурятии о мерах по борьбе с
        коронавирусной инфекцией, в период нерабочих недель с 27 июня по 11
        июля, лицам, находящимся на территории Бурятии...
      </p>
      <div className="news__footer">
        <span className="news__more">
          Читать все
          <MoreIcon />
        </span>
      </div>
    </a>
  )
}
