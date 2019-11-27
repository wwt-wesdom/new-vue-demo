<template>
  <div>
    <van-cell-group>
      <van-field
              label="用户名"
              placeholder="请输入手机号码"/>
      <van-field
              v-model="sms"
              center
              clearable
              label="短信验证码"
              placeholder="请输入短信验证码"
      >
        <van-button @click="getSms" slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <custom-button class="mt-20" text="登陆" :loading="loading" width="300" :callback="callback" />
    <!--<custom-button text="退出登陆" :callback="logout" />-->
  </div>
</template>

<script>
  import {Field, Button, CellGroup} from  'vant'
  import { setStorage } from "@/config/utils"
  export default {
    name: "Login",
    components: {
      vanField: Field,
      vanButton: Button,
      vanCellGroup: CellGroup
    },
    data() {
      return {
        loading: false,
        sms: ''
      }
    },
    methods: {
      callback() {
        this.loading = true;
        /*setTimeout(() => {
          this.loading = false;
          setStorage("login", true);
          this.$router.go(-1);
        }, 2000)*/
      },
      getSms() {

      },
      logout() {
        setStorage("login", false);
        this.$router.push({path: "/"});
      }
    }
  }
</script>

<style scoped>

</style>
