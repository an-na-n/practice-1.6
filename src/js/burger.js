let burgerMenu = document.querySelector('.navigation')
let burgerOverlay = document.querySelector('.navigation__overlay')
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

window.addEventListener('click', function (evt) {
  if (evt.target === burgerOverlay) {
    burgerMenu.style.display = 'none'
    document.body.classList.remove('no-scroll')
    isMenuOpen = false
  }
})

window.addEventListener('resize', function () {
  if (window.innerWidth >= 1366) {
    burgerMenu.style.display = 'block'
  } else if (window.innerWidth < 1366) {
    burgerMenu.style.display = 'none'
  }
})
