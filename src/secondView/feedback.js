import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import router from '../router'
import store from '../store'
import feedback from './feedback.vue'

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  vuetify,
  router,
  store,
  el: '#feedback',
  render: h => h(feedback)

})