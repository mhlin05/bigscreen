<template>
  <!-- 温度 
      "T":"-23.6" ,    //空气温度 零下23.6摄氏度
          "E_T":"12.6",        //土壤温度 12.6摄氏度-->
  <div id="main" style="height:1.55rem; width:4.25rem"></div>
</template>
<script>
import { mapState } from 'vuex'
import Request from '@/utils/request.js'
const echarts = require('echarts/lib/echarts')
require('echarts/lib/component/grid')
require('echarts/lib/chart/line')
export default {
  data() {
    return {}
  },
  watch: {
    soilTemp: {
      handler() {
        this.drawLine()
      },
      deep: true,
    },
  },
  mounted() {
    this.drawLine()
    // this.getData()
  },
  methods: {
    // 绘制图表
    drawLine() {
      let option = {
        color: ['#37a2da', '#1E90FF'],
        title: {
          text: '温度曲线',
          textStyle: {
            fontSize: this.fontSize(0.14),
            color: '#DCDCDC',
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['空气温度', '土壤温度'],
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
          // data: ['10:22:30', '10:23:30', '10:24:30', '10:25:30', '10:26:30'],
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
            formatter: '{value} °C',
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
            name: '空气温度',
            type: 'line',
            // data: [31, 32, 33, 34, 35],
            data: this.skyTemp,
            smooth: true,
          },
          {
            name: '土壤温度',
            type: 'line',
            data: this.soilTemp,
            // data: [31, 22, 23, 34, 25],
            smooth: true,
          },
        ],
      }
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)

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
    async getData() {
      // 'http://116.62.9.209:8080/testBackend/api/greenHouseNode/queryByuusid?uusid=HYMY2001&pageSize=10&currentPage=1'
      // 先获取最新一页是哪页
      const { data: res } = await Request({
        url:
          'api/greenHouseNode/queryByuusid?uusid=HYMY2001&pageSize=10&currentPage=1',
        method: 'get',
      })
      if (res.code === 20000) {
        console.log(res)
        // 请求最新的数据
        const { data: res2 } = await Request({
          url:
            'api/greenHouseNode/queryByuusid?uusid=HYMY2001&pageSize=10&currentPage=' +
            res.data.totalPages,
          method: 'get',
        })
        if (res2.code === 20000) {
          console.log(1)
        }
      }
    },
  },
  computed: {
    ...mapState({
      soilTemp: (state) => {
        return state.tetline.soilTemp
      },
      skyTemp: (state) => {
        return state.tetline.skyTemp
      },
      time: (state) => {
        return state.tetline.time
      },
    }),
  },
}
</script>
