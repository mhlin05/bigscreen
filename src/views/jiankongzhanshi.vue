<template>
  <div id="jiankongzhanshi">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="video"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">监控内容</span>
          <dv-decoration-1 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" />
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
}
</style>