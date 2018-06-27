const form = document.querySelector('form#flickForm')

const addFlick = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickName = f.flickName.value
  const spanFlick = document.createElement('span')
  spanFlick.textContent = flickName

  const chrisName = f.chrisName.value
  const spanChris = document.createElement('span')
  spanChris.textContent = chrisName

  const item = document.createElement('li')
  item.appendChild(spanFlick)
  item.appendChild(spanChris)

  const list = document.querySelector('#flicks')
  list.appendChild(item)

  f.reset()
}

form.addEventListener('submit', addFlick)

