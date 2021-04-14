<template>
  <div id="caijijiedianxinxi">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-area"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">采集节点信息</span>
          <dv-decoration-6 style="width:2.25rem;height:.25rem; position:relative;top:-.0375rem;" />
        </div>
      </div>
      <div class="d-flex jc-center" style=" margin-top: 0;">
        <tetline />
      </div>
      <div class="d-flex jc-center" style=" margin-top: 0.1rem;">
        <rherhline />
      </div>
      <div class="d-flex jc-center" style=" margin-top: 0.1rem;">
        <pmline />
      </div>
      <div class="d-flex jc-center" style=" margin-top: 0.1rem;">
        <csoline />
      </div>
      <div class="other">
        <el-row :gutter="10">
          <el-col :span="11" :offset="1">大气压力:{{hpa}}hPa</el-col>
          <el-col :span="11" :offset="1">光照度:{{lux}}</el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="11" :offset="1">土壤pH:{{eph}}</el-col>
          <el-col :span="11" :offset="1">土壤导电率:{{eec}}%</el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="7" :offset="1">E_N: {{en}}</el-col>
          <el-col :span="8">E_P: {{ep}}</el-col>
          <el-col :span="8">E_K: {{ek}}</el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import tetline from "@/components/echart/dapeng1/tetline";
import rherhline from "@/components/echart/dapeng1/rherhline";
import pmline from "@/components/echart/dapeng1/pmline";
import csoline from "@/components/echart/dapeng1/csoline";
export default {
  data() {
    return {
      hpa:1.1,
      lux: 2,
      eph: 5.5,
      eec: 60,
      en: 1,
      ep: 2,
      ek: 1
    };
  },
  components: {
    tetline,
    rherhline,
    pmline,
    csoline
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#caijijiedianxinxi {
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
  .other {
    margin-top: .1rem;
    margin-left: .3rem;
    font-size: 0.175rem;
    letter-spacing: 0.025rem;
  }
  .el-row {
    margin-bottom: 0.125rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 0.05rem;
  }
  .grid-content {
    border-radius: 0.05rem;
    min-height: 0.45rem;
  }
  .row-bg {
    padding: 0.125rem 0;
  }
}
</style>