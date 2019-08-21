<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box ref="searchBox" @query="onQueryChange"></search-box>
    </div>
    <div class="shortcut-wrapper">
      <scroll>
        <div>
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li class="item" v-for="(item, index) in hotKey" :key="index">
                <span>{{item.k}}</span>
              </li>
            </ul>
          </div>
          <div class="search-history">
            <h1 class="title">
              <span class="text"></span>
              <span>
                <i class="icon-clear"></i>
              </span>
            </h1>
            <search-list></search-list>
          </div>
        </div>
      </scroll>
    </div>
    <div class="search-result">
      <suggest></suggest>
    </div>
    <confirm ref="confirm"></confirm>
    <router-view></router-view>
  </div>
</template>

<script>
import SearchBox from "base/search-box/search-box";
import SearchList from "base/search-list/search-list";
import Scroll from "base/scroll/scroll";
import Confirm from "base/confirm/confirm";
import Suggest from "components/suggest/suggest";
import { getHotKey } from "api/search";
import { ERR_OK } from "api/config";
export default {
  data() {
    return {
      hotKey: []
    };
  },
  methods: {
    _getHostKey() {
      getHotKey().then(res => {
        if (res.code === ERR_OK) {
          this.hotKey = res.data.hotKey.slice(0, 10);
        }
      });
    },
    onQueryChange() {}
  },
  components: {
    SearchBox,
    SearchList,
    Scroll,
    Confirm,
    Suggest
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';
@import '~common/stylus/mixin';

.search {
  .search-box-wrapper {
    margin: 20px;
  }

  .short-wrapper {
    position: fixed;
    top: 178px;
  }
}
</style>
