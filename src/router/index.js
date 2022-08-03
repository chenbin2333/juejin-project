import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('../views/Home/MainContent.vue')
            },
            {
                path: '/report',
                component: () => import('../views/Report/ReportPart')
            },
            {
                path: '/article',
                component: () => import('../views/Article/Article')
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
