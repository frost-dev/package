<template>
  <div>
    <PrevSlide :clickTarget="'.learn-more-container'">
      <div class="YearEndReview-invest-cover">
        <Sliders
          :numberOfScreens="10"
          :title="'Invest'"
          :onClose="handleClickClose"
          :color="'#FFFFFF'"
        />

        <div class="YearEndReview-invest__chart">
          <div
            v-for="(item, index) in dataConvert.usecases"
            :key="index"
            :class="
              'YearEndReview-invest__chart-item' +
              (dataConvert.usecases.length > 1
                ? ' ' + item.name.toLowerCase().replace(/\s+/g, '_')
                : '')
            "
          >
            <div class="YearEndReview-invest__chart-item__preamble">
              {{ item.name }} Earnings
            </div>
            <div class="YearEndReview-invest__chart-item__amount">
              PHP {{ numberWithCommas(item.frequency) }}
            </div>
            <div class="YearEndReview-invest__chart-item__interest">
              {{ item.percentage }} % interest
            </div>
          </div>
        </div>

        <div class="YearEndReview-invest__content">
          <Heading type="h2" className="YearEndReview__h2 invest-intro">
            Way to go! Your 2024 investments reached
            <span class="YearEndReview-invest__span-amount"
              >PHP {{ dataConvert.amount }}</span
            >
          </Heading>
          <LearnMore />
        </div>
      </div>
    </PrevSlide>
    <NextSlide :clickTarget="'.YearEndReview-invest__wrap-icon'">
      <InvestUseCases
        :data="dataConvert.portfolio"
        :onClickNext="handleClickNext"
      />
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
import InvestUseCases from './second-screen/index';
export default {
  name: 'Insure',
  components: {
    Heading,
    Sliders,
    Button,
    LearnMore,
    InvestUseCases,
    PrevSlide,
    NextSlide,
  },
  data() {
    return {
      portfolioData: {
        gfunds: {
          image: require('../../assets/images/plain/port-gfunds-1.svg'),
          color: '#016C72',
          bgColor: '#B6F7DE',
          size: '404px',
        },
        gstocks_ph: {
          image: require('../../assets/images/plain/port-local-stocks.svg'),
          color: '#FFFFFF',
          bgColor: '#0EA2A8',
          size: '382px',
        },
        gcrypto: {
          image: require('../../assets/images/plain/port-gfunds-2.svg'),
          color: '#62EDF2',
          bgColor: '#14676B',
          size: '382px',
        },
      },
    };
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
    numberWithCommas(value) {
      return numberWithCommas(value);
    },
  },
  computed: {
    dataConvert() {
      const data = this.data;

      const dataMapping = this.portfolioData;

      return {
        amount: numberWithCommas(data['investments']),
        usecases: data['usecases'],
        portfolio: data['portfolio'].map((port) => {
          const type = port.type.toLowerCase().replace(/\s+/g, '_');
          const mapping = dataMapping[type];

          return {
            ...port,
            ...mapping,
          };
        }),
      };
    },
  },
};
</script>
