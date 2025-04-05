let call = document.querySelector('.call')
let callOpenBtn = document.querySelectorAll('.open-call')
let callCloseBtn = document.querySelector('.call__button--close')
let isCallOpen = false
let feedback = document.querySelector('.feedback')
let feedbackOpenBtn = document.querySelectorAll('.open-feedback')
let feedbackCloseBtn = document.querySelector('.feedback__button--close')
let isFeedbackOpen = false

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

document.addEventListener('change', function () {
  if (isCallOpen || isFeedbackOpen) {
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }
})
