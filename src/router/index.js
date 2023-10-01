import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Heal from '../views/HealPage.vue'





const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  {
    path: '/heal',
    name: 'Heal',
    component: Heal
  },

];



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
