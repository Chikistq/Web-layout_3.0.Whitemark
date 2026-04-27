const burgerBtn = document.querySelector('.header__menu')
const burgerCloseBtn = document.querySelector('.header__menu-icon--close')
const headerTop = document.querySelector('.header__content')
const burger = document.querySelector('.burger')


burgerBtn.addEventListener('click', (e) => {
  e.preventDefault()
  headerTop.classList.add('active')
  burger.classList.add('active')

  burgerCloseBtn.addEventListener('click', (e) => {
    e.preventDefault()
    burger.classList.add('close')
    setTimeout(() => {
      headerTop.classList.remove('active')
      burger.classList.remove('active')
      burger.classList.remove('close')

    }, 499)
  })
})


const performanceBtn = document.querySelectorAll('.header__switch-link')
const container = document.querySelector('.news__wrapper')

performanceBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    const currentBtn = e.currentTarget
    performanceBtn.forEach(item => item.classList.remove('active'))
    currentBtn.classList.add('active')
    if (currentBtn.classList.contains('link__list')) {
      container.classList.remove('news__wrapper--grid')
    } else {
      container.classList.add('news__wrapper--grid')
    }

  })
})
