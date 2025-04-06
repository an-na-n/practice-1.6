import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
Swiper.use([Pagination])

let swiper = null

function initSwiper() {
  const isMobile = window.innerWidth < 768

  if (isMobile && !swiper) {
    swiper = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 0,
      updateOnWindowResize: true,
      direction: 'horizontal',
      loop: false,
      breakpoints: {
        0: {
          enabled: true
        },
        768: {
          enabled: false
        }
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      }
    })
  }

  if (!isMobile && swiper) {
    swiper.destroy(false, true)
    swiper = null
  }
}

document.addEventListener('DOMContentLoaded', initSwiper)

window.addEventListener('resize', function () {
  clearTimeout(window._swiperResizeTimeout)
  window._swiperResizeTimeout = setTimeout(initSwiper, 300)
})
