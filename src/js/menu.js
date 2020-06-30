import { trapFocus, visibleLinks } from './helpers/trapFocus'

const header = document.querySelector('[data-header]')
const menuBtn = header.querySelector('[data-btn="menu"]')
const menuWrapper = header.querySelector('[data-menu-wrapper]')

const open = () => {
  const firstMenuLink = visibleLinks(menuWrapper)[0]

  menuWrapper.hidden = false
  menuBtn.setAttribute('aria-expanded', true)
  menuBtn.innerText = 'Close'
  firstMenuLink.focus()
}

const close = () => {
  menuWrapper.hidden = true
  menuBtn.setAttribute('aria-expanded', false)
  menuBtn.innerText = 'Menu'
}

const toggleMenu = (e) => {
  if (menuWrapper.hidden) {
    open()
  } else {
    close()
  }
}

const trapFocusInMenu = (e) => {
  trapFocus(e, header)

  /* if Esc key pressed */
  if (e.keyCode === 27) {
    close()
  }
}

const menu = () => {
  menuBtn.hidden = false
  menuWrapper.hidden = true
  menuWrapper.classList.add('js-menu')
  menuBtn.addEventListener('click', toggleMenu)
  menuWrapper.addEventListener('keydown', trapFocusInMenu)
}

export default menu
