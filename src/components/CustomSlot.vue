<template>
  <div>
    <span>title:</span>
    <slot name="title"></slot>
    <div>context</div>
    <slot name="content"></slot>
    <slot name="firstName" :user="user">{{user.firstName}}</slot>
    <slot name="lastName" :user="user">{{user.lastName}}</slot>
  </div>
</template>

<script>
  export default {
    name: "CustomSlot",
    props: ['text'],
    data() {
      return {
        user: {
          firstName: 'wang',
          lastName: 'wen tao'
        }
      };
    }
  }
</script>

<style scoped>

</style>