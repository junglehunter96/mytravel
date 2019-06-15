import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: state.city
  },
  mutations: { 
    changeCity(state, city) {
      state.city = city
      localStorage.setItem('city', city)
    }
  }
})
