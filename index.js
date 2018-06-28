class App {
    constructor() {
      this.list = document.querySelector('#flicks')
      this.flicks = []
      this.load
  
      const form = document.querySelector('form#flickForm')
      form.addEventListener('submit', (ev) => {
        ev.preventDefault()
        this.handleSubmit(ev)
      })
    }

    save() {
        //store the flicks array in localStorage
        localStorage.setItem('flicks',JSON.stringify(this.flicks))
    }
  
    load() {
        const flicks = JSON.parse(localStorage.getItem('flicks'))
        flicks.forEach(flick => this.addFlick(flick))
    }
    
    renderProperty(name, value) {
      const span = document.createElement('span')
      span.classList.add(name)
      span.textContent = value
      return span
    }
  
    //const testObject = {'one':1};
    //localStorage.setItem(JSON.stringify(testObject));

    //const retrieveObject = localStorage.getItem('testObject');
    //console.log('retrieveObject', JSON.parse(retrievedObject));


    renderProperties(flick) {
      const div = document.createElement('div')
      div.classList.add('info')
  
      // get the list of properties
      const properties = Object.keys(flick)
  
      // loop over each property
      properties.forEach((propertyName) => {
        // build a span
        const span = this.renderProperty(propertyName, flick[propertyName])
        div.appendChild(span)
      })
  
      return div
    }
  
    renderActionButtons(flick, item) {
      const actions = document.createElement('div')
      actions.classList.add('actions')
  
      // add a delete button
      const deleteButton = document.createElement('button')
      deleteButton.classList.add('remove')
      deleteButton.textContent = 'delete'
      deleteButton
        .addEventListener(
          'click',
          (_ev) => this.removeFlick(flick, item)
        )
      actions.appendChild(deleteButton)
  
      // add a favorite button
      const favButton = document.createElement('button')
      favButton.classList.add('fav')
      favButton.textContent = 'favorite'
      favButton
        .addEventListener(
          'click',
          (_ev) => this.toggleFavorite(flick, item)
        )
      actions.appendChild(favButton)
  
      return actions
    }
  
    renderItem(flick) {
      const item = document.createElement('li')
      item.classList.add('flick')
  
      // add all the properties
      const properties = this.renderProperties(flick)
      item.appendChild(properties)
  
      // add action buttons
      const actions = this.renderActionButtons(flick, item)
      item.appendChild(actions)
  
      return item
    }
  
    toggleFavorite(flick, item) {
      // update the UI and the array
      flick.favorite = item.classList.toggle('fav')

      this.save()
    }
  
    removeFlick(flick, item) {
      // remove it from the UI
      this.list.removeChild(item)
  
      // remove it from the array
      const i = this.flicks.indexOf(flick)
      this.flicks.splice(i, 1)
    }
  

    addFlick(flick){
        //keep marked as favorite
        if (flick.favorite){
            item.classList.add('fav')
        }
        this.flicks.push(flick)
        this.save()
        
        const item = this.renderItem(flick)

        //add it to the DOM
        this.list.appendChild(item)
    }
    
    handleSubmit(ev) {
      const f = ev.target
  
      const flick = {
        name: f.flickName.value,
        chris: f.chrisName.value,
        favorite: false,
      }

  this.addFlick(flick)
      f.reset()
      f.flickName.focus()
    }
  }
  
  const app = new App()