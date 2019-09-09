import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main.vue';
import Test from './views/Test.vue';
import Test1 from './views/Test1.vue';
import Test2 from './views/Test2.vue';
import TestUrl from './views/TestUrl.vue';
import Redirect from './views/Redirect.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/main',
      name: 'main',
      component: Main,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      children: [
        {
          path: 'test1',
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
      path: '/testurl/:userid(\\d+)/:username',
      name: 'testurl',
      component: TestUrl,
    },
    {
      path: '/redirect/:userid/:username',
      redirect: '/testurl/:userid/:username',
    },
  ],
});
