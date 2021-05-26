/*import axios from 'axios';
import {stringify} from 'qs';
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
      console.log(config);
      if (config.method === 'post') {
        config.data = stringify(config.data);
      }
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
export default HttpRequest;*/

import axios from 'axios'
import {stringify} from 'qs'
import {getStorage, removeStorage} from "./utils";

axios.defaults.timeout = 10000;//配置请求响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';//配置post请求头类型

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(config => {
  config.url = '/api/' + config.url;
  if (config.method === 'post') {
    config.data = stringify(config.data);
  }
  config.headers.platForm = 'PC';
  const token = getStorage('token');
  if (token) config.headers['Authorization'] = `Bearer ${token}`;
  return config;
}, (error) => {
  return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use(res => {
  return res.data;
}, (error) => {
  return Promise.reject(error);
});

//返回一个Promise(发送post请求)
const axiosPost = (url, params) => {
  return axios.post(url, params)
};

//返回一个Promise(发送get请求)
const axiosGet = (url, params) => {
  return axios.get(url, {params: params})
};

export default {
  get: axiosGet,
  post: axiosPost
};
