<template>
  <div id="dapengxuanze">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="tachometer-alt"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">大棚选择</span>
          <dv-decoration-3
            style="width:2.65rem;height:.25rem; position:relative;top:-.0375rem;"
          />
        </div>
      </div>
      <el-tree
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
        :accordion="true"
      ></el-tree>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          label: '一号大棚',
          children: [
            {
              label: '大豆    预计亩产:100吨',
            },
            {
              label: '番茄    预计亩产:100吨',
            },
            {
              label: '黄瓜    预计亩产:100吨',
            },
            {
              label: '大豆    预计亩产:100吨',
            },
            {
              label: '番茄    预计亩产:100吨',
            },
            {
              label: '黄瓜    预计亩产:100吨',
            },
            {
              label: '大豆    预计亩产:100吨',
            },
            {
              label: '番茄    预计亩产:100吨',
            },
            {
              label: '黄瓜    预计亩产:100吨',
            },
          ],
        },
        {
          label: '二号大棚',
          children: [
            {
              label: '大豆    预计亩产:100吨',
            },
            {
              label: '番茄    预计亩产:100吨',
            },
            {
              label: '黄瓜    预计亩产:100吨',
            },
            {
              label: '大豆    预计亩产:100吨',
            },
            {
              label: '番茄    预计亩产:100吨',
            },
            {
              label: '黄瓜    预计亩产:100吨',
            },
            {
              label: '大豆    预计亩产:100吨',
            },
            {
              label: '番茄    预计亩产:100吨',
            },
            {
              label: '黄瓜    预计亩产:100吨',
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    }
  },
  components: {},
  mounted() {},
  methods: {
    handleNodeClick(data) {
      // console.log(data)
      // console.log(typeof data.$treeNodeId)
      // 保存当前选择的大棚号到state中
      this.$store.dispatch('setHouseNum', data.$treeNodeId)
      if (data.$treeNodeId === 1) {
        // 原始数据
        this.$store.dispatch('setSerial', 'E99632751')
      } else {
        this.$store.dispatch('setSerial', 'F04233924')
      }
    },
  },
}
</script>

<style lang="scss">
#dapengxuanze {
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
  .el-tree-node.is-current > .el-tree-node__content {
    background-color: rgba(19, 25, 48, 0.6) !important;
    color: white;
  }
  .el-tree {
    margin-top: 0.2rem;
    color: rgba(234, 235, 241, 0.6);
    background: transparent;
  }
  .el-tree-node__content:hover {
    background-color: #2453a3;
    color: #fff;
  }
  .el-tree-node__label {
    font-size: 0.1625rem;
    letter-spacing: 0.0375rem;
  }
}
</style>
