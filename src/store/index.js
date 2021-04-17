import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前选择的大棚号
    greenHouseNum: 0,
    // 设备序列号
    equipmentSerial: '',
    // 当前选择的监控
    monitorNum: 1,
  },
  mutations: {
    setGreenHouseNum(state, payload) {
      state.greenHouseNum = payload
    },
    setEquipmentSerial(state, payload) {
      state.equipmentSerial = payload
    },
    setMonitorNum(state, payload) {
      state.monitorNum = payload
    },
  },
  actions: {
    // 设置大棚号
    setHouseNum({ commit }, payload) {
      commit('setGreenHouseNum', payload)
    },
    setSerial({ commit }, payload) {
      commit('setEquipmentSerial', payload)
    },
    setMonitor({ commit }, payload) {
      commit('setMonitorNum', payload)
    },
  },
  modules: {},
})
