<template>
  <div>
    <!-- 年度开工率 -->
    <Echart
      :options="options"
      id="bottomLeftChart"
      height="6.25rem"
      width="100%"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data () {
    return {
      options: {},
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    },
  },
  watch: {
    cdata: {
      handler (newData) {
        // console.log(newData);
        this.options = {
          title: {
            text: "",
          },
          tooltip: {
            trigger: "axis",
            backgroundColor: "rgba(255,255,255,0.1)",
            axisPointer: {
              type: "shadow",
              label: {
                show: true,
                backgroundColor: "#7B7DDC"
              }
            }
          },
          legend: {
            data: ["温度", "湿度","噪音","pm25","pm10","光照"],
            textStyle: {
              color: "#B4B4B4"
            },
            top: "0%"
          },
          grid: {
            x: "5.5%",
            width: "88%",
            y: "4%"
          },
          xAxis: {
            data: newData.timeDate.map(function(str){return str.replace(" ","\n")}),
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "rgba(255,255,255,.8)",
              fontSize: 10,
            },
          },
          
          yAxis: [
            {
              // 是否是脱离 0 值比例。
              scale:true,
              splitLine: { show: false },
              axisLine: {
                lineStyle: {
                  color: "#B4B4B4"
                }
              },

              axisLabel: {
                formatter: function(v)
                {
                  return v.toFixed(2);
                }
                
              },
             
            },
            {
              // 是否是脱离 0 值比例。
              scale:true,
              splitLine: { show: false },
              axisLine: {
                lineStyle: {
                  color: "#B4B4B4"
                }
              },
              axisLabel: {
                formatter: function(v)
                {
                  return v.toFixed(2);
                },
                
              },
            }
          ],
          series: [
            //日照
            {
              name: "光照",
              type: "line",
              smooth: true,
              showAllSymbol: true,
              symbol: "emptyCircle",
              symbolSize: 8,
              yAxisIndex: 1,
              itemStyle: {
                normal: {
                  color: "#ff804a"
                }
              },
              data: newData.luxDate
            },
            //温度
            {
              name: "温度",
              type: "line",
              barWidth: 10,
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#ffbf00" },
                    { offset: 1, color: "#ffbf00" }
                  ])
                }
              },
              data: newData.temDate
            },
            //湿度
            {
              name: "湿度",
              type: "line",
              barGap: "-100%",
              barWidth: 10,
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#01ffff" },
                    { offset: 0.2, color: "#01ffff" },
                    { offset: 1, color: "#01ffff" }
                  ])
                }
              },
              z: -12,
              data: newData.wetDate
            },
            //噪音
             {
              name: "噪音",
              type: "line",
              barGap: "-100%",
              barWidth: 10,
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgba(156,107,211,0.8)" },
                    { offset: 0.2, color: "rgba(156,107,211,0.5)" },
                    { offset: 1, color: "rgba(156,107,211,0.2)" }
                  ])
                }
              },
              z: -12,
              data: newData.noiseDate
            },
            //pm25
            {
              name: "pm25",
              type: "bar",
              barWidth: 10,
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#0088ff" },
                    { offset: 1, color: "#0088ff" }
                  ])
                }
              },
              data: newData.pm25
            },
            //pm10
            {
              name: "pm10",
              type: "bar",
              barGap: "-100%",
              barWidth: 10,
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#01ffff" },
                    { offset: 0.2, color: "#01ffff" },
                    { offset: 1, color: "#01ffff" }
                  ])
                }
              },
              z: -12,
              data: newData.pm10
            },
          ]
        }
      },
      immediate: true,
      deep: true
    },
  },
}
</script>

<style lang="scss" scoped>
</style>