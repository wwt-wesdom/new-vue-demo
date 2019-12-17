import userApi from '@/api/user';
import { setStorage, removeStorage, getStorage } from '@/config/utils';

export default {
  state: {
    userInfo: {},
    hasGetInfo: false,

  },

  // 同步更新store使用mutations
  mutations: {
    setUserInfo (state, userInfo) {
      setStorage('userInfo', userInfo);
      state.userInfo = userInfo;
    },
    userLogout (state, router) {
      removeStorage('userInfo');
      removeStorage('accessToken');
      state.userInfo = {};
      router.replace({ name: 'login' });
    },
    checkUserInfo (state) {
      // 页面刷新同步用户数据到store
      const userInfo = getStorage('userInfo');
      if (userInfo) {
        state.userInfo = userInfo;
      }
    },
  },
  getters: {
    // 判断用户是否登录
    isLogin: (state) => {
      return Object.keys(state.userInfo).length > 0;
    }
  },

  // 异步使用action
  actions: {
    // 登录
    async handleLogin ({ commit }, { phone, smsCode }) {
      const { result, other } = await userApi.loginBySms({
        phone,
        smsCode,
        platForm: 1
      });
      setStorage('accessToken', other.token);
      commit('setUserInfo', result);
    },

    // 退出登录
    handleLogOut ({ commit }, router) {
      commit('userLogout', router);
    },

    // 更新用户相关信息
    async updateUserInfo ({ state, commit }) {
      const { result: userInfoData } = await userApi.getUserInfo();
      commit('setUserInfo', userInfoData);
    }
  }
};
