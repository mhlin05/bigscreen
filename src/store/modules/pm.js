export default {
  namespaced: true,
  state: {
    pm10: [],
    pm2_5: [],
    time: [],
  },
  mutations: {
    //
    setpm10(state, payload) {
      state.pm10 = payload
    },
    setpm2_5(state, payload) {
      state.pm2_5 = payload
    },
    settime(state, payload) {
      state.time = payload
    },
  },
  actions: {
    setPm10({ commit }, payload) {
      commit('setpm10', payload)
    },
    setPm2_5({ commit }, payload) {
      commit('setpm2_5', payload)
    },
    setTime({ commit }, payload) {
      commit('settime', payload)
    },
  },
}
