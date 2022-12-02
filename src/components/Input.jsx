import { splitProps } from 'solid-js'
import './Input.css'

export default function Input(props) {
  const [, rest] = splitProps(props, ['class', 'variant', 'icon'])

  return (
    <div
      className="input"
      classList={{
        [props.class]: Boolean(props.class),
        [`input_${props.variant}`]: Boolean(props.variant),
        'input_has-icon': Boolean(props.icon)
      }}
    >
      <input class="input__input" type="text" {...rest} />
      {props.icon && <span className="input__addon">{props.icon}</span>}
    </div>
  )
}
