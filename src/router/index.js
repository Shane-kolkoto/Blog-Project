import { createRouter, createWebHistory } from 'vue-router'
import Blog from '../views/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'Blog',
    component: Blog
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
