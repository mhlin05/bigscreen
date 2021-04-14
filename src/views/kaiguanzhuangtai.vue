<template>
  <div id="kaiguanzhuangtai">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="cog"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">控制开关状态</span>
        </div>
      </div>
      <div class="d-flex jc-center">
        <el-row :gutter="14">
          <el-col :span="12">
            <el-card class="box-card" shadow="always">
              <el-row :gutter="10">
                <el-col :span="12"><div class="text1">大棚1</div></el-col>
                <el-col :span="12"><div class="text1">采光模式</div></el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="6"><div class="text">换气风机A：<el-switch v-model="value1" disabled/></div></el-col>
                <el-col :span="6"><div class="text">换气风机B：<el-switch v-model="value2" disabled/></div></el-col>
                <el-col :span="6"><div class="text">循环风机：<el-switch v-model="value2" disabled/></div></el-col>
                <el-col :span="6"><div class="text">湿帘水泵：<el-switch v-model="value2" disabled/></div></el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="6"><div class="text">最内层遮阳：<el-switch v-model="value1" disabled/></div></el-col>
                <el-col :span="6"><div class="text">中间层遮阳：<el-switch v-model="value2" disabled/></div></el-col>
                <el-col :span="6"><div class="text">最外层遮阳：<el-switch v-model="value2" disabled/></div></el-col>
                <el-col :span="6"><div class="text">窗户：<el-switch v-model="value1" disabled/></div></el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="6"><div class="text">内保温层东：<el-switch v-model="value1" disabled/></div></el-col>
                <el-col :span="6"><div class="text">内保温层西：<el-switch v-model="value2" disabled/></div></el-col>
                <el-col :span="6"><div class="text">内保温层北：<el-switch v-model="value1" disabled/></div></el-col>
                <el-col :span="6"><div class="text">内保温层南：<el-switch v-model="value2" disabled/></div></el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="6"><div class="text">膜东侧：<el-switch v-model="value1" disabled/></div></el-col>
                <el-col :span="6"><div class="text">膜西侧：<el-switch v-model="value2" disabled/></div></el-col>
                <el-col :span="6"><div class="text">膜北侧：<el-switch v-model="value2" disabled/></div></el-col>
                <el-col :span="6"><div class="text">膜南侧：<el-switch v-model="value1" disabled/></div></el-col>
              </el-row>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" shadow="always">
              <el-row :gutter="10">
                <el-col :span="12"><div class="text1">大棚2</div></el-col>
                <el-col :span="12"><div class="text1">外循环通风模式</div></el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="6"><div class="text">换气风机A：<el-switch v-model="value1" disabled/></div></el-col>
                <el-col :span="6"><div class="text">换气风机B：<el-switch v-model="value2" disabled right/></div></el-col>
                <el-col :span="6"><div class="text">循环风机：<el-switch v-model="value2" disabled/></div></el-col>
                <el-col :span="6"><div class="text">湿帘水泵：<el-switch v-model="value2" disabled/></div></el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="6"><div class="text">最内层遮阳：<el-switch v-model="value2" disabled/></div></el-col>
                <el-col :span="6"><div class="text">中间层遮阳：<el-switch v-model="value1" disabled/></div></el-col>
                <el-col :span="6"><div class="text">最外层遮阳：<el-switch v-model="value2" disabled/></div></el-col>
                <el-col :span="6"><div class="text">窗户：<el-switch v-model="value1" disabled right/></div></el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="6"><div class="text">内保温层东：<el-switch v-model="value1" disabled/></div></el-col>
                <el-col :span="6"><div class="text">内保温层西：<el-switch v-model="value2" disabled/></div></el-col>
                <el-col :span="6"><div class="text">内保温层北：<el-switch v-model="value2" disabled/></div></el-col>
                <el-col :span="6"><div class="text">内保温层南：<el-switch v-model="value2" disabled/></div></el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="6"><div class="text">膜东侧：<el-switch v-model="value1" disabled/></div></el-col>
                <el-col :span="6"><div class="text">膜西侧：<el-switch v-model="value2" disabled/></div></el-col>
                <el-col :span="6"><div class="text">膜北侧：<el-switch v-model="value2" disabled/></div></el-col>
                <el-col :span="6"><div class="text">膜南侧：<el-switch v-model="value2" disabled/></div></el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: false
    };
  },
  components: {
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#kaiguanzhuangtai {
  padding: 0.2rem;
  height: 2.425rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 2.075rem;
    border-radius: 0.125rem;
  }
  .box-card {
    margin-top: 0rem;
    width: 6.25rem;
    height: 1.7rem;
    background-color: rgba(19, 25, 47, 0.8);
  }
  .el-card{
    border: 0rem;
  }
  .el-card__body{
    padding: .1rem;
  }
  .el-row {
    margin-bottom: .1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .text {
    font-size: 0.075rem;
    color: #c3cbde;
  }
  .text1 {
    font-size: 0.175rem;
    color: #c3cbde;
  }
  .el-switch__core{
    width: 0.475rem!important;
    height: 0.25rem;
  }
  .el-switch__core::after{
    width: 0.225rem;
    height: 0.225rem;
    margin-top: -0.0125rem;
    margin-bottom: 0.025rem;
  }
}
</style>