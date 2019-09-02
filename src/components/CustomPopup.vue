<template>
  <div>
    <van-popup v-bind:value="value" @click-overlay="close">
      <div class="border-radius-5 bc-fff pd-20">
        <p>奥古斯都楼上的房间爱上了看到</p>
        <button @click="close">close</button>
      </div>
    </van-popup>
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
    mounted() {
      this.$emit("mounted");
    },
    methods: {
      close() {
        this.$emit('input', false)
      }
    }
  }
</script>

<style scoped>

</style>