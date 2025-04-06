let text = document.querySelector('.about__wrapper--left')
let openTextBtn = document.querySelector('.about__button')
let btnText = document.querySelector('.about__button-text')
let textSvg = document.querySelector('.about__svg')
let textElements = text.querySelectorAll('.about__text')
let isTextOpen = false

const getVisibleEl = function () {
  let width = window.innerWidth
  if (width >= 1120) {
    return 3
  } else if (width >= 768) {
    return 2
  } else {
    return 1
  }
}

const showDefaultText = function () {
  let visibleElements = getVisibleEl()
  for (let i = 0; i < textElements.length; i++) {
    if (i < visibleElements) {
      textElements[i].style.display = 'block'
    } else {
      textElements[i].style.display = 'none'
    }
  }
}

showDefaultText()

openTextBtn.addEventListener('click', function (evt) {
  evt.preventDefault()

  if (!isTextOpen) {
    for (let i = 0; i < textElements.length; i++) {
      textElements[i].style.display = 'block'
    }
    btnText.textContent = 'Скрыть'
    textSvg.classList.add('open')
    isTextOpen = true
  } else {
    showDefaultText()
    btnText.textContent = 'Читать все'
    openTextBtn.append(textSvg)
    textSvg.classList.remove('open')
    isTextOpen = false
  }
})

window.addEventListener('resize', function () {
  if (!isTextOpen) {
    showDefaultText()
  }
})
