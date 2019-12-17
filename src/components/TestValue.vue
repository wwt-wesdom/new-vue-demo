<template>
  <div>{{value}}
    <button @click="test1">赋值</button>
  </div>
</template>

<script>
  export default {
    name: "TestValue",
    props: {
      value: String
    },
    methods: {
      test1() {
        this.$emit('input', '小红')
      }
    }
  }
</script>

<style scoped>

</style>
