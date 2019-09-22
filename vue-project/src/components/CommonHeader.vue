<template>
  <div>
    <div class="header" :style="{background:color}">{{title}}</div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
export default {
    computed: {
        ...mapState(['title','color','title_list']),
    },
    methods: {
        ...mapMutations(['change']),
    },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  position: fixed;
  top: 0;
  z-index: 2;
}
</style>