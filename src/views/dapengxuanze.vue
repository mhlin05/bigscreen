<template>
  <div id="dapengxuanze">
    <div class="bg-color-black">
    <div class="text">选择大棚</div>
    <dv-border-box-7 class="text1">1号大棚</dv-border-box-7>
    <dv-border-box-7 class="text2">2号大棚</dv-border-box-7>
    <!-- 第一排按钮 -->
    <!-- <ui class="selectbutton1">
      <li class="selected">
        <div style=" font-size: .25rem;font-weight: 300;line-height: .94rem;text-align: center;">监控1</div>
      </li>
      <li>
        <div style=" font-size: .25rem;font-weight: 300;line-height: .94rem;text-align: center;">监控2</div>
      </li>
      <li>
        <div style=" font-size: .25rem;font-weight: 300;line-height: .94rem;text-align: center;">监控3</div>
      </li>
    </ui> -->
    <!-- 第二排按钮 -->
    <!-- <ui class="selectbutton2">
      <li>
        <div style=" font-size: .25rem;font-weight: 300;line-height: .94rem;text-align: center;">监控4</div>
      </li>
      <li>
        <div style=" font-size: .25rem;font-weight: 300;line-height: .94rem;text-align: center;">监控5</div>
      </li>
      <li>
        <div style=" font-size: .25rem;font-weight: 300;line-height: .94rem;text-align: center;">监控6</div>
      </li>
    </ui> -->
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
    position: absolute;
    top: .6rem;
    width: 2rem;
    height: 1rem;
    left: 50%;
    margin-left: -1rem;
    background-color: rgba(50, 51, 112, 0.1);
    font-size: .36rem;
    font-weight: 200;
    line-height: .94rem;
    text-align: center;
  }
  .text1 {
    position: absolute;
    top: 2.1rem;
    width: 1.9rem;
    height: 1rem;
    left: 20%;
    margin-left: .25rem;
    background-color: rgba(50, 51, 112, 0.1);
    font-size: .3rem;
    font-weight: 200;
    line-height: .94rem;
    text-align: center;
  }
  .text2{
    position: absolute;
    top: 4.1rem;
    width: 1.9rem;
    height: 1rem;
    left: 20%;
    margin-left: .25rem;
    background-color: rgba(50, 51, 112, 0.1);
    font-size: .3rem;
    font-weight: 200;
    line-height: .94rem;
    text-align: center;
  }
  .selectbutton1{
    position: absolute;
    bottom: 2.3rem;
    width: 4.3rem;
    height: 1.36rem;
    background-color: rgba(50, 51, 112, 0.1);
    left: 50%;
    margin-left: -2.2rem;
    border-radius: 2.9rem;
  }
  .selectbutton1 li{
    float: left;
    border-radius: 50%;
    margin: .2rem;
    width: 1rem;
    height: 1rem;
    background-color: rgba(50, 51, 112, 0.3);
  }
  .selectbutton1 .selected{
    background-color: rgba(6, 6, 19, 0.5);
  }
  .selectbutton2{
    position: absolute;
    bottom: .7rem;
    width: 4.3rem;
    height: 1.36rem;
    background-color: rgba(50, 51, 112, 0.1);
    left: 50%;
    margin-left: -2.2rem;
    border-radius: 2.9rem;
  }
  .selectbutton2 li{
    float: left;
    border-radius: 50%;
    margin: .2rem;
    width: 1rem;
    height: 1rem;
    background-color: rgba(50, 51, 112, 0.3);
  }
}
</style>