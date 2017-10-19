import Main from '../containers/main'
import Index from '../views/index'
import Login from "../views/Login"

// views - 活动管理
import ActivityCreate from '../views/activities/create'
import ActivityList from '../views/activities/activityList'
import ActivityTemplates from '../views/activities/templateList'
import ActivityRecord from '../views/activities/activityRecord'
import ActivityMain from '../views/activities/main'

// views - 商户信息
import AccountConsumeRecord from '../views/bussiness/accountConsumeRecord'
import AccountInfo from '../views/bussiness/accountInfo'
import AccountManage from '../views/bussiness/accountManage'
import AccountPruchaseRecord from '../views/bussiness/accountPurchaseRecord'
import BalanceInfo from '../views/bussiness/balanceInfo'

// views - app商家接入
import AppMerchant from '../views/merchant/appMerchant'
import WxMerchant from '../views/merchant/wxMerchant'

// views - 批充流量
import AccountChargeFlow from '../views/chargeflow/accountChargeFlow'
import TelChargeFlow from '../views/chargeflow/telChargeFlow'
import ChargeFlowList from '../views/chargeflow/chargeFlowList'
import ChargeDetails from '../views/chargeflow/chargeDetails'


// views - pages
import Page404 from '../views/pages/404'

const routes = [
 
  {
    path: '/',
    name: '首页',
    redirect: '/index',
    component: Main,
    children: [
      {
        path: '/index',
        name: '账户信息',
        component: Index,
        hidden: true
      },
      {
        path: '/activities',
        redirect: '/activities/templateList',
        name: '营销活动',
        iconCls: 'fa fa-flag-checkered',
        component: {
          render (c) { return c('router-view') }
        },
        children: [
          {
            path: '/activities/create',
            name: '创建活动',
            component: ActivityCreate
          },
          {
            path: '/activities/activityList',
            name: '活动列表',
            component: ActivityList
          },
          // {
          //   path: '/activities/templateList',
          //   name: '活动模板',
          //   component: ActivityTemplates
          // },
          {
            path: '/activities/activityRecord',
            name: '中奖记录',
            component: ActivityRecord,
            hidden: true
          },
          {
            path: '/activities/main',
            name: '活动编辑页',
            component: ActivityMain,
            hidden: true
          }
        ]
      },
      {
        path: '/bussiness',
        redirect: '/bussiness/accountInfo',
        name: '商家管理',
        iconCls: 'fa fa-users',
        component: {
          render (c) { return c('router-view') }
        },
        children: [
          {
            path: '/bussiness/accountInfo',
            name: '账户信息',
            component: AccountInfo
          },
          {
            path: '/bussiness/accountManage',
            name: '账户资金管理',
            component: AccountManage
          },
          {
            path: '/bussiness/accountConsumeRecord',
            name: '资金消耗记录',
            component: AccountConsumeRecord,
            hidden: true
          },
          {
            path: '/bussiness/accountPurchaseRecord',
            name: '资金采购记录',
            component: AccountPruchaseRecord,
            hidden: true
          },
          {
            path: '/bussiness/balanceInfo',
            name: '账户余额明细',
            component: BalanceInfo,
            hidden: true
          }
        ]
      },
      {
        path: '/merchant',
        redirect: '/merchant/appMerchant',
        name: '商家接入',
        iconCls: 'fa fa-mobile',
        component: {
          render (c) { return c('router-view') }
        },
        children: [
          {
            path: '/merchant/appMerchant',
            name: 'app接入',
            component: AppMerchant
          },
          {
            path: '/merchant/wxMerchant',
            name: '微信接入',
            component: WxMerchant
          }
        ]
      },
      // {
      //   path: '/chargeflow',
      //   redirect: '/chargeflow/accountChargeFlow',
      //   name: '流量批充',
      //   iconCls: 'fa fa-feed',
      //   component: {
      //     render (c) { return c('router-view') }
      //   },
      //   children: [
      //     {
      //       path: '/chargeflow/accountChargeFlow',
      //       name: '流量账户批充',
      //       component: AccountChargeFlow
      //     },
      //     {
      //       path: '/chargeflow/telChargeFlow',
      //       name: '手机流量批充',
      //       component: TelChargeFlow
      //     },
      //     {
      //       path: '/chargeflow/chargeFlowList',
      //       name: '批充列表',
      //       component: ChargeFlowList
      //     },
      //     {
      //       path: '/chargeflow/chargeDetails',
      //       name: '详情',
      //       component: ChargeDetails,
      //       hidden: true
      //     }
      //   ]
      // }
    ]
  },
  {
    path: '/pages',
    redirect: '/pages/404',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: '/pages/404',
        name: 'page404',
        component: Page404
      }
    ]
  },
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/pages/404' }
  }
]

export default routes
