import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './assets/styles/index.styl'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Axios from 'axios';

Vue.prototype.$axios = Axios
Vue.use(VueAwesomeSwiper)
fastclick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
