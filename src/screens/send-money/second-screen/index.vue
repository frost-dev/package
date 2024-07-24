<template>
	<div class="YearEndReview YearEndReview-send-money">
		<div class="YearEndReview-send-money__wrap to-prev-slide-trigger">
			<Heading
				type="h2"
				className="YearEndReview__h2 send"
			>
				<span>{{ dataConvert.frequency }} times </span> na padala to <span>{{ dataConvert.users }} users! 🤯 </span>
			</Heading>
			<div class="YearEndReview-send-money__wrap__icon">
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

		<div
			class="YearEndReview-send-money__timeline timeline-container"
			@scroll="handleScroll"
			ref="overflowElement"
		>
			<div class="YearEndReview-send-money__floating">
				<div
					ref="scrollableElement"
					class="scroller"
				>
					<div class="timeline-start-image">
						<img :src="require('../../../assets/images/icons/send-paper-plane.svg')" />
					</div>

					<div class="usecase-container">
						<div class="timeline-dash">
							<img :src="require('../../../assets/images/icons/timeline-dash.svg')" />
						</div>
						<div class="usecase-floating">
							<div
								v-for="(usecase, index) in dataConvert.useCases"
								:key="index"
								:class="['timeline-usecase', { 'first-item': index === 0 }]"
								:style="addSpacing(index)"
							>
								<div class="YearEndReview-send-money__timeline-item-wrapper">
									<div class="YearEndReview-send__list">
										<div class="YearEndReview-send__list-icon-wrap">
											<img
												:src="usecase.image"
												alt=""
												class="YearEndReview-send__list-icon usecase-image"
											/>
										</div>
										<div class="YearEndReview-send__list-content usecase-content">
											<div class="YearEndReview-send__list-content__title">{{ usecase.frequency }}</div>
											<div class="YearEndReview-send__list-content__preamble">{{ usecase.name }}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="fader-top"
			:class="{ visible: isFaderTopVisible }"
		></div>
		<div
			class="fader-bottom"
			:class="{ visible: isFaderBottomVisible }"
		></div>

		<div
			class="YearEndReview-personal-stats__cta"
			v-if="!isFaderBottomVisible"
		>
			<Button
				label="Share"
				href="#"
				type="share"
				:handleClick="onShare"
			>
				<svg
					width="19"
					height="18"
					viewBox="0 0 19 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M11.7478 3.673C10.8779 3.673 10.1728 4.37815 10.1728 5.248C10.1728 6.11785 10.8779 6.823 11.7478 6.823C12.6176 6.823 13.3228 6.11785 13.3228 5.248C13.3228 4.37815 12.6176 3.673 11.7478 3.673ZM8.82275 5.248C8.82275 3.63257 10.1323 2.323 11.7478 2.323C13.3632 2.323 14.6728 3.63257 14.6728 5.248C14.6728 6.86343 13.3632 8.173 11.7478 8.173C10.9731 8.173 10.2688 7.87186 9.74546 7.38025L8.50677 8.02013C8.6152 8.3259 8.67422 8.65506 8.67422 8.998C8.67422 9.34747 8.61293 9.68263 8.50052 9.99331L9.72756 10.6327C10.2526 10.1311 10.9642 9.823 11.7478 9.823C13.3632 9.823 14.6728 11.1326 14.6728 12.748C14.6728 14.3634 13.3632 15.673 11.7478 15.673C10.1323 15.673 8.82275 14.3634 8.82275 12.748C8.82275 12.4053 8.8817 12.0763 8.99002 11.7707L7.7549 11.1271C7.23124 11.6206 6.52555 11.923 5.74922 11.923C4.13379 11.923 2.82422 10.6134 2.82422 8.998C2.82422 7.38257 4.13379 6.073 5.74922 6.073C6.53235 6.073 7.24361 6.38077 7.76862 6.88195L8.99779 6.247C8.88453 5.93528 8.82275 5.59885 8.82275 5.248ZM5.74922 7.423C4.87937 7.423 4.17422 8.12815 4.17422 8.998C4.17422 9.86785 4.87937 10.573 5.74922 10.573C6.61907 10.573 7.32422 9.86785 7.32422 8.998C7.32422 8.12815 6.61907 7.423 5.74922 7.423ZM10.1728 12.748C10.1728 11.8781 10.8779 11.173 11.7478 11.173C12.6176 11.173 13.3228 11.8781 13.3228 12.748C13.3228 13.6178 12.6176 14.323 11.7478 14.323C10.8779 14.323 10.1728 13.6178 10.1728 12.748Z"
						fill="white"
					/>
				</svg>
			</Button>
			<Button
				label="What’s Next?"
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
						stroke="#E6F8FF"
						stroke-width="1.5625"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</Button>
		</div>
		<div
			ref="sharePreview"
			style="position: absolute; top: -9999px; left: -9999px"
		>
			<ShareTwoCol
				ref="yearEndReview"
				title="Send Money"
				description="Send lang ng send para tuluy-tuloy ang saya sa susunod na taon!"
				:blocks="{
					frequency: dataConvert.frequency,
					users: dataConvert.users,
				}"
				type="Send"
				bg="background: linear-gradient(0deg, #0164b7, #0164b7), linear-gradient(360deg, rgba(0, 124, 220, 0) 53.91%, #007cdc 100%);"
			/>
		</div>
	</div>
</template>

<script>
import './style.less';
import { Button, Heading, ShareTwoCol } from '../../../components/index';

import sharePreview from '../../../mixins/sharePreview';

export default {
	name: 'SendMoneyUseCases',
	components: {
		Button,
		Heading,
		ShareTwoCol,
	},
	data() {
		return {
			usecaseIcon: {
				express_send: require('../../../assets/images/usecases/express-send.svg'),
				bank_transfer: require('../../../assets/images/usecases/bank-transfer.svg'),
				send_with_a_clip: require('../../../assets/images/usecases/send-with-a-clip.svg'),
				kkb: require('../../../assets/images/usecases/kkb.svg'),
				send_gift: require('../../../assets/images/usecases/send-gift.svg'),
				gcash_padala: require('../../../assets/images/usecases/gcash-padala.svg'),
			},
			isFaderTopVisible: false,
			isFaderBottomVisible: false,
			lastScrollTop: 0,
			scrollDisabled: false,
		};
	},
	props: {
		// onShare: {
		// 	type: Function,
		// 	required: true,
		// },
		onClickNext: {
			type: Function,
			required: true,
		},
		data: {
			type: Object,
			required: true,
		},
	},
	mounted() {
		this.checkScrollStatus();
		const scrollableElement = this.$refs.scrollableElement;
		scrollableElement.addEventListener('scroll', this.handleScroll);
	},
	watch: {
		scrollDisabled(newVal) {
			const overflowElement = this.$refs.overflowElement;
			if (newVal) {
				overflowElement.style.overflowY = 'hidden';
			} else {
				overflowElement.style.overflowY = 'auto';
			}
		},
	},
	computed: {
		dataConvert() {
			const data = this.data;
			const iconMapping = this.usecaseIcon;

			if (data.usecases.length > 5 && !this.scrollDisabled) {
				this.isFaderBottomVisible = true;
			} else {
				this.isFaderBottomVisible = false;
			}

			return {
				frequency: data['frequency'],
				users: data['users'],
				useCases: data['usecases'].map((usecase) => {
					const formattedName = this.formattedUseCase(usecase.name);
					return {
						...usecase,
						image: iconMapping[formattedName] || 'default/image/path.jpg',
					};
				}),
			};
		},
	},
	methods: {
		formattedUseCase(name) {
			return name.toLowerCase().replace(/\s+/g, '_');
		},
		addSpacing(index) {
			const length = this.dataConvert.useCases.length;
			let marginBottom = '70px';
			let marginLeft = '0';

			if (index === 0) {
				marginBottom = '70px';
				marginLeft = '0';
			} else if (index === length - 1) {
				marginBottom = '0';
				marginLeft = '175px';
			} else if ((index + 1) % 4 === 0 || (index + 2) % 4 === 0) {
				marginBottom = '82px';
				marginLeft = index > 0 && index < 3 ? '135px' : '160px';
			} else {
				marginBottom = '70px';
				marginLeft = index > 0 && index < 3 ? '90px' : '165px';
			}

			return {
				marginBottom: marginBottom,
				marginLeft: marginLeft,
			};
		},
		handleScroll(event) {
			const scrollTop = event.target.scrollTop;

			if (this.data.usecases.length <= 5 || this.scrollDisabled) {
				event.target.scrollTop = this.lastScrollTop;
				this.isFaderTopVisible = false;
				this.isFaderBottomVisible = false;
				return;
			}

			this.isFaderTopVisible = scrollTop > this.lastScrollTop;

			if (!this.isFaderTopVisible && this.data.usecases.length > 5) {
				this.isFaderBottomVisible = true;
			} else {
				this.isFaderBottomVisible = false;
			}

			this.lastScrollTop = scrollTop;
		},
		checkScrollStatus() {
			const scrollerHeight = this.$refs.scrollableElement.clientHeight;
			const windowHeight = window.innerHeight;

			windowHeight >= scrollerHeight ? (this.scrollDisabled = true) : (this.scrollDisabled = false);
		},
	},
	beforeDestroy() {
		const scrollableElement = this.$refs.scrollableElement;
		scrollableElement.removeEventListener('scroll', this.handleScroll);
	},
	mixins: [sharePreview],
};
</script>
