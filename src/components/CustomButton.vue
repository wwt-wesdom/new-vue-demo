<template>
  <div>
    <van-button
      :style="{backgroundColor: backgroundColor, color: color}"
      :size="size"
      :loading="loading"
      loading-type="spinner"
      :to="to"
      @click="callback"
      class="button"
    >
      {{ text }}
    </van-button>
  </div>
</template>

<script>
  import { Button } from  'vant'
  export default {
    name: "CustomButton",
    components: {
      VanButton: Button
    },
    props: {
      text: {
        default: '按钮',
        type: String,
      },
      backgroundColor: {
        default: '#ff592b',
        type: String,
      },
      color: {
        default: '#fff',
        type: String,
      },
      size: {
        default: 'small',
        type: String,
      },
      loading: {
        default: false,
        type: Boolean,
      },
      callback: {
        default: () => {
          console.log('点击了按钮');
        },
        type: Function
      },
      to: {
        default: '',
        type: String,
      }
    }
  }
</script>

<style scoped>
  .button {
    border-radius: 5px;
  }
</style>