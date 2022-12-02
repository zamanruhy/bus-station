import { renderToString } from 'solid-js/web'
// import { renderTags, MetaProvider } from 'solid-meta'
import { Router } from '@solidjs/router'
import App from './App'
import { Meta } from './components/Layout'

export function render(url) {
  // const tags = []
  let body = renderToString(() => (
    <Router url={url}>
      {/* <MetaProvider tags={tags}> */}
      <App />
      {/* </MetaProvider> */}
    </Router>
  ))
  // body = body.replace(/data-hk=".+?"/g, '')
  const head = renderToString(Meta)
  return { head, body }
}
