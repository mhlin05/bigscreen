export default {
  namespaced: true,
  state: {
    skyHumidity: [],
    soilHumidity: [],
    time: [],
  },
  mutations: {
    setSky(state, payload) {
      state.skyHumidity = payload
    },
    setSoil(state, payload) {
      state.soilHumidity = payload
    },
    setTime(state, payload) {
      state.time = payload
    },
  },
  actions: {
    setSkyHumidity({ commit }, payload) {
      commit('setSky', payload)
    },
    setSoilHumidity({ commit }, payload) {
      commit('setSoil', payload)
    },
    setTime({ commit }, payload) {
      commit('setTime', payload)
    },
  },
}
