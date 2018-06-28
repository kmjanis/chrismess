
class App {
    constructor() {
      this.list = document.querySelector('#flicks')
      this.flicks = []
  
      const form = document.querySelector('form#flickForm')
      form.addEventListener('submit', (ev) => {
        ev.preventDefault()
        this.handleSubmit(ev)
      })
    }
  
    renderProperty(name, value) {
      const span = document.createElement('span')
      span.classList.add(name)
      span.textContent = value
      return span
    }
  
    renderItem(flick) {
      const item = document.createElement('li')
      item.classList.add('flick')
  
      // get the list of properties
      const properties = Object.keys(flick)
  
      // loop over each property
      properties.forEach((propertyName) => {
        // build a span
        const span = this.renderProperty(propertyName, flick[propertyName])
        item.appendChild(span)
      })
  
      // add a delete button
      const deleteButton = document.createElement('button')
      deleteButton.textContent = 'delete'
      deleteButton.addEventListener('click', () => this.removeFlick(item))
      item.appendChild(deleteButton)

      const favButton = document.createElement('button')
      favButton.textContent = 'favorite'
      favButton
        .addEventListener(
            'click',
            () => this.toggleFavorite(flick,item)
        )
  
      return item
    }
  
    toggleFavorite(flick,item){
        flick.favorite = !flick.favorite
    }

    removeFlick(flick,item) {
      this.list.removeChild(item)
    
      const i = this.flicks.indexOf(flick)
        //remove
        this.flicks.splice(i,1)
    }
  
    handleSubmit(ev) {
      const f = ev.target
  
      const flick = {
        name: f.flickName.value,
        chris: f.chrisName.value,
        favorite: false,
      }
  
      this.flicks.push(flick)
  
      const item = this.renderItem(flick)
  
      this.list.appendChild(item)
  
      f.reset()
      f.flickName.focus()
    }
  }
  
  const app = new App()