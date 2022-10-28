import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'LingXuan' },
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: 'About LingXuan', description: '我是Lingxuan' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/sport',
    name: 'sport',
    meta: { title: 'Sport Life', description: '休閒運動' },
    component: () => import('../views/SportView.vue'),
  },
  {
    path: '/volunteer',
    name: 'volunteer',
    meta: { title: 'Volunteer Life', description: '志工活動' },
    component: () => import('../views/VolunteerView.vue'),
  },
  {
    path: '/university',
    name: 'university',
    meta: { title: 'University Life', description: '大學專題' },
    component: () => import('../views/UniversityView.vue'),
  },
  {
    path: '/learning',
    name: 'learning',
    meta: { title: 'Learning Life', description: '學習歷程' },
    component: () => import('../views/LearningView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  window.document.description = to.meta.description;
  next();
});

export default router;
