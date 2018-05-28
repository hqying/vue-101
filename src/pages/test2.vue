<template>
  <div>
    <p>{{count}}</p>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "test2",
    computed: mapState(
        ['count']
    )
  }
</script>

<style scoped>

</style>
