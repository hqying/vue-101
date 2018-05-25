<template>
  <div>
    <blog-post v-for="post in posts" :title="post"></blog-post>
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
        posts: ['title-a', 'title-b']
      }
    }
  }
</script>

<style scoped>

</style>
