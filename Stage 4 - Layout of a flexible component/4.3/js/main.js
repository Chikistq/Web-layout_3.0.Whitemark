

const list = document.querySelector('.cards-list')
const listItems = document.querySelectorAll('.cards-list__item')

const listItemCards = document.querySelectorAll('.card')
const cardContents = document.querySelectorAll('.card__content')


const btnTgl = document.querySelectorAll('.page-content__toggle')

btnTgl.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    item.classList.toggle('page-content__toggle--current')

    list.classList.toggle('cards-list--listStyle')

    listItems.forEach(item => item.classList.toggle('cards-list__item--listStyle'))
    listItemCards.forEach(item => item.classList.toggle('card--listStyle'))
    cardContents.forEach(item => item.classList.toggle('card__content--listStyle'))
  })
})
