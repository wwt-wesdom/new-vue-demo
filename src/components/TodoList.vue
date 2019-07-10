<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <slot name="todo" :todo="todo">
        {{ todo.text }}
      </slot>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "TodoList",
    props: ['todos'],
    data() {
      return {
      };
    }
  }
</script>

<style scoped>

</style>