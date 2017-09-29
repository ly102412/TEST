import Login from './views/Login'
import NotFound from './views/404'
import Home from './views/Home'
import Main from './views/Main'
import OrderList from './views/nav1/orderList'

import Test from './views/Test.vue'

const routes = [
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true
  },
  {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
  },
  {
    path: '/test',
    component: Test,
    name: '',
    hidden: true
  },
  // {
  //     path: '/',
  //     component: Home,
  //     name: '导航二',
  //     iconCls: 'fa fa-id-card-o',
  //     children: [
  //       { path: '/redeemCodeRecord', component: RedeemCodeRecord, name: '流量兑换码记录' },
  //       { path: '/redeemCodeRecord', component: RedeemCodeRecord, name: '流量兑换码记录' },
  //     ]
  // },
  {
    path: '/orderList',
    component: Home,
    name: '订单管理',
    iconCls: 'fel-icon-message',
    leaf: true,//只有一个节点
    children: [
      { path: '/orderList', component: OrderList, name: '订单管理' },
    ]
  },
  // {
  //     path: '/',
  //     component: Home,
  //     name: 'Charts',
  //     iconCls: 'fa fa-bar-chart',
  //     children: [
  //         { path: '/echarts', component: echarts, name: 'echarts' }
  //     ]
  // },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  }
];

export default routes;
