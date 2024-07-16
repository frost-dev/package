<template>
	<div class="YearEndBarGraph">
		<div class="YearEndBarGraph__title">Points Breakdown</div>
		<div class="YearEndBarGraph__bar-graph">
			<div
				v-for="(bar, index) in bars"
				:key="index"
				class="YearEndBarGraph__bar"
				:style="{
					height: `${bar.height}%`,
					backgroundColor: colors[index % colors.length],
					transitionDelay: `${index * 0.1}s`,
				}"
			>
				<div
					class="YearEndBarGraph__bar-content"
					:class="{ 'fade-in': bar.height !== 2 }"
				>
					<div class="YearEndBarGraph__bar-icon">
						<img
							:src="bar.icon"
							alt="Icon"
						/>
					</div>
					<div class="YearEndBarGraph__bar-value">{{ bar['ep-breakdown'] }}</div>
				</div>
				<div class="YearEndBarGraph__bar-label">{{ bar.name }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import './style.less';

export default {
	name: 'BarGraph',
	props: {
		categories: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			colors: ['#96C754', '#F0BD45', '#138744'],
			bars: [],
		};
	},
	computed: {
		categoriesWithIcons() {
			return this.categories.map((category) => {
				let iconPath;
				if (category.name === 'Express send') {
					iconPath = require('../../assets/images/icons/send.svg');
				} else if (category.name === 'Bank Transfer') {
					iconPath = require('../../assets/images/icons/bank-transfer.svg');
				} else if (category.name === 'Padala') {
					iconPath = require('../../assets/images/icons/gcash-padala.svg');
				}
				return {
					...category,
					icon: iconPath,
				};
			});
		},
	},
	mounted() {
		this.initializeBars();
	},
	methods: {
		initializeBars() {
			this.bars = this.categoriesWithIcons.map((category) => ({
				...category,
				height: 2,
			}));

			this.bars.forEach((bar, index) => {
				setTimeout(() => {
					this.$set(bar, 'height', this.calculateHeight(bar['ep-breakdown']));
				}, index * 100);
			});
		},
		calculateHeight(points) {
			const maxPoints = Math.max(...this.categories.map((category) => category['ep-breakdown']));
			return (points / maxPoints) * 100;
		},
	},
};
</script>
