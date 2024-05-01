<template>
  <!-- <h1>hhhh</h1> -->
  <div class="" v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.detail }}</p>
     <div class="" v-for="tag in post.tags" :key="tag">
    <p>{{ tag }}</p>
  </div>
  </div>
 
  <div class="" v-else>
    <Loading></Loading>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'
import GetPost from '@/composable/GetPost'
export default {
  components: { Loading },
    props:['id'],
    setup(props){
        let {post,error,load}=GetPost(props.id);
        load();
        return{post,error,load}
    }
}
</script>

<style>

</style>