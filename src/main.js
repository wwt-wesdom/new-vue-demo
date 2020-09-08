import Vue from 'vue'
import App from './App.vue'
import TestVueComponent from "./components/test/TestVueComponent";
import router from './router'
import store from './store/index.js'
import "@/scss/common.scss";
import { getStorage } from "@/config/utils";
import "lib-flexible/flexible"
import Alert from "./components/alert/alert.js";
import Model from "./components/model/model.js";
// import Vuex from 'vuex'
import '@/components/index'
import { Toast } from 'vant'

Vue.config.productionTip = false;
Vue.prototype.$Toast = Toast;
Vue.prototype.$Alert = Alert.info;
Vue.prototype.$Model = Model;

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
  console.log('============beforeEach=============');
  store.commit('showTabbar', to.meta.showTabbar);
  if (to.meta.needLogin && (!getStorage("userInfo") || Object.keys(getStorage("userInfo")).length === 0)) {
    next("/login");
    // next();
  } else {
    next();
  }
});

// 全局后置钩子，没有next回调
router.afterEach((to, from) => {
  console.log('============afterEach=============');
})


new Vue({
  router,
  store,
  data: {
    globalData: 'testData'
  },
  render: h => h(App)
}).$mount('#app');

const testNode = new Vue({
  render: h => h(TestVueComponent)
});
console.log(testNode.$el);
// document.body.appendChild(testNode.$el);
