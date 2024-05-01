<template>
  <div class="" v-if="member">
    <h1>{{ member.name }} Detail</h1>
  <p>{{ member.detail }}</p>
  <div class="" v-for="skill in member.skills" :key="skill">
    <p>{{ skill }}</p>
  </div>
  <router-link to="/"><button>Home</button></router-link>
  <router-link :to="{name:'AllMember'}"><button >Back</button></router-link>

  </div>

  <div class="" v-else>
    <Loading></Loading>
  </div>
</template>

<script>
import Loading from './Loading'
import GetMemberDetail from '@/composable/GetMemberDetail'
export default {
  components: { Loading },
props:['id'],

setup(props) {
    let  {member,error,load} = GetMemberDetail(props.id)

    load()

   
    return {member,error,load}
}
}
</script>

<style>

</style>