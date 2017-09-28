import Vue from 'vue'
import VueResource from 'vue-resource'
import './filter'
import router from './router'
import App from './App'
import './assets/js/rem'
import './assets/css/reset.scss'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


// Resource
Vue.use(VueResource)
Vue.use(MintUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
