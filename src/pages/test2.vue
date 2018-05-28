<template>
  <div>
    <p>{{count}}</p>
    <p>{{calculatedCount}}</p>
    <br>
    <p v-for="(hey, index) in toFilter" :key="index">{{hey.id}} {{hey.oops}}</p>
    <p>filter 2 {{$store.getters.getToFilterById(2)}}</p>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  export default {
    name: "test2",
    computed: {
      ...mapState(
        ['count']
      ),
      ...mapGetters({
        calculatedCount: 'countWithSomeCalc',
        toFilter: 'oopsYes'
      })
    }
  }
</script>

<style scoped>

</style>
