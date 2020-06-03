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
        <span @click="todo.isComplete = true">
           {{ todo.text }}
        </span>
      </template>
    </todo-list>
    <c-button @on-click="show = !show">打开</c-button>

    <transition name = "fades">
      <div style="background-color: yellow" v-show="show">
        adfas
      </div>
    </transition>
    <c-button @on-click="changeUrlParams">changeUrlParams</c-button>
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
        ],
        show: false,
        id: 0,
      }
    },
    watch: {
      '$route'(to, from) {
        // console.log(111);
        // console.log(from);
        // console.log(to);
      },
      deep: true
    },
    methods: {
      changeUrlParams() {
        this.id ++;
        this.$router.push({path: '/text-page', query: {id: this.id}})
      }
    },
    beforeRouteEnter(to, from, next) {
      console.log(this);
      console.log(to);
      console.log(from);
      next(vm => {
        console.log(11111);
        console.log(vm);
      });
    },
    beforeRouteUpdate(to, from ,next) {
      console.log(to);
      next()
    },
    beforeRouteLeave (to, from, next) {
      const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
      if (answer) {
        next()
      } else {
        next(false)
      }
    }
  }
</script>

<style scoped>
  .fades-enter-active {
    transition: height .3s ease;
  }
  .fades-leave-active{
    transition: height .3s ease;
  }
</style>
