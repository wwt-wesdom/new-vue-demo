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
    <dispatch></dispatch>
    <div>
      <c-button class="mt-20" @on-click="parentBroadcast"></c-button>
    </div>
<!--    <my-input type="text" v-model="inputValue" class="mt-20"/>-->
    <my-form ref="form" :model="formValidate" :rules="ruleValidate">
      <my-form-item label="用户名" prop="name">
        <my-input v-model="formValidate.name"></my-input>
      </my-form-item>
      <my-form-item label="邮箱" prop="mail">
        <my-input v-model="formValidate.mail"></my-input>
      </my-form-item>
    </my-form>
    <c-button @on-click="handleSubmit">提交</c-button>
    <c-button @on-click="handleReset">重置</c-button>
<!--    <my-popup v-model="showPop"></my-popup>-->
    <my-popup :value="showPop" @input="showPop = arguments[0]"></my-popup>
    <c-button @on-click="showPop = !showPop">openPop</c-button>
    <my-select v-model="selected" :selectArr="selectArr"></my-select>
  </div>
</template>

<script>
  import {arrUnique} from '@/config/utils'
  import emitter from "../mixins/emitter";
  import Input from "../components/MyInput";
  export default {
    name: "UseComponent",
    components: {Input},
    provide: {
      name: 'joke',
      age: 18
    },
    inject: ['app'],
    mixins: [emitter],
    data() {
      return {
        checked: true,
        fullName: 'wwt',
        inputValue: '',
        formValidate: {
          name: 'wwt',
          mail: ''
        },
        ruleValidate: {
          name: [
            { required: true, message: '用户名不能为空', trigger: 'change' },
            { required: 'number', message: '用户名为数字', trigger: 'change' },
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ],
        },
        showPop: false,
        selectArr: ['apple','banana', 'orange'],
        selected: 'banana'
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
      this.$on('test', function (text) {
        console.log(text);
      })
    },
    methods: {
      handleSubmit() {
        this.$refs.form.validate().then(res => {
          if (res) {
            alert('提交成功！')
          } else {
            alert('提交失败！')
          }
        })
      },
      handleReset() {
        this.$refs.form.resetFields()
      },
      parentBroadcast() {
        this.broadcast('Dispatch', 'parent-broadcast', 'hello child')
      },
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
