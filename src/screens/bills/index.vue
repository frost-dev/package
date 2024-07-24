<template>
    <div class="YearEndReview-bills">
        <Sliders
            :numberOfScreens="10"
            :title="'Bills'"
            :onClose="handleBtnClick"
            :color="'#225F8C'"
        />
        <div class="YearEndReview-bills__content">
            <Heading
                type="h2"
                className="YearEndReview__h2 bills"
            >
                Ayos! At ito ang total
                amount ng paid bills mo.
                <span class="YearEndReview-bills__span-amount">PHP {{ dataConvert.amount }}</span>
            </Heading>
            <div class="YearEndReview-bills__description">
                Your Top Biller is <span> {{ dataConvert.topBilller }}! </span>
            </div>
        </div>

        <div class="YearEndReview-bills__categories">
            <div class="YearEndReview-bills__wrap" v-for="biller in dataConvert.categories">
                <div class="YearEndReview-bills__item">{{ biller.name }}</div>
                <div class="YearEndReview-bills__amount">{{  numberWithCommas(biller.amount) }}</div>
            </div>
        </div>
        
        <div class="YearEndReview__share-cta">
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
						fill="#225F8C"
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
						stroke="#225F8C"
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
			<ShareFourCol ref="yearEndReview" />
		</div>

    </div>
</template>

<script>
    import './style.less';
    import { Heading, Sliders, ShareFourCol, Button } from '../../components';

    import sharePreview from '../../mixins/sharePreview';

    export default {
        name: 'Receive',
        components: {
            Heading,
            Sliders,
            ShareFourCol,
            Button,
        },
        props: {
            data: {
                type: Object,
            },
            // onClickNext() {
            //     console.log('click');
            // },
        },
        methods: {
            numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
            handleBtnClick() {
                console.log('clicked');
            },
            onClickNext() {
                console.log('clicked');
            }
        },
        computed: {
            dataConvert() {
                const data = this.data;
                
                return {
                    amount: this.numberWithCommas(data["pay-bills-total"]),
                    topBilller: data["top-biller"],
                    categories: data["top-biller-categories"],
                }
            },
        },
        mounted() {
            // this.generateImage();
        },
        mixins: [sharePreview],
    }
</script>