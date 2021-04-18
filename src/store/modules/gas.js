export default {
  namespaced: true,
  state: {
    co2: [0.1, 0.3, 0.6, 0.7, 0.4],
    tvoc: [0.2, 0.3, 0.4, 0.7, 0.7],
    so2: [0.7, 0.4, 0.6, 0.6, 0.8],
    o2: [0.3, 0.6, 0.2, 0.7, 0.9],
    time: ['10:22:30', '10:23:30', '10:24:30', '10:25:30', '10:26:30'],
  },
  mutations: {
    setco2(state, payload) {
      state.co2 = payload
    },
    settvoc(state, payload) {
      state.tvoc = payload
    },
    setso2(state, payload) {
      state.so2 = payload
    },
    seto2(state, payload) {
      state.o2 = payload
    },
    setTime(state, payload) {
      state.time = payload
    },
  },
  actions: {
    setCO2({ commit }, payload) {
      commit('setco2', payload)
    },
    setTVOC({ commit }, payload) {
      commit('settvoc', payload)
    },
    setSO2({ commit }, payload) {
      commit('setso2', payload)
    },
    setO2({ commit }, payload) {
      commit('seto2', payload)
    },
    setTime({ commit }, payload) {
      commit('setTime', payload)
    },
  },
}
