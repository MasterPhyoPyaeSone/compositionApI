<template>
  <h1>Home</h1>
  <!-- {{ posts }} -->
   <div class="" v-if="posts.length > 0">
     <div class="" v-for="post in posts" :key="post.id">
        <AllPosts :post="post"></AllPosts>

     </div>
   </div>
   <div class="" v-else>
    <Loading></Loading>
   </div>

  <router-link :to="{name:'CreateForm'}"><button>Create Form</button></router-link>
  
</template>

<script>
import Loading from '../components/Loading'
// import Loading from '../components/Loading'
import AllPosts from '../components/AllPosts.vue'
import GetPosts from '@/composable/GetPosts'
// @ is an alias to /src

export default {
  components: {
    Loading,
    // Loading,
    
    AllPosts,},
    setup() {
    
    let {posts,load,error}=GetPosts();

  
    load();
    return {posts,load,error}

  },
};
</script>
