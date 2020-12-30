<template>
  <div>
    <div>
      <Chart
        :cdata="cdata"
        @getdata1="getData_as_index('/data1/1')"
        @getdata2="getData_as_index('/data1/2')"
        @getdata3="getData_as_index('/data1/7')"
        @getdata4="getData_as_index('/data1/8')"
        @change_as_temperature="changeData_toTemperature"
        @change_as_humidity="changeData_toHumidity"
      />
    </div>
  </div>
</template>

<script>
// index负责数据的获取和处理

import Chart from "./chart.vue";
export default {
  data() {
    return {
      // true表示是温度数据
      // false表示是湿度数据

      cdata: {
        type: true,
        y_axis_name: "",

        Origanial_Data: [],
        //x轴数据
        category: [],
        //图例数据
        position: [],
        //开关站12345的温度
        lineData: [],
      },
    };
  },
  components: {
    Chart,

  },
  //加载的时候设置
  async mounted() {},
  async created() {
    //初始化
    //默认先显示第一个电厂的温度数据
    await this.getData_as_index("/data1/1");
    this.setLegendData();
    this.setTemperatureData();
    this.selectType();
  },
  methods: {

    //获取index电厂的数据
    async getData_as_index(index) {
      //获取index电厂的数据
      const { data } = await this.$axios.get(index);
      this.$set(this.cdata, "Origanial_Data", data);
      console.log(data)
      // console.log(JSON.parse(data))
      //如果现在类型是温度类型
      if (this.cdata.type){
        this.setLegendData();
        this.setTemperatureData();
      } else {
        this.setLegendData();
        this.setHumidityData();

      }
    },
    //将目前的数据改为温度数据
    async changeData_toTemperature() {
      if (this.cdata.type) {
        alert("已经是温度Temperature数据了");
        return;
      } else {
        this.cdata.type = true;
        this.selectType();
        await this.getData_as_index("data1/1");
      }
    },
    //将目前的数据改为湿度数据
    async changeData_toHumidity() {
      if (!this.cdata.type) {
        alert("已经是湿度Humidity数据了");
        return;
      } else {
        //alert(this.type);
        this.cdata.type = false;
        //alert(this.type);
        this.selectType();
        await this.getData_as_index("data1/1");
      }
    },
    //设置y轴的坐标名
    selectType() {
      if (this.cdata.type) {
        this.cdata.y_axis_name = "°C";
      } else {
        this.cdata.y_axis_name = "%";
      }
    },
    //设置图例数据
    setLegendData() {
      var length = this.cdata.Origanial_Data.length;
      var tempdata = new Array(5);
      for (let i = 0; i < length; i++) {
        //设置图例数据
        tempdata[i] = this.cdata.Origanial_Data[i].equipId;
      }

      this.$set(this.cdata, "position", tempdata);
    },

    //根据原始数据 处理并设置温度数据
    setTemperatureData() {
      //暂存数据
      var tempdata = new Array(5);
      //开关站数量
      var length1 = this.cdata.Origanial_Data.length;
      //温度采集数量
      var length2 = this.cdata.Origanial_Data[0].data.length;
      //
      var time_data = new Array(10);

      for (let index = 0; index < length1; index++) {
        //创建二维数组存放温度
        tempdata[index] = new Array(10);
        var ob_data;
        for (let i = 0; i < length2; i++) {
          ob_data = JSON.parse(this.cdata.Origanial_Data[index].data[i].data);
          tempdata[index][i] = ob_data.temperature
          // "{"temperature":"5.8","humidity":"53"}"
          //设置x轴的时间顺序
          time_data[i] = this.cdata.Origanial_Data[index].data[i].time;
        }
        // console.log(tempdata[index]);
        tempdata[index] = tempdata[index].reverse();
      }
      this.$set(this.cdata, "lineData", tempdata);
      this.$set(this.cdata, "category", time_data.reverse());
    },
    //根据原始数据 处理并设置湿度数据
    setHumidityData() {
      //暂存数据
      var tempdata = new Array(5);
      //开关站数量
      var length1 = this.cdata.Origanial_Data.length;
      //温度采集数量
      var length2 = this.cdata.Origanial_Data[0].data.length;
      //
      var time_data = new Array(10);

      for (let index = 0; index < length1; index++) {
        //创建数组
        tempdata[index] = new Array(10);
        var ob_data;
        for (let i = 0; i < length2; i++) {
          ob_data = JSON.parse(this.cdata.Origanial_Data[index].data[i].data);
          tempdata[index][i] = ob_data.humidity;
          //设置x轴的时间顺序
          time_data[i] = this.cdata.Origanial_Data[index].data[i].time;
        }
        tempdata[index] = tempdata[index].reverse();
      }
      this.$set(this.cdata, "lineData", tempdata);
      this.$set(this.cdata, "category", time_data.reverse());
    },
  },
};
</script>

<style lang="scss" scoped></style>
