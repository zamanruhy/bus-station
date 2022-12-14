import './Attention.css'

export default function Attention(props) {
  return (
    <arcticle
      className="attention"
      classList={{
        [`attention_${props.variant}`]: Boolean(props.variant)
      }}
    >
      <div className="attention__pic">
        <props.Icon className="attention__icon" />
      </div>
      <div className="attention__text">{props.children}</div>
    </arcticle>
  )
}
