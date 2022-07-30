import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'
import ReportPart from "@/views/Report/ReportPart";

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
        component: () => import('../views/Home/HomeContainer.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'ReportPart',
    component: ReportPart,
    redirect: '/report',
    children: [
      {
        path: '/report',
        component: () => import('../views/Report/ReportPart')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
