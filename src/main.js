import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import dataV from '@jiaminghi/data-view';
Vue.use(dataV);


import Axios from 'axios'


// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/chart-bar.js';
import 'vue-awesome/icons/chart-area.js';
import 'vue-awesome/icons/chart-pie.js';
import 'vue-awesome/icons/chart-line.js';
import 'vue-awesome/icons/align-left.js';

// 全局注册图标
Vue.component('icon', Icon);

// 适配flex
import '@/common/flexible.js';

// 引入全局css
import './assets/scss/style.scss';


//引入echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false;




// 配置axios
Vue.prototype.$axios = Axios;

// Axios.defaults.baseURL=process.env.NODE_ENV === 'production'?'http://47.110.75.177:8080/io2/equipment':'http://47.110.75.177:8080/io2/equipment'

Axios.defaults.baseURL='http://47.110.75.177:8080/io2/equipment/'
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
