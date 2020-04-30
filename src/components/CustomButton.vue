<template>
  <div>
    <van-button
      :style="{backgroundColor: backgroundColor, color: color, width: width + 'px', height: height + 'px'}"
      :size="size"
      :loading="loading"
      loading-type="spinner"
      :to="to"
      @click="callbackHandle"
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
      to: {
        default: '',
        type: String,
      },
      width: {
        default: '200',
        type: String
      },
      height: {
        default: '40',
        type: String
      }
    },
    mounted() {
      this.$on('parent-broadcast', function (text) {
        console.log(text + ' ' +  this.$options.name);
      })
    },
    methods: {
      callbackHandle() {
        this.$emit('on-click');
      }
    }
  }
</script>

<style scoped>
  .button {
    border-radius: 5px;
  }
</style>
