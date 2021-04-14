<template>
  <transition name="fade">
    <div v-show="dialogVisible">
      <div class="model-mask"></div>
      <div class="model">
        <div class="model-content">
          <span class="close" @click="closeModel">X</span>
          <div>登录</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        dialogVisible: false
      }
    },
    methods: {
      closeModel() {
        this.dialogVisible = false;
      }
    }
  }
</script>

<style scoped lang="scss">
  .model-mask {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 1000;
  }
  .model {
    width: 800px;
    height: 600px;
    border-radius: 10px;
    background-color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -400px;
    margin-top: -300px;
    z-index: 1000;
  }
  .model-content {
    position: relative;
  }
  .close {
    font-size: 30px;
    position: absolute;
    right: 20px;
    top: 10px;
  }
</style>
