<template>
  <div>
    <span v-show="isShow" class="w-toast">{{message}}</span>
  </div>
</template>

<script>
  export default {
    name: "WToast",
    data() {
      return {
        message: '',
        isShow: false,
      }
    },
    methods: {
      show(message, delay = 2000) {
        this.isShow = true;
        this.message = message || '提示';
        setTimeout(() => {
          this.isShow = false;
        }, delay)
      }
    }
  }
</script>

<style scoped>
  .w-toast {
    display: inline-block;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0,0,0,.5);
    padding: 10px 30px;
    color: #fff;
    z-index: 1000;
  }
</style>
