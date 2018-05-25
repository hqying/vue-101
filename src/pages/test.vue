<template>
  <div :style="{fontSize: postFontSize + 'px'}">
    <blog-post v-for="post in posts" :title="post" v-on:enlarge-event="postFontSize += 2" v-on:smaller-event="postFontSize -= 2"></blog-post>
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
    }
  }
</script>

<style scoped>

</style>
