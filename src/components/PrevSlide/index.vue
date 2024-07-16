<template>
	<div
		class="prev-wrapper"
		ref="prevWrapperRef"
	>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'PrevSlide',
	props: {
		clickTarget: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			xDown: 0,
			yDown: 0,
			xDiff: 0,
			yDiff: 0,
		};
	},
	mounted() {
		this.$nextTick(() => {
			let prevWrapper = this.$refs.prevWrapperRef;
			let clickTarget = prevWrapper.querySelector(this.clickTarget);

			if (prevWrapper && clickTarget) {
				prevWrapper.addEventListener('touchstart', this.handleTouchStart);
				prevWrapper.addEventListener('touchmove', this.handleTouchMove);
				prevWrapper.addEventListener('touchend', this.handleSwipeUp);
				clickTarget.addEventListener('click', this.toNextSlide);
			}
		});
	},
	methods: {
		getTouches(e) {
			return e.touches || e.originalEvent.touches; // For jQuery compatibility
		},
		toNextSlide(e) {
			this.xDown = 0;
			this.yDown = 0;
			this.xDiff = 0;
			this.yDiff = 0;

			let prevWrapper = e.target.closest('.prev-wrapper');
			let nextWrapper = document.querySelector('.next-wrapper');

			prevWrapper.animate(
				{ transform: ['translateY(0%)', 'translateY(-100%)'] },
				{
					duration: 600, // Animation duration in milliseconds
					easing: 'cubic-bezier(0.25, 1, 0.5, 1)', // Easing function (e.g., 'ease-in', 'ease-out', 'cubic-bezier(0.25, 0.1, 0.25, 1)')
					fill: 'both', // Maintain the final state of the animation
				}
			);
			nextWrapper.animate(
				{ transform: ['translateY(0%)', 'translateY(-100%)'] },
				{
					duration: 600,
					easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
					fill: 'both',
				}
			);
		},
		toPrevSlide(e) {
			this.xDown = 0;
			this.yDown = 0;
			this.xDiff = 0;
			this.yDiff = 0;

			let nextWrapper = e.target.closest('.next-wrapper');
			let prevWrapper = document.querySelector('.prev-wrapper');

			prevWrapper.animate(
				{ transform: ['translateY(-100%)', 'translateY(0%)'] },
				{
					duration: 600, // Animation duration in milliseconds
					easing: 'cubic-bezier(0.25, 1, 0.5, 1)', // Easing function (e.g., 'ease-in', 'ease-out', 'cubic-bezier(0.25, 0.1, 0.25, 1)')
					fill: 'both', // Maintain the final state of the animation
				}
			);
			nextWrapper.animate(
				{ transform: ['translateY(-100%)', 'translateY(0%)'] },
				{
					duration: 600,
					easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
					fill: 'both',
				}
			);
		},
		handleTouchStart(e) {
			const firstTouch = this.getTouches(e)[0];
			this.xDown = firstTouch.clientX;
			this.yDown = firstTouch.clientY;
		},
		handleTouchMove(e) {
			if (!this.xDown || !this.yDown) {
				return;
			}

			const xUp = e.touches[0].clientX;
			const yUp = e.touches[0].clientY;

			this.xDiff = this.xDown - xUp;
			this.yDiff = this.yDown - yUp;
		},
		handleSwipeUp(e) {
			if (Math.abs(this.xDiff) < Math.abs(this.yDiff)) {
				// Most significant movement is vertical
				if (this.yDiff > 0) {
					// up swipe
					this.toNextSlide(e);
				}
			}

			this.xDown = null;
			this.yDown = null;
		},
		handleSwipeDown(e) {
			if (Math.abs(this.xDiff) < Math.abs(this.yDiff)) {
				// Most significant movement is vertical
				if (this.yDiff < 0) {
					// Down swipe
					this.toPrevSlide(e);
				}
			}

			this.xDown = null;
			this.yDown = null;
		},
	},
};
</script>
