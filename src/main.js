// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import lazyload from 'vue-lazyload'
import scroll from '@/components/base/scroll'
import '@/assets/css/reset.scss'
import '@/assets/font/iconfont.css'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.component(scroll.name, scroll)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(lazyload, {
  loading: '/static/loading.gif'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
