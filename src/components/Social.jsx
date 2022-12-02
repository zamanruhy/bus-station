import TmIcon from '../icons/tm.svg?component'
import WaIcon from '../icons/wa.svg?component'
import './Social.css'

export default function Social(props) {
  return (
    <ul
      className="social"
      classList={{ [props.className]: Boolean(props.className) }}
    >
      <li>
        <a href="#" className="social__link" aria-label="Telegram">
          <TmIcon className="social__icon right-px top-px" aria-hidden />
        </a>
      </li>
      <li>
        <a href="#" className="social__link" aria-label="Whatsapp">
          <WaIcon className="social__icon left-px" aria-hidden />
        </a>
      </li>
    </ul>
  )
}
