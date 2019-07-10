<template>
  <div>
    <div>this is textPage</div>
    <label>
      <input type="text" />
      <button>add</button>
    </label>
    <todo-list :todos="todos">
      <template v-slot:todo="{ todo }">
        <span v-if="todo.isComplete">✓</span>
        {{ todo.text }}
      </template>
    </todo-list>
  </div>
</template>

<script>
  import TodoList from "@/components/TodoList"
  export default {
    name: "TextPage",
    components: {
      TodoList
    },
    data() {
      return {
        todos: [
          {
            text: 'one',
            id: 0,
            isComplete: false
          },
          {
            text: 'two',
            id: 1,
            isComplete: true
          },
          {
            text: 'three',
            id: 2,
            isComplete: false
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>