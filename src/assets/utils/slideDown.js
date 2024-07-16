
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

export default function useSlideDown() {
	const currentScreen = ref(0);

	const goSlideDown = () => {
		currentScreen.value = 1;
		nextTick(() => {
			window.scrollTo({
				top: window.innerHeight,
				behavior: 'smooth',
			});
		});
	};

	const handleScroll = () => {
		if (window.scrollY === 0) {
			currentScreen.value = 0;
		} else if (window.scrollY >= window.innerHeight) {
			currentScreen.value = 1;
		}
	};

	onMounted(() => {
		window.addEventListener('scroll', handleScroll);
	});

	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll);
	});

	return {
		currentScreen,
		goSlideDown,
	};
}
