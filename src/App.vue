<template>
  <div id="app">
    <router-view/>
    <Tabbar v-show="showTabbar"></Tabbar>
  </div>
</template>
<script>
  import Tabbar from '@/components/Tabbar.vue';
  import obj from '../static/js/learnExport'
  import mixin_user from './mixins/user.js'
  export default {
    provide() {
      return {
        app: this
      }
    },
    components: {
      Tabbar,
    },
    mixins: [mixin_user],
    data() {
      return {
      }
    },
    computed: {
      showTabbar() {
        return this.$store.state.common.showTabbar;
      }
    },
    created() {
      console.log(obj);
      console.log(obj.walk);
      obj.exportOne()
    },
    methods: {
    }
  }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html *{
  margin: 0;
  padding: 0;
}
.van-tabbar--fixed {
  max-width: 600px; /*no*/
  left: 50%;
  transform: translateX(-50%);
}
</style>
