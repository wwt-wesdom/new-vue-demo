import Model from "./Model.vue";
import Vue from 'vue'

Model.newInstance = () => {
  const Instance = new Vue({
    render(h){
      return h(Model)
    }
  });
  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const model  = component.$children[0];
  return {
    add(options) {
      model.add(options)
    }
  }
};

export default Model
