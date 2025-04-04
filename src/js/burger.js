let burgerMenu = document.querySelector('.navigation')
let menuOpenBtn = document.querySelector('.header__burger')
let menuCloseBtn = document.querySelector('.navigation__button--close')
let isMenuOpen = false

menuOpenBtn.addEventListener('click', function () {
  if (!isMenuOpen) {
    burgerMenu.style.display = 'block'
    document.body.classList.add('no-scroll')
    isMenuOpen = true
  }
})

menuCloseBtn.addEventListener('click', function () {
  if (isMenuOpen) {
    burgerMenu.style.display = 'none'
    document.body.classList.remove('no-scroll')
    isMenuOpen = false
  }
})
