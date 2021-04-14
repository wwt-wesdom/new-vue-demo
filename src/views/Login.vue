<template>
  <div>
    <van-cell-group>
      <van-field
              v-model="username"
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
    <custom-button class="mt-20" text="登陆" :loading="loading" width="300" @click.native="callback" />
    <!--<custom-button text="退出登陆" :callback="logout" />-->
  </div>
</template>

<script>
  import {Field, Button, CellGroup} from  'vant'
  import { setStorage } from "@/config/utils"
  import { mapActions } from 'vuex'
  import userApi from '@/api/user'

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
        username: 15757151888,
        sms: 8888,
      }
    },
    methods: {
      ...mapActions([
          'handleLogin'
      ]),
      callback() {
        console.log(1111);
        this.$showLogin.open();

        // this.loading = true;
        // await this.handleSubmit(this.username, this.sms);
        // this.loading = false;
      },
      async getSms() {
        await userApi.sendVerifyCode({
          phone: this.username,
          phoneCountryCode: '86',
          purpose: 'fast'
        })
      },
      async handleSubmit(phone, smsCode) {
        await this.handleLogin({phone, smsCode});
        this.$router.go(-1);
      },
    }
  }
</script>

<style scoped>

</style>
