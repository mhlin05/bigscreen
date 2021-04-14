<template>
  <div id="calculate" style="height:1.55rem; width:4.28rem"></div>
</template>
<script>
const echarts = require('echarts/lib/echarts');
require('echarts/lib/component/grid');
require('echarts/lib/chart/line');
export default {
  data () {
    return {
      clientWidth: 0
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
      var chartDom = document.getElementById('calculate');
      var myChart = echarts.init(chartDom);
      var option;

      var timeData = ['2021/4/1', '2021/4/2', '2021/4/3', '2021/4/4', '2021/4/5', '2021/4/6', '2021/4/7'];
      timeData = timeData.map(function (str) {
          return str.replace('2021/', '');
      });
      option = {
        color: [
          "#B0E0E6",
          "#87CEFA",
          "#37a2da",
          "#1E90FF"
        ],
        title: {
          text: '大棚平均温度、湿度图',
          left: 'left',
          textStyle: {
            fontSize : this.fontSize(0.12),
            color: '#DCDCDC'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            animation: false
          }
        },
        legend: {
          data: ['平均温度', '平均湿度'],
          left: this.fontSize(1.55),
          textStyle: {
            fontSize : this.fontSize(0.08),
            color: '#DCDCDC'
          }
        },
        grid: [{
          top: '18%',
          left: this.fontSize(0.22),
          right: this.fontSize(0.1),
          height: '30%'
        }, {
          left: this.fontSize(0.22),
          right: this.fontSize(0.1),
          top: '65%',
          height: '30%'
        }],
        xAxis: [
          {
            type: 'category',
            axisLabel: {
              show: true,
              textStyle: {
                fontSize : this.fontSize(0.08),
                color: '#DCDCDC'
              }
            },
            axisLine:{
              lineStyle:{
                color:'#DCDCDC' //更改坐标轴颜色
              }
            },
            boundaryGap: false,
            data: timeData
          },
          {
            gridIndex: 1,
            type: 'category',
            axisLabel: {
              show: true,
              textStyle: {
                fontSize : this.fontSize(0.08),
                color: '#DCDCDC'
              }
            },
            axisLine:{
              lineStyle:{
                color:'#DCDCDC' //更改坐标轴颜色
              }
            },
            boundaryGap: false,
            data: timeData,
          },
        ],
        yAxis: [
          {
            type: 'value',
            splitNumber : 2,
            axisLabel: {
              show: true,
              textStyle: {
                fontSize : this.fontSize(0.08),
                color: '#DCDCDC'
              }
            },
            axisLine:{
              lineStyle:{
                color:'#DCDCDC' //更改坐标轴颜色
              }
            },
          },
          {
            gridIndex: 1,
            type: 'value',
            splitNumber : 3,
            inverse: true,
            axisLabel: {
              show: true,
              textStyle: {
                fontSize : this.fontSize(0.08),
                color: '#DCDCDC'
              }
            },
            axisLine:{
              lineStyle:{
                color:'#DCDCDC' //更改坐标轴颜色
              }
            },
          }
        ],
        series: [
          {
            name: '平均温度',
            type: 'line',
            symbolSize: this.fontSize(0.08),
            data: [21,15,16,15,21,22,25]
          },
          {
            name: '平均湿度',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: this.fontSize(0.08),
            data: [0.3,0.4,0.1,0.88,0.56,0.66,0.4]
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