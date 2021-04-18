import _ from 'lodash'
export default {
  namespaced: true,
  state: {
    soilTemp: [31, 22, 23, 34, 25],
    skyTemp: [31, 32, 33, 34, 35],
    time: ['10:22:30', '10:23:30', '10:24:30', '10:25:30', '10:26:30'],
  },
  mutations: {
    setSoilInfo(state, payload) {
      state.soilTemp = _.cloneDeep(payload)
    },
    setSkyInfo(state, payload) {
      state.skyTemp = _.cloneDeep(payload)
    },
    setTimeInfo(state, payload) {
      state.time = _.cloneDeep(payload)
    },
  },
  actions: {
    setSoilTemp({ commit }, payload) {
      commit('setSoilInfo', payload)
    },
    setSkyTemp({ commit }, payload) {
      commit('setSkyInfo', payload)
    },
    setTime({ commit }, payload) {
      commit('setTimeInfo', payload)
    },
  },
}
