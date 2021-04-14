<template>
  <van-popup :value="value" @click-overlay="close">
    <slot>
      <div class="border-radius-5 bc-fff pd-20">
        <p>弹窗主体内容</p>
        <button @click="close">close</button>
      </div>
    </slot>
  </van-popup>
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
