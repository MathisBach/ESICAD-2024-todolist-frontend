import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '/views/HomeView.vue'
import home from '@/view/public/HomeView.vue'

const router = [
{
  path: '/',
  name: 'home',
  component: HomeView.vue
},
{
  path: '/mathis'
  name: 'home',
  componnent: home
},
{
  path: '/about',
  name: 'about'
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // wich is lazy-loade when the route is visited. 
  // wich id lazy-loaded when the route is visted.
  component: () => import (/* webpackChunkName: "about"*/'../views/AboutView.vue')
}

]
