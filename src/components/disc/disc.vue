<template>
  <transition name="slide">
    <music-list :songs="songs" :title="title" :bg-image="bgImage"></music-list>
  </transition>
</template>

<script>
import MusicList from "components/music-list/music-list";
import { getSongList } from "api/recommend";
import { ERR_OK } from "api/config";
import { mapGetters } from "vuex";
import { createSong, isValidMusic, processSongsUrl } from "common/js/song";
export default {
  data() {
    return {
      songs: []
    };
  },
  created() {
    this._getSongList();
  },
  computed: {
    title() {
      return this.disc.dissname;
    },
    bgImage() {
      return this.disc.imgurl;
    },
    ...mapGetters(["disc"])
  },
  methods: {
    _getSongList() {
      if (!this.disc.dissid) {
        return this.$router.push("/recommend");
      }
      getSongList(this.disc.dissid).then(res => {
        if (res.code === ERR_OK) {
          processSongsUrl(this._normalizeSongs(res.cdlist[0].songlist)).then(
            songs => {
              this.songs = songs;
            }
          );
        }
      });
    },
    _normalizeSongs(list) {
      let ret = [];
      list.forEach(musicData => {
        if (isValidMusic(musicData)) {
          ret.push(createSong(musicData));
        }
      });
      return ret;
    }
  },
  components: {
    MusicList
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
