export const state = () => ({
  // ログイン状態の管理
  loggedIn: false,
  styles: {
    beforeLogin: {
      appBarHeight: 56
    }
  }
})

export const getters = {
  setLoggedIn (state, payload) {
    state.loggedIn = payload
  }
}

export const mutations = {}

export const actions = {
  login ({ commit }) {
    commit('setLoggedIn', true)
  }
}
