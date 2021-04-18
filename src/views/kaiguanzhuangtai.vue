<template>
  <div id="kaiguanzhuangtai">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="cog"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">控制开关状态</span>
        </div>
      </div>
      <div class="d-flex jc-center">
        <el-row :gutter="14">
          <el-col :span="12">
            <el-card class="box-card" shadow="always">
              <el-row :gutter="10">
                <el-col :span="12"><div class="text1">大棚1</div></el-col>
                <el-col :span="12"><div class="text1">采光模式</div></el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="6">
                  <div class="text">换气风机A：
                    <el-tooltip :content="'当前状态：'+ msg1[detailsList1.scaFanA]" placement="top">
                      <el-switch 
                        v-model="detailsList1.scaFanA" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch($event,'scaFanA')"
                      />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">换气风机B：
                    <el-tooltip :content="'当前状态：'+ msg1[detailsList1.scaFanB]" placement="top">
                      <el-switch 
                        v-model="detailsList1.scaFanB" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch($event,'scaFanB')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">循环风机：
                    <el-tooltip :content="'当前状态：'+ msg1[detailsList1.cirFan]" placement="top">
                      <el-switch 
                        v-model="detailsList1.cirFan" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch($event,'cirFan')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">湿帘水泵：
                    <el-tooltip :content="'当前状态：'+ msg1[detailsList1.pump]" placement="top">
                      <el-switch 
                        v-model="detailsList1.pump" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch($event,'pump')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="6">
                  <div class="text">最内层遮阳：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList1.inShade]" placement="top">
                      <el-switch 
                        v-model="detailsList1.inShade" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch($event,'inShade')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">中间层遮阳：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList1.midShade]" placement="top">
                      <el-switch 
                        v-model="detailsList1.midShade" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch($event,'midShade')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">最外层遮阳：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList1.outShade]" placement="top">
                      <el-switch 
                        v-model="detailsList1.outShade" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch($event,'outShade')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">窗户：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList1.window]" placement="top">
                      <el-switch 
                        v-model="detailsList1.window" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch($event,'Window')"
                      />
                    </el-tooltip>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="6">
                  <div class="text">内保温层东：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList1.ewarm]" placement="top">
                      <el-switch 
                        v-model="detailsList1.ewarm" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch($event,'ewarm')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">内保温层西：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList1.wwarm]" placement="top">
                      <el-switch 
                        v-model="detailsList1.wwarm" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch($event,'wwarm')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">内保温层北：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList1.nwarm]" placement="top">
                      <el-switch 
                        v-model="detailsList1.nwarm" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch($event,'nwarm')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">内保温层南：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList1.swarm]" placement="top">
                      <el-switch 
                        v-model="detailsList1.swarm" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch($event,'swarm')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="6">
                  <div class="text">膜东侧：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList1.efilm]" placement="top">
                      <el-switch 
                        v-model="detailsList1.efilm" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch($event,'efilm')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">膜西侧：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList1.wfilm]" placement="top">
                      <el-switch 
                        v-model="detailsList1.wfilm" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch($event,'wfilm')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">膜北侧：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList1.nfilm]" placement="top">
                      <el-switch 
                        v-model="detailsList1.nfilm" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch($event,'nfilm')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">膜南侧：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList1.sfilm]" placement="top">
                      <el-switch 
                        v-model="detailsList1.sfilm" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch($event,'sfilm')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" shadow="always">
              <el-row :gutter="10">
                <el-col :span="12"><div class="text1">大棚2</div></el-col>
                <el-col :span="12"><div class="text1">采光模式</div></el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="6">
                  <div class="text">换气风机A：
                    <el-tooltip :content="'当前状态：'+ msg1[detailsList2.scaFanA]" placement="top">
                      <el-switch 
                        v-model="detailsList2.scaFanA" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch2($event,'scaFanA')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">换气风机B：
                    <el-tooltip :content="'当前状态：'+ msg1[detailsList2.scaFanB]" placement="top">
                      <el-switch 
                        v-model="detailsList2.scaFanB" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch2($event,'scaFanB')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">循环风机：
                    <el-tooltip :content="'当前状态：'+ msg1[detailsList2.cirFan]" placement="top">
                      <el-switch 
                        v-model="detailsList2.cirFan" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch2($event,'scaFanB')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">湿帘水泵：
                    <el-tooltip :content="'当前状态：'+ msg1[detailsList2.pump]" placement="top">
                      <el-switch 
                        v-model="detailsList2.pump" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch2($event,'pump')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="6">
                  <div class="text">最内层遮阳：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList2.inShade]" placement="top">
                      <el-switch 
                        v-model="detailsList2.inShade" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch2($event,'inShade')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">中间层遮阳：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList2.midShade]" placement="top">
                      <el-switch 
                        v-model="detailsList2.midShade" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch2($event,'midShade')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">最外层遮阳：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList2.outShade]" placement="top">
                      <el-switch 
                        v-model="detailsList2.outShade" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch2($event,'outShade')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">窗户：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList2.window]" placement="top">
                      <el-switch 
                        v-model="detailsList2.window" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch2($event,'window')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="6">
                  <div class="text">内保温层东：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList2.ewarm]" placement="top">
                      <el-switch 
                        v-model="detailsList2.ewarm" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch2($event,'ewarm')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">内保温层西：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList2.wwarm]" placement="top">
                      <el-switch 
                        v-model="detailsList2.wwarm" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch2($event,'wwarm')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">内保温层北：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList2.nwarm]" placement="top">
                      <el-switch 
                        v-model="detailsList2.nwarm" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch2($event,'nwarm')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">内保温层南：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList2.swarm]" placement="top">
                      <el-switch 
                        v-model="detailsList2.swarm" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch2($event,'swarm')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="6">
                  <div class="text">膜东侧：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList2.efilm]" placement="top">
                      <el-switch 
                        v-model="detailsList2.efilm" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch2($event,'efilm')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">膜西侧：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList2.wfilm]" placement="top">
                      <el-switch 
                        v-model="detailsList2.wfilm" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch2($event,'wfilm')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">膜北侧：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList2.nfilm]" placement="top">
                      <el-switch 
                        v-model="detailsList2.nfilm" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch2($event,'nfilm')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text">膜南侧：
                    <el-tooltip :content="'当前状态：'+ msg[detailsList2.sfilm]" placement="top">
                      <el-switch 
                        v-model="detailsList2.sfilm" 
                        active-value="1"
                        inactive-value="0"
                        @change="handleSwitch2($event,'sfilm')"
                        />
                    </el-tooltip>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchControlNodeByuusid, updateControlNodeStatu } from '@/api/ControlNode'

