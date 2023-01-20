import './Arrangement.css'

export default function Arrangement() {
  return (
    <div class="arrangement">
      <div className="arrangement__head">
        <div className="arrangement__legend">
          <div className="arrangement__legend-cell arrangement__free" />
          <span className="arrangement__legend-text">Свободно</span>
        </div>
        <div className="arrangement__legend">
          <div className="arrangement__legend-cell arrangement__selected" />
          <span className="arrangement__legend-text">Выбрано вами</span>
        </div>
        <div className="arrangement__legend">
          <div className="arrangement__legend-cell arrangement__busy" />
          <span className="arrangement__legend-text">Занято</span>
        </div>
      </div>

      <div className="arrangement__grid">
        <div className="arrangement__row">
          <div className="arrangement__cell arrangement__free">16</div>
          <div className="arrangement__cell"></div>
          <div className="arrangement__cell arrangement__selected">3</div>
          <div className="arrangement__cell arrangement__busy">6</div>
          <div className="arrangement__cell arrangement__free">9</div>
          <div className="arrangement__cell arrangement__free">12</div>
        </div>
        <div className="arrangement__row">
          <div className="arrangement__cell arrangement__free">17</div>
          <div className="arrangement__cell"></div>
          <div className="arrangement__cell"></div>
          <div className="arrangement__cell"></div>
          <div className="arrangement__cell"></div>
          <div className="arrangement__cell arrangement__busy">13</div>
        </div>
        <div className="arrangement__row">
          <div className="arrangement__cell"></div>
          <div className="arrangement__cell arrangement__free">2</div>
          <div className="arrangement__cell arrangement__busy">5</div>
          <div className="arrangement__cell arrangement__busy">8</div>
          <div className="arrangement__cell arrangement__free">11</div>
          <div className="arrangement__cell arrangement__free">14</div>
        </div>
        <div className="arrangement__row">
          <div className="arrangement__cell arrangement__busy">В</div>
          <div className="arrangement__cell arrangement__free">1</div>
          <div className="arrangement__cell arrangement__free">4</div>
          <div className="arrangement__cell arrangement__busy">7</div>
          <div className="arrangement__cell arrangement__free">10</div>
          <div className="arrangement__cell arrangement__free">15</div>
        </div>
      </div>
    </div>
  )
}
