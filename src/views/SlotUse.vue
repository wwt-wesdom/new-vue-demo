<template>
  <div>
    <slot-learn>
      <template v-slot:top>
        <h1>top</h1>
      </template>
      <div>
        lasdfksassssssssssssssss
      </div>
      <template v-slot:bottom>
        <button>bottom</button>
      </template>
    </slot-learn>
  </div>
</template>

<script>
  export default {
    name: "SlotUse"
  }
</script>

<style scoped>

</style>
