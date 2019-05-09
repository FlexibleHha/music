<template>
 <div class="recommend">
  <div class="slide-wrapper"></div>
  <div class="recommend-list">
    <h1 class="list-title">热门歌单推荐</h1>
    <ul></ul>
  </div>
 </div>
</template>

<script>
import { getRecommend } from 'api/recommend'
import { ERR_OK } from 'api/config'
export default {
  created() {
    this._getRecommend()    
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.data.slider)
        }
      })
    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index'
  .recommend
    position fixed
    top 88px
    width 100%
    .slide-wrapper
      position relative
      width 100%
      height 0
      padding-top 40%
      overflow hidden
    .recommend-list
      .list-title
        height 65px
        line-height 65px
        text-align center
        font-size $font-size-medium
        color $color-theme
</style>
