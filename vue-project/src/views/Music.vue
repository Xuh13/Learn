<template>
  <div>
    <h1>Music</h1>
    <a-player
      :music="music"
      theme="#b7daff" 
      v-if="contral"
    ></a-player>
  </div>
</template>

<script>
import axios from "axios";
import VueAplayer from "vue-aplayer";
export default {
  components: {
    "a-player": VueAplayer
  },
  data() {
    return {
      flag: false,
      songList: [],
      contral: false
    };
  },
  methods: {
    refrash() {
      let obj = {};
      axios
        .get("https://api.imjad.cn/cloudmusic/?type=lyric&id=34497243")
        .then(res => {
          obj.lyric = res.data.lrc.lyric;
        })
        .catch(res => {
          console.log("FALSE");
        });
      axios
        .get("https://api.imjad.cn/cloudmusic/?type=song&id=34497243")
        .then(res => {
          obj.src = res.data.data[0].url;
          obj.id = res.data.data[0].id;
        })
        .catch(res => {
          console.log("FALSE");
        });
      axios
        .get("https://api.imjad.cn/cloudmusic/?type=detail&id=34497243")
        .then(res => {
          obj.pic = res.data.songs[0].al.picUrl;
          obj.title = res.data.songs[0].name;
          obj.artist = res.data.songs[0].ar[0].name;
        })
        .catch(res => {
          console.log("FALSE");
        });
      this.songList.push(obj);
    }
  },
  created() {
    this.refrash();
    // axios.all([refresh()])
    // .then(res =>{
    //   this.contral = true;
    // })
    // .catch(),
    
    console.log(this.$route.query.id)
  },
  computed: {
    music(){
      return this.songList[0]
    }
  }
};
</script>

<style lang="scss" scoped>
</style>