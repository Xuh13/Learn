<template>
  <div id="app">
    <Common-Header></Common-Header>
    <div>
      <router-link to="/Home">Home|</router-link>
      <router-link to="/about">About|</router-link>
      <router-link :to="{name:'mine',params:{name:'xuhang',age:20}}">Mine|</router-link>
      <router-link :to="{path:'/test',query:{name:'xuhang',age:20}}">Test|</router-link>
      <router-link :to="{path:'/my',query:{name:'xuhang',age:20}}">My</router-link>
      <button @click="go()">Go{{count}}</button>
      <button @click="add()">Add{{sum}}</button>
      <button @click="reduce()">Reduce</button>
      <button @click="addAction()">AddActions</button>
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
import CommonHeader from "./components/CommonHeader";
export default {
  components: {
    CommonHeader
  },
  methods: {
    go(){
      this.$router.push('/Home');
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['sum']),
  },
  methods: {
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction']),
  }
};
</script>

<style lang="scss">
#app {
  text-align: center;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 2s ease;
}
.fade-enter-to{
  opacity: 1;
}
// .fade-leave{
//   transform: translateX(0);
// }
// .fade-leave-active{
//   transition: translate 1s ease;
// }
// .fade-leave-to{
//   transform: translateX(100%);
// }
</style>
