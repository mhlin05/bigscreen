<template>
  <div id="jiankongzhanshi">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <div class="d-flex">
          <el-button type="primary" size="mini">监控页</el-button>
          <el-button type="primary" size="mini">平面页</el-button>
        </div>
      </div>
      <EZUIKitJs />
    </div>
  </div>
</template>

<script>
import EZUIKitJs from "@/components/EZUIKitJs.vue"
export default {
  data() {
    return {};
  },
  components: {
    EZUIKitJs
  },
  mounted() {},
  methods: {}
};
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
  }
  .text {
    color: #ffffff;
  }
  .el-button {
  color: #FFF;
  background-color: rgba(45, 63, 129, 0.5);
  border-color: #08175a;
  margin-left: .3rem;
  }
}
</style>