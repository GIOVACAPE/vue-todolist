const { createApp } = Vue;

createApp({

    data() {

        return {
            
            newTodo: '',
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]

        };

    },

    methods: {

        checkDone: function (todo) {
            
            if (todo.done) {
                return 'todo-done';
            }
            else {
                return '';
            }
        },
        addTodo: function () {
            
            this.todos.push({
                text: this.newTodo,
                done: false
            });

            this.newTodo = '';
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1);
        }

    }

}).mount('#app');