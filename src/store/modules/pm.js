export default {
  namespaced: true,
  state: {
    pm10: [20, 30, 33, 10, 4],
    pm2_5: [1, 22, 83, 44, 25],
    time: ['10:22:30', '10:23:30', '10:24:30', '10:25:30', '10:26:30'],
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
