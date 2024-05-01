<template>
  <h1>Member List</h1>
  <div class="create">
    
    <router-link :to="{name:'createMember'}"> <button>Add Member</button></router-link>
      
  </div>
 <div class="container">
    <div class="skills">
    <Skills :members="members"></Skills>
     </div>
    <div class="item" v-for="member in members" :key="member.id">     
      <div class="items">
        <h4>Name :</h4>
        <h4>{{ member.name }}</h4>
        <br />
      </div>
      <br />
      <div class="items">
        <h4>Position :</h4>
        <h4>{{ member.position }}</h4>
      </div>
      <div class="items">
        <h4>Age :</h4>
        <h4>{{ member.age }}</h4>
      </div>
      <div class="items">
        <h4>Company :</h4>
        <h4>{{ member.company }}</h4>
      </div> 
      <div class="items">
        <h4>Skills :</h4>
        <div class="" v-for="tag in member.skills" :key="tag">
          <p>{{tag}}</p>
        </div>
        <br />
      </div>


     <div class="route">
       <router-link :to="{name:'memberDetail', params:{id:member.id} }">
        <button>See More</button>
      </router-link>
       <router-link :to="{name:'DeleteMember', params:{id:member.id} }">
        <button>Delete</button>
      </router-link>
      
     </div>
   
    
   </div>
  
 </div>
</template>

<script>
import GetMembers from '@/composable/GetMembers';
import Skills from './Skills'
export default {
  components: { Skills },
  props: ["members"],
  setup(){
     let {members,error,membersList}=GetMembers()
     membersList()
      return {members,error,membersList}
  }
};
</script>

<style scoped>
h1,
h4 {
  text-align: center;
  
}
p{
 margin: 10px;
 cursor: pointer;
 color: rgb(246, 241, 241);
}

.con{
  background-color: blueviolet;
  height: auto;
}
.item {
  /* display: flex;
  align-items: center;
  justify-content: space-evenly; */
  display: flex;
  margin: 20px auto;
  background-color: blueviolet;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  flex-wrap: nowrap;
  width: 500px;
  height: auto;
}
h4 {
  margin: 10px auto;
}
.items {
  /* display: flex;
  align-items: center; */
  /* justify-content: space-evenly; */
  width: 200px;
  /* background-color: blue; */
}
button{
 margin: 10px;
}
.create{
  position: absolute;
  top: 35px;
  right: 50px;
}
.container{
  display: grid;
  grid-template-columns: 2fr 2fr;
}
button{
  background: none;
  padding: 10px;
  border: none;
  background-color: rgb(253, 253, 77);
  border-radius: 50%;
}

</style>