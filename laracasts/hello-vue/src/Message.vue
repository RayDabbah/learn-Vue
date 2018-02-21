<template>
  <div class="message">
      <slot></slot>
  </div>
</template>
<script>
export default {
  
}
</script>

<style>
.message{
    background: gray;
    border-radius: .25rem;
    border: green 3px solid;
    margin: 2rem;
    height: 3rem;
    padding: 2rem;
    text-align: center;
    font-size: 1.5rem;
}
</style>


