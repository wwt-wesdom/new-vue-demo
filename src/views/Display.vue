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

  export default {
    data () {
      return {
        code: defaultCode
      }
    },
    methods: {
      alertPop() {
        this.$Alert({
          content: '提示框',
          duration: 2000
        });
      }
    }
  }
</script>
