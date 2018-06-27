const form = document.querySelector('form#flickForm')

const addFlick = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickName = f.flickName.value
  const item = document.createElement('li')
  item.textContent = flickName

  const list = document.querySelector('#flicks')
  list.appendChild(item)

  f.reset()
}

form.addEventListener('submit', addFlick)
