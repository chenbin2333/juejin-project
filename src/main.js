import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入mock
require('./mock/mockServe')
// 引入公共样式
import './styles/common.css'
// 引入element-ui
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'

Vue.use(Element, {size: 'small', zIndex: 3000})
Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
