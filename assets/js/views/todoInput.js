Nox('App.Views.todoInput', function(todoInput) {
  var ENTER = 13;

  todoInput.fn.initialize = function(input) {
    this.input = input;

    this.addListeners();
  };

  todoInput.fn.addListeners = function() {
    this.input.addEventListener('keyup', this.addTask.bind(this));
  };

  todoInput.fn.addTask = function(event) {
    if(event.keyCode !== ENTER) {
      return;
    }

    var value = this.input.value.trim();

    if(!value) {
      return;
    }

    this.emit('newTodo', value);
    this.input.value = '';
  };
});