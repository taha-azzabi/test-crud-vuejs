<template>
  <div id="app">
    <posts-list/>
  </div>
</template>

<script>
import PostsList from './components/PostsList.vue'

export default {
  name: 'app',
  components: {
    PostsList
  }
}
</script>
