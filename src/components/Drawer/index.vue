<template>
	<div
		class="drawer"
		:class="{ open: isOpen, 'fade-out': !isOpen && isVisible }"
		@transitionend="handleTransitionEnd"
	>
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import './style.less';
import { ref, watch } from 'vue';

export default {
	name: 'PullUpDrawer',
	props: {
		isOpen: {
			type: Boolean,
			required: true,
		},
	},
	setup(props, { emit }) {
		const isVisible = ref(false);

		const closeDrawer = () => {
			emit('update:isOpen', false);
		};

		const handleTransitionEnd = () => {
			if (!props.isOpen) {
				isVisible.value = false;
			}
		};

		watch(
			() => props.isOpen,
			(newVal) => {
				if (newVal) {
					isVisible.value = true;
				}
			}
		);

		return {
			isVisible,
			closeDrawer,
			handleTransitionEnd,
		};
	},
};
</script>
