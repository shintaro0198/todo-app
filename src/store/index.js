import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[createPersistedState()],
  state: {
    auth: "",
    user: {},
    number:1
  },
  mutations: {
    auth(state, payload) {
      state.auth = payload;
    },
    user(state,payload){
      state.user = payload;
    },
  },
  actions: {
    login({ commit }, { email, password }) {
      axios.post('https://damp-fjord-50020.herokuapp.com/api/login', {
        email: email,
        password : password 
      })
        .then(response => {
          console.log(response)
          commit('auth', response.data.auth)
          commit('user', response.data.data)
          if (this.state.auth === true) {
            router.replace('/home')
          }
      })
    }
  },
  modules: {
  }
})
