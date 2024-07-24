<template>
    <div class="YearEndReview-send-money-single">
        <Sliders
            :numberOfScreens="10"
            :title="'Send Money'"
            :onClose="handleBtnClick"
            :color="'#FFFFFF'"
        />
        <Heading
            type="h2"
            className="YearEndReview__h2 send-money"
        >
            Maliit man o malaki, thankful <span class="YearEndReview__span-send-new-line">pa rin sa iyong ipinadalang </span>
            <span class="YearEndReview__span-send-amount">PHP {{ dataConvert.amount }}</span> via <span class="YearEndReview__span-send-category">{{ dataConvert.topUseCase }}.</span>
            <div class="YearEndReview__span-wrap">
                That's <span class="YearEndReview__span-send-frequency"> {{ dataConvert.frequency }} times </span> to <span class="YearEndReview__span-send-users">{{ dataConvert.users }} users.</span>
            </div>
        </Heading>
        <Button
            label="Awesome! What's next?"
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
</template>

<script>
    import './style.less';
    import { Heading, Button, Sliders } from '../../components';

    export default {
        name: "SendMoney",
        components: {
            Heading,
            Button,
            Sliders,
        },
        props: {
            data: {
                type: Object,
                required: true,
            }
        },
        methods: {
            numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
            handleBtnClick() {
                console.log('clicked');
            },
            onClickNext() {
                console.log('next clicked');
            }
        },
        computed: {
            dataConvert() {
                const data = this.data;
                console.log('data: ', data);
                return {
                    amount: this.numberWithCommas(data['send-money-total']),
                    frequency: data['usecases'][0].frequency,
                    users: data['users'],
                    topUseCase: data['usecases'][0].name,
                }
            }
        }
    }
</script>