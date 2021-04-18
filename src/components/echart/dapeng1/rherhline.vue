<template>
  <!-- 湿度 -->
  <div id="main1" style="height:1.55rem; width:4.25rem"></div>
</template>
<script>
import { mapState } from 'vuex'
const echarts = require('echarts/lib/echarts')
require('echarts/lib/component/grid')
require('echarts/lib/chart/line')
export default {
  data() {
    return {}
  },
  mounted() {
    this.drawLine()
  },
  watch: {
    skyHumidity: {
      handler() {
        this.drawLine()
      },
      deep: true,
    },
  },
  methods: {
    drawLine() {
      var chartDom = document.getElementById('main1')
      var myChart = echarts.init(chartDom)
      var option
      option = {
        color: ['#37a2da', '#1E90FF'],
        title: {
          text: '湿度曲线',
          textStyle: {
            fontSize: this.fontSize(0.14),
            color: '#DCDCDC',
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['空气湿度', '土壤湿度'],
          textStyle: {
            fontSize: this.fontSize(0.1),
            color: '#DCDCDC',
          },
        },
        grid: {
          left: '4%',
          right: '5.8%',
          bottom: '1%',
          top: '23%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          // data: ['10:22:30', '10:23:30', '10:24:30', '10:25:30', '10:26:30'],
          data: this.time,
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: this.fontSize(0.1),
              color: '#DCDCDC',
            },
          },
          axisLine: {
            lineStyle: {
              color: '#DCDCDC', //更改坐标轴颜色
            },
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} %',
            show: true,
            textStyle: {
              fontSize: this.fontSize(0.1),
              color: '#DCDCDC',
            },
          },
          axisLine: {
            lineStyle: {
              color: '#DCDCDC', //更改坐标轴颜色
            },
          },
        },
        series: [
          {
            name: '空气湿度',
            type: 'line',
            data: this.skyHumidity,
            smooth: true,
          },
          {
            name: '土壤湿度',
            type: 'line',
            data: this.soilHumidity,
            smooth: true,
          },
        ],
      }
      option && myChart.setOption(option)
    },
    fontSize(res) {
      // let docEl = document.documentElement
      this.clientWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      if (!this.clientWidth) return
      let fontSize = 100 * (this.clientWidth / 1920)
      return res * fontSize
    },
  },
  computed: {
    ...mapState({
      skyHumidity: (state) => {
        return state.humidity.skyHumidity
      },
      soilHumidity: (state) => {
        return state.humidity.soilHumidity
      },
      time: (state) => {
        return state.humidity.time
      },
    }),
  },
}
</script>
