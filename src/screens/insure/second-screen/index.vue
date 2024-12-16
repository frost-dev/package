<template>
  <div class="YearEndReview YearEndReview-insure">
    <div class="YearEndReview-insure__wrap to-prev-slide-trigger">
      <Heading type="h2" className="YearEndReview__h2 insure">
        You're protected up to <br />
        <span> PHP {{ dataConvert.insureTotal }}</span> for only
        <span>PHP {{ dataConvert.insureAmount }}</span>
      </Heading>
      <div class="YearEndReview-insure__wrap__icon">
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
    <div>
      <div class="YearEndReview-insure__details">
        <div class="YearEndReview-insure__details-preamble">Your Plans</div>
        <div class="YearEndReview-insure__details-wrap">
          <div
            v-for="(item, index) in dataConvert.plans"
            :key="index"
            :class="
              'YearEndReview-insure__details-wrap-content ' +
              setPlanBackground(index)
            "
            :style="setPlanStyle(index)"
          >
            {{ item.frequency }} {{ item.name }}
          </div>
        </div>
      </div>
      <div class="YearEndReview-insure__chart-wrapper">
        <div class="YearEndReview-insure__chart-wrapper-title">
          You protected your GCash transactions with
        </div>
        <div class="YearEndReview-insure__chart-wrapper-chart">
          <div
            v-for="(item, index) in dataConvert.usecases"
            :key="index"
            style="width: 100%"
          >
            <div class="YearEndReview-insure__chart-wrapper-chart-item">
              <div
                class="YearEndReview-insure__chart-wrapper-chart-item-container"
                :style="setChartStyle(item['ep-breakdown'], index)"
              >
                <div
                  class="YearEndReview-insure__chart-wrapper-chart-item-frequency"
                >
                  {{ item['ep-breakdown'] }}
                </div>
              </div>
            </div>

            <div class="YearEndReview-insure__chart-wrapper-chart-item-label">
              {{ item['name'] }} <br />
              Protect
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="YearEndReview-insure__button-wrapper">
      <Button label="Next" href="#" type="next" :handleClick="onClickNext">
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
</template>

<script>
import './style.less';
import { Button, Heading, ShareTwoCol } from '../../../components/index';

export default {
  name: 'InsureUseCases',
  components: {
    Button,
    Heading,
    ShareTwoCol,
  },
  props: {
    data: {
      type: Object,
    },
    onClickNext: {
      type: Function,
    },
  },

  computed: {
    dataConvert() {
      const data = this.data;

      return {
        insureTotal: data.insureTotal,
        insureAmount: data.insureAmount,
        plans: data.plans,
        usecases: data.usecases,
      };
    },
    highestFrequency() {
      return Math.max(
        ...this.dataConvert.usecases.map((item) => item['ep-breakdown'])
      );
    },
    maxFrequency() {
      return Math.max(
        ...this.dataConvert.plans.map((item) => item['frequency'])
      );
    },
    isSinglePlan() {
      return this.dataConvert.plans.length === 1;
    },
  },
  methods: {
    setChartStyle(frequency, index) {
      const backgroundColors = ['#EFFFFD', '#D8F9F5', '#BAEFE9'];
      const backgroundColor = backgroundColors[index] || '#ffffff';

      const heightPercentage = `${
        (frequency / this.highestFrequency) * 100 + 5
      }%`;
      const height =
        frequency === this.highestFrequency
          ? '100%'
          : frequency <= 50
          ? '50%'
          : heightPercentage;
      const borderRadius =
        frequency === this.highestFrequency ? '6px 6px 0 0' : '0';

      return {
        height,
        backgroundColor,
        position: 'relative',
        borderRadius,
      };
    },
    setPlanStyle(index) {
      const frequency = this.dataConvert.plans[index].frequency;
      const height = `${300 + (frequency / this.maxFrequency) * (520 - 300)}px`;
      const alignItems = this.isSinglePlan
        ? 'center'
        : index === this.dataConvert.plans.length - 1
        ? 'flex-start'
        : 'center';
      let paddingTop = this.isSinglePlan
        ? '0px'
        : index === this.dataConvert.plans.length - 1
        ? '30px'
        : index === 0
        ? '30px'
        : '0px';

      if (this.dataConvert.plans.length == 2) {
        paddingTop = index === 1 ? '80px' : index === 0 ? '35px' : '0px';
      }

      return { height, alignItems, paddingTop };
    },
    setPlanBackground(index) {
      const classes = ['bg-ice-cold', 'bg-eastern-blue', 'bg-dark-aqua'];
      return classes[index % classes.length] || 'bg-ice-cold';
    },
  },
};
</script>
