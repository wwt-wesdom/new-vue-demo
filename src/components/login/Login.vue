<template>
  <div class="login-pop">
    <div class="top">
      <span>登录</span>
    </div>
    <div class="user-name">
      <span>请输入用户名</span>
      <label>
        <input class="user-name-input" type="text" v-model="form.userName">
      </label>
    </div>
    <div class="password">
      <span>请输入密码</span>
      <label>
        <input class="password-input" type="text" v-model="form.password">
      </label>
    </div>
    <div class="footer">
      <button class="submit">登录</button>
      <button class="cancel">取消</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        form: {
          userName: '',
          password: '',
        }
      }
    }
  }
</script>

<style scoped>
  .login-pop {
    width: 300px;
    border-radius: 10px;
    font-size: 12px;
  }
  .top, .footer {
    height: 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
  }
  .user-name-input, .password-input {
    box-sizing: border-box;
    width: 200px;
    height: 30px;
    outline: none;
    border: 1px solid #333;
    background-color: #fff;
    padding: 5px;
  }
  .footer {
    justify-content: center;
  }
  .submit, .cancel {
    box-sizing: border-box;
    outline: none;
    width: 80px;
    height: 30px;
    font-size: 12px;
    text-align: center;
    line-height: 80px;
  }
  .submit {
    background-color: blue;
    color: #fff;
  }
  .cancel {
    border: 1px solid #333;
    color: #333;
  }

</style>
