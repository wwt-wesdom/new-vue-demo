<template>
  <div>
    I am components
    <label>
      <input type="text" v-model="value" />
    </label>
    <div>{{text}}</div>
  </div>
</template>

<script>
  export default {
    name: "RefUser",
    props: {
      text: {
        type: String,
        default: ''
      },
    },
    watch: {
      text(n,o) {
        console.log(`new:${n}`);
        console.log(`old:${o}`);
      }
    },
    data() {
      return {
        value: null
      }
    },
    methods: {
      getLocalData(){
        console.log(new Date().getTime());
      }
    }
  }
</script>

<style scoped>

</style>