<template>
  <div>
    <my-tree
      :data="data"
      show-checkbox
    ></my-tree>
    <login></login>
  </div>
</template>

<script>
  import login from '@/components/login/Login.vue'
  export default {
    name: "Tree",
    components: {
      login
    },
    data() {
      return {
        data: [
          {
            title: 'parent 1',
            expand: true,
            children: [
              {
                title: 'parent 1-1',
                expand: true,
                children: [
                  {
                    title: 'leaf 1-1-1'
                  },
                  {
                    title: 'leaf 1-1-2'
                  }
                ]
              },
              {
                title: 'parent 1-2',
                children: [
                  {
                    title: 'leaf 1-2-1'
                  },
                  {
                    title: 'leaf 1-2-1'
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
