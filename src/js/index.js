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
