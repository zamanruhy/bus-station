import { splitProps } from 'solid-js'
import CheckIcon from '../icons/check.svg?component'

export default function Checkbox(props) {
  const [, rest] = splitProps(props, ['class', 'classList', 'style', 'label'])

  return (
    <label
      class="relative isolate flex w-fit cursor-pointer select-none items-center"
      classList={{
        [props.class]: Boolean(props.class),
        ...props.classList
      }}
      style={props.style}
    >
      <input class="peer sr-only" type="checkbox" {...rest} />
      <span
        class="relative flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-[1px] bg-white"
        aria-hidden="true"
      >
        <CheckIcon className="hidden w-[9px] text-[#323232] [input:checked~*>&]:block" />
      </span>
      {props.label && <span class="ml-[8px] text-[10px]">{props.label}</span>}
    </label>
  )
}
