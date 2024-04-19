import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home/ListView.vue')
  },
  {
    path: '/home_CN',
    name: 'home_CN',
    component: () => import('../views/Home_CN/ListView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About/ListView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
