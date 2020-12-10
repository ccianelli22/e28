import { createStore } from "vuex";

export default createStore({
  state: {
    loggedIn: false,
    username: ""
  },
  mutations: {
    setLoggedInStatus(state, payload) {
      state.loggedIn = payload.loggedIn;
      state.username = payload.username;
    }
  },
  actions: {},
  modules: {}
});
