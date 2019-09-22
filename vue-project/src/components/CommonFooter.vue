<template>
  <div>
    <div class="footer">
      <router-link to="/Movie" class="footer-box">电影</router-link>
      <router-link to="/Book" class="footer-box">图书</router-link>
      <router-link to="/Music" class="footer-box">音乐</router-link>
      <router-link to="/Photo" class="footer-box">图片</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  height: 1.4rem;
  width: 100%;
  background-color: #008de1;
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
