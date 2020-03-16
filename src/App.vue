<template>
  <div id="app">
    <router-view/>
    <Tabbar v-show="showTabbar"></Tabbar>
  </div>
</template>
<script>
  import Tabbar from '@/components/Tabbar.vue';
  export default {
    provide() {
      return {
        app: this
      }
    },
    components: {
      Tabbar,
    },
    data() {
      return {
        userInfo: null
      }
    },
    computed: {
      showTabbar() {
        return this.$store.state.common.showTabbar;
      }
    },
    created() {
      this.getUserInfo();
    },
    methods: {
      getUserInfo() {
        setTimeout(()=> {
          this.userInfo = {
            name: 'tom',
            phone: new Date().getMilliseconds()
          }
        }, 1000)
      }
    }
  }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
