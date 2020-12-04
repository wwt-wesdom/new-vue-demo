<template>
  <div>
    <slot name="top"></slot>
    <slot>center</slot>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
  export default {
    name: "SlotLearn"
  }
</script>

<style scoped>

</style>
