<template>
  <div>
    <PrevSlide :clickTarget="'.learn-more-container'">
      <div class="YearEndReview-insure-cover">
        <Sliders
          :numberOfScreens="10"
          :title="'Insure'"
          :onClose="handleClickClose"
          :color="'#FFFFFF'"
        />
        <div class="YearEndReview-insure__content">
          <Heading type="h2" className="YearEndReview__h2 insure-intro">
            You're protected up to
            <span class="YearEndReview-insure__span-amount"
              >PHP {{ dataConvert.amount }}</span
            >
          </Heading>
          <LearnMore />
        </div>
      </div>
    </PrevSlide>
    <NextSlide :clickTarget="'.YearEndReview-insure__wrap__icon'">
      <InsureUseCases :data="dataConvert.data" :onClickNext="handleClickNext" />
    </NextSlide>
  </div>
</template>

<script>
import './style.less';
import {
  Heading,
  Sliders,
  PrevSlide,
  NextSlide,
  Button,
  LearnMore,
} from '../../components';
import { numberWithCommas } from '../../assets/utils/currencyFormatter.js';
import InsureUseCases from './second-screen/index.vue';

export default {
  name: 'Insure',
  components: {
    Heading,
    Sliders,
    Button,
    LearnMore,
    InsureUseCases,
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
        amount: numberWithCommas(data['insure-total']),
        data: {
          insureTotal: numberWithCommas(data['insure-total']),
          insureAmount: numberWithCommas(data['insure-amount']),
          plans: data['insure-plans'],
          usecases: data['usecases'],
        },
      };
    },
  },
};
</script>
