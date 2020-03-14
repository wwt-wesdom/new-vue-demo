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

var EventBus = new Vue();

Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  }
})

// 本地登录信息校验
store.commit('checkUserInfo');

// Vue.use(Vuex);
router.beforeEach((to, from, next) => {
  store.commit('showTabbar', to.meta.showTabbar);
  if (to.meta.needLogin && (!getStorage("userInfo") || Object.keys(getStorage("userInfo")).length === 0)) {
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
