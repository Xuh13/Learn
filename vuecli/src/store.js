import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
    num: 2,
  },
  mutations: {
    add(state) {
      // eslint-disable-next-line no-plusplus
      state.count++;
    },
    reduce(state) {
      // eslint-disable-next-line no-plusplus
      state.count--;
    },
  },
  getters: {
    sum(state) {
      return state.count * state.num;
    },
  },
  actions: {
    addAction({ commit }) {
      setTimeout(() => {
        commit('add');
      }, 1000);
    },
  },
});
