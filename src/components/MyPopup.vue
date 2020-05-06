<template>
  <div class="my-popup" v-show="showPop">
    <div class="header position-relative">
      <span>title</span>
      <span @click="closePop" class="close">X</span>
    </div>
    <slot name="center">
      center
    </slot>
  </div>
</template>

<script>
  export default {
    name: "my-popup",
    data() {
      return {
        showPop: this.value
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      value(val) {
        this.showPop = val;
      }
    },
    methods: {
      closePop() {
        // 触发父组件绑定的@input事件
        this.$emit('input', false)
      }
    }
  }
</script>

<style scoped lang="scss">
  .my-popup {
    width: 200px; /*no*/
    height: 200px; /*no*/
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    background-color: rgba(255, 23, 80, 1);
    color: #fff;
    border-radius: 10px;
    .header {
      height: 50px;
      line-height: 50px;
    }
    .close {
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-radius: 15px;
      background-color: rgba(0, 0, 0, .5);
      color: #fff;
      position: absolute;
      right: 20px;
      top: 10px;
      font-size: 12px;
    }
  }
</style>
