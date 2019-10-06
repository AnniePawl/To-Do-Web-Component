// Start by creating a template
// Only set innerHTML on template *once*
// Template used because cloning templates is aesier than calling .innerHTML for all instances of component
const template = document.createElement('template');
template.innerHTML =
  // Add Styles to component from *inside* by using :host pseudo class so they are not overwritten by global style
  `
<style>
  :host {
    display: block;
    margin:40px;
    font-family: 'Montserrat', sans-serif;
  }
  .to-do {
    display: flex; 
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
  button {
    background-color: #c4eda6;
    font-size:15px;
    border-radius: 5px;
    height:25px;
    width:55px;
    margin:10px;
    cursor: pointer;
  }
  input {
    height:30px;
    width:250px;
    border-radius: 5px;
    text-align:center;
  }

  ul {
    list-style: none;
    padding: 0;
  }
</style>
<div class='to-do'>
<h2>To Do List</h2>
<input type='text' placeholder='ADD A NEW ITEM'></input>
<button>+</button>
<ul id='todos'></ul>
</div>
`

class TodoApp extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ 'mode': 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
    this.$todoList = this._shadowRoot.querySelector('ul')
  }

  // Getters and Setters
  _renderTodoList() {
    this.$todoList.innerHTML = ''

    this._todos.forEach((todo, index) => {
      let $todoItem = document.createElement('div')
      $todoItem.innerHTML = todo.text
      this.$todoList.appendChild($todoItem)
    })
  }

  set todos(value) {
    this._todos = value
    this._renderTodoList()
  }

  get todos() {
    return this._todos
  }

}

window.customElements.define('to-do-app', TodoApp)

document.querySelector('to-do-app').todos = [
  { text: "Make a to-do list", checked: false },
  { text: "Finish blog post", checked: false }
]