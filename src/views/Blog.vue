<template>
  <div class="blog">
    <img alt="Vue logo" src="../assets/logo.png">
    <Blog msg="Welcome to Your Blog App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Blog from '@/components/Blog.vue'

export default {
  name: 'Home',
  components: {
    Blog
  }
}
</script>
