<template>
	<div class="YearEndReview YearEndReview-invest">
		<div class="YearEndReview-invest__wrap to-prev-slide-trigger">
			<Heading
				type="h2"
				className="YearEndReview__h2 invest"
			>
				Ang diverse na ng portfolio natin, ah!
			</Heading>

			<div class="YearEndReview-invest__wrap-icon">
				<svg
					width="23"
					height="25"
					viewBox="0 0 23 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						opacity="0.5"
						d="M1.79297 11.7218L11.3968 2.11792L21.0007 11.7218"
						stroke="#F1F8D6"
						stroke-width="2.74396"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
		</div>

		<div class="YearEndReview-invest__investments">
			<div
				v-for="(item, index) in dataConvert.portfolio"
				:key="index"
				:style="{ backgroundColor: item.bgColor, width: item.size, color: item.color, height: item.size }"
				:class="'YearEndReview-invest__investments-item' + (dataConvert.portfolio.length > 1 ? ' ' + item.type.toLowerCase().replace(/\s+/g, '_') : '')"
			>
				<img
					:src="item.image"
					class="YearEndReview-invest__investments-item__image"
				/>
				<div class="YearEndReview-invest__investments-item__preamble">Top {{ item.type }}</div>
				<div class="YearEndReview-invest__investments-item__title">{{ item.name }}</div>
			</div>
		</div>

		<div>
			<div class="YearEndReview-invest__button-wrapper">
				<Button
					label="Next"
					href="#"
					type="next"
					:handleClick="onClickNext"
				>
					<svg
						width="25"
						height="24"
						viewBox="0 0 25 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.25 17.2485L15.5 11.9985L10.25 6.74853"
							stroke="#FFFFFF"
							stroke-width="1.5625"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Button>
			</div>
		</div>
	</div>
</template>

<script>
import './style.less';
import { Button, Heading, ShareTwoCol } from '../../../components/index';

export default {
	name: 'InvestUseCases',
	components: {
		Button,
		Heading,
		ShareTwoCol,
	},
	props: {
		data: {
			type: Array,
		},
		onClickNext: {
			type: Function,
		},
	},
	computed: {
		dataConvert() {
			const data = this.data;

			return {
				portfolio: data,
			};
		},
	},
};
</script>
