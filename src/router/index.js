import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import LessonsView from '../views/LessonsView.vue';
import LessonView from '../views/LessonView.vue';
import AccountView from '../views/AccountView.vue';
import NewLessonView from '../views/NewLessonView.vue';
import LinksView from '../views/LinksView.vue';
import PostsView from '../views/PostsView.vue';
import MyPostsView from '../views/MyPostsView.vue';
import MyPostEdit from '../views/MyPostEdit.vue';
import AccountSettingsView from '../views/AccountSettingsView.vue';
import VerifyEmailView from '../views/VerifyEmailView.vue';
import LoginForm from '../components/login-form.vue';
import RegisterForm from '../components/register-form.vue';
import ForgotPasswordForm from '../components/forgot-password-form.vue';
import ResetPasswordForm from '../components/reset-password-form.vue';

import { useUserStore } from '../stores/users';
import { useAppStore } from '../stores/app';

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
      component: LessonsView,
    },
    {
      path: '/lessons/:id', 
      component: LessonView
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
        },
      ]
    },
    {
      path: '/help/forgot-password',
      name: 'forgot-password',
      component: ForgotPasswordForm
    },
    {
      path: '/reset-password/:email/:expTimestamp/:token/:lang',
      name: 'reset-password',
      component: ResetPasswordForm
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
    },
    {
      path: '/account-settings',
      component: AccountSettingsView,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/verify-email/:email/:token/:lang',
      name: 'verification',
      component: VerifyEmailView,
      meta: {
        requireAuth: true
      }
    }
  ]
});

router.beforeEach(async (to, _) => {

  const appStore = useAppStore();
  if(appStore.appState === 'busy') return false;

  if(!to.meta.requireAuth) return true;

  const userStore = useUserStore();

  if(userStore.isAuthed === null) await userStore.getProfile();

  if(userStore.isAuthed) return true;
  else return {name: 'home'};

});

export default router;
