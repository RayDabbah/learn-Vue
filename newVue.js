var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!!'
    }
})
var app2 = new Vue({
    el: '#app2',
    data: {
        message: `You started learning Vue on ${new Date().toLocaleString()}`
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app4',
    data: {
        todos: [
            { text: 'Learn Vue.' },
            { text: 'Learn Gemarah.' },
            { text: 'Go to sleep.' }
        ],
        seen: false
    }
})

var app5 = new Vue({
    el: '#app5',
    data: {
        message: 'Reverse me!'
    },
    methods: {
        reverse: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app6',
    data: {
        message: 'Type down under please'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
    el: '#app7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'onions' },
            { id: 2, text: 'Food!' }
        ]
    }
})

var app8 = new Vue({
    el: '#app8',
    data: {
        firstName: 'Shmerel',
        lastname: 'Goldstein',
        DOB: new Date(1969, 10, 13),
        yearsOfExperience: 20,
        myLink: 'http://www.rachamimdabbah.com',
        ageCutoff: new Date(2000)
    },
    methods: {
        getFullName: function () {
            return `${this.firstName}  ${this.lastname}`;
        },
        clickAlert: function (message, check) {
            console.log(check)
            confirm(message)
        }
    }
})

var app9 = new Vue({
    el: '#app9',
    methods: {
        inputSomething: function (e) {
            alert(`You have pressed ${e.keyCode || e.which}!!`);
        }
    }
})

var app10 = new Vue({
    el: '#app10',
    data:{
        numbers: 36
    }
})

var app11 = new Vue({
    el:'#app11',
    data:{
        inventory: 25
    }
})

var exercise1 = new Vue({
    el: "#exercise1",
    data:{
        output: 'Hello!',
        output2: ''
    },
    methods: {
        outputSomething: function (e) {
         this.output = e.target.value;
        }
    }
})
