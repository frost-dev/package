<template>
	<div class="gforest-rank-container">
		<img
			:src="getImageUrl(rankEmblem)"
			class="gforest-rank-emblem"
		/>
		<div class="gforest-rank-details">
			<div class="gforest-rank-content-wrapper">
				<div class="gforest-tier">Tier {{ tier }}</div>
				<div class="gforest-rank-name">{{ rank }}</div>
				<div class="gforest-rank-trees">{{ treesPlanted }}/25 trees planted</div>
			</div>
			<div class="gforest-rank-divider"></div>
			<div class="gforest-energy-points">{{ energyPoints }} energy points</div>
		</div>
	</div>
</template>

<script>
import './style.less';

export default {
	name: 'GForestRank',
	props: {
		tier: {
			type: String,
			default: 'Tier 3',
		},
		rankEmblem: {
			type: String,
			default: '',
		},
		rank: {
			type: String,
			default: 'Forest Guardian',
		},
		treesPlanted: {
			type: String,
			default: '100',
		},
		energyPoints: {
			type: String,
			default: '2000',
		},
	},
	methods: {
		getImageUrl(name) {
			return require(`../../assets/images/plain/${name}`);
		},
	},
};
</script>
