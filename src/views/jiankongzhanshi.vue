<template>
  <div id="jiankongzhanshi">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <div class="d-flex">
          <el-button type="primary" size="mini" @click="monitorButtonClick"
            >监控页</el-button
          >
          <el-button type="primary" size="mini" @click="flatPageButtonClick"
            >平面页</el-button
          >
        </div>
      </div>
      <!-- 监控页 -->
      <!-- class="monitor" -->
      <div v-show="showStatus === 1" class="monitor">
        <EZUIKitJs />
      </div>
      <!-- 平面页 -->
      <div class="flatPage" v-show="showStatus === 2">
        <!-- 按钮1 -->
        <el-tooltip effect="dark" placement="bottom" class="circle1">
          <div slot="content">
            温度：{{ this.meteorologyData.t }}℃ <br />
            湿度：{{ this.meteorologyData.rh }}% <br />
            光照：{{ this.meteorologyData.lux }}lux <br />
            PM10：{{ this.meteorologyData.pm10 }}ug/m3 <br />
            PM2.5：{{ this.meteorologyData.pm25 }}ug/m3° <br />
            气压：{{ this.meteorologyData.hpa }}百帕 <br />
            风速：{{ this.meteorologyData.wspd }}m/s <br />
          </div>
          <el-button circle></el-button>
        </el-tooltip>

        <!-- 按钮2 -->
        <el-tooltip effect="dark" placement="top" class="circle2">
          <div slot="content">
            温度：{{ this.greenHouse1.t }}℃ <br />
            湿度：{{ this.greenHouse1.rh }}% <br />
            光照：{{ this.greenHouse1.lux }}lux <br />
            PM10：{{ this.greenHouse1.pm10 }}ug/m3 <br />
            PM2.5：{{ this.greenHouse1.pm25 }}ug/m3° <br />
            气压：{{ this.greenHouse1.hpa }}百帕 <br />
          </div>
          <el-button circle></el-button>
        </el-tooltip>
        <el-tooltip effect="dark" placement="top" class="circle3">
          <div slot="content">
            温度：{{ this.greenHouse2.t }}℃ <br />
            湿度：{{ this.greenHouse2.rh }}% <br />
            光照：{{ this.greenHouse2.lux }}lux <br />
            PM10：{{ this.greenHouse2.pm10 }}ug/m3 <br />
            PM2.5：{{ this.greenHouse2.pm25 }}ug/m3° <br />
            气压：{{ this.greenHouse2.hpa }}百帕 <br />
          </div>
          <el-button circle></el-button>
          <el-button circle style="color: rgb(100, 153, 254);"></el-button>
        </el-tooltip>
        <el-tooltip effect="dark" placement="top" class="circle4">
          <div slot="content">
            温度：{{ this.greenHouse3.t }}℃ <br />
            湿度：{{ this.greenHouse3.rh }}% <br />
            光照：{{ this.greenHouse3.lux }}lux <br />
            PM10：{{ this.greenHouse3.pm10 }}ug/m3 <br />
            PM2.5：{{ this.greenHouse3.pm25 }}ug/m3° <br />
            气压：{{ this.greenHouse3.hpa }}百帕 <br />
          </div>
          <el-button circle style="color: rgb(100, 153, 254);"></el-button>
        </el-tooltip>
        <el-tooltip effect="dark" placement="top" class="circle5">
          <div slot="content">
            温度：{{ this.greenHouse4.t }}℃ <br />
            湿度：{{ this.greenHouse4.rh }}% <br />
            光照：{{ this.greenHouse4.lux }}lux <br />
            PM10：{{ this.greenHouse4.pm10 }}ug/m3 <br />
            PM2.5：{{ this.greenHouse4.pm25 }}ug/m3° <br />
            气压：{{ this.greenHouse4.hpa }}百帕 <br />
          </div>
          <el-button circle style="color: rgb(100, 153, 254);"></el-button>
        </el-tooltip>
        <!-- <el-button @click="getToolTipData()">111</el-button> -->

        <!-- <img src="@/assets/flatPage.png" alt="" class="imgStyle" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import Request from '@/utils/request.js'
