<template>
  <div>
    <p>{{count}}</p>
    <p>{{calculatedCount}}</p>
    <br>
    <p v-for="(hey, index) in toFilter" :key="index">{{hey.id}} {{hey.oops}}</p>
    <p>filter 2 {{$store.getters.getToFilterById(2)}}</p>
    <button @click="add(5)">action increment 5 with 1s timeout</button>
    <router-link to="/test">test</router-link>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
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
    },
    methods: {
      ...mapActions({
        add: 'increment'
      })
    }
  }
</script>

<style scoped>

</style>
