// Your code goes here

//Declarations

const navScale = document.querySelector('.main-navigation')
const navItems = document.getElementsByTagName('a')
const button = document.querySelectorAll('.btn')
const image = document.querySelectorAll('img')
const pageBody = document.querySelector('body')
const ctaBox = document.querySelectorAll('.destination')
const ctaBoxBorder = 'border: 2px solid #ebebeb; border-radius: 10px; padding: 2rem'
const preventDefault = document.querySelector('a')
const h1 = document.querySelector('h1')
const footer = document.querySelector('.footer')
const copyText = document.querySelector('body')
                       

//EventListeners


document.addEventListener('wheel', e => {
    navScale.style.height = '50px'
    e.stopPropagation();
})

button.forEach(function (element) {
    element.addEventListener('mouseenter', function() {
        element.style.backgroundColor = 'black'
    })
})

button.forEach(function (element) {
    element.addEventListener('mouseleave', function() {
        element.style.backgroundColor = ''
    })
})

image.forEach(function (element) {
    element.addEventListener('dblclick', function() {
        alert('Sorry, these images don\'t get larger when you double click them!')
    })
})

document.addEventListener('copy', e => {
    alert('Your selection has been saved to the clipboard!')
})

pageBody.addEventListener('keydown', e => {
    prompt('What are you trying to type?')
})

ctaBox.forEach(function (element) {
    element.addEventListener('mouseenter', function() {
        element.style = ctaBoxBorder
    })
})

ctaBox.forEach(function (element) {
    element.addEventListener('mouseleave', function() {
        element.style = ''
    })
})

document.addEventListener('mousedown', e => {
    h1.style.color = 'teal'

})

document.addEventListener('mouseup', e => {
    h1.style.color = ''
})

document.addEventListener('mouseover', e => {
    footer.style.backgroundColor = 'teal'
})

preventDefault.addEventListener('click', (event) => {
    event.preventDefault();
});
