<template>
  <form @submit="Submit">
    <label for="">Title</label>
    <input type="text" v-model="title">
    <label for="">Detail</label>
    <textarea v-model="detail"></textarea>
    <label  >Tag</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handelKey">
    <div class="" v-for="tag in tags" :key="tag">
        <p>{{ tag }}</p>
    </div>
    <button>Submit</button>
    
    <router-link :to="{name:'home'}"><button>Home</button></router-link>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
 setup(){
    let title=ref("");
    let detail=ref("");
    let tag=ref("");
    let tags=ref([]);

    let handelKey=()=>{
        if(!tags.value.includes(tag.value)){
            tags.value.push(tag.value)
             tag.value=""
        }
       
    }
    let Submit=async()=>{
        await fetch("http://localhost:3000/posts",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title:title.value,
                detail:detail.value,
                tag:tag.value,
                tags:tags.value
            })
            }
        )

        // this.$router.push({name:'home'});
    }
    return {handelKey,title,detail,tag,tags,Submit}
 }
}
</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
}
</style>