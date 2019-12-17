import axios from 'axios';
import { getStorage } from "./utils";
import { Toast } from 'vant'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

class HttpRequest {
  static getInsideConfig () {
    return {};
  }

  requestType = {
    post: 'POST',
    get: 'GET'
  };

  // 拦截器
  interceptors (instance, url) {

    // 请求拦截
    instance.interceptors.request.use(config => {
      const accessToken = getStorage('accessToken');
      if (accessToken) {
        config.headers.accessToken = accessToken;
      }
      return config;
    }, error => {
      Toast(error);
      return Promise.reject(error);
    });

    // 响应拦截
    instance.interceptors.response.use(res => {
      const { data: { success, message }, status,  } = res;
      if (status !== 200 && status !== 201) {
        Toast('请求失败');
      } else {
        if (success) {
          return res.data;
        } else {
          Toast(message);
          return Promise.reject(message);
        }
      }
    },  error => {
      Toast(error);
      return Promise.reject(error);
    })
  }
  request (options) {
    const instance = axios.create();
    options.url = `api/${options.url}`;
    options = Object.assign(HttpRequest.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options);
  }
}
export default HttpRequest;
