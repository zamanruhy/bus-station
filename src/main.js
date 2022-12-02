;(() => {
  const el = document.querySelector('.tabs')
  if (!el) return

  const tabEls = Array.from(el.querySelectorAll('[role="tab"]'))
  const panelEls = el.querySelectorAll('[role="tabpanel"]')

  tabEls.forEach((tabEl) => {
    tabEl.addEventListener('click', (e) => {
      const index = tabEls.indexOf(tabEl)
      tabEls.forEach((node) => node.setAttribute('aria-selected', 'false'))
      panelEls.forEach((node) => (node.hidden = true))
      tabEl.setAttribute('aria-selected', 'true')
      panelEls[index].hidden = false
      window.dispatchEvent(new CustomEvent('resize'))
    })
  })
})()
