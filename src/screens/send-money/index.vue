<template>
	<div>
		<PrevSlide :clickTarget="'.learn-more-container'">
			<div class="YearEndReview-send-money-cover">
				<Sliders
					:numberOfScreens="10"
					:title="'Send'"
					:onClose="handleClickClose"
					:color="'#FFFFFF'"
				/>
				<div class="YearEndReview-send__content">
					<Heading
						type="h2"
						className="YearEndReview__h2 send-intro"
					>
						Here’s one big “Salamat!” <br />
						sa lahat ng Send Money mo.
						<span class="YearEndReview-send__span-amount">PHP {{ dataConvert.amount }}</span>
					</Heading>
					<LearnMore />
				</div>
			</div>
		</PrevSlide>
		<NextSlide :clickTarget="'.YearEndReview-send-money__wrap__icon'">
			<SendMoneyUseCases
				:data="dataConvert.usecase"
				:onClickNext="handleClickNext"
			/>
		</NextSlide>
	</div>
</template>

<script>
import './style.less';
import { Heading, Sliders, PrevSlide, NextSlide, Button, LearnMore } from '../../components';
import SendMoneyUseCases from './second-screen/index.vue';
import { numberWithCommas } from '../../assets/utils/currencyFormatter.js';
export default {
	name: 'SendMoney',
	components: {
		Heading,
		Sliders,
		Button,
		LearnMore,
		SendMoneyUseCases,
		PrevSlide,
		NextSlide,
	},
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
	methods: {
		handleClickNext() {
			console.log('click next');
		},
		handleClickClose() {
			console.log('click close');
		},
	},
	computed: {
		dataConvert() {
			const data = this.data;

			return {
				amount: numberWithCommas(data['send-money-total']),
				usecase: {
					frequency: data.frequency,
					users: data.users,
					usecases: data.usecases,
				},
			};
		},
	},
};
</script>
