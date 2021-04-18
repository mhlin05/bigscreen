export default {
  namespaced: true,
  state: {
    hpa: 1.1,
    lux: 2,
    eph: 5.5,
    eec: 60,
    en: 1,
    ep: 2,
    ek: 1,
  },
  mutations: {
    sethpa(state, payload) {
      state.hpa = payload
    },
    setlux(state, payload) {
      state.lux = payload
    },
    seteph(state, payload) {
      state.eph = payload
    },
    seteec(state, payload) {
      state.eec = payload
    },
    seten(state, payload) {
      state.en = payload
    },
    setep(state, payload) {
      state.ep = payload
    },
    setek(state, payload) {
      state.ek = payload
    },
  },
  actions: {
    setHPA({ commit }, payload) {
      commit('sethpa', payload)
    },
    setLUX({ commit }, payload) {
      commit('setlux', payload)
    },
    setEPH({ commit }, payload) {
      commit('seteph', payload)
    },
    setEEC({ commit }, payload) {
      commit('seteec', payload)
    },
    setEN({ commit }, payload) {
      commit('seten', payload)
    },
    setEP({ commit }, payload) {
      commit('setep', payload)
    },
    setEK({ commit }, payload) {
      commit('setek', payload)
    },
  },
}
