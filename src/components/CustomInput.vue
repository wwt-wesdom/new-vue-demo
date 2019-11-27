<template>
  <label>
    <van-field v-bind:value="value" v-on:input="$emit('input', $event.target.value)" type="text"/>
  </label>
</template>

<script>
  import { Field } from 'vant'
  export default {
    name: "CustomInput",
    components: {
      vanField: Field
    },
    props: ['value'],
  }
</script>

<style scoped>

</style>
