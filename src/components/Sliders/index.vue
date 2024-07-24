<!-- Remember to put key in v-for items-->

<template>
	<div class="flashback-sliders-wrap">
		<div class="flashback-sliders">
			<div
				class="slider-container"
				:style="`background-color: ${getRGBA}`"
				v-for="screen in numberOfScreens"
			>
				<div class="slider-progress" :style="`background-color: ${color}`"></div>
			</div>
		</div>
		<div class="flashback-details">
			<div class="slider-screen-title" :style="`color: ${color}`">{{ title }}</div>
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				@click="onClose"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M12.638 4.63613C12.9894 4.28466 12.9894 3.71481 12.638 3.36334C12.2865 3.01186 11.7166 3.01186 11.3652 3.36334L8.00156 6.72694L4.63796 3.36334C4.28649 3.01186 3.71664 3.01186 3.36517 3.36334C3.01369 3.71481 3.01369 4.28466 3.36517 4.63613L6.72877 7.99973L3.36517 11.3633C3.01369 11.7148 3.01369 12.2847 3.36517 12.6361C3.71664 12.9876 4.28649 12.9876 4.63796 12.6361L8.00156 9.27252L11.3652 12.6361C11.7166 12.9876 12.2865 12.9876 12.638 12.6361C12.9894 12.2847 12.9894 11.7148 12.638 11.3633L9.27435 7.99973L12.638 4.63613Z"
					:fill="`${color}`"
				/>
			</svg>
		</div>
	</div>
</template>

<script>
import './style.less';

export default {
	name: 'ScreenSliders',
	props: {
		color: {
			type: String,
			default: '#FFFFFF'
		},		
		numberOfScreens: {
			type: Number,
			default: 10,
		},
		title: {
			type: String,
			default: 'Screen Title',
		},
		onClose: {
			type: Function,
			default() {
				return function () {
					console.log('close');
				};
			},
		},
	},
	data() {
		return {
			currentScreen: null,
		};
	},
	methods: {
		convertToRGBA(hex, opacity = 1){
			var c;
			if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
				c= hex.substring(1).split('');
				if(c.length== 3){
					c= [c[0], c[0], c[1], c[1], c[2], c[2]];
				}
				c= '0x'+c.join('');
				return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+`, ${opacity})`;
			}
			throw new Error('Bad Hex');
		},
	},
	computed: {
		getRGBA() {
			if(this.color) {
				return this.convertToRGBA(this.color, 0.2);
			} else {
				return this.convertToRGBA(this.color.default, 0.2);
			}
		}
	}
};
</script>
