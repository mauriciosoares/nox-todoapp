Nox('App.Views.todoMessage', function(todoMessage) {
  todoMessage.fn.initialize = function(value) {
    this.el = document.createElement('li');

    this.value = value;

    this.addListeners();
  };

  todoMessage.fn.addListeners = function() {
    this.el.addEventListener('click', this.emit.bind(this, 'removeTodo'));
  };

  todoMessage.fn.render = function() {
    this.el.innerText = this.value;

    return this.el;
  };
});