export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '@/pages/index.vue'),
    meta: { title: 'Home' },
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "404" */ '@/pages/404.vue'),
    meta: { title: '404 Not Found' },
  },
  {
    path: '*',
    redirect: '/404',
  },
];
