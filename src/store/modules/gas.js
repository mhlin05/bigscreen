export default {
  namespaced: true,
  state: {
    co2: [],
    tvoc: [],
    so2: [],
    o2: [],
    time: [],
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
