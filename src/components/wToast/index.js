import WToast from "./WToast";
let obj = {};
obj.install = function (Vue) {
  const instance = Vue.extend(WToast);
  const wToast = new instance();
  document.body.appendChild(wToast.$mount().$el);
  Vue.prototype.$wToast = wToast;
};

export default obj;
