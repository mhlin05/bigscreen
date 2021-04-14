<template>
  <div id="kongzhianniu">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="video"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">选择监控</span>
          <dv-decoration-3 style="width:2.75rem;height:.25rem; position:relative;top:-.0375rem;" />
        </div>
      </div>
      <el-button-group>
        <el-button type="primary">1</el-button>
        <el-button type="primary">2</el-button>
        <el-button type="primary">3</el-button>
      </el-button-group>
      <el-button-group>
        <el-button type="primary">4</el-button>
        <el-button type="primary">5</el-button>
        <el-button type="primary">6</el-button>
      </el-button-group>
      <div class="d-flex jc-center">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  components: { 
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
#kongzhianniu {
  padding: 0.2rem;
  height: 2.425rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 2.025rem;
    border-radius: 0.125rem;
  }
  .el-button {
  color: #FFF;
  background-color: rgba(26, 44, 109, 0.5);
  border-color: #08175a;
  margin-left: .3rem;
  margin-top: .2rem;
  font-size: 16px;
  width: 1.1rem;
  border-color: #053169;
  }
}
</style>