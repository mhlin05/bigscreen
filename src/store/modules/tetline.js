import _ from 'lodash'
export default {
  namespaced: true,
  state: {
    soilTemp: [],
    skyTemp: [],
    time: [],
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
