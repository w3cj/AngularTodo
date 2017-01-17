(function () {
	'use strict';

	angular
		.module('todoApp', [])
		.component('todo', {
			controller: function() {
				const vm = this;

				vm.$onInit = function() {
					vm.todos = [{
						title: 'Learn Angular',
						priority: 1
					}, {
						title: 'Data Binding',
						priority: 2
					}];
				}

				vm.addTodo = function() {
					if(vm.newTodo && vm.newTodo.title && vm.newTodo.priority) {
						vm.todos.push({
							title: vm.newTodo.title,
							priority: vm.newTodo.priority
						});

						vm.newTodo.title = '';
						vm.newTodo.priority = '';
					}
				}

				vm.markDone = function(todo) {
					todo.done = true;
				}

				vm.delete = function(index) {
					vm.todos.splice(index, 1);
				}
			},
			templateUrl: 'app/templates/todo.html'
		});
})();
