<template>
  <li>{{num?num:Math.random(2)}}</li>
</template>

<script>
  export default {
    props: ['num'],
    name: "Test"
  }
</script>

<style scoped>

</style>