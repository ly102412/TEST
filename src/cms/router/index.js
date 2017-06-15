import Main from '../containers/main'
import Index from '../views/index'

// views - 活动管理
import ActivityCreate from '../views/activities/create'
import ActivityList from '../views/activities/activityList'
import ActivityTemplates from '../views/activities/templateList'
import ActivityRecord from '../views/activities/activityRecord'

// views - 商户信息
import AccountConsumeRecord from '../views/bussiness/accountConsumeRecord'
import AccountInfo from '../views/bussiness/accountInfo'
import AccountManage from '../views/bussiness/accountManage'
import AccountPruchaseRecord from '../views/bussiness/accountPurchaseRecord'
import BalanceInfo from '../views/bussiness/balanceInfo'

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
          },
        ]
      }
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
    path: '*',
    hidden: true,
    redirect: { path: '/pages/404' }
  }
]

export default routes
