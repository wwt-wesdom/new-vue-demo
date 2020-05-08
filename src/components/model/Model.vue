<template>
  <div class="model">
    <div v-if="options.length > 0" class="my-model">
      <div v-for="item in options" class="text-center">
        <div class="text-center">{{item.title}}</div>
        <div class="text-center">{{item.content}}</div>
        <c-button @on-click="confirm(item.confirmCallback)">确定</c-button>
        <c-button @on-click="cancel(item.cancelCallback)" class="ml-20">取消</c-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Model",
    data() {
      return {
        options: []
      }
    },
    methods: {
      confirm(callback) {
        if (callback) {
          callback(true);
        }
        this.options = [];
      },
      cancel(callback) {
        if (callback) {
          callback(true);
        }
        this.options = [];
      },
      add(props) {
        if (Object.keys(props).length > 0 && this.options.length === 0) {
         this.options.push(props)
       }
      }
    }
  }
</script>

<style scoped lang="scss">
.my-model {
  position: fixed;
  width: 80%;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0,0,0,0.5);
  padding: 20px;
}
</style>
