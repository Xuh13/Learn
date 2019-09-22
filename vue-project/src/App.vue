<template>
  <div id="app">
    <Common-Header></Common-Header>
    <div class="container">
      <transition name="index">
        <router-view class="index"></router-view>
      </transition>
    </div>
    <Common-Footer></Common-Footer>
  </div>
</template>

<script>
    import CommonHeader from './components/CommonHeader';
    import CommonFooter from './components/CommonFooter';
    export default {
        components:{
          CommonHeader,
          CommonFooter,
        },
    };
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container{
    margin: 1rem 0 1.4rem 0;
    overflow: hidden;
}
.index-enter {
  opacity: 0;
}
.index-enter-active {
  transition: opacity 2s ease;
}
.index-enter-to {
  opacity: 1;
}
</style>
