import { splitProps, mergeProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import './Button.css'

export default function Button(props) {
  props = mergeProps({ as: 'button' }, props)
  const [, rest] = splitProps(props, [
    'class',
    'classList',
    'as',
    'variant',
    'size',
    'children',
    'href'
  ])

  return (
    <>
      {props.as === 'input' ? (
        <input
          class="button"
          classList={{
            [`button_${props.variant}`]: Boolean(props.variant),
            [`button_${props.size}`]: Boolean(props.size),
            [props.class]: Boolean(props.class),
            ...props.classList
          }}
          {...rest}
        />
      ) : (
        <Dynamic
          component={props.as}
          class="button"
          classList={{
            [`button_${props.variant}`]: Boolean(props.variant),
            [`button_${props.size}`]: Boolean(props.size),
            [props.class]: Boolean(props.class),
            ...props.classList
          }}
          href={props.href}
          {...rest}
          children={props.children}
        />
      )}
    </>
  )
}
