import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LessonsView from '../views/Lessons.vue'
import AccountView from '../views/AccountView.vue'
import LoginForm from '../components/login-form.vue'
import RegisterForm from '../components/register-form.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/lessons',
      name: 'lessons',
      component: LessonsView
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView,
      children: [
        {
          path: '/account/register',
          name: 'register',
          component: RegisterForm
        },
        {
          path: '/account/login',
          name: 'login',
          component: LoginForm
        }
      ]
    },
    {
      path: '/tell-you',
      name: 'tell-you',
      component: () => import('../views/TellYouView.vue')
    }
  ]
})

export default router
