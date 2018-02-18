Vue.component('task-list', {
    template: `<li>{{ hi  }}
    <slot></slot>   {{ bye }}</li>`,
    data(){
        return {
         hi: 'hi',
         bye: 'goodbye!',
   } },
})

var app = new Vue({
    el: '#app',
    data: {
        item: 'lukshen',
    },
})