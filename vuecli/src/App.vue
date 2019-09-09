<template>
  <div>
    <div>
      <router-link to="/main">我的</router-link>|
      <router-link to="/test">测试</router-link>|
      <router-link :to="{name:'test1', params:{name: 'xuhang',age: 20}}">测试子路由1</router-link>|
      <router-link to="/test/test2">测试子路由2</router-link>|
      <router-link to="/testurl/123/madhat">URL</router-link>
      <router-link to="/redirect/1243/madhat13">Redirect</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import CommonHeader from "./components/CommonHeader";
import CommonFoot from "./components/CommonFoot";
export default {
  components: {
    CommonHeader,
    CommonFoot
  }
};
</script>
<style lang="scss">
</style>
