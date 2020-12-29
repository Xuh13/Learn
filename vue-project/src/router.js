import Vue from 'vue';
import Router from 'vue-router';
import Error from './views/Error.vue';
// eslint-disable-next-line import/no-unresolved
import Gobang from './views/gobang.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Error,
    },
    {
      path: '/gobang',
      component: Gobang,
    }
  ],
});
