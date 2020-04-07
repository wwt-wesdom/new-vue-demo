<template>
  <div>
    <div class="pd-10 cl-fff fs-38 bc-red">组件的使用</div>
    <c-button ref="cButton" class="mt-20" @click.native="submit">确定</c-button>
    <provide class="mt-20"></provide>
    <div class="mt-20" @click="changePhone">{{app.userInfo ? app.userInfo.phone : ''}}</div>
    <div class="mt-30">
      <check-box v-model="checked">选择框</check-box>
    </div>
    <div>{{ fullName }}</div>
    <div class="test-flex" style="display: flex; justify-content: space-between">
      <span>lsdkf</span>
      <img style="width: 20px; height: 20px;" src="~assets/img/common/dlrb.jpg" @click="testFlex"/>
    </div>
  </div>
</template>

<script>
  import {arrUnique} from '@/config/utils'

  export default {
    name: "UseComponent",
    provide: {
      name: 'joke',
      age: 18
    },
    inject: ['app'],
    data() {
      return {
        checked: true,
        fullName: 'wwt'
      }
    },
    mounted() {
      // const child = this.$refs.cButton;
      // console.log(child.title);
      // child.sayHi('xiaoming')
      let arr = [1, 1, 8, 8, 9, 9, 9, 12, 2, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7];
      console.log(arrUnique(arr));
      console.log(this.$root.globalData);
      console.log(this.arrUniqueNew(), 'new');
    },
    methods: {
      testFlex() {
        console.log(111111111111)
      },
      submit(e) {
        this.checked = !this.checked;
      },
      changePhone() {
        this.app.getUserInfo();
      },
      arrUniqueNew() {
        // let arr = [1, 1, 8, 8, 9, 9, 9, 12, 2, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7];
        // let set = new Set(arr);
        // console.log(set);
        // return Array.from(set);
        let arrNew = [
          {age: 10},
          {age: 11},
          {age: 12},
          {age: 13},
          {age: 14},
          {age: 15},
        ];
        return arrNew.reduce((total, item) => {
          return total + item.age;
        }, 0)
      }
    }
  }
</script>

<style scoped>

</style>