import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入vuex
import store from './store'
//引入mock
require('./mock/mockServe')
// 引入element-ui
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'
Vue.use(Element, {size: 'small', zIndex: 3000})


Vue.config.productionTip = false
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
