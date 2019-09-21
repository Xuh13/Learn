<template>
  <div>
    <h3>Test</h3>
    <div>{{$route.query.name}}</div>
    <router-link to="/test/test1/xuhang/single">Test1|</router-link>
    <router-link to="/test/test2">Test2|</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {

};
</script>

<style lang="scss" scoped>
</style>