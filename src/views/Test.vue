<template>
  <div>
    <input :value="value1" @input="changeOne" type="text">
  </div>
</template>

<script>
  export default {
    name: "Test",
    data() {
      return {
        value1: 'ssssssssssss'
      }
    },
    methods: {
      changeOne(event) {
        console.log(event.target.value);
        this.value1 = event.target.value;
      }
    },
    watch: {

    }
  }
</script>

<style scoped>
 input {
   width: 200px;
   height: 50px;
   border: 1px solid #e5e5e5;
 }
</style>
