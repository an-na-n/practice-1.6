let openBrandsBtn = document.querySelector('.brands__show-more')
let brands = document.querySelectorAll('.brands__item')
let brandsBtnText = document.querySelector('.brands__button-text')
let brandsSvg = document.querySelector('.brands__svg-more')
let areBrandsOpen = false

const showDefaultBrands = function () {
  for (let i = 0; i < brands.length; i++) {
    if (
      (window.innerWidth >= 1120 && i >= 8) ||
      (window.innerWidth >= 768 && window.innerWidth < 1120 && i >= 6)
    ) {
      brands[i].style.display = 'none'
    } else {
      brands[i].style.display = 'list-item'
    }
  }
}

showDefaultBrands()

openBrandsBtn.addEventListener('click', function (evt) {
  evt.preventDefault()
  if (areBrandsOpen) {
    for (let i = 0; i < brands.length; i++) {
      if (
        (window.innerWidth >= 1120 && i >= 8) ||
        (window.innerWidth >= 768 && window.innerWidth < 1120 && i >= 6)
      ) {
        brands[i].style.display = 'none'
      }
    }
    brandsBtnText.textContent = 'Показать все'
    openBrandsBtn.append(brandsSvg)
    brandsSvg.classList.remove('open')
    areBrandsOpen = false
  } else {
    for (let i = 0; i < brands.length; i++) {
      brands[i].style.display = 'list-item'
    }
    brandsBtnText.textContent = 'Скрыть'
    brandsSvg.classList.add('open')
    areBrandsOpen = true
  }
})

window.addEventListener('resize', function () {
  if (!areBrandsOpen) {
    showDefaultBrands()
  }
})
