<template>
  <div style="max-width: 640px; margin: auto; height: 50px; overflow: hidden">
    <van-tabbar v-model="active">
      <van-tabbar-item
        v-for="(item, index) in tabbarList"
        :key="index"
        :icon="item.icon"
        @click="changRouter(index, item.path)">
        {{item.title}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vant';
  export default {
    name: "Tabbar",
    components: {
      vanTabbar: Tabbar,
      vanTabbarItem: TabbarItem
    },
    data() {
      return {
        active: 0,
        tabbarList: [
          {
            title: '首页',
            path: '/',
            icon: 'home-o'
          },
          {
            title: 'BFC',
            path: '/bfc',
            icon: 'search'
          },
          {
            title: 'container',
            path: '/container',
            icon: 'friends-o'
          },
          {
            title: '个人中心',
            path: '/user-info',
            icon: 'setting-o'
          },
        ],
      }
    },
    watch: {
      $route(to) {
        this.active = this.tabbarList.findIndex(item => item.path === to.path)
      }
    },
    methods: {
      changRouter(index, path) {
        this.$router.push({path: path})
      },
    }
  }
</script>

<style scoped>

</style>