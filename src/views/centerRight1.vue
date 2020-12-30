<template>
  <div id="centreRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-line"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">处理情况</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board :config="config" style="width:3.375rem;height:4.28rem" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        header: ["园区", "安全等级", "处理时间"],
        data: [
          ["园区1", "A1", "<span  class='colorGrass'>1s</span>"],
          ["园区2", "A2", "<span  class='colorRed'>33s</span>"],
          ["园区3", "A3", "<span  class='colorGrass'>100s</span>"],
          ["园区4", "B1", "<span  class='colorGrass'>94s</span>"],
          ["园区5", "C2", "<span  class='colorGrass'>95s</span>"],
          ["园区6", "D2", "<span  class='colorGrass'>63s</span>"],
          ["园区7", "B3", "<span  class='colorGrass'>84s</span>"],
          ["园区8", "B2", "<span  class='colorRed'>46s</span>"],
          ["园区9", "C2", "<span  class='colorRed'>13s</span>"],
          ["园区10", "C1", "<span  class='colorGrass'>76s</span>"]
        ],
        rowNum: 7, //表格行数
        headerHeight: 35,
        headerBGC: "#0f1325", //表头
        oddRowBGC: "#0f1325", //奇数行
        evenRowBGC: "#171c33", //偶数行
        index: true,
        columnWidth: [50],
        align: ["center"]
      }
    };
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#centreRight1 {
  padding: 0.2rem;
  height: 5.125rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 4.8125rem;
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