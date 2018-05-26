<template>
  <div>
    <div>
      {{title}}
      <button @click="$emit('enlarge-event')">enlarge</button>
      <button @click="$emit('smaller-event')">smaller</button>
      <button @click="$emit('event-with-arg', {name: 'name-abc', addr: 'addr room 8003'}, {text: 'second arg'})">event with arg</button>
    </div>
    <div>
      <p>[slot]</p>
      <slot></slot>
    </div>
    <div>
      <p>[named slot]</p>
      <slot name="tail"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "blog-post",
    props: ['title']
  }
</script>

<style scoped>

</style>
