<template>
  <div>
    <ul class="movie_list">
      <li v-for="(obj,index) in movieList" :key="index" class="movie_list_li">
        <img :src="obj.images.medium" alt class="movie_list_li_img" />
        <div class="movie_list_li_txt">
          <div class="movie_list_li_txt_name">{{obj.original_title}}</div>
          <p>{{obj.collect_count}}已收藏</p>
          <p>
            演员：
            <span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}}</span>
          </p>
          <p>上映时间：{{obj.mainland_pubdate}}</p>
        </div>
      </li>
    </ul>
    <div class="turn" v-if="loading"></div>
  </div>
</template>

<script>
var a;
import axios from "axios";
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
export default {
  data() {
    return {
      movieList: [],
      begin: 0
    };
  },
  computed: {
        ...mapState(['loading']),
  },
  methods: {
    refresh(num) {
      console.log(num);
      axios
        .get(
          "https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=" +
            num +
            "&count=10"
        )
        .then(res => {
          this.movieList = [...this.movieList, ...res.data.subjects];
          loading = false;
        })
        .catch(res => {
          console.log("FALSE");
        });
    }
  },
  created() {
    this.refresh(this.begin);
    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      let clinetHeight = document.documentElement.clientHeight;
      let height = document.documentElement.scrollHeight;
      console.log(parseInt(scrollTop + clinetHeight), height);
      if (
        scrollTop + clinetHeight - height > -1 &&
        scrollTop + clinetHeight - height < 1
      ) {
        this.begin += 10;
        loading = true;
        this.refresh(this.begin);
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.movie_list {
  width: 100%;
  display: flex;
  flex-direction: column;
  .movie_list_li {
    width: 100%;
    flex: 1;
    display: flex;
    border-bottom: 1px solid #333;
    .movie_list_li_img {
      padding: 0.2rem;
      width: 2rem;
      float: left;
    }
    .movie_list_li_txt {
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: left;
      padding-left: 0.1rem;
      .movie_list_li_txt_name {
        padding-top: 0.2rem;
        font-size: 0.5rem;
      }
    }
  } 
}
.turn {
    width: 0.2rem;
    height: 0.2rem;
    background: aqua;
    animation: turn 1s linear infinite;
    margin: 100px auto;
  }
  @keyframes turn {
    0% {
      -webkit-transform: rotate(0deg);
    }
    25% {
      -webkit-transform: rotate(90deg);
    }
    50% {
      -webkit-transform: rotate(180deg);
    }
    75% {
      -webkit-transform: rotate(270deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
</style>