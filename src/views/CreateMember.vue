<template>
  <h1>Create Member</h1>
   <form @submit="submit">
    <div class="form_item">
        <label for="">Name</label> <input type="text" v-model="name">
    </div>
    
    <div class="form_item">
        <label for="">Position</label><input type="text" v-model="position">
    
    </div>
    <div class="form_item">
        <label for="">Age</label>  <input type="number" v-model="age">
  
    </div>
    <div class="form_item">
         <label  >Company</label> <input type="text" v-model="company">   
    </div>
    <div class="form_item">
         <label  >Skills</label> <input type="text" v-model="skill" @keydown.enter.prevent="handelKey">   
    </div>
   <div class="skill" v-for="skill in skills" :key="skill">
    <div class=""><span>{{ skill }}</span></div>
   </div>
   
   
   
    <div class="btn">
    <button>Submit</button> <router-link :to="{name:'home'}"><button>Home</button></router-link>
    </div>    
   
  </form>
  
  <!-- {{ name }}
  {{ position }}
  {{ age }}
  {{ skills }} -->
  
</template>

<script>
import { ref } from 'vue'
export default {
setup(){
    let name=ref("")
    let position=ref("")
    let age=ref("")
    let skill=ref("")
    let company=ref("")
    let skills=ref([])

     let handelKey=()=>{
        if(!skills.value.includes(skill.value))
            skills.value.push(skill.value)
            skill.value=""
        }

    let submit =async()=>{
        try {
            let response = await fetch("http://localhost:3000/members",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:name.value,
                    position:position.value,
                    age:age.value,
                    company:company.value,
                    skills:skills.value
                })
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    
    return{name,position,age,skills,skill,company,handelKey,submit}
}
}
</script>

<style scoped>
.form_item{
    display: flex;

}
label{
    margin-right: 20px;
}
.btn{
    display: flex;
}
.skill{
    display: flex;
   /* flex-direction: column-reverse; */
}
</style>