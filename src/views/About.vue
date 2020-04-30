<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="about">
    <h1>This is an about page</h1>
    <custom-input v-model="searchText"></custom-input>
    <button @click="changePopup"> toggle </button>
    <custom-popup @hook:mounted="doSomething" v-model="value"></custom-popup>
    <div>{{ searchText }}</div>
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
    <div v-for="(item, index) in items" :key="index" @click="changeItem(index, item.value)">{{item.value}}</div>
    <van-button type="danger" @click="testObject">testObject</van-button>
    <div>{{testTryCatch()}}</div>
    <div :style="{}" @click="testTag">testTag</div>
    <test-value v-model="message"></test-value>
<!--    <button @click="postCats">add-cats</button>-->
    <div>
<!--      <button @click="getCats">get-cats</button>-->
    </div>
    <div>
<!--      <button @click="deleteCats">delete-cats</button>-->
    </div>
    <img width="100%" v-for="item in imageList" :key="item" :src="item" alt="">
    <van-button type="danger" @click="readFile">readFile</van-button>
  </div>
</template>
<script>

  import api from '@/api/user';
  import {Button} from 'vant'

  export default {
    name: 'About',
    components: {
      vanButton: Button
    },
    data() {
      return {
        searchText: 'sssss',
        value: false,
        items: [
          {value: 1,},
          {value: 2,},
          {value: 3,},
          {value: 4,}
        ],
        message: '小明',
        objSet: {
          age: 10
        },
        imageList: [],
      }
    },
    beforeCreate() {
      // console.log(this);
      // console.log('beforeCreate');
    },
    created() {
      console.log(this);
      // console.log(this);
      // console.log('created');
      // this.getBrandList();
      this.getHello();
      this.testPost();
    },
    methods: {
      changePopup() {
        this.value = !this.value;
      },
      doSomething() {
        // console.log("子组件:mounted");
      },
      changeItem(index, item) {
        // console.log(item, 'before');
        // console.log(index*2);
        // item*= 2; // 不会响应
        // console.log(item, 'after');
        // console.log(item);
        // this.$set(this.items, index, {value: item*2});
        this.items.splice(index, 1, {value: 10})
        // this.items[index].value = 10;
      },
      async getBrandList() {
        const {success, result, message} = await api.getBrandList();
        if (success) {
          // console.log(result);
        } else {
          this.$Toast(message);
        }
      },
      async getHello() {
        await api.getHello();
      },
      async testPost() {
        await api.testPost({
          one: 'one'
        })
      },
      async readFile() {
        const {result} = await api.readFile();
        this.imageList = result.data;
      },
      testObject() {
        const o = {data: {a: 1, b: 2, c: 3}};
        const {data: {a, b, c}} = o;
        console.log(a);
        console.log(b);
        console.log(c);
      },
      testTryCatch() {
        try {
          return 0;
        } catch (e) {
          return 0;
        } finally {
        }
      },
      testTag() {
        outer: while (true) {
          console.log(111);
          inner: while (true) {
            console.log(222);
            break outer;
            console.log(3333);``
          }
        }
      }
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
