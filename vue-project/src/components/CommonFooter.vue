<template>
  <div>
    <div class="footer" :style="{background:color}">
      <router-link v-for="(obj,index) in title_list" :key="index" :to="obj.path" class="footer-box" @click.native="change(obj.id)">{{obj.name}}</router-link>
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
        created() {
            this.title_list.forEach((obj,index) => {
                if(obj.path === this.$route.path){
                    this.change(obj.id);
                }
            });
        },
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
