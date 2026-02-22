import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue' 
import Breathing from '../views/Breathing.vue' 
import Wellness from '../views/Wellness.vue' 
import AiSupport from '../views/AiSupport.vue'
import MoodForm from '../components/MoodForm.vue'

const routes = [
  { path: '/', component: Home }, 
  { path: '/breathing', component: Breathing }, 
  { path: '/wellness', component: Wellness }, 
  { path: '/ai-support', component: AiSupport },
  { path: '/moodform', component: MoodForm },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router