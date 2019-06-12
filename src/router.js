import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('./views/Home.vue');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
