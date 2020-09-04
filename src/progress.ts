import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from './router'
import { Route } from 'vue-router'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to: Route, _: Route, next: any) => {
  NProgress.start()
  next()
})

router.afterEach((to: Route) => {
  NProgress.done()
})