<template>
  <label>
    <input v-bind:value="value" v-on:input="$emit('input', $event.target.value)" type="text"/>
  </label>
</template>

<script>
  export default {
    name: "CustomInput",
    props: ['value'],
    watch: {
      value(n){
        console.log(n);
      }
    }
  }
</script>

<style scoped>

</style>