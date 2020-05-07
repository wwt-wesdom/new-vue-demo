<script>
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
    // h 为 creatElement方法是render核心
    render(h){
      let children = this.notices.map(item => {
        return h('div', {
          class: ['render-style', item.length > 6 ? 'active' : '']
        }, item)
      });
      children.unshift(this.message);
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
