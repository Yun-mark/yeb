import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import 'font-awesome/css/font-awesome.css'

import { postRequest, getRequest, deleteRequest, putRequest } from './utils/api'
import { initMenu } from './utils/menus'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.postRequest = postRequest
Vue.prototype.getRequest = getRequest
Vue.prototype.deleteRequest = deleteRequest
Vue.prototype.putRequest = putRequest

router.beforeEach((to, from, next) => {
  if (window.sessionStorage.getItem('tokenStr')) {
    initMenu(router, store)
    if (!window.sessionStorage.getItem('user')) {
      return getRequest('/admin/info').then(resp => {
        if (resp) {
          window.sessionStorage.setItem('user', JSON.stringify(resp))
          next()
        }
      })
    }
    next()
  } else {
    if (to.path === '/') {
      next()
    } else {
      next('/?redirect=' + to.path)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
