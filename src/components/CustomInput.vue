<template>
  <label>
    <van-field class="custom-input" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" type="text"/>
  </label>
</template>

<script>
  import { Field } from 'vant'
  export default {
    name: "CustomInput",
    components: {
      vanField: Field
    },
    props: {
      value: String
    },
  }
</script>

<style scoped>
  .custom-input {
    width: 80%;
  }

</style>
