<template>
	<div class="recommend" ref="recommend">
		<div class="recommend-content">
			<!--轮播 -->
			<div class="slider-wrapper" v-if="recommends.length">
				<div class="slider-content">
					<slider>
						<div v-for="(item, index) in recommends" :key="index">
							<a :href="item.linkUrl">
								<img :src="item.picUrl" />
							</a>
						</div>
					</slider>
				</div>
			</div>
			<!-- 推荐列表 -->
			<div class="recommend-list">
				<h1 class="list-title">热门歌单推荐</h1>
				<ul></ul>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		getRecommend
	} from 'api/recommend'
	import {
		ERR_OK
	} from 'api/config'
	import Slider from 'base/slider/slider'
	// import Scroll from 'base/scroll/scroll'
	export default {
		data() {
			return {
				recommends: [],
				discList: []
			};
		},
		created() {
			this._getRecommend();
		},
		methods: {
			_getRecommend() {
				getRecommend().then(res => {
					if (res.code === ERR_OK) {
						this.recommends = res.data.slider;
						console.log(this.recommends)
					}
				});
			}
		},
		components: {
			Slider,
			// Scroll
		}
	};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import '~common/stylus/variable'
	.recommend
		position fixed
		width 100%
		top 88px
		bottom 0
		.recommend-content
			height 100%
			overflow hidden
			.slider-wrapper
				position relative
				width 100%
				height 0
				padding-top 40%
				overflow hidden
				.slider-content
					position absolute
					top 0
					left 0
					width 100%
					height 100%
			.recommend-list
				.list-title
					height 65px
					line-height 65px
					text-align center
					font-size $font-size-medium
					color $color-theme
</style>
