<template>
	<div>
		<PrevSlide :clickTarget="'.learn-more-container'">
			<div class="gforest-cover">
				<Sliders
					:numberOfScreens="10"
					:title="'Trees Planted'"
					:onClose="onClose"
				/>

				<div class="gforest-cover-header">
					You planted
					<span class="gforest-cover-highlight trees">{{ dataConvert[0].treesPlanted }} trees </span>
					<div class="gforest-sub-header reduced">
						and helped reduce
						<span class="gforest-cover-highlight">{{ dataConvert[0].carbonAvoided }}g of carbon emissions!</span>
					</div>
				</div>

				<div class="gforest-wrapper">
					<GForestRank
						:rankEmblem="'gforest-rank-forest-guardian.png'"
						:tier="dataConvert[0].rankNumber"
						:rank="dataConvert[0].rankName"
						:treesPlanted="dataConvert[0].treesPlanted"
						:energyPoints="dataConvert[0].epCollected"
					/>

					<LearnMore />
				</div>
			</div>
		</PrevSlide>
		<NextSlide :clickTarget="'.YearEndReview-personal-stats-heading__icon'">
			<gforestGraphs
				:data="dataConvert[1].data"
				:onClickNext="onClose"
			/>
		</NextSlide>
	</div>
</template>

<script>
import './style.less';
import { Sliders, GForestRank, LearnMore, PrevSlide, NextSlide } from '../../components';
import gforestGraphs from './second-screen/index.vue';

export default {
	name: 'GForestPersonalStats',
	components: {
		Sliders,
		GForestRank,
		LearnMore,
		PrevSlide,
		NextSlide,
		gforestGraphs,
	},
	props: {
		data: {
			required: true,
		},
	},
	methods: {
		onClose() {
			console.log('close');
		},
		clickedLearnMore() {
			console.log('Learn more clicked');
		},
	},
	computed: {
		dataConvert() {
			const data = this.data;

			return [
				{
					treesPlanted: data['0']['trees-planted'],
					epCollected: data['0']['ep-collected'],
					carbonAvoided: data['0']['carbon-avoided'],
					rankNumber: data['0']['forest-rank-number'],
					rankName: data['0']['forest-rank-name'],
					rankDenominator: data['0']['forest-rank-denominator'],
				},
				{
					data: data['1'].data,
				},
			];
		},
	},
};
</script>
