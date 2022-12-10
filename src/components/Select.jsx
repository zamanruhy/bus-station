import { splitProps } from 'solid-js'
import CaretIcon from '../icons/caret.svg?component'
import './Select.css'

export default function Select(props) {
  const [, rest] = splitProps(props, [
    'class',
    'variant',
    'placeholder',
    'items'
  ])

  return (
    <div
      className="select"
      classList={{
        [props.class]: Boolean(props.class),
        [`select_${props.variant}`]: Boolean(props.variant)
      }}
    >
      <select className="select__input" type="text" {...rest}>
        <option value="" disabled selected hidden>
          {props.placeholder}
        </option>
        {(props.items || []).map(({ value, text }) => (
          <option value={value}>{text}</option>
        ))}
      </select>
      <span className="select__addon">
        <CaretIcon />
      </span>
    </div>
  )
}
