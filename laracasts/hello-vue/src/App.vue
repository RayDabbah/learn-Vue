<template>
  <div id="app">
   <message>This is an amazing message!</message>
   <message>This is a super amazing message!</message>
   <message>This is a super duper amazing message!</message>
  </div>
</template>

<script>
import Message from './Message.vue';
export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
        };
    },
    components: { Message},
};
</script>

<style>

</style>
