import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
const state = {
  username: '12',
  password: '',
  onlyid: ''
}
export default new Vuex.Store({
  plugins: [createPersistedState()],
  state,
  mutations
})
