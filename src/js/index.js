import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
Swiper.use([Pagination])

import '../scss/style.scss'

// init Swiper:
const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  direction: 'horizontal',
  loop: false,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  }
})

let burgerMenu = document.querySelector('.navigation')
let menuOpenBtn = document.querySelector('.header__burger')
let menuCloseBtn = document.querySelector('.navigation__button--close')
let call = document.querySelector('.call')
let callOpenBtn = document.querySelector('.navigation__button--call')
let callCloseBtn = document.querySelector('.call__button--close')
let feedback = document.querySelector('.feedback')
let feedbackOpenBtn = document.querySelector('.navigation__button--chat')
let feedbackCloseBtn = document.querySelector('.feedback__button--close')
let isMenuOpen = false
let isCallOpen = false
let isFeedbackOpen = false

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

callOpenBtn.addEventListener('click', function () {
  if ((isMenuOpen && !isCallOpen) || (!isMenuOpen && !isCallOpen)) {
    call.style.display = 'block'
    document.body.classList.add('no-scroll')
    isCallOpen = true
  }
})

callCloseBtn.addEventListener('click', function () {
  if (isCallOpen) {
    call.style.display = 'none'
    document.body.classList.remove('no-scroll')
    isCallOpen = false
  }
})

feedbackOpenBtn.addEventListener('click', function () {
  if (!isFeedbackOpen) {
    feedback.style.display = 'block'
    document.body.classList.add('no-scroll')
    isFeedbackOpen = true
  }
})

feedbackCloseBtn.addEventListener('click', function () {
  if (isFeedbackOpen) {
    feedback.style.display = 'none'
    document.body.classList.remove('no-scroll')
    isFeedbackOpen = false
  }
})

document.addEventListener('change', function () {
  if (isCallOpen || isFeedbackOpen) {
    document.body.classList.add('no-scroll')
  }
})
