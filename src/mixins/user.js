export default {
  name: "user",
  data() {
    return {
      userInfo: {}
    }
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      setTimeout(()=> {
        this.userInfo = {
          name: 'tom',
          phone: new Date().getMilliseconds()
        }
      }, 1000)
    }
  }
}
