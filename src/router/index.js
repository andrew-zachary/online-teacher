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
      component: AccountView,
      children: [
        {
          path: 'register',
          component: RegisterForm
        },
        {
          path: 'login',
          component: LoginForm
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
