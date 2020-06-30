const visibleLinks = (parentEl) => {
  return [
    ...parentEl.querySelectorAll(
      'a[href]:not([disabled]), button:not([disabled]'
    ),
  ].filter((el) => {
    return getComputedStyle(el).getPropertyValue('display') !== 'none'
  })
}

const trapFocus = (e, parentEl) => {
  const links = visibleLinks(parentEl)
  const lastFocusableEl = links[links.length - 1]
  const firstFocusableEl = links[0]
  const tabIsPressed = e.keyCode === 9 || e.key === 'Tab'

  if (!tabIsPressed) return

  if (e.shiftKey === true) {
    if (document.activeElement === firstFocusableEl) {
      lastFocusableEl.focus()
      e.preventDefault()
    }
  } else {
    if (document.activeElement === lastFocusableEl) {
      firstFocusableEl.focus()
      e.preventDefault()
    }
  }
}

export { trapFocus, visibleLinks }
