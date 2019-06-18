<template>
  <div>
    <van-popup v-bind:value="value" @click-overlay="close">
      <div>
        <p>奥古斯都楼上的房间爱上了看到</p>
        <button @click="close">close</button>
      </div>
    </van-popup>
    <button @click="model = !model">
      open
    </button>
  </div>
</template>

<script>
  import  { Popup } from 'vant';
  export default {
    name: "CustomPopup",
    props: ['value'],
    components: {
      vanPopup: Popup
    },
    data() {
      return {
        model: false
      }
    },
    methods: {
      close() {
        console.log(111111);
        this.$emit('input', false)
      }
    }
  }
</script>

<style scoped>

</style>