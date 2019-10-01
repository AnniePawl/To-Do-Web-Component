class TodoApp extends HTMLElement {
  ...

  _renderTodoList() {
    this.$todoList.innerHTML = '';

    this._todos.forEach((todo, index) => {
      let $todoItem = document.createElement('div');
      $todoItem.innerHTML = todo.text;
      this.$todoList.appendChild($todoItem);
    });
  }

  set todos(value) {
    this._todos = value;
    this._renderTodoList();
  }

  get todos() {
    return this._todos;
  }
}