Vue.component('task-list', {
    template: `
    <div>
    <task v-for="task in tasks">{{ task.desc  }}</task>
    </div>
    `,
    data() {
        return {
            tasks: [
                { desc: 'Go to the bank', completed: false },
                { desc: 'Take out the garbage', completed: false },
                { desc: 'Walk the fish', completed: false },
                { desc: 'Jump on the trampoline', completed: false },
            ]
        }
    },
})

Vue.component('task', {
    template: `<li><slot></slot></li>`
})

var vm = new Vue({
    el: '#app',

})

Vue.component('message-card', {
    props: ['cardtitle', 'body'],

    template: `
    <article v-show="isVisible" class="message">
  <div class="message-header">
    <p>
    {{ cardtitle }}
    </p>
    <button @click="isVisible = false">X</button>
  </div>
  <div class="message-body">
  <p v-text="body"></p>
  </div>
</article>
    `,

    data() {
        return {
            isVisible: true,
        }
    },
})

var message = new Vue({
    el: '#message',
})

Vue.component('modal', {
    props: ['modalContent'],
    template: `
    <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <p class="box">
    {{ modalContent  }}
      </p>
    </div>
    <button @click="$emit('close')" class="modal-close is-large" aria-label="close"></button>
  </div>

    `,
    data() {
        return {
            isActive: false,
        }
    },
})

let modal = new Vue({
    el: '#modal',
    data: {
        showModal: false,
    }
})

