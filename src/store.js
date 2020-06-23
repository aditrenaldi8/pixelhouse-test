import Vue from 'vue'
import Vuex from 'vuex'
import axios from './helpers/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    loading: false
  },
  getters: {
    getLoading: state => { return state.appid },
    getData: state => { return state.appkey },
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setData (state, payload) {
      state.data = payload
    }
  },
  actions: {
    getPost (context) {
      axios.get(`/posts`)
        .then(response => {
          context.commit('setData', response.data)
        })
        .catch(error => {
          console.warn(error)
        })
    }
  }
})
