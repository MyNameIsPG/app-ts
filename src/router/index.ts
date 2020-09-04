import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
Vue.use(VueRouter)

const arr = require.context('../views', true, /\.vue$/).keys();
arr.map(v => {
  const suffixSubscript = v.indexOf('.vue');
  const name = v.substring(1, suffixSubscript);
  console.log(suffixSubscript)
  console.log(name)
  
  
})
console.log(arr)


import Layout from '@/layout/index.vue'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: "/", redirect: "/login" },
      {
        path: "/home",
        name: "首页",
        component: () => import("@/views/home/home.vue")
      },
    ]
  },
  {
    path: "/login",
    name: "登录",
    component: () => import("@/views/login/login.vue")
  },
]

const router = new VueRouter({
  routes
})

export default router
