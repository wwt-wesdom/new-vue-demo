<template>
  <div>
    testRender
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "TestRender",
    data() {
      return {
        message: '我需要用render函数渲染'
      }
    }
  }
</script>

<style scoped>

</style>
