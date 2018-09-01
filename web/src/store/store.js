import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setUser (state, user) {
      state.user = user
    },
    toggleLoggedIn (state) {
      state.isLoggedIn = !state.isLoggedIn
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token)
    },
    setUser ({ commit }, user) {
      commit('setUser', user)
    },
    toggleLoggedIn ({ commit }) {
      commit('toggleLoggedIn')
    },
    async loginUser ({ commit, dispatch, state }, {token, user}) {
      await dispatch('setToken', token)
      await dispatch('setUser', user)
      await dispatch('toggleLoggedIn')
    },
    async logoutUser ({ commit, dispatch }) {
      await dispatch('setToken', null)
      await dispatch('setUser', null)
      await dispatch('toggleLoggedIn')
    }
  }

})
