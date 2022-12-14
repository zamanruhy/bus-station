import './Stops.css'

export default function Stops(props) {
  return (
    <section
      className="stops"
      classList={{ [props.className]: props.className }}
    >
      <div className="stops__main">
        {props.hasLegend && (
          <h4 className="stops__legend">Остановочные пункты</h4>
        )}
        <div className="stops__stack">
          <span className="stops__line" />

          <div className="stops__end">
            <div className="stops__end-mask" />
            <div className="">
              <span className="stops__end-city">
                <b>Кяхта</b>
              </span>
              <span className="stops__end-type">автовокзал</span>
            </div>
          </div>

          {Array.from({ length: 3 }).map((_, i) => (
            <div className="stops__item">
              <div className="">
                <span className="stops__item-city">Гусиноозерск</span>
                <span className="stops__item-type">на трассе кафе «Лотос»</span>
              </div>
              <span>08:29</span>
            </div>
          ))}

          <div className="stops__end">
            <div className="stops__end-mask" />
            <div className="">
              <span className="stops__end-city">
                <b>Улан-Удэ</b>
              </span>
              <span className="stops__end-type">автовокзал</span>
            </div>
            <b>10:30</b>
          </div>
        </div>
      </div>

      <div className="stops__side">
        <iframe
          className="stops__map"
          src="https://api-maps.yandex.ru/frame/v1/-/CVh7YBYg?lang=en_RU"
          frameborder="0"
        ></iframe>
      </div>
    </section>
  )
}
