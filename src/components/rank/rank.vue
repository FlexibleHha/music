<template>
  <div class="rank" ref="rank">
    <scroll :data="topList" class="toplist" ref="toplist">
      <ul>
        <li
          v-for="(item, index) in topList"
          :key="index"
          @click="selectItem(item)"
          class="item"
        >
          <div class="icon">
            <img v-lazy="item.picUrl" width="100" height="100" alt />
          </div>
          <ul class="songlist">
            <li
              class="song"
              v-for="(song, index) in item.songList"
              :key="index"
            >
              <span>{{ index + 1 }}</span>
              <span>{{ song.songname }}-{{ song.singer }}</span>
            </li>
          </ul>
        </li>
      </ul>
      <div class="loading-container">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import Scroll from "base/scroll/scroll";
import Loading from "base/loading/loading";
import { getTopList } from "api/rank";
import { ERR_OK } from "api/config";
import { playlistMixin } from "common/js/mixin";
import { mapMutations } from "vuex";

export default {
  mixins: [playlistMixin],
  data() {
    return {
      topList: []
    };
  },
  created() {
    this._getTopList();
  },
  methods: {
    handlePlayList(playList) {
      const bottom = playList.length > 0 ? "60px" : "";
      this.$refs.rank.style.bottom = bottom;
      this.$refs.toplist.refresh();
    },
    _getTopList() {
      getTopList().then(res => {
        if (res.code === ERR_OK) {
          this.topList = res.data.topList;
        }
      });
    },
    selectItem(item) {
      this.$router.push({
        path: `/rank/${item.id}`
      });
      this.setTopList(item);
    },
    ...mapMutations({
      setTopList: "SET_TOP_LIST"
    })
  },
  components: {
    Scroll,
    Loading
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';
@import '~common/stylus/mixin';

.rank {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .toplist {
    height: 100%;
    overflow: hidden;

    .item {
      display: flex;
      margin: 0 20px;
      padding-top: 20px;
      height: 100px;

      &:last-child {
        padding-bottom: 20px;
      }

      .icon {
        flex: 0 0 100px;
        width: 100px;
        height: 100px;
      }

      .songlist {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 20px;
        height: 100px;
        overflow: hidden;
        background-color: $color-highlight-background;
        color: $color-text-d;
        font-size: $font-size-small;

        .song {
          no-wrap();
          line-height: 26px;
        }
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translate(-50%);
    }
  }
}
</style>
