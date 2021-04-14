import Vue from 'vue'
import loginPopup from './Login'

const LoginConstructor = Vue.extend({ ...loginPopup });

let instance = null;

const close = function () {
  instance.dialogVisible = false;
  setTimeout(() => {
    if (instance.$el && instance.$el.parentNode) {
      instance.$el.parentNode.removeChild(instance.$el)
    }
    instance.$distroy();
    instance = null;
  }, 300)
};

const open = function () {
  if (instance) {
    Vue.nextTick(() => {
      instance.dialogVisible = true;
    });
    return instance;
  }
  const loginConstructor = new LoginConstructor({
    el: document.createElement('div')
  });
  document.body.appendChild(loginConstructor.$el);
  Vue.nextTick(() => {
    loginConstructor.dialogVisible = true;
  });
  instance = loginConstructor;
  return instance;
};
Vue.prototype.$showLogin = {close, open};
