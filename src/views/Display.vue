<template>
  <div>
    <h3>动态渲染 .vue 文件的组件—— Display</h3>

    <display :code="code"></display>
    <c-button @on-click="alertPop"></c-button>
    <render-component></render-component>
  </div>
</template>
<script>
  import defaultCode from './default-code.js';
  import info from '../config/module'
  export default {
    data () {
      return {
        code: defaultCode,
      }
    },
    created() {
      console.log(info);
    },
    methods: {
      alertPop() {
        this.$Alert({
          content: '提示框',
          duration: 2000
        });
        this.$Model({
          title: '我的标题',
          content: '爱丽丝发生的楼房萨克大幅拉升',
          confirmCallback(res) {

          },
          cancelCallback(res) {
            console.log(res);
          }
        });
      }
    }
  }
</script>
