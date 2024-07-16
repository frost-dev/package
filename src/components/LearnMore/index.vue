<template>
	<div class="learn-more-container to-next-slide-trigger">
		<div class="learn-more-label">Learn more</div>
		<img src="../../assets/images/icons/learn-more-down-arrow.svg" />
	</div>
</template>

<script>
import './style.less';

export default {
	name: 'LearnMore',
	mounted() {
		this.handleTouchStart = this.$parent.handleTouchStart;
		this.handleSwipeUp = this.$parent.handleSwipeUp;
	},
	data() {
		return {
			handleTouchStart: null,
			handleSwipeUp: null,
		};
	},
};
</script>
