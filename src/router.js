import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('./views/Home.vue');
const City = () => import('./views/City.vue');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path:'/city',
      name:'city',
      component:City
    }
  ]
})
