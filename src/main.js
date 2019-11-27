import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import "@/scss/common.scss";
import { getStorage } from "@/config/utils";
import "lib-flexible/flexible"
// import Vuex from 'vuex'
import '@/components/index'
import { Toast } from 'vant'

Vue.config.productionTip = false;
Vue.prototype.$Toast = Toast;

// Vue.use(Vuex);
router.beforeEach((to, from, next) => {
  store.commit('showTabbar', to.meta.showTabbar);
  if (to.meta.needLogin && !getStorage("login")) {
    next("/login");
    // next();
  } else {
    next();
  }
});
new Vue({
  router,
  store,
  data: {
    globalData: 'testData'
  },
  render: h => h(App)
}).$mount('#app');
