import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    isAuthenticated: false
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload
    },
    SET_USER_STATUS(state, payload) {
      state.isAuthenticated = payload
    }
  },
  actions: {
    GET_USER({commit}, payload) {
      commit('SET_USER', payload)
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated
    }
  },
  modules: {}
})
