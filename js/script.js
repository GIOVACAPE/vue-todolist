const { createApp } = Vue;

createApp({

    data() {

        return{
            todos: [
                {text: 'Fare gli esercizi di Boolean',
                done: false 
                },
                {                
                text: 'Andare a calcio',
                done: false
                },
                {
                text: 'Andare agli scout',
                done: false
                },
            ]
        };
    },

    methods: {
        removeTodo: function (index) {

            this.todos.splice(index, 1);
            
        }
    }
}).mount('#app');