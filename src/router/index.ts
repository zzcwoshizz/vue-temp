import Vue from 'vue';
import Router, { Route } from 'vue-router';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';

import routes from './routes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  base: '/',
  routes,
});

router.beforeEach(async (to: Route, _: Route, next: any) => {
  NProgress.start();

  next();
});

router.afterEach((to: Route) => {
  NProgress.done();
});

export default router;
