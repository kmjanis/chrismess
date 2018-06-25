console.log('It works!')
console.warn('Omar coming')
console.error('oh snap')

const button = document.querySelector('button')

const newHeader = function() {
const heading = document.querySelector('h1')
    heading.textContent = 'Hey look I did it!'
}

button.onclick = newHeader