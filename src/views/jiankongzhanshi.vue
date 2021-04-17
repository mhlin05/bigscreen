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
      <div class="monitor" v-show="showStatus === 1">
        <EZUIKitJs />
      </div>
      <!-- 平面页 -->
      <div class="flatPage" v-show="showStatus === 2">
        <!-- 按钮1 -->
        <el-tooltip
          effect="dark"
          content="环境监测点1"
          placement="bottom"
          class="circle1"
        >
          <el-button circle></el-button>
        </el-tooltip>

        <!-- 按钮2 -->
        <el-tooltip
          effect="dark"
          content="环境监测点"
          placement="top"
          class="circle2"
        >
          <el-button circle></el-button>
        </el-tooltip>
        <el-tooltip
          effect="dark"
          content="环境监测点"
          placement="top"
          class="circle3"
        >
          <el-button circle style="color: rgb(100, 153, 254);"></el-button>
        </el-tooltip>
        <el-tooltip
          effect="dark"
          content="环境监测点"
          placement="top"
          class="circle4"
        >
          <el-button circle style="color: rgb(100, 153, 254);"></el-button>
        </el-tooltip>
        <el-tooltip
          effect="dark"
          content="环境监测点"
          placement="top"
          class="circle5"
        >
          <el-button circle style="color: rgb(100, 153, 254);"></el-button>
        </el-tooltip>

        <!-- <el-button circle class="circle2"></el-button>
        <el-button circle class="circle3"></el-button> -->
        <!-- <img src="@/assets/flatPage.png" alt="" class="imgStyle" /> -->
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
import EZUIKitJs from '@/components/EZUIKitJs.vue'
export default {
  data() {
    return {
      showStatus: 2,
    }
  },
  components: {
    EZUIKitJs,
  },
  mounted() {},
  methods: {
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
    .monitor {
      // width: 930px;
      // height: 500px;
      margin-left: 50px;
      margin-top: 30px;
    }
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
