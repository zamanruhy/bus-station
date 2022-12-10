import { splitProps } from 'solid-js'

import './Radio.css'

export default function Radio(props) {
  const [, rest] = splitProps(props, ['class', 'classList', 'style', 'label'])

  return (
    <label
      class="radio"
      classList={{
        [props.class]: Boolean(props.class),
        ...props.classList
      }}
      style={props.style}
    >
      <input className="radio__input" type="radio" {...rest} />
      <span className="radio__box" aria-hidden="true" />
      {props.label && <span className="radio__label">{props.label}</span>}
    </label>
  )
}
