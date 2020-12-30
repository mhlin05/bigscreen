<template>
  <div id="centreRight2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="align-left"></icon>
        </span>
        <span class="fs-xl text mx-2">园区安全事故统计图</span>
      </div>
      <div class="d-flex jc-center body-box" style=" margin-top: 0;">
        <dv-capsule-chart :config="config" style="width: 100%;height:2rem" />
        <!-- ---------------------------------------- -->
        <centreRight2Chart1 />
      </div>
    </div>
  </div>
</template>

<script>
import centreRight2Chart1 from "@/components/echart/centerRight/centerRightChart";

export default {
  data() {
    return {
      config: {
        data: [
          {
            name: "园区1",
            value: 167
          },
          {
            name: "园区2",
            value: 67
          },
          {
            name: "园区3",
            value: 123
          },
          {
            name: "园区4",
            value: 55
          },
          {
            name: "园区5",
            value: 98
          }
        ]
      }
    };
  },
  components: { centreRight2Chart1 },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#centreRight2 {
  padding: 0.0625rem;
  height: 5rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    padding: 0.0625rem;
    height: 5.0625rem;
    border-radius: 0.125rem;
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