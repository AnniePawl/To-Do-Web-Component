// Start by creating a template
// Only set innerHTML on template *once*
// Template used because cloning templates is aesier than calling .innerHTML for all instances of component
const template = document.createElement('template');
template.innerHTML = `
  // Add Styles to component from *inside* so they are not overwritten by global style
  <style>
    {/* Pseudo class to add styles from inside */}
    :host {
      // Display default is inline
      display: block;
font-family: sans-serif;
text-align: center;
}

  button {
      border: none;
cursor:pointer;
}

  ul {
      list - style: none;
padding:0;
}

  </style>

  // Add HTML
  <h1>My To Do App</h1>
  <input type='text' placeholder='Add a new item'></input>
  <button>✅</button>
  <ul id='todos'></ul>
  `;

// Make a new component
class ToDoApp extends HTMLElement {
  // Use constructor to *attach* shadowRoot
  // Then *clone* template to shadowRoot
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$ToDoList = this._shadowRoot.querySelector('ul');
  }

  // Setters and Getters
  _renderToDoList() {
    this.$ToDoList.innerHTML = '';
    this.$ToDoList.forEach((todo, index) => {
      let $ToDoItem = document.createElement('div');
      $ToDoItem.innerHTML = ToDo.text;
      this.$ToDoList.appendChild($ToDoItem);
    });
    set ToDos(value) {
      this._ToDos = value;
      this._renderToDoList();
    }

    get ToDos() {
      return this._ToDos
    }

  }


}

window.customElement.define('to-do-app', ToDoApp)


