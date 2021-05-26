import WConfirm from './WConfirm'
const obj = Object.create(null);
obj.install = function (Vue, options) {
  // 创建组件
  const confirmConstructor = Vue.extend(WConfirm);
  // 创建组件实例
  const instance = new confirmConstructor();
  // 将这个实例挂载在我创建的div上
  // 并将此div加入全局挂载点内部
  instance.$mount();
  document.body.appendChild(instance.$el);
  Vue.prototype.$wConfirm = (config) => {
    return new Promise((resolve, reject) => {
      instance.config = config;
      instance.show = true;
      instance.handleConfirm = () => {
        instance.show = false;
        resolve(true);
      };
      instance.handleCancel = () => {
        instance.show = false;
        reject(false);
      }
    })
  };

};
export default obj;
