import axios from '../config/axios'

export default {
  getUserInfo () {
    return {
      phone: 13000000000,
      userId: 1,
      nickName: 'wwt'
    }
  },

  getBrandList() {
    return axios.get('commodity/get-brand-list')
  },

  sendVerifyCode(data) {
    return axios.post('auth/send-verify-code', data)
  },

  loginBySms(data) {
    return axios.post('auth/login-by-sms', data)
  },
  getHello() {
    return axios.get('test/get-hello')
  },
  testPost(data) {
    return axios.post('test/test-post', data)
  },
  readFile(data) {
    return axios.get('test/read-file', data)
  }

}
