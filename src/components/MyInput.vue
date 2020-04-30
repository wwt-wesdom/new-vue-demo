<template>
  <input type="text"
         class="input"
         :value="currentValue"
         @input="handleInput"
         @blur="handleBlur">
</template>

<script>
  import emitter from "../mixins/emitter";

  export default {
    name: "MyInput",
    data() {
      return {
        currentValue: this.value
      }
    },
    mixins: [emitter],
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    watch: {
      value(val) {
        this.currentValue = val;
      }
    },
    methods: {
      handleInput(event) {
        const value = event.target.value;
        this.currentValue = value;
        this.$emit('input', value);
        this.dispatch('MyFormItem', 'on-form-change', value);
      },
      handleBlur(e) {
        this.dispatch('MyFormItem', 'on-form-blur', this.currentValue);
      }
    }
  }
</script>

<style scoped>
.input {
  display: inline-block;
  width: 200px;
  height: 60px;
  border: 2px solid #f9284f;
  border-radius: 5px;
  outline: none;
  line-height: 60px;
  box-sizing: border-box;
  padding-left: 10px;
}
</style>
