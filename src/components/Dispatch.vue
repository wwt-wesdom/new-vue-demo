<template>
  <div>
    <c-button @click.native="clickHandle">dispatch</c-button>
  </div>
</template>

<script>
  import emitter from "../mixins/emitter";
  export default {
    name: "Dispatch",
    mixins: [emitter],
    mounted() {
      this.$on('parent-broadcast', function (text) {
        console.log(text + ' ' +  this.$options.name);
      })
    },
    methods: {
      clickHandle() {
        this.dispatch('UseComponent', 'test','hello vue.js')
      }
    }
  }
</script>

<style scoped>

</style>
