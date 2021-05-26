<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="about">
    <!--<h1>This is an about page</h1>
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
&lt;!&ndash;    <button @click="postCats">add-cats</button>&ndash;&gt;
    <div>
&lt;!&ndash;      <button @click="getCats">get-cats</button>&ndash;&gt;
    </div>
    <div>
&lt;!&ndash;      <button @click="deleteCats">delete-cats</button>&ndash;&gt;
    </div>
    <img width="100%" v-for="item in imageList" :key="item" :src="item" alt="">
    <van-button type="danger" @click="readFile">readFile</van-button>
    <van-button type="danger" @click="showToast">wToast</van-button>-->
    <div>
      <div v-for="item in studentList" @click="findOne(item.id)">
        <span>{{item.name}}</span>
        <span>{{item.score}}</span>
        <span>{{item.gender}}</span>
      </div>
    </div>
    <div>
      <div>姓名: <input v-model="params.name" type="text"></div>
      <div>班级: <input v-model="params.class_id" type="number"></div>
      <div>分数: <input v-model="params.score" type="number"></div>
      <div>性别: <input v-model="params.gender" type="text"></div>
    </div>
    <van-button @click="insertStudent" type="primary">新增</van-button>
  </div>
</template>
<script>

  import api from '@/api/user';
  import {Button} from 'vant'
  import {findAll, getStudents, findClasses, findOne, insertStudent} from '@/api/students'

  export default {
    name: 'About',
    components: {
      vanButton: Button
    },
    data() {
      return {
        params: {
          name: '',
          gender: '',
          class_id: '',
          score: '',
        },
        searchText: 'sssss',
        value: false,
        items: [
          {value: 1,},
          {value: 2,},
          {value: 3,},
          {value: 4,}
        ],
        studentList: [],
        message: '小明',
        objSet: {
          age: 10
        },
        imageList: [],
      }
    },
    beforeCreate() {
      // config.alert = null;
      // clearTimeout(config.alert)
      // console.log(this);
      // console.log('beforeCreate');
    },
    created() {
      console.log(this.$options);
      //
      // console.log(this);
      // console.log('created');
      // this.getBrandList();
      this.getHello();
      this.getStudents();
      this.findAll();
      this.findClasses();
      // this.testPost();
    },
    methods: {
      showToast() {
        this.$wToast.show('弹窗');
      },
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
        this.imageList = result;
      },
      async getStudents() {
        const res = await getStudents();
      },

      async findAll() {
        let res = await findAll();
        this.studentList = res.result
      },

      async findOne(id) {
        let res = await findOne({id});
      },
      async insertStudent() {
        let res = await insertStudent(this.params)
      },
      async findClasses() {
        let res = await findClasses();
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
            console.log(3333);
            ``
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
