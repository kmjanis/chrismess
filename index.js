class App {
    constructor() {
      const form = document.querySelector('form#flickForm') 
      form.addEventListener('submit', (ev) => {
          
        ev.preventDefault()
        this.handleSubmit(ev)
      })
    }
  
    renderProperty(name, value){
      const span = document.createElement('span')
      span.classList.add(name)
      span.textContent = value
      return span
    }
  
    renderItem(flick) {
      const item = document.createElement('li')
      item.classList.add('flick')

      //deleteThis {
          //document.getELemenetById('flicks')
          //list.removeChild(list.childnodes)
      //}

     function deleteThis(){
      const list = document.getElementById('flicks');
        list.removeChild(list.childNodes);
     }
      // get the list of properties
      const properties = Object.keys(flick)
  
      // loop over each property
      properties.forEach((propertyName) => {
        // build a span
        const span = this.renderProperty(propertyName, flick[propertyName])
        item.appendChild(span)
      })
  
      return item
    }
  
    handleSubmit(ev) {
      const f = ev.target
  
      const flick = {
        name: f.flickName.value,
        chris: f.chrisName.value,
      }
  
      const item = this.renderItem(flick)
  
      const list = document.querySelector('#flicks')
      list.appendChild(item)
  
    array.push(item1, item2,...itemX)
    
      f.reset()
      f.flickName.focus()
    }
  }


  const app = new App()