<template>
  <div id="dapengxuanze">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="tachometer-alt"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">大棚选择</span>
          <dv-decoration-3
            style="width:2.65rem;height:.25rem; position:relative;top:-.0375rem;"
          />
        </div>
      </div>
      <el-tree
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
        :accordion="true"
      ></el-tree>
    </div>
  </div>
</template>

<script>
import { getHMS } from '@/utils/index.js'
import Request from '@/utils/request.js'
export default {
  data() {
    return {
      data: [
        {
          label: '一号大棚',
          children: [
            {
              label: '大豆    预计亩产:100吨',
            },
            {
              label: '番茄    预计亩产:100吨',
            },
            {
              label: '黄瓜    预计亩产:100吨',
            },
            {
              label: '大豆    预计亩产:100吨',
            },
            {
              label: '番茄    预计亩产:100吨',
            },
            {
              label: '黄瓜    预计亩产:100吨',
            },
            {
              label: '大豆    预计亩产:100吨',
            },
            {
              label: '番茄    预计亩产:100吨',
            },
            {
              label: '黄瓜    预计亩产:100吨',
            },
          ],
        },
        {
          label: '二号大棚',
          children: [
            {
              label: '大豆    预计亩产:100吨',
            },
            {
              label: '番茄    预计亩产:100吨',
            },
            {
              label: '黄瓜    预计亩产:100吨',
            },
            {
              label: '大豆    预计亩产:100吨',
            },
            {
              label: '番茄    预计亩产:100吨',
            },
            {
              label: '黄瓜    预计亩产:100吨',
            },
            {
              label: '大豆    预计亩产:100吨',
            },
            {
              label: '番茄    预计亩产:100吨',
            },
            {
              label: '黄瓜    预计亩产:100吨',
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    }
  },
  components: {},
  mounted() {},
  methods: {
    async setOriginData() {
      // 温度
      let soilTemp1 = [31, 22, 23, 34, 25]
      let skyTemp1 = [31, 32, 33, 34, 35]
      let time1 = ['10:22:30', '10:23:30', '10:24:30', '10:25:30', '10:26:30']
      this.$store.dispatch('tetline/setSoilTemp', soilTemp1)
      this.$store.dispatch('tetline/setSkyTemp', skyTemp1)
      this.$store.dispatch('tetline/setTime', time1)
      // 湿度
      let skyHumidity1 = [30, 40, 50, 90, 35]
      let soilHumidity1 = [31, 22, 3, 84, 25]
      this.$store.dispatch('humidity/setSoilHumidity', soilHumidity1)
      this.$store.dispatch('humidity/setSkyHumidity', skyHumidity1)
      this.$store.dispatch('humidity/setTime', time1)
      // pm
      let pm25 = [1, 22, 83, 44, 25]
      let pm10 = [20, 30, 33, 10, 4]
      this.$store.dispatch('pm/setPm10', pm10)
      this.$store.dispatch('pm/setPm2_5', pm25)
      this.$store.dispatch('pm/setTime', time1)
      // 空气含量
      let co2 = [0.1, 0.3, 0.6, 0.7, 0.4]
      let tvoc = [0.2, 0.3, 0.4, 0.7, 0.7]
      let so2 = [0.7, 0.4, 0.6, 0.6, 0.8]
      let o2 = [0.3, 0.6, 0.2, 0.7, 0.9]
      this.$store.dispatch('gas/setCO2', co2)
      this.$store.dispatch('gas/setTVOC', tvoc)
      this.$store.dispatch('gas/setSO2', so2)
      this.$store.dispatch('gas/setO2', o2)
      this.$store.dispatch('gas/setTime', time1)
      // 其他
      const { data: res } = await Request({
        url:
          'api/greenHouseNode/queryByuusid?uusid=HYMY2001&pageSize=10&currentPage=300',
        method: 'get',
      })
      let hpa = res.data.content[0].hpa
      let lux = res.data.content[0].lux
      let eph = res.data.content[0].eph
      let eec = res.data.content[0].eec
      let ek = res.data.content[0].ek
      let en = res.data.content[0].en
      let ep = res.data.content[0].ep
      this.$store.dispatch('others/setHPA', Math.floor(hpa))
      this.$store.dispatch('others/setLUX', lux)
      this.$store.dispatch('others/setEPH', eph)
      this.$store.dispatch('others/setEEC', eec)
      this.$store.dispatch('others/setEK', ek)
      this.$store.dispatch('others/setEN', en)
      this.$store.dispatch('others/setEP', ep)
    },
    async getChartsData() {
      // 'http://116.62.9.209:8080/testBackend/api/greenHouseNode/queryByuusid?uusid=HYMY2001&pageSize=10&currentPage=1'
      // 先获取最新一页是哪页

      let soilTemp = []
      let skyTemp = []
      let crtTime = []
      let soilHumidity = []
      let skyHumidity = []
      let pm10 = []
      let pm2_5 = []
      let co2 = []
      let tvoc = []
      let so2 = []
      let o2 = []
      const { data: res } = await Request({
        url:
          'api/greenHouseNode/queryByuusid?uusid=HYMY2001&pageSize=10&currentPage=400',
        method: 'get',
      })
      if (res.code === 20000) {
        // 其他数据
        let hpa = res.data.content[0].hpa
        let lux = res.data.content[0].lux
        let eph = res.data.content[0].eph
        let eec = res.data.content[0].eec
        let ek = res.data.content[0].ek
        let en = res.data.content[0].en
        let ep = res.data.content[0].ep
        this.$store.dispatch('others/setHPA', Math.floor(hpa))
        this.$store.dispatch('others/setLUX', lux)
        this.$store.dispatch('others/setEPH', eph)
        this.$store.dispatch('others/setEEC', eec)
        this.$store.dispatch('others/setEK', ek)
        this.$store.dispatch('others/setEN', en)
        this.$store.dispatch('others/setEP', ep)

        console.log(res.data)
        for (let index = 0; index < 5; index++) {
          soilTemp.push(res.data.content[index].et)
          skyTemp.push(res.data.content[index].t)
          crtTime.push(getHMS(res.data.content[index].createTime))
          soilHumidity.push(res.data.content[index].erh)
          skyHumidity.push(res.data.content[index].rh)
          pm2_5.push(res.data.content[index].pm25)
          pm10.push(res.data.content[index].pm10)
          co2.push(res.data.content[index].co2)
          tvoc.push(res.data.content[index].tvoc)
          so2.push(res.data.content[index].so2)
          o2.push(res.data.content[index].o2)
        }
        // 设置温度
        this.$store.dispatch('tetline/setSoilTemp', soilTemp)
        this.$store.dispatch('tetline/setSkyTemp', skyTemp)
        this.$store.dispatch('tetline/setTime', crtTime)
        // 设置湿度
        this.$store.dispatch('humidity/setSkyHumidity', skyHumidity)
        this.$store.dispatch('humidity/setSoilHumidity', soilHumidity)
        this.$store.dispatch('humidity/setTime', crtTime)
        // 设置pm
        this.$store.dispatch('pm/setPm10', pm10)
        this.$store.dispatch('pm/setPm2_5', pm2_5)
        this.$store.dispatch('pm/setTime', crtTime)
        // 设置空气含量
        this.$store.dispatch('gas/setCO2', co2)
        this.$store.dispatch('gas/setTVOC', tvoc)
        this.$store.dispatch('gas/setSO2', so2)
        this.$store.dispatch('gas/setO2', o2)
        this.$store.dispatch('gas/setTime', crtTime)
      }
    },
    handleNodeClick(data) {
      console.log(data)
      console.log(typeof data.$treeNodeId)
      // 保存当前选择的大棚号到state中
      this.$store.dispatch('setHouseNum', data.$treeNodeId)
      if (data.$treeNodeId === 1) {
        // 原始数据
        this.setOriginData()
        this.$store.dispatch('setSerial', 'E99632751')
      } else {
        this.getChartsData()
        this.$store.dispatch('setSerial', 'F04233924')
      }
    },
  },
}
</script>

<style lang="scss">
#dapengxuanze {
  padding: 0.2rem;
  height: 7.125rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 7.8125rem;
    border-radius: 0.325rem;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 0.125rem;
    overflow: hidden;
  }
  .el-tree-node.is-current > .el-tree-node__content {
    background-color: rgba(19, 25, 48, 0.6) !important;
    color: white;
  }
  .el-tree {
    margin-top: 0.2rem;
    color: rgba(234, 235, 241, 0.6);
    background: transparent;
  }
  .el-tree-node__content:hover {
    background-color: #2453a3;
    color: #fff;
  }
  .el-tree-node__label {
    font-size: 0.1625rem;
    letter-spacing: 0.0375rem;
  }
}
</style>
