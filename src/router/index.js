import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import LessonsView from '../views/LessonsView.vue';
import AccountView from '../views/AccountView.vue';
import NewLessonView from '../views/NewLessonView.vue';
import LinksView from '../views/LinksView.vue';
import PostsView from '../views/PostsView.vue';
import MyPostsView from '../views/MyPostsView.vue';
import MyPostEdit from '../views/MyPostEdit.vue';
import LoginForm from '../components/login-form.vue';
import RegisterForm from '../components/register-form.vue';

import { useUserStore } from '../stores/users';

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
    },
    {
      path: '/new-lesson',
      name: 'new-lesson',
      component: NewLessonView,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/links',
      name: 'links',
      component: LinksView,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/posts',
      component: PostsView,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '',
          component: MyPostsView,
        },
        {
          path: ':id',
          component: MyPostEdit
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if(!to.meta.requireAuth) {
    return next();
  }

  const userStore = useUserStore();

  if(userStore.isAuthed) {
    next();
  } else {
    next({name: 'home'});
  }
});

export default router;
