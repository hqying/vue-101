<template>
  <div :style="{fontSize: postFontSize + 'px'}">
    <blog-post v-for="(post, index) in posts" :title="post" :key="index" v-on:enlarge-event="postFontSize += 2" v-on:smaller-event="postFontSize -= 2"
               v-on:event-with-arg="eventWithArgHandler">
      <span slot="tail">tail slot</span>
      <p>blablabla slot content</p>
    </blog-post>
    <!-- <p>{{count}}</p> -->
    <p>{{countAlias}}</p>
    <p>3 + count = {{localAndStore}}</p>
    <!-- <button @click="$store.commit('incremeent', {n: 3})">+</button> -->
    <button @click="incremeent({n: 3})">+</button>
    <button @click="increment(4)">action increment</button>
    <router-link to="/test2">test2</router-link>
  </div>
</template>

<script>
  import BlogPost from '../components/BlogPost'
  import {mapState, mapMutations, mapActions} from 'vuex'

  export default {
    name: "test",
    components: {
      BlogPost
    },
    data() {
      return {
        posts: ['title-a', 'title-b'],
        postFontSize: 14,
        a: 3
      }
    },
    computed: {
      ...mapState(
        // 'count_module',
        // ['count']
        {
          // countAlias: 'count',
          countAlias: state => state.countmodule.count,
          localAndStore(state) {
            return this.a + state.countmodule.count
          }
        }
      )
    },
    methods: {
      eventWithArgHandler(arg, secondArg) {
        alert(arg.name + ' ' + arg.addr + ', success');
        alert('second arg: ' + secondArg.text)
      },
      ...mapMutations(
        {incremeent: 'INCREMENT'}
      ),
      ...mapActions(
        // 'countmodule', 
        {
          increment: 'countmodule/increment'
        }
        
      )
    }
  }
</script>

<style scoped>

</style>
