<template>
  <div>
    <CustomButton text="登陆" :loading="loading" size="large" :callback="callback"/>
    <CustomButton text="退出登陆"  size="large" :callback="logout"/>
  </div>
</template>

<script>
  import CustomButton from '@/components/CustomButton.vue';
  import { setStorage } from "@/config/utils"
  export default {
    name: "Login",
    components: {
      CustomButton,
    },
    data() {
      return {
        loading: false
      }
    },
    methods: {
      callback() {
        this.loading = true;
        console.log(this.loading);
        setTimeout(() => {
          this.loading = false;
          setStorage("login", true);
          this.$router.go(-1);
        }, 2000)
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