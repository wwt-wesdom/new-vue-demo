import Alert from './Alert.vue'
import Vue from 'vue'
Alert.newInstance = properties => {
  const props = properties || {};
  /**
   *  Vue.extend创建一个组件，需实例化组件，实例化以后需要手动$mount，渲染组件
   *  component.$el拿到节点 component.$children[0] 拿到组件实例
   */
  const Instance = new Vue({
    data: props,
    render(h) {
      return h(Alert, {
        props
      })
    }
  });
  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const alert = component.$children[0];
  /*const Instance = Vue.extend({
    data() {
      return {
        props
      }
    },
    render(h) {
      return h(Alert, {
        props
      })
    }
  });
  const component = new Instance();
  document.body.appendChild(component.$mount().$el);
  const alert = component.$children[0];*/
  return {
    add (noticeProps) {
      alert.add(noticeProps);
    },
    remove (name) {
      alert.remove(name);
    }
  }
};
export default Alert;

