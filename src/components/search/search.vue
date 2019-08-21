<template>
  <div class="search">
    <div class="search-box-wrapper"></div>
    <div class="shortcut-wrapper">
      <scroll>
        <div>
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li class="item">
                <span>{{}}</span>
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
export default {
  data() {
    return {};
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

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
