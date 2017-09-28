import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 创建一个路由器实例
// 并且配置路由规则
import Index from '../views/index'
import Login from '../views/login'
import DetailedList from  '../views/detailedList'
import Message from  '../views/message'
import Mycoupon from  '../views/mycoupon'
import Explain from '../views/explain'
import Usedcoupon from '../views/usedcoupon'
import Charge from '../views/charge'

VueRouter.prototype.goBack = function(){
  this.isBack = true;
  window.history.go(-1)
}

const route = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
     { path: '/', redirect: '/index' },
     {
       name: 'index', path: '/index', component: Index
     },
     {
       name: 'login', path: '/login', component: Login
     },
     {
       name: 'detailedList', path: '/detailedList', component: DetailedList
     },
     {
      name: 'message', path: '/message', component: Message
     },
     {
       name: 'mycoupon', path: '/mycoupon', component: Mycoupon
     },
     {
       name: 'explain', path: '/explain', component: Explain
     },
     {
       name: 'usedcoupon', path: '/usedcoupon', component: Usedcoupon
     },
     {
       name: 'charge', path: '/charge', component: Charge
     }
  ]
})

export default route
