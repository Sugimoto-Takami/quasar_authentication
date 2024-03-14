import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/FirstLayout.vue'),
  },
  {
    path: '/register',
    component: () => import('pages/RegisterPage.vue'),
    name: 'register'
  },
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue'),
    name: 'login'
  },
  {
    path: '/main',
    component: () => import('pages/MainPage.vue'),
    name: 'main',
    meta: { requestAuth: true}
  },



  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
