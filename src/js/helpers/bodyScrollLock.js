const bodyScrollLock = (expanded) => {
  let scrollY = document.body.style.top

  if (expanded) {
    document.body.style.top = `-${window.scrollY}px`
    document.body.style.position = 'fixed'
  } else {
    document.body.style.position = ''
    document.body.style.top = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }
}

export default bodyScrollLock
