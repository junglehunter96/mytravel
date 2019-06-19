import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('./views/Home.vue');
const City = () => import('./views/City.vue');
const Detail = () => import('./views/Detail.vue')
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
    },{
      path:'/detail/:id',
      name:'detail',
      component:Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
