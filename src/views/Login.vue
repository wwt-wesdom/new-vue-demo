<template>
  <div>
    <CustomButton text="登陆" :loading="loading" size="large" :callback="callback"/>
  </div>
</template>

<script>
  import CustomButton from '@/components/CustomButton.vue';
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
        }, 2000)
      }
    }
  }
</script>

<style scoped>

</style>