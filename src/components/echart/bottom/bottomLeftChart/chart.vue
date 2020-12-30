<template>
  <div>
    <!-- 年度开工率 -->
    <Echart
      :options="options"
      id="bottomLeftChart"
      height="5.5rem"
      
      width="100%"
    ></Echart>
    <!-- height="6.25rem" -->
  </div>
</template>

<script>
// chart负责监听和数据渲染

//引入封装的组件
import Echart from "@/common/echart";
export default {
  //定义配置数据
  data() {
    return {
      options: {},
    };
  },

  //声明组件
  components: {
    Echart,
  },
  
  //接收数据
  props: {
    
    cdata: {
      type: Object,
      default: () => ({}),
    },
  },
  // 进行监听，也可以使用 computed 计算属性实现此功能
  watch: {
    cdata: {
      handler(newData) {
        // console.log(newData.lineData);
        // alert(this.options);
        this.options = {
          // 这里编写ECharts 配置
          title: {
            // text: "fffff",
            // x:'center',
            // text:"摄氏度",
          },
          toolbox:{
            show:true,
            orient:"vertical",
            feature:{

              
              myTool1: {
                show: true,
                title: '德清电厂1',
                icon: 'path://M458.1 435.9v-265l107.2-107v434.2l-107.2-62.2z m0 416.7V579.1l107.2-53.5v433.9L458.1 852.6z',
                onclick:()=>{
                   
                    // this.$parent.getData_as_Index('2');
                    this.$emit('getdata1');
                }
            },
              myTool2: {
                show: true,
                title: '德清电厂2',
                icon: 'path://"M257.7 171.6L383 64.2h260.1l54.8 54.9-54.8 52.4H257.7z m0 662.8V525.8L365 579.4v255.1L311.3 888l-53.6-53.6z m24.5-323.2l100.8-58h260.1l101.2 58-101.2 49.4H383l-100.8-49.4z m46 394.1l54.8-52.4h282.5l102.4 107.3H383l-54.8-54.9z m332.3-469V190l53.7-53.5 53.7 53.5v308.6l-107.4-62.3z',
                
                
                options:{
                
                },
                onclick:()=>{
                   // alert('2');
                    // this.$parent.getData_as_Index('2');
                    this.$emit('getdata2');
                }
            },
              
              myTool3: {
                show: true,
                title: '德清电厂3',
                icon: 'path://M268.5 64.2h363.1l54.8 54.9-54.8 52.4H371.5l-103-107.3z m0 896l103-107.3h260.1l54.8 52.4-54.8 54.9H268.5z m2.2-448l100.8-59h260.1l101.1 58-101.1 49.4H371.5l-100.8-48.4zM649 436.3V190l53.7-53.5 53.7 53.5v308.6L649 436.3z m0 398.1v-255l107.3-53.5v308.6L702.6 888 649 834.4z',
                options:{
                
                },
                onclick:()=>{
                    // alert('2');
                    // this.$parent.getData_as_Index('2');
                    this.$emit('getdata3');
                }
            },
              
              myTool4: {
                show: true,
                title: '德清电厂4',
                icon: 'path://M257.7 498.6V64.2l107.3 107v265.1l-107.3 62.3z m24.5 13.6l100.7-59h259.9l101.1 58-101.1 49.3H382.9l-100.7-48.3z m378-75.8V171.5l107.3-107v434l-107.3-62.1z m0 416.9V579.7l107.3-53.5v434L660.2 853.3z',
                options:{
                
                },
                onclick:()=>{
                    // alert('2');
                    // this.$parent.getData_as_Index('2');
                    this.$emit('getdata4');
                }
            },
            myTemperature:{
              show:true,
              title:'温度数据',
              icon:'path://M512 128a192 192 0 0 0-192 192v384a192 192 0 1 0 384 0V320a192 192 0 0 0-192-192z m128 288v32a32 32 0 0 0 0 64v32a32 32 0 0 0 0 64v96a128 128 0 1 1-256 0v-96a32 32 0 0 0 0-64v-32a32 32 0 0 0 0-64v-32a32 32 0 1 0 0-64v-32a128 128 0 1 1 256 0v32a32 32 0 1 0 0 64z m-160 232.576a64 64 0 1 0 64 0V320a32 32 0 1 0-64 0v328.576z',
              options:{
              },
              onclick:()=>{
                this.$emit('change_as_temperature');
              }
            },
            myHumidity:{
              show:true,
              title:'湿度数据',
              icon:'path://M856.4 0S723.1 126.3 723.1 200c0 73.6 59.7 133.3 133.3 133.3S989.7 273.6 989.7 200 856.4 0 856.4 0z m0 288.8c-49.1 0-88.9-39.8-88.9-88.9s88.9-133.3 88.9-133.3 88.9 84.2 88.9 133.3-39.9 88.9-88.9 88.9zM412 0S34.3 427.1 34.3 638.8 203.4 1022 412 1022s377.7-171.6 377.7-383.2S412 0 412 0z m0 955.4c-171.8 0-311-141.9-311-317S412 88.9 412 88.9s311 374.4 311 549.5c0.1 175-139.2 317-311 317z',
              options:{
              },
              onclick:()=>{
                this.$emit('change_as_humidity');
              }
            },
            
              magicType: {//动态类型切换
                type: ['bar', 'line']
              }
            }
          },

          //tooltip是配置提示信息
          //就是鼠标悬浮交互时的提示信息
          tooltip: {
            //show:false,

            //默认值'item'，触发类型，默认数据触发，见下图，可选为：'item' | 'axis'
            //当trigger为item时，只会显示该点的数据，为axis时显示该列下所有坐标轴对应的数据
            trigger: "axis",
            backgroundColor: "rgba(255,255,255,0.1)",
            axisPointer: {
              //type 选中方式 line/cross/shadow
              type: "shadow",

              //坐标轴x上的信息
              label: {
                show: true,
                backgroundColor: "#7B7DDC",
              },
            },
          },
          // 图例
          legend: {
            //x:'right',
            data: newData.position,
            textStyle: {
              color: "#B4B4B4",
              fontSize: 9,
            },
            //离top的距离
            top: "0%",
          },
          grid: {
            x: "8%",
            width: "85%",
            y: "10%",
          },
          //x轴
          xAxis: {
            name: "时间",
            data: newData.category.map(function(str) {
              return str.replace(" ", "\n");
            }),
            axisLine: {
              lineStyle: {
                color: "#B4B4B4",
                // width:'1%'
              },
            },
            axisLabel: {
              color: "rgba(255,255,255,.8)",
              fontSize: 10,
            },
            //坐标轴刻度线
            axisTick: {
              show: false,
            },
          },
          //y轴
          yAxis: [
            {
              // 是否是脱离 0 值比例。
              scale:true,
              type:"value",
              name: newData.y_axis_name,
              //网格线类似的横线
              splitLine: { show: false },
              axisLine: {
                lineStyle: {
                  color: "#B4B4B4",
                },
              },

              axisLabel: {
                // formatter: "{value} ",
                formatter:function(v)
                {
                  return v.toFixed(2);
                }
              },
            },
          ],
          series: [
            {
              //legend对应的名称
              name: newData.position[0],
              type: "line",
              smooth: true,
              showAllSymbol: true,
              //点的样式
              symbol: "emptyCircle",
              symbolSize: 8,
              //yAxis坐标轴数组的索引，指定该系列数据所用的纵坐标轴
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  color: "#999900",
                },
              },
              data: newData.lineData[0],
            },
            {
              //legend对应的名称
              name: newData.position[1],
              type: "line",
              smooth: true,
              showAllSymbol: true,
              //点的样式
              symbol: "rectangle",
              symbolSize: 8,
              //yAxis坐标轴数组的索引，指定该系列数据所用的纵坐标轴
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  color: "#FFCC99",
                },
              },
              data: newData.lineData[1],
            },
            {
              //legend对应的名称
              name: newData.position[2],
              type: "line",
              smooth: true,
              showAllSymbol: true,
              //点的样式
              symbol: "triangle",
              symbolSize: 8,
              //yAxis坐标轴数组的索引，指定该系列数据所用的纵坐标轴
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  color: "#993399",
                },
              },
              data: newData.lineData[2],
            },
            {
              //legend对应的名称
              name: newData.position[3],
              type: "line",
              smooth: true,
              showAllSymbol: true,
              //点的样式
              symbol: "diamond",
              symbolSize: 8,
              //yAxis坐标轴数组的索引，指定该系列数据所用的纵坐标轴
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  color: "#0066FF",
                },
              },
              data: newData.lineData[3],
            },
            {
              //legend对应的名称
              name: newData.position[4],
              type: "line",
              smooth: true,
              showAllSymbol: true,
              //点的样式
              symbol: "diamond",
              symbolSize: 8,
              //yAxis坐标轴数组的索引，指定该系列数据所用的纵坐标轴
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  color: "#888888",
                },
              },
              data: newData.lineData[4],
            },
          ],
        };
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
