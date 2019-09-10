<template>
  <div>
    <div>
      <router-link to="/main">我的</router-link>|
      <router-link to="/test">测试</router-link>|
      <router-link :to="{name:'test1', params:{name: 'xuhang',age: 20}}">测试子路由1</router-link>|
      <router-link to="/test/test2">测试子路由2</router-link>|
      <router-link to="/testurl/123/madhat">URL</router-link>
      <router-link to="/redirect/1243/madhat13">Redirect</router-link>|
      <button @click="goback">Back</button>|
      <button @click="goto">Next</button>
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
  },
  methods: {
    goback(){
      this.$router.go(-1);
    },
    goto(){
      this.$router.go(1);
    }
  },
  data() {
    return {
      movie:[
        {
          name: '碧蓝之海',
          runDate: '2019.09.09',
          count: 12
        },
        {
          name: '日在校园',
          runDate: '2016.01.23',
          count: 12
        },
        {
          name: '高木',
          runDate: '2000.04.21',
          count: 12
        },
        {
          name: '碧蓝之海',
          runDate: '2019.09.09',
          count: 12
        },
        {
          name: '碧蓝之海',
          runDate: '2019.09.09',
          count: 12
        },
        {
          name: '碧蓝之海',
          runDate: '2019.09.09',
          count: 12
        },
        {
          name: '碧蓝之海',
          runDate: '2019.09.09',
          count: 12
        },
      ]
    }
  },
};

</script>
<style lang="scss">
</style>
