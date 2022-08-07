import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'
//引入vuex
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: 'home',
                component: () => import('../views/Home/MainContent.vue')
            },
            {
                path: 'report',
                component: () => import('../views/Report/ReportPart')
            },
            {
                path: 'article',
                component: () => import('../views/Article/Article')
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

router.afterEach((to, from) => {
    console.log(to, from)
    if (to.path === '/article')
        store.commit('isContainer', false)
    if (to.path === '/home')
        store.commit('isContainer', true)
    console.log(store.state.isContainer)
})
export default router
