<template>
  <div id="chuanganqixinxi">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-line"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">传感器信息</span>
          <dv-decoration-3 style="width:2.25rem;height:.25rem; position:relative;top:-.0375rem;" />
        </div>
      </div>
      <!-- chart -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#chuanganqixinxi {
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
}
</style>