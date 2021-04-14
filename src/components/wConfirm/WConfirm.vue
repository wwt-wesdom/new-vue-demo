<template>
  <custom-popup v-model="show">
    <div class="bc-fff text-center fs-20 border-radius-10">
      <div class="pd-10 border-bottom cl-333">{{config.title}}</div>
      <div class="pd-20 border-bottom cl-666">{{config.content}}</div>
      <div class="pd-10">
        <button class="confirm-btn btn" @click="handleConfirm">确定</button>
        <button class="ml-10 cancel-btn btn" @click="handleCancel">取消</button>
      </div>
    </div>
  </custom-popup>
</template>

<script>
  import CustomPopup from "../CustomPopup";
  export default {
    name: "WConfirm",
    components: {CustomPopup},
    data() {
      return {
        show: false,
        config: {
          title: '系统提示',
          content: '提示内容',
        }
      }
    },
    methods: {
      handleConfirm() {
      },
      handleCancel() {
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "src/scss/mixin.scss";
  .btn {
    width: 100px;
    height: 60px;
    text-align: center;
    outline: none;
    border: none;
  }
  .confirm-btn {
    background-color: $mainColor;
    color: #fff;
  }

</style>
