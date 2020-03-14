import axios from '../config/api.request'


export default {
  getUserInfo () {
    return {
      phone: 13000000000,
      userId: 1,
      nickName: 'wwt'
    }
  },

  getBrandList() {
    return axios.request({
      url: 'commodity/get-brand-list',
      method: axios.requestType.get
    })
  },

  sendVerifyCode(data) {
    return axios.request({
      method: axios.requestType.post,
      url: 'auth/send-verify-code',
      data
    })
  },

  loginBySms(data) {
    return axios.request({
      method: axios.requestType.post,
      url: 'auth/login-by-sms',
      data
    })
  },
  getHello() {
    return axios.request({
      method: axios.requestType.get,
      url: 'test/get-hello'
    })
  },
  testPost(data) {
    return axios.request({
      method: axios.requestType.post,
      url: 'test/test-post',
      data
    })
  }
}
