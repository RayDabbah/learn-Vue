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
        todos:[
            {text: 'Learn Vue.'},
            {text: 'Learn Gemarah.'},
            {text: 'Go to sleep.'}
        ],
        seen: false
    }
})

var app5 = new Vue({
    el: '#app5',
    data:{
        message: 'Reverse me!'
    },
    methods:{
        reverse: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})
