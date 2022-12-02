import MagIcon from '../icons/mag.svg?component'
import './Search.css'

export default function Search() {
  return (
    <form className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Поиск..."
        required
      />
      <button className="search__button">
        <MagIcon />
      </button>
    </form>
  )
}
