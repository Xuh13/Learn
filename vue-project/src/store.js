import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: '电影',
    color: '#008de1',
    loading: false,
    title_list: [
      {
        id: 0,
        name: '电影',
        path: '/movie',
        color: '#008de1',
      },
      {
        id: 1,
        name: '图书',
        path: '/book',
        color: '#FFC300',
      },
      {
        id: 2,
        name: '音乐',
        path: '/music',
        color: '#C20C0C',
      },
      {
        id: 3,
        name: '照片',
        path: '/photo',
        color: '#4BB7BE',
      },
    ],
  },
  mutations: {
    change(state, a) {
      state.title = state.title_list[a].name;
      state.color = state.title_list[a].color;
    },
  },
  actions: {

  },
});
