import Vue from 'vue'
import Vuex from 'vuex'
// import _ from 'lodash'
import tetline from './modules/tetline'
import monitor from './modules/monitor'
import humidity from './modules/humidity'
import pm from './modules/pm'
import gas from './modules/gas'
import others from './modules/others'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { tetline, monitor, humidity, pm, gas, others },
})
