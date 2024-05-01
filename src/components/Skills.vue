<template>

      <h1>Skills</h1>
     <!-- {{ unique }} -->
      <div class="btn_container" v-for="skill in unique" :key="skill">
        <router-link to=""><button>{{ skill }}</button></router-link>
         
      </div>
  
</template>

<script>
import GetMembers from '@/composable/GetMembers'
import { ref } from 'vue'
export default {
 props:["members"],
  setup(props){
    let Skills=ref([])
    console.log(props.members)
    props.members.forEach((member)=>{
      member.skills.forEach((skill)=>{
         Skills.value.push(skill)
      })
    })

    let unique=Skills.value.filter((skill,index,array)=>{
     return array.indexOf(skill) === index
    })
    return {unique}
  }
}
</script>

<style scoped>
button{
  background: none;
  padding: 10px;
  border: none;
  background-color: rgb(253, 253, 77);
  border-radius: 50%;
  margin: 10px;
}
.btn_container{
  margin: 20px auto;
  /* background-color: blue; */
  padding-left: 100px;
  display: flex;
}
h1{
    text-align: center;
}
</style>