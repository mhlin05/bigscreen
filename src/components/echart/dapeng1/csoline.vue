<template>
  <!-- 空气含量 -->
  <div id="main2" style="height:1.55rem; width:4.25rem"></div>
</template>
<script>
const echarts = require('echarts/lib/echarts')
require('echarts/lib/component/grid')
require('echarts/lib/chart/line')
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var chartDom = document.getElementById('main2')
      var myChart = echarts.init(chartDom)
      var option
      option = {
        color: ['#37a2da', '#1E90FF', '#87CEFA', '#B0E0E6'],
        title: {
          text: '空气含量',
          textStyle: {
            fontSize: this.fontSize(0.14),
            color: '#DCDCDC',
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          left: '25%',
          data: ['CO2', 'TVOC', 'SO2', 'O2'],
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
          scale: true,
          type: 'value',
          axisLabel: {
            formatter: '{value} mg/m3',
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
            name: 'CO2',
            type: 'line',
            data: this.co2,
            smooth: true,
          },
          {
            name: 'TVOC',
            type: 'line',
            data: this.tvoc,
            smooth: true,
          },
          {
            name: 'SO2',
            type: 'line',
            data: this.so2,
            smooth: true,
          },
          {
            name: 'O2',
            type: 'line',
            data: this.o2,
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
      co2: (state) => {
        return state.gas.co2
      },
      tvoc: (state) => {
        return state.gas.tvoc
      },
      so2: (state) => {
        return state.gas.so2
      },
      o2: (state) => {
        return state.gas.o2
      },
      time: (state) => {
        return state.gas.time
      },
    }),
  },
  watch: {
    co2: {
      handler() {
        this.drawLine()
      },
    },
  },
}
</script>
