<template>
  <div class="slider">
    <div class="slider-group">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot"></span>
    </div>
  </div>
</template>

<script>
import { addClass } from 'common/js/dom'
import BScroll from 'better-scroll'
export default {
  name: 'slider',
  data() {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  components: {}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable'
  .slider
    min-height 1px
    .slider-group
      position relative
      overflow hidden
      .slider-item
        float left
        box-sizing border-box
        overflow hidden
        text-align center
</style>
