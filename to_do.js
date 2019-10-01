// Start by creating a template
const template = document.createElement('template');
template.innerHTML =
  // Add Styles
  <style>

  </style>
  // Add HTML
  <h1>My To Do App</h1>
  <input type='text' placeholder='Add a new item'></input>
  <button>✅</button>
  <ul id='todos'></ul>
  ;

class TodoApp extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$todoList = this._shadowRoot.querySelector('ul');
  }
}

window.customElement.define('to-do-app', ToDoApp)


