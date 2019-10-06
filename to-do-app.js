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

    this.$todoList = this._shadowRoot.querySelector('ul');
    this.$input = this._shadowRoot.querySelector('input');

    this.$submitButton = this._shadowRoot.querySelector('button');
    this.$submitButton.addEventListener('click', this._addToDo.bind(this));
  }

  _addToDo() {
    if (this.$input.value.length > 0) {
      this._todos.push({ text: this.$input.value, checked: false })
      this._renderTodoList();
      this.$input.value = ''
    }

  }

  // Getters and Setters
  // Render from to-do-item.js
  _renderTodoList() {
    this.$todoList.innerHTML = '';

    this._todos.forEach((todo, index) => {
      let $todoItem = document.createElement('to-do-item');
      $todoItem.setAttribute('text', todo.text);
      this.$todoList.appendChild($todoItem);
    });
  }

  set todos(value) {
    this._todos = value
    this._renderTodoList()
  }

  get todos() {
    return this._todos
  }

}

// Define custom element
window.customElements.define('to-do-app', TodoApp)


document.querySelector('to-do-app').todos = [

]