<template>

 <div class="" v-if="members.length > 0">
     <MemberList :members="members"></MemberList>
 </div>
 <div class="" v-else>
    <Loading></Loading>
 </div>
  
</template>

<script>
import Loading from '../components/Loading'
import MemberList from '../components/MemberList'
import GetMembers from '@/composable/GetMembers'

export default {
  components: {
    Loading, MemberList },

  setup(){
   let {members,error,membersList} = GetMembers()

   membersList()

    return {members,error,membersList}

  }

}
</script>

<style>

</style>