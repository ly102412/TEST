import Login from './views/Login'
import NotFound from './views/404'
import Home from './views/Home'
import Main from './views/Main'
import OrderList from './views/nav1/orderList'
import ChargeFlowList from './views/nav1/chargeFlowList'
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
  {
    path: '/chargeFlowList',
    component: Home,
    name: '审核列表',
    iconCls: 'fel-icon-message',
    leaf: true,//只有一个节点
    children: [
      { path: '/chargeFlowList', component: ChargeFlowList, name: '审核列表' },
    ]
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  }
];

export default routes;
