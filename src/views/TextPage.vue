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
    <c-button @on-click="showConfirm">confirm</c-button>
    <div>
      <input v-model="color" style="display: none" id="selectColor" type="color">
      <label for="selectColor">
        选择颜色{{color}}
      </label>
    </div>
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
        color: '',
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
      },
      showConfirm() {
        this.$wConfirm({
          title: '弹窗啊',
          content: '啦啦啦啦啦啦啦啦啦啦啦啦啦'
        }).then(res => {
          console.log(res);
        }).catch(e => {
          console.log(e);
        })
      }
    },
    beforeRouteEnter(to, from, next) {
      // 组件实例还未创建调用, 跳转还未被确认
      console.log('beforeRouteEnter');
      next(vm => {
        console.log(vm);
      });
    },
    beforeRouteUpdate(to, from ,next) {
      next()
    },
    beforeRouteLeave (to, from, next) {
      this.showConfirm();
      console.log('beforeRouteLeave');
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