export default {
  data() {
    return {
      uusid1: 'HYMY3001',
      uusid2: 'HYMY3002',
      greenhouseID1: '1',
      greenhouseID2: '2',
      value1: true,
      value2: false,
      detailsList1: {
        scaFanA: '',
        scaFanB: '',
        cirFan: '',
        pump: '',
        inShade: '',
        midShade: '',
        outShade: '',
        window: '',
        eWarm: '',
        wWarm: '',
        nWarm: '',
        sWarm: '',
        eFilm: '',
        wFilm: '',
        nFilm: '',
        sFilm: ''
      },
      detailsList2: {
        scaFanA: '',
        scaFanB: '',
        cirFan: '',
        pump: '',
        inShade: '',
        midShade: '',
        outShade: '',
        window: '',
        eWarm: '',
        wWarm: '',
        nWarm: '',
        sWarm: '',
        eFilm: '',
        wFilm: '',
        nFilm: '',
        sFilm: ''
      },
      msg1: ['停止','启动'],
      msg: ['闭合','打开']
    };
  },
  components: {
  },
  mounted() {},
  created() {
    this.getList()
  },
  methods: {
    getList() {
      const uusid1 = this.uusid1
      const uusid2 = this.uusid2
      fetchControlNodeByuusid(uusid1).then(res => {
        if (res.code === 20000) {
          this.detailsList1 = res.data
        }
      })
      fetchControlNodeByuusid(uusid2).then(res => {
        if (res.code === 20000) {
          console.log(res.data)
          this.detailsList2 = res.data
        }
      })
    },
    handleSwitch($event, type) {
      this.$confirm('确定操作吗, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log($event)
        console.log(type)
        const statu = $event
        const statusname = type
        const uusid = this.uusid1
        const greenhouseID = this.greenhouseID1
        updateControlNodeStatu(uusid, greenhouseID, statusname, statu).then(() => {
          this.$message({
            title: 'Success',
            message: '操作成功！',
            type: 'success',
            duration: 2000
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        })
        this.getList()
      })
    },
    handleSwitch2($event, type) {
      this.$confirm('确定操作吗, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log($event)
        console.log(type)
        const statu = $event
        const statusname = type
        const uusid = this.uusid2
        const greenhouseID = this.greenhouseID2
        updateControlNodeStatu(uusid, greenhouseID, statusname, statu).then(() => {
          this.$message({
            title: 'Success',
            message: '操作成功！',
            type: 'success',
            duration: 2000
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        })
        this.getList()
      })
    }
  }
};
</script>

<style lang="scss">
#kaiguanzhuangtai {
  padding: 0.2rem;
  height: 2.425rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 2.075rem;
    border-radius: 0.125rem;
  }
  .box-card {
    margin-top: 0rem;
    width: 6.25rem;
    height: 1.7rem;
    background-color: rgba(19, 25, 47, 0.8);
  }
  .el-card{
    border: 0rem;
  }
  .el-card__body{
    padding: .1rem;
  }
  .el-row {
    margin-bottom: .1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .text {
    font-size: 0.075rem;
    color: #c3cbde;
  }
  .text1 {
    font-size: 0.175rem;
    color: #c3cbde;
  }
  .el-switch__core{
    width: 0.475rem!important;
    height: 0.25rem;
  }
  .el-switch__core::after{
    width: 0.225rem;
    height: 0.225rem;
    margin-top: -0.0125rem;
    margin-bottom: 0.025rem;
  }
}
</style>