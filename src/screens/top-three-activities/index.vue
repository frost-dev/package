<template>
	<div>
		<PrevSlide :clickTarget="'.learn-more-container'">
			<div class="YearEndReview-top-three-activities">
				<Sliders
					:numberOfScreens="10"
					:title="'Your Top 3'"
					:onClose="handleBtnClick"
					:color="'#FFFFFF'"
				/>
				<div class="YearEndReview-top-three-activities__content">
					<div class="YearEndReview-top-three-activities__preamble">
						Here are your
					</div>
					<div class="YearEndReview-top-three-activities__title"> 
						Top 3 Activities!
					</div>
				</div>
				<LearnMore />
			</div>
		</PrevSlide>
		<NextSlide :clickTarget="'.YearEndReview-top-three-activities__heading'">
			<TopThreeActivitiesGraph :data="dataConvert.useCases"/>
		</NextSlide>
	</div>
</template>

<script>
import './style.less';
import { Button, Heading, BarGraph, Sliders, LearnMore, PrevSlide, NextSlide } from '../../components';
import TopThreeActivitiesGraph from './second-screen/index.vue';

export default {
	name: 'YearEndLaunchScreen',
	components: {
		Button,
		Heading,
		BarGraph,
		Sliders,
		LearnMore,
		PrevSlide,
		NextSlide,
		TopThreeActivitiesGraph,
	},
    props: {
		data: {
			required: true,
		},
    },
	data() {
		return {
			colors: ['#9771EB','#3782F1', '#42A8F5']
		}
	},
	computed: {
		dataConvert() {
			const data = this.data;

			return {
				useCases: data['usecases'],
			};
		},
	},
	methods: {
		handleBtnClick: function () {
			console.log('clicked')
		}
	}
};
</script>
