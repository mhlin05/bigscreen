<template>
  <div id="main3" style="height:1.55rem; width:4.25rem"></div>
</template>
<script>
const echarts = require('echarts/lib/echarts');
require('echarts/lib/component/grid');
require('echarts/lib/chart/line');
export default {
  data () {
    return {
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
      var chartDom = document.getElementById('main3');
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        color: [
          "#37a2da",
          "#1E90FF",
        ],
      title: {
        text: 'PM曲线',
        textStyle: {
          fontSize : this.fontSize(0.14),
          color: '#DCDCDC'
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['PM10', 'PM2_5'],
        textStyle: {
          fontSize : this.fontSize(0.1),
          color: '#DCDCDC'
        }
      },
      grid: {
        left: '4%',
        right: '5.8%',
        bottom: '1%',
        top:'23%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['10:22:30', '10:23:30', '10:24:30', '10:25:30', '10:26:30'],
        axisLabel: {
          show: true,
          textStyle: {
            fontSize : this.fontSize(0.1),
            color: '#DCDCDC'
          }
        },
        axisLine:{
          lineStyle:{
            color:'#DCDCDC' //更改坐标轴颜色
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} ug/m3',
          show: true,
          textStyle: {
            fontSize : this.fontSize(0.1),
            color: '#DCDCDC'
          }
        },
        axisLine:{
          lineStyle:{
            color:'#DCDCDC' //更改坐标轴颜色
          }
        }
      },
      series: [
        {
            name: 'PM10',
            type: 'line',
            data: [20, 30, 33, 10, 4],
            smooth: true
        },
        {
            name: 'PM2_5',
            type: 'line',
            data: [1, 22, 83, 44, 25],
            smooth: true
        }
      ]
    };
      option && myChart.setOption(option);
    },
    fontSize(res) {
      // let docEl = document.documentElement
      this.clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth
      if (!this.clientWidth) return
      let fontSize = 100 * (this.clientWidth / 1920)
      return res*fontSize
    }
  }
}
</script>