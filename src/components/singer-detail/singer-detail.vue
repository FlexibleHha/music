<template>
	<transition name="slide">
		<div class="singer-detail">
			歌手详情页
		</div>
	</transition>
</template>

<script>
	export default {
		
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable"
	.singer-detail
		position fixed
		top 0
		left 0
		right 0
		bottom 0
		background $color-background
		z-index 200
	.slide-enter-active, .slide-leave-active
		transition all 0.3s
	.slide-enter, .slide-leave-to
		transform translate3d(100%, 0, 0)
</style>
