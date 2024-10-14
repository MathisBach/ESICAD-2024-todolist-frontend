import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import path from 'path'
import login from '@/views/auth/login1.vue'
//import mathis from '../views/mathis.vue'

const routes: [
  {
    path: '/'
    name: 'public',
    component: Public.publicLayout
    children:[
      { path:'/', name: 'home', component: Public.home},
      { path:'/cockails', name: '', component:PublicKeyCredential.},
       { path: '/contact', name:'',}
    ]
  },
{
  path: '/',
  name: 'public',
  component PublicKeyCredential.P
}



{
 path:'/'
 name

}
      component: HomeView
    
    {
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  


export default router
