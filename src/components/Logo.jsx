import Image from './Image'
import logoImg from '../images/logo.jpg?format=jpg'
import './Logo.css'

export default function Logo(props) {
  return (
    <a
      className="logo"
      classList={{ [props.className]: Boolean(props.className) }}
      href="."
    >
      <Image src={logoImg} className="logo__img" alt="Logo" />
    </a>
  )
}
