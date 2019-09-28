<template>
  <div>
    <h1>Music</h1>
    <a-player
      :music ="{
        title: this.songList[0].title,
        src: this.songList[0].src,
        pic: this.songList[0].pic,
        id: this.songList[0].id,
        artist: this.songList[0].artist,
        lyric: this.songList[0].lyric,
      }" v-if="this.contral" :showLrc='true' :narrow="false" theme="#b7daff" mode="circulation" ref="player"></a-player>
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
      musicList: "",
      songList: [],
      title: '',
      src: '',
      pic: '',
      id: '',
      artist: '',
      lyric: '',
      contral: false,
    };
  },
  methods: {
    refrash() {
      let obj = {
        
      };
      axios
        .get("https://api.imjad.cn/cloudmusic/?type=lyric&id=32785674")
        .then(res => {
          console.log(res);
          obj.lyric = res.data.lrc.lyric;
        })
        .catch(res=>{
          console.log('FALSE');
        });
      axios
        .get("https://api.imjad.cn/cloudmusic/?type=song&id=32785674")
        .then(res => {
          obj.src = res.data.data[0].url;
          obj.id = res.data.data[0].id;
        })
        .catch(res=>{
          console.log('FALSE');
        });
      axios
        .get("https://api.imjad.cn/cloudmusic/?type=detail&id=32785674")
        .then(res => {
          obj.pic = res.data.songs[0].al.picUrl;
          obj.title = res.data.songs[0].name;
          obj.artist = res.data.songs[0].ar[0].name;
        })
        .catch(res=>{
          console.log('FALSE');
        });
      this.songList.push(obj);
      this.contral = true;
    }
  },
  created() {
    this.refrash();
  }
};
</script>

<style lang="scss" scoped>
</style>