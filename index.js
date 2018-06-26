console.log('It works!')
console.warn('Omar coming')
console.error('oh snap')

const button = document.querySelector('button')

const newHeader = function() {
const heading = document.querySelector('h1')
    heading.textContent = 'Hey look I did it!'
}
button.onclick = newHeader

const changeHeader = function() {
    const heading = document.querySelector('Pratt')
    heading.textContent = "Chris Pratt is the best Chris"
}
button.addEventListener('click', updateText = 'Chris Pratt is the Best Chris')