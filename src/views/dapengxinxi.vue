<template>
  <div id="dapengxinxi">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-line"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">大棚信息</span>
          <dv-decoration-6 style="width:2.25rem;height:.25rem; position:relative;top:-.0375rem;" />
        </div>
      </div>
      <div class="d-flex jc-center">
        <calculateline />
      </div>
    </div>
  </div>
</template>

<script>
import calculateline from "@/components/echart/calculate/calculateline";
export default {
  data() {
    return {
    };
  },
  components: {
    calculateline
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style lang="scss">
li {
  list-style: none;
}
#dapengxinxi {
  padding: 0.2rem;
  height: 2.425rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 2.025rem;
    border-radius: 0.125rem;
  }
}
</style>