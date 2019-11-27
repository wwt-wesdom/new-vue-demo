<template>
  <div>
    <label>
      <input v-model="inputValue" type="text">
    </label>
  </div>
</template>

<script>
  export default {
    name: "TestData",
    data() {
      return {
        inputValue: 'data'
      }
    }
  }
</script>

<style scoped>

</style>
