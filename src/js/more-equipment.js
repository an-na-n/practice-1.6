let openEquipBtn = document.querySelector('.equipment__show-more')
let equipment = document.querySelectorAll('.equipment__item')
let equipBtnText = document.querySelector('.equipment__button-text')
let equipSvg = document.querySelector('.equipment__svg-more')
let isEquipOpen = false

const showDefaultEquip = function () {
  for (let i = 0; i < equipment.length; i++) {
    if (
      (window.innerWidth >= 1120 && i >= 4) ||
      (window.innerWidth >= 768 && window.innerWidth < 1120 && i >= 3)
    ) {
      equipment[i].style.display = 'none'
    } else {
      equipment[i].style.display = 'list-item'
    }
  }
}

showDefaultEquip()

openEquipBtn.addEventListener('click', function (evt) {
  evt.preventDefault()
  if (isEquipOpen) {
    for (let i = 0; i < equipment.length; i++) {
      if (
        (window.innerWidth >= 1120 && i >= 4) ||
        (window.innerWidth >= 768 && window.innerWidth < 1120 && i >= 3)
      ) {
        equipment[i].style.display = 'none'
      }
    }
    equipBtnText.textContent = 'Показать все'
    openEquipBtn.append(equipSvg)
    equipSvg.classList.remove('open')
    isEquipOpen = false
  } else {
    for (let i = 0; i < equipment.length; i++) {
      equipment[i].style.display = 'list-item'
    }
    equipBtnText.textContent = 'Скрыть'
    equipSvg.classList.add('open')
    isEquipOpen = true
  }
})

window.addEventListener('resize', function () {
  if (!isEquipOpen) {
    showDefaultEquip()
  }
})
