<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="about">
    <h1>This is an about page</h1>
    <custom-input v-model="searchText"></custom-input>
    <button @click="changePopup"> toggle </button>
    <custom-popup @hook:mounted="doSomething" v-model="value"></custom-popup>
    <custom-slot>
      <template v-slot:title>
        <span>error</span>
      </template>
      <template #content>
        <p>something bad happened</p>
      </template>
      <template #firstName="slotProps">
        <div>{{slotProps.user.firstName}}</div>
      </template>
      <template v-slot:lastName="{user}">
        <div>{{user.lastName}}</div>
      </template>
    </custom-slot>
    <div v-for="(item, index) in items" :key="index" @click="changeItem(index, item)">{{item.value}}</div>
    <div @click="testObject">testObject</div>
  </div>
</template>
<script>

  import api from '@/api/user';

  export default {
    name: 'About',
    components: {},
    data() {
      return {
        searchText: '',
        value: false,
        items: [
          {value: 1,},
          {value: 2,},
          {value: 3,},
          {value: 4,}
        ]
      }
    },
    methods: {
      changePopup() {
        this.value = !this.value;
      },
      doSomething() {
        // console.log("子组件:mounted");
      },
      changeItem(index, item) {
        // console.log(index*2);
        // item*= 2; // 不会响应
        // this.$set(this.items, index, item*2);
        // this.items.splice(index, 1)
        this.items[index].value = 10;
      },
      async getBrandList() {
        const {success, result, message} = await api.getBrandList();
        if (success) {
          // console.log(result);
        } else {
          this.$Toast(message);
        }
      },
      testObject() {
        const o = {data: {a: 1, b: 2, c: 3}};
        const {data: {a, b, c}} = o;
        console.log(a);
        console.log(b);
        console.log(c);
      }
    },
    beforeCreate() {
      // console.log(this);
      // console.log('beforeCreate');
    },
    created() {
      // console.log(this);
      // console.log('created');
      this.getBrandList();
    },
    beforeMount() {
      // console.log(this);
      // console.log('beforeMount');
    },
    mounted() {
      // console.log(this);
      // console.log('mounted');
    },
    updated() {
      // console.log('update');
    }
  }
</script>
