<script>
  import TestRender from './test/TestRender.vue'
  export default {
    name: "RenderComponent",
    data() {
      return {
        message: '我是通过render函数渲染的组件',
        notices: [
          'title',
          'content',
          'footer'
        ]
      }
    },
    // h 为 creatElement方法是render核心创建节点
    render(h){
      let children = this.notices.map(item => {
        return h('div', {
          class: ['render-style', item.length > 6 ? 'active' : '']
        }, item)
      });
      let renderChild = {
        render(h) {
          return h('div', '1111111111');
        }
      };
      let renderComponent = h(TestRender);
      children.unshift(this.message);
      children.push(renderComponent);
      children.push(h(renderChild));
      return h('div',children)
    }
  }
</script>

<style scoped>
.render-style {
  color: red;
  font-size: 30px;
}
.active {
  color: blue;
  font-size: 40px;
}
</style>
