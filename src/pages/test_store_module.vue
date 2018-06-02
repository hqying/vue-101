<template>
  <div>
      <p>{{$store.state.moduleA.a}}</p>
      <p>{{a}}</p>
      <p>{{$store.state.moduleB.b}}</p>
      <button @click="$store.commit('moduleA/incrementmut')">increment mutation</button>
      <button @click="incrementact()">increment mutation</button>
      <p>getter {{$store.getters['moduleA/twoTimesA']}}</p>
      <p>getter 2b {{$store.getters.twoTimesB}}, a+b {{$store.getters.bPlusA}}</p>
      <p>b2PlusC {{$store.getters.b2PlusC}}</p>
      <p>aPlus2b {{$store.getters['moduleA/aPlus2b']}}</p>
      <button @click="incrByNMut(2)">incrBy2Mut</button>
      <button @click="incrementBmut()">incrementBmut</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
  export default {
    name: "test_store_module",
    computed: {
        ...mapState(
            // {a: state => state.moduleA.a}
            'moduleA', 
            ['a']
        ),
    },
    methods: {
        ...mapActions(
            'moduleA',
            ['incrementact']
        ),
        ...mapMutations(
            // ['moduleA/incrByNMut']
            'moduleA',
            ['incrByNMut']
        ),
        ...mapMutations(
            ['incrementBmut']
        )
    }
  }
</script>

<style scoped>

</style>
