<template>
	<div
		class="YearEndReview YearEnd-two-tiles"
		style="background: linear-gradient(0deg, #0164b7, #0164b7), linear-gradient(360deg, rgba(0, 124, 220, 0) 53.91%, #007cdc 100%)"
		ref="contentToCapture"
	>
		<div class="YearEnd-two-tiles__wrap">
			<div class="YearEnd-two-tiles__content">
				<div class="YearEnd-two-tiles__title">{{ dataConvert.title }}</div>
				<div class="YearEnd-two-tiles__description">{{ dataConvert.description }}</div>
				<div class="YearEnd-two-tiles__blocks">
					<div
						v-for="(block, index) in dataConvert.blocks"
						:key="index"
						class="YearEnd-two-tiles__block"
						:style="{ backgroundColor: getBlockColor(dataConvert.type, index) }"
					>
						<img :src="getBlockImage(dataConvert.type, index)" />
						<div class="YearEnd-two-tiles__block-title">{{ getBlockTitle(dataConvert.type, index) }}</div>

						<p v-if="index === 0">
							You used this service <span>{{ block.count }}</span> times this year.
						</p>
						<p v-else-if="index === 1">
							You {{ dataConvert.type === 'Send' ? 'sent' : 'received' }} money to <span>{{ block.count }}</span> different users!
						</p>
					</div>
				</div>
			</div>
			<div class="YearEnd-Share-Footer">
				<img :src="require('../../../assets/images/icons/gcash-share-logo.svg')" />
				<div>Flashback 2024</div>
			</div>
		</div>
	</div>
</template>

<script>
import './style.less';

export default {
	name: 'ShareTwoCol',
	props: {
		title: String,
		description: String,
		blocks: Object,
		type: String,
		bg: String,
	},

	computed: {
		dataConvert() {
			return {
				title: this.title,
				description: this.description,
				blocks: [
					{ name: 'Frequency', count: this.blocks.frequency },
					{ name: 'Users', count: this.blocks.users },
				],
				type: this.type,
				bg: this.bg,
			};
		},
	},

	methods: {
		getBlockColor(type, index) {
			const colorSets = {
				Send: ['#58ADEF', '#164B86'],
				Receive: ['#33B8DD', '#EF9A36'],
			};

			return type && colorSets[type] ? colorSets[type][index % colorSets[type].length] : '';
		},
		getBlockImage(type, index) {
			const IconSet = {
				Send: [require('../../../assets/images/plain/express-send.svg'), require('../../../assets/images/plain/profile.svg')],
				Receive: [require('../../../assets/images/plain/request-money.svg'), require('../../../assets/images/plain/profile.svg')],
			};
			return type && IconSet[type] ? IconSet[type][index % IconSet[type].length] : '';
		},
		getBlockTitle(type, index) {
			const TitleSet = {
				Send: ['Express Send', 'Express Send'],
				Receive: ['Receive Money', 'Your Circle'],
			};
			return type && TitleSet[type] ? TitleSet[type][index % TitleSet[type].length] : '';
		},
	},
};
</script>

<!-- Usage -->
<!-- 
<ShareTwoCol
		title="Send Money"
		description="Send lang ng send para tuluy-tuloy ang saya sa susunod na taon!"
		:blocks="[
			{ used: 20, count: 150 },
			{ used: 50, count: 300 },
		]"
		type="Send"
        bg="background: linear-gradient(0deg, #0164b7, #0164b7), linear-gradient(360deg, rgba(0, 124, 220, 0) 53.91%, #007cdc 100%);"
	/> -->
