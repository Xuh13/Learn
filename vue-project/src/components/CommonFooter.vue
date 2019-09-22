<template>
  <div>
    <div class="footer" :style="{background:color}">
      <router-link to="/Movie" class="footer-box"><div @click="change(0)">电影</div></router-link>
      <router-link to="/Book" class="footer-box"><div @click="change(1)">图书</div></router-link>
      <router-link to="/Music" class="footer-box"><div @click="change(2)">音乐</div></router-link>
      <router-link to="/Photo" class="footer-box"><div @click="change(3)">图片</div></router-link>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
export default {
    computed: 
        mapState(['title','color','title_list']),
    methods: 
        mapMutations(["change"]),
};
</script>

<style lang="scss" scoped>
.footer {
  height: 1.4rem;
  width: 100%;
  text-align: center;
  line-height: 1rem;
  position: fixed;
  bottom: 0;
  display: flex;
  z-index: 2;
  overflow: hidden;
}
.footer-box {
  flex: 1;
  border: 1px solid #000000;
  line-height: 1.4rem;
  text-align: center;
  text-decoration: none;
  color: #000000;
  &.router-link-exact-active {
    color: #ffffff;
  }
}
</style>
