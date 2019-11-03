<template>
  <div>
    <ul class="playlist">
      <li
        class="playlist_li"
        v-for="(obj,index) in playlist"
        :key="index"
        @click="goDetail(obj.ID)"
      >
        <img :src="obj.coverImgUrl" alt />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      playlist: [],
      playlistID: [
        99450508,
        450226487,
        33275157,
        306919554,
        168277353,
        19470560,
        160941141,
        77060608
      ]
    };
  },
  methods: {
    gain(i) {
      let obj = {
        coverImgUrl: "",
        tracks: []
      };
      axios
        .get(
          "https://api.imjad.cn/cloudmusic/?type=playlist&id=" +
            this.playlistID[i]
        )
        .then(res => {
          obj.coverImgUrl = res.data.playlist.coverImgUrl;
          obj.ID = this.playlistID[i];
        })
        .catch(res => {
          console.log("FALSE");
        });
      this.playlist.push(obj);
    },
    goDetail(ID) {
      this.$router.push({
        path: "/music",
        query: {
          id: ID
        }
      });
    }
  },
  created() {
    for (var i = 0; i < this.playlistID.length; i++) {
      this.gain(i);
    }
  }
};
</script>

<style lang="scss" scoped>
.playlist {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .playlist_li {
    width: 50%;
    height: 3.75rem;
    img {
      height: 3.75rem;
      width: 3.75rem;
    }
  }
}
</style>