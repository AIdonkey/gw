// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import test from 'test.css'
import App from './App'
import router from './router'
import VueImg from 'v-img'
import iView from 'iview'
import 'reset.css'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import wx from 'weixin-js-sdk'
import store from './store'
import VueSocketio from 'vue-socket.io'
Vue.use(iView)
Vue.use(VueSocketio, 'http://localhost:3000')
Vue.config.productionTip = false
Vue.use(VueImg)
Vue.use(axios)
Vue.prototype.$http = axios
Vue.prototype.$wx = wx
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
