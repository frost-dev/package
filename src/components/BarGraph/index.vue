<template>
	<div class="YearEndBarGraph">
		<div class="YearEndBarGraph__title">{{ label }}</div>
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
					<div class="YearEndBarGraph__bar-value">
						{{ bar['ep-breakdown'] }}
						
					</div>
					<div v-if="index === 0" class="YearEndBarGraph__bar-value value-label">
						{{ valueLabel }}
					</div>
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
		valueLabel: {
			type: String,
		},	
		label: {
			type: String,
			required: true,
		},
		categories: {
			type: Array,
			required: true,
		},
		colors: {
			type: Array,
            required: true,
		}
	},
	data() {
		return {
			bars: [],
		};
	},
	computed: {
		categoriesWithIcons() {
			return this.categories.map((category) => {
				let iconPath;

				switch(category.name) {
					case 'Express send':
						iconPath = require('../../assets/images/icons/express-send.svg');
                        break;
                    case 'Bank Transfer':
						iconPath = require('/src/assets/images/icons/bank-transfer.svg');
						break;
					case 'Padala':
						iconPath = require('../../assets/images/icons/gcash-padala.svg');
						break;
					case 'Shopping':
						iconPath = require('../../assets/images/icons/shopping.svg');
						break;
					case 'Load':
						iconPath = require('../../assets/images/icons/load.svg');
						break;
					case 'Send':
						iconPath = require('../../assets/images/icons/express-send-receive.svg');
						break;
					default: 
						iconPath = require('../../assets/images/icons/send.svg');
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
