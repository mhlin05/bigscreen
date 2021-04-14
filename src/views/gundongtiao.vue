<template>
  <div id="gundongtiao">
      <div class="d-flex jc-center body-box">
        <div class="notice-card-wrapper">
          <div class="message">
            <div class="inner-container">
              <span style="font-size:14px" v-html="notice"></span>
            </div>
          </div>
        </div>
        <!-- <dv-scroll-board :config="config" style="width:18.375rem;height:0.28rem" /> -->
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notice: '现在插播一条广播！！！！'
    };
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
#gundongtiao {
  padding: 0.01rem;
  height: .625rem;
  min-width: 4.75rem;
  border-radius: 0.6rem;
  .body-box {
    border-radius: 0.2rem;
    overflow: hidden;
  }
}
.notice-card-wrapper {
  .inner-container {
    margin-left: 100%; // 把文字弄出可见区域
    margin-top: .1%;
    width: 200%;
    animation: myMove 15s linear infinite; // 重点，定义动画
    animation-fill-mode: forwards;
  }
    /*文字无缝滚动*/
  @keyframes myMove {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-2500px);
    }
  }
}
</style>