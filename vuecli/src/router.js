/* eslint-disable no-console */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mine from './views/Mine.vue';
import Test from './views/Test.vue';
import Test1 from './views/Test1.vue';
import Test2 from './views/Test2.vue';
import Error from './views/Error.vue';

Vue.use(Router);


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/Mine',
    name: 'mine',
    component: Mine,
  },
  {
    path: '/About',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
    alias: '/my',
    children: [{
      path: 'test1/:name/:job',
      name: 'test1',
      component: Test1,
    },
    {
      path: 'test2',
      name: 'test2',
      component: Test2,
    },
    ],
  },
  {
    path: '/Home',
    redirect: '/',
    beforeEnter: (to, from, next) => {
      // eslint-disable-next-line no-console
      console.log(to);
      console.log(from);
      console.log(next);
    },
  },
  {
    path: '*',
    component: Error,
  },
  ],
});

// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from);
//   console.log(next);
// })
export default router;
