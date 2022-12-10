export default function Attention(props) {
  return (
    <arcticle
      className="attention rounded p-5"
      classList={{
        'bg-primary-lightest/[0.15] text-primary': props.variant === 'blue',
        'bg-[#fcc02a]/[0.15]': props.variant === 'yellow',
        'bg-[#ebebeb]/50': props.variant === 'gray'
      }}
    >
      <div className="mb-3">
        <props.Icon
          className="h-[35px]"
          classList={{
            'fill-primary': props.variant === 'blue',
            'fill-[#fcc02a]': props.variant === 'yellow',
            'fill-current': props.variant === 'gray'
          }}
        />
      </div>
      <div className="max-w-[80ch] [&_p+p]:mt-4">{props.children}</div>
    </arcticle>
  )
}
