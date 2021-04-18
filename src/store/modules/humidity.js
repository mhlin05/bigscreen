export default {
  namespaced: true,
  state: {
    skyHumidity: [30, 40, 50, 90, 35],
    soilHumidity: [31, 22, 3, 84, 25],
    time: ['10:22:30', '10:23:30', '10:24:30', '10:25:30', '10:26:30'],
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
