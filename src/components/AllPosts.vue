<template>
  <!-- <h1>All Posts</h1> -->
  <div class="">
   <router-link :to="{name:'postDetail' , params:{id:post.id} }"> <h3>{{ post.title }}</h3></router-link>
    <p>{{ post.detail }}</p>
    <!-- {{ post.tags }} -->
    <div class="" v-for="tag in post.tags" :key="tag">
      <p>{{ tag }}</p>
    </div>
  </div><hr>
</template>

<script>
export default {
props:['post']
}
</script>

<style>

</style>