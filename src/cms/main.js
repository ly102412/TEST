import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './app'
import ElementUI from 'element-ui'
import './assets/theme/theme-gray/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import './filter'
import routes from './routes'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

window.$ = window.jQuery = require('jquery');

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

NProgress.configure({ showSpinner: false });

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    //NProgress.start();
    if (to.path == '/login') {
        sessionStorage.removeItem('is_login');
    }
    let isLogin = JSON.parse(sessionStorage.getItem('is_login'));
    if (!isLogin && to.path != '/login') {
        next({ path: '/login' })
    } else {
        next()
    }
})

//router.afterEach(transition => {
//NProgress.done();
//});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
