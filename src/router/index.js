import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostDetail from '@/views/PostDetail.vue'
import CreateForm from '@/views/CreateForm.vue'
import  AllMember from '@/views/AllMember'
import MemberDetail from '@/components/MemberDetail.vue'
import CreateMember from '@/views/CreateMember'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:"/posts/:id",
    name:"postDetail",
    component:PostDetail,
    props:true
  },
  {
    path:"/CreateForm",
    name:"CreateForm",
    component:CreateForm
  },
  {
    path:"/AllMember",
    name:"AllMember",
    component:AllMember

  },
  {
    path:"/members/:id",
    name:"memberDetail",
    props:true,
    component:MemberDetail
  },
  {
    path:"/createMember",
    name:"createMember",
    component:CreateMember
  },
  {
    path:"/DeleteMember/ :id",
    name:"DeleteMember",
    props:true
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