// import $ from 'jquery'
import EZUIKitJs from '@/components/EZUIKitJs.vue'
export default {
  data() {
    return {
      showStatus: 2,
      meteorologyData: { t: '', rh: '', lux: '', pm10: '', pm25: '', hpa: '' },
      greenHouse1: { t: '', rh: '', lux: '', pm10: '', pm25: '', hpa: '' },
      greenHouse2: { t: '', rh: '', lux: '', pm10: '', pm25: '', hpa: '' },
      greenHouse3: { t: '', rh: '', lux: '', pm10: '', pm25: '', hpa: '' },
      greenHouse4: { t: '', rh: '', lux: '', pm10: '', pm25: '', hpa: '' },
    }
  },
  components: {
    EZUIKitJs,
  },
  mounted() {
    this.getToolTipData()
  },
  created() {},

  methods: {
    // 获取tooltip的数据
    getToolTipData() {
      this.getMeteorologyData()
      this.getGreenHouse1Data()
      this.getGreenHouse2Data()
      this.getGreenHouse3Data()
      this.getGreenHouse4Data()
    },
    // 获取气象站数据
    async getMeteorologyData() {
      // 气象站数据
      const { data: res1 } = await Request({
        url:
          'api/atmospheredata/queryByuusid?uusid=HYMY1001&pageSize=10&currentPage=20',
        method: 'get',
      })
      console.log('res1')
      this.meteorologyData.t = res1.data.content[0].t
      this.meteorologyData.rh = res1.data.content[0].rh
      this.meteorologyData.lux = res1.data.content[0].lux
      this.meteorologyData.pm10 = res1.data.content[0].pm10
      this.meteorologyData.pm25 = res1.data.content[0].pm25
      this.meteorologyData.hpa = res1.data.content[0].hpa
      this.meteorologyData.wspd = res1.data.content[0].wspd

      console.log(this.meteorologyData)
    },
    async getGreenHouse1Data() {
      const { data: res1 } = await Request({
        url:
          'api/greenHouseNode/queryByuusid?uusid=HYMY2001&pageSize=10&currentPage=200',
        method: 'get',
      })
      console.log(res1)
      this.greenHouse1.t = res1.data.content[0].t
      this.greenHouse1.rh = res1.data.content[0].rh
      this.greenHouse1.lux = res1.data.content[0].lux
      this.greenHouse1.pm10 = res1.data.content[0].pm10
      this.greenHouse1.pm25 = res1.data.content[0].pm25
      this.greenHouse1.hpa = res1.data.content[0].hpa
      // this.greenHouse1.wspd = res1.data.content[0].wspd

      console.log(this.greenHouse1)
    },
    async getGreenHouse2Data() {
      const { data: res1 } = await Request({
        url:
          'api/greenHouseNode/queryByuusid?uusid=HYMY2002&pageSize=10&currentPage=200',
        method: 'get',
      })
      console.log(res1)
      this.greenHouse2.t = res1.data.content[0].t
      this.greenHouse2.rh = res1.data.content[0].rh
      this.greenHouse2.lux = res1.data.content[0].lux
      this.greenHouse2.pm10 = res1.data.content[0].pm10
      this.greenHouse2.pm25 = res1.data.content[0].pm25
      this.greenHouse2.hpa = res1.data.content[0].hpa
      // this.greenHouse1.wspd = res1.data.content[0].wspd

      console.log(this.greenHouse2)
    },
    async getGreenHouse3Data() {
      const { data: res1 } = await Request({
        url:
          'api/greenHouseNode/queryByuusid?uusid=HYMY2003&pageSize=10&currentPage=200',
        method: 'get',
      })
      console.log(res1)
      this.greenHouse3.t = res1.data.content[0].t
      this.greenHouse3.rh = res1.data.content[0].rh
      this.greenHouse3.lux = res1.data.content[0].lux
      this.greenHouse3.pm10 = res1.data.content[0].pm10
      this.greenHouse3.pm25 = res1.data.content[0].pm25
      this.greenHouse3.hpa = res1.data.content[0].hpa
      // this.greenHouse1.wspd = res1.data.content[0].wspd
    },
    async getGreenHouse4Data() {
      const { data: res1 } = await Request({
        url:
          'api/greenHouseNode/queryByuusid?uusid=HYMY2004&pageSize=10&currentPage=200',
        method: 'get',
      })
      console.log(res1)
      this.greenHouse4.t = res1.data.content[0].t
      this.greenHouse4.rh = res1.data.content[0].rh
      this.greenHouse4.lux = res1.data.content[0].lux
      this.greenHouse4.pm10 = res1.data.content[0].pm10
      this.greenHouse4.pm25 = res1.data.content[0].pm25
      this.greenHouse4.hpa = res1.data.content[0].hpa
      // this.greenHouse1.wspd = res1.data.content[0].wspd
    },
    // 监控按钮点击事件
    monitorButtonClick() {
      this.showStatus = 1
    },
    // 平面页按钮点击事件
    flatPageButtonClick() {
      this.showStatus = 2
    },
  },
}
</script>

<style lang="scss">
#jiankongzhanshi {
  padding: 0.2rem;
  height: 8.25rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 7.8125rem;
    border-radius: 0.525rem;
    // .monitor {
    //   display: block;
    //   width: 1000px;
    //   height: 600px;
    //   margin-left: 30px;
    //   margin-top: 10px;
    // }
    .flatPage {
      background-image: url('../assets/flatPage.png');
      width: 87%;
      height: 87%;
      background-size: 100% 100%;
      margin-left: 80px;
      margin-top: 30px;
      .imgStyle {
        width: 930px;
        height: 500px;
        margin-left: 50px;
        margin-top: 30px;
        opacity: 0.6;
      }
      .circle1 {
        // margin-left: 46px;
        // margin-bottom: 3px;
        position: absolute;
        left: 125px;
      }
      .circle2 {
        position: absolute;
        left: 310px;
        top: 277px;
        color: rgb(100, 153, 254);
      }
      .circle3 {
        position: absolute;
        left: 172px;
        top: 478px;
        color: rgb(100, 153, 254);
      }
      .circle4 {
        position: absolute;
        left: 588px;
        top: 445px;
        color: rgb(100, 153, 254);
      }
      .circle5 {
        position: absolute;
        left: 764px;
        top: 245px;
        color: rgb(100, 153, 254);
      }
    }
  }
  .text {
    color: #ffffff;
  }
  .el-button {
    color: #fff;
    background-color: rgba(45, 63, 129, 0.5);
    border-color: #08175a;
    margin-left: 0.3rem;
  }
}
</style>
