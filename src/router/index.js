import { createRouter, createWebHistory } from 'vue-router'
import practiceQuestion from '../views/practiceQuestion.vue'
import practiceTech from '../views/practiceTech.vue'
import Start from '../views/Start.vue'
import question1 from '../views/question1.vue'
import Complete from '../views/Complete.vue'

const routes = [
  {
    path: '/',
    name: 'practiceTech',
    component: practiceTech
  },
  {
    path: '/practice',
    name: 'practiceQuestion',
    component: practiceQuestion
  },
  {
    path: '/start',
    name: 'Start',
    component: Start
  },
  {
    path: '/question1',
    name: 'question1',
    component: question1
  },
  {
    path: '/complete',
    name: 'Complete',
    component: Complete
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
