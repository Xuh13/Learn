<template>
  <div id="app">
    <common-header></common-header>
    <common-foot></common-foot>

    <div>
      <router-link to="/"></router-link>
      <router-link to="/test">测试</router-link>
      <router-link to="/test/test1">测试子路由1</router-link>
      <router-link to="/test/test2">测试子路由2</router-link>
    </div>
  </div>
</template>
<script>
import CommonHeader from "./components/CommonHeader";
import CommonFoot from "./components/CommonFoot";
export default {
  components: {
    CommonHeader,
    CommonFoot,
  }
};
</script>
<style lang="scss">
</style>
