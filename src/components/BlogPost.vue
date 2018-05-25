<template>
  <div>
    {{title}}
    <button @click="$emit('enlarge-event')">enlarge</button>
    <button @click="$emit('smaller-event')">smaller</button>
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
