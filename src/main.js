import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueLazyload from 'vue-lazyload'
import 'common/stylus/index.styl'

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading: require('common/images/default.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
