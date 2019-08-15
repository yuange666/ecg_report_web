import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/iconfont.css'
import '@/assets/styles/main.scss'
import '@babel/polyfill';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
