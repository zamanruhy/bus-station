import Office from './Office'

import './Offices.css'

const tabs = [
  { name: 'г.Улан-Удэ' },
  { name: 'п. Аршан' },
  { name: 'c. Курумкан' },
  { name: 'с. Горячинск' },
  { name: 'с. Хоринск' },
  { name: 'г. Закаменск' },
  { name: 'г. Кяхта' }
]

export default function Offices() {
  return (
    <section id="offices" className="offices tabs">
      <h2 className="offices__title">Адреса и телефоны касс</h2>
      <div className="offices__grid">
        <div className="offices__side">
          <h3 className="offices__subtitle">Республика Бурятия</h3>
          <div className="" role="tablist">
            {tabs.map(({ name }, i) => (
              <button
                type="button"
                role="tab"
                className="offices__tab"
                classList={{ active: i === 0 }}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        {tabs.map((_, i) => (
          <div role="tabpanel" hidden={i !== 0}>
            <Office index={i} />
          </div>
        ))}
      </div>
    </section>
  )
}
