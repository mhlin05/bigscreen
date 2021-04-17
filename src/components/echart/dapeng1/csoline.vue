<template>
  <div id="main2" style="height:1.55rem; width:4.25rem"></div>
</template>
<script>
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
          data: ['10:22:30', '10:23:30', '10:24:30', '10:25:30', '10:26:30'],
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
            data: [0.1, 0.3, 0.6, 0.7, 0.4],
            smooth: true,
          },
          {
            name: 'TVOC',
            type: 'line',
            data: [0.2, 0.3, 0.4, 0.7, 0.7],
            smooth: true,
          },
          {
            name: 'SO2',
            type: 'line',
            data: [0.7, 0.4, 0.6, 0.6, 0.8],
            smooth: true,
          },
          {
            name: 'O2',
            type: 'line',
            data: [0.3, 0.6, 0.2, 0.7, 0.9],
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
}
</script>
