import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
Swiper.use([Pagination])

let swiperInstance = null

function initSwiper() {
  const isMobile = window.innerWidth < 768

  if (isMobile && !swiperInstance) {
    swiperInstance = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 0,
      direction: 'horizontal',
      loop: false,

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      }
    })
  }

  if (!isMobile && swiperInstance) {
    swiperInstance.destroy(true, true)
    swiperInstance = null
  }
}

document.addEventListener('DOMContentLoaded', initSwiper)

window.addEventListener('resize', function () {
  initSwiper()
})
