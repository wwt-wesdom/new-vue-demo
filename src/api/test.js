import axios from '../config/axios'

export function getHello(params) {
  return axios.get('test/get-hello', params)
}
