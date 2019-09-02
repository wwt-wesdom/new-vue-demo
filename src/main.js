import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/scss/common.scss";
import { getStorage } from "@/config/utils";
// import Vuex from 'vuex'

Vue.config.productionTip = false;
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
  render: h => h(App)
}).$mount('#app');
