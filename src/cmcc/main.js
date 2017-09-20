import Vue from 'vue'
import App from './App'
import routes from './router'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import $ from 'jquery'
import 'element-ui/lib/theme-default/index.css'

NProgress.configure({ showSpinner: false });

Vue.use(ElementUI)
Vue.use(Router)

const router  = new Router({
  routes
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
