<template>
  <div :style="{fontSize: postFontSize + 'px'}">
    <blog-post v-for="post in posts" :title="post" v-on:enlarge-event="postFontSize += 2" v-on:smaller-event="postFontSize -= 2"
               v-on:event-with-arg="eventWithArgHandler">
      <span slot="tail">tail slot</span>
      <p>blablabla slot content</p>
    </blog-post>
  </div>
</template>

<script>
  import BlogPost from '../components/BlogPost'

  export default {
    name: "test",
    components: {
      BlogPost
    },
    data() {
      return {
        posts: ['title-a', 'title-b'],
        postFontSize: 14
      }
    },
    methods: {
      eventWithArgHandler(arg, secondArg) {
        alert(arg.name + ' ' + arg.addr + ', success');
        alert('second arg: ' + secondArg.text)
      }
    }
  }
</script>

<style scoped>

</style>
