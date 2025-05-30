//* Форма для заказа звонка
let call = document.querySelector('.call')
let callOverlay = document.querySelector('.call__overlay')
let callOpenBtn = document.querySelectorAll('.open-call')
let callCloseBtn = document.querySelector('.call__button--close')
let isCallOpen = false

callOpenBtn.forEach(function (callButton) {
  callButton.addEventListener('click', function () {
    if (!isCallOpen) {
      call.style.display = 'block'
      document.body.classList.add('no-scroll')
      isCallOpen = true
    }
  })
})

callCloseBtn.addEventListener('click', function () {
  if (isCallOpen) {
    call.style.display = 'none'
    document.body.classList.remove('no-scroll')
    isCallOpen = false
  }
  if (!isMenuOpen && !isCallOpen) {
    document.body.classList.remove('no-scroll')
  }
})

window.addEventListener('click', function (evt) {
  if (evt.target === callOverlay) {
    call.style.display = 'none'
    document.body.classList.remove('no-scroll')
    isCallOpen = false
  }
})

//* Форма для обратной связи
let feedback = document.querySelector('.feedback')
let feedbackOverlay = document.querySelector('.feedback__overlay')
let feedbackOpenBtn = document.querySelectorAll('.open-feedback')
let feedbackCloseBtn = document.querySelector('.feedback__button--close')
let isFeedbackOpen = false

feedbackOpenBtn.forEach(function (feedbackButton) {
  feedbackButton.addEventListener('click', function () {
    if (!isFeedbackOpen) {
      feedback.style.display = 'block'
      document.body.classList.add('no-scroll')
      isFeedbackOpen = true
    }
  })
})

feedbackCloseBtn.addEventListener('click', function () {
  if (isFeedbackOpen) {
    feedback.style.display = 'none'
    document.body.classList.remove('no-scroll')
    isFeedbackOpen = false
  }
  if (!isMenuOpen && isFeedbackOpen) {
    document.body.classList.remove('no-scroll')
  }
})

window.addEventListener('click', function (evt) {
  if (evt.target === feedbackOverlay) {
    feedback.style.display = 'none'
    document.body.classList.remove('no-scroll')
    isFeedbackOpen = false
  }
})

//* Управление скроллом без привязки к меню
document.addEventListener('change', function () {
  if (isCallOpen || isFeedbackOpen) {
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }
})
