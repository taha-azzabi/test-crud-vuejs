<template>
  <div class="posts">
    <p v-if="isLoading"> chargement ...</p>
    <section v-if ="isError" class="posts__error error">Une erreur est survenu</section>
    <section v-else class="posts__articles">
      <ul v-for="post in posts" :key="post.id">
        <li class="posts_single">
            {{ post.title }} 
            <button @click="deletPost(post.id)" :disabled = "isLoadingDeletePost && post.id === activeID">
              Supprimer
            </button>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import {getPosts, removePost} from "./../api/postsWebServices"
export default {
  data() {
    return {
      posts:[],
      isLoading: false,
      isError: false,
      isLoadingDeletePost: false,
      activeID: null
    }
  },
  mounted() {
   getPosts()
   .then(response => {
     this.posts = response
   })
   .catch(() => {
     this.error = true
   })
   .finally(() => { this.isLoading = false }) 
  },
  methods: {
    deletPost(id) {
      this.isLoadingDeletePost = true 
      this.activeID = id
      removePost(id)
      .then(() => {
        const postIndex = this.posts.findIndex(post => post.id === id)
        // eslint-disable-next-line no-console
        this.posts = [...this.posts.slice(0, postIndex),... this.posts.slice(postIndex + 1)]
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
      .finally(() => {
        this.isLoadingDeletePost = false 
        this.activeID = null
      })
    }
  }
}
</script>