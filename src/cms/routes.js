import Login from './views/Login'
import NotFound from './views/404'
import Home from './views/Home'
import Main from './views/Main'
import List from './views/nav1/list'
import RedeemCode from './views/nav1/redeemCode'
import RedeemCodeRecord from './views/nav1/redeemCodeRecord'
import CheckCode from './views/nav1/checkCode'
import Form from './views/nav1/Form'
import Edit from './views/nav1/edit'

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
  //{ path: '/main', component: Main },
  // {
  //     path: '/',
  //     component: Home,
  //     name: '流量兑换1码管理',
  //     iconCls: 'el-icon-message',//图标样式class
  //     children: [
  //         { path: '/main', component: Main, name: '主页', hidden: true },
  //         { path: '/redeemCode', component: RedeemCode, name: '流量兑换1码管理', hidden: false },
  //         { path: '/list', component: List, name: '粮票列表' , hidden: true},
  //         { path: '/form', component: Form, name: '添加粮票', hidden: true },
  //         { path: '/edit/:id', component: Edit, name: '编辑粮票', hidden: true },
  //         { path: '/checkCode', component: CheckCode, name: '查看兑换码', hidden: false }
  //     ]
  // },
  //
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
    path: '/redeemCode',
    component: Home,
    name: '流量兑换码管理',
    iconCls: 'fel-icon-message',
    leaf: true,//只有一个节点
    children: [
      { path: '/redeemCode', component: RedeemCode, name: '流量兑换码管理' },
      { path: '/redeemCodeRecord', component: RedeemCodeRecord, name: '流量兑换记录' },
      { path: '/checkCode', component: CheckCode, name: '流量兑换码', hidden: true }
    ]
  },{
    path: '/redeemCodeRecord',
    component: Home,
    name: '流量兑换记录',
    iconCls: 'fel-icon-message',
    leaf: true,//只有一个节点
    children: [
      { path: '/redeemCodeRecord', component: RedeemCodeRecord, name: '流量兑换记录' }
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
