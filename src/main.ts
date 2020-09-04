import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import ElementUI from 'element-ui'
import i18n from '@/lang'
import '@/progress'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/font/css/font-awesome.min.css'
import '@/styles/index.styl'

Vue.config.productionTip = false
Vue.use(ElementUI, {
  i18n: (key: string, value: string) => i18n.t(key, value)
})

Vue.prototype.count = 0;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
