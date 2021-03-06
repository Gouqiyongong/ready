import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from './comme/axios';
import  { ToastPlugin, ConfirmPlugin, LoadingPlugin } from 'vux'

import routes from './router.js';

import App from './app.vue';

Vue.prototype.$axios = axios;
Vue.prototype.$ajax = axios;
Vue.prototype.$fetch = axios;

Vue.use(VueRouter);
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  template: `<App />`,
  el: '#root',
  components: { App }
})