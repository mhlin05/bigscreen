<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 style="width:33.3%;height:.0625rem;" />
          <div class="d-flex jc-center">
            <dv-decoration-8 :color="['#568aea', '#000000']" style="width:2.5rem;height:.625rem;" />
            <div class="title">
              <span class="title-text">大棚可视化大屏</span>
              <dv-decoration-6
                class="title-bototm"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
                style="width:3.125rem;height:.1rem;"
              />
            </div>
            <dv-decoration-8
              :reverse="true"
              :color="['#568aea', '#000000']"
              style="width:2.5rem;height:.625rem;"
            />
          </div>
          <dv-decoration-10 style="width:33.3%;height:.0625rem; transform: rotateY(180deg);" />
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex" style="width: 40%">
            <div
              class="react-right ml-4"
              style="width: 6.25rem; text-align: left;background-color: #0f1325;"
            >
              <span class="react-before"></span>
              <span class="text" >{{dateYear}}{{dateWeek}}{{dateDay}}</span>
            </div>
            <div class="react-right bg-color-blue mr-3">
            </div>
          </div>
          <div style="width: 40%" class="d-flex">
            <div class="react-left bg-color-blue mr-3">
            </div>
            <div
              class="react-left mr-4"
              style="width: 6.25rem; background-color: #0f1325; text-align: right;"
            >
              <span class="react-after"></span>
              <span class="text">{{info.city}},{{info.wea}},实时温度：{{info.tem}}℃,空气质量：{{info.air}}</span>
            </div>
          </div>
        </div>

        <div class="body-box">
         <!-- 第三行数据 -->
          <div class="content-box1">
            <div />
            <div>
              <dv-border-box-8>
                <gundongtiao />
              </dv-border-box-8>
            </div>
            <div />
          </div>
        </div>

        <div class="body-box">
          <!-- 第四行数据 -->
          <div class="content-box">
            <div>
              <dv-border-box-12>
                <dapengxuanze />
              </dv-border-box-12>
            </div>
            <div>
              <dv-border-box-1>
                <jiankongzhanshi />
              </dv-border-box-1>
            </div>
            <div>
              <dv-border-box-12>
                <caijijiedianxinxi />
              </dv-border-box-12>
            </div>
          </div>

          <!-- 第五行数据 -->
          <div class="bototm-box">
            <dv-border-box-12>
              <kongzhianniu />
            </dv-border-box-12>
            <dv-border-box-12>
              <kaiguanzhuangtai />
            </dv-border-box-12>
            <dv-border-box-12>
              <dapengxinxi />
            </dv-border-box-12>
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import axios from 'axios';
import { formatTime } from '../utils/index.js';
import gundongtiao from "./gundongtiao";
import dapengxuanze from "./dapengxuanze";
import kaiguanzhuangtai from "./kaiguanzhuangtai";
import caijijiedianxinxi from "./caijijiedianxinxi";
import jiankongzhanshi from "./jiankongzhanshi";
import kongzhianniu from "./kongzhianniu";
import dapengxinxi from "./dapengxinxi";
export default {
  data () {
    return {
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      info: null,
    };
  },
  components: {
    jiankongzhanshi,
    caijijiedianxinxi,
    dapengxuanze,
    kaiguanzhuangtai,
    gundongtiao,
    kongzhianniu,
    dapengxinxi
  },
  mounted () {
    this.timeFn();
    this.cancelLoading();
    //获取天气信息
    axios
      .get('https://www.tianqiapi.com/free/day?appid=73988472&appsecret=EHXQ770i&city=杭州')
      .then(response => (this.info = response.data))
  },
  methods: {
    timeFn () {
      setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss');
        this.dateYear = formatTime(new Date(), 'yyyy年MM月dd日');
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000)
    },
    cancelLoading () {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }
};
</script>

<style lang="scss">
@import '../assets/scss/index.scss';
</style>