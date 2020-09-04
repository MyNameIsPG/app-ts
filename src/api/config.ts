import Vue from 'vue'
import { Message, MessageBox } from 'element-ui'
import axios from 'axios'
import Qs from 'qs'
import { IS_OK } from './path'

export default function request(url: string, data: object | string | number = {}, method: string = "GET") {
  return new Promise(resolve => {
    let promise: any;
    // 请求之前统一拦截，并设置请求头
    axios.interceptors.request.use(
      config => {
        if (localStorage.getItem("uid")) {
          config.headers.uid = `${localStorage.getItem("uid")}`;
          config.headers.uid1 = `${localStorage.getItem("language")}`;
        }
        return config;
      },
      err => {
        return Promise.reject(err);
      }
    );
    // 调用方法
    if (method === "GET") {
      promise = axios.get(url, {
        params: data, paramsSerializer: function (params) {
          return Qs.stringify(params, { arrayFormat: 'repeat' })
        },
      });
    } else if (method === "POST") {
      promise = axios.post(url, data);
    } else if (method === "PUT") {
      promise = axios.put(url, data);
    } else if (method === "DELETE") {
      promise = axios.delete(url);
    }
    // 请求成功后的统一拦截处理
    promise
      .then((res: any) => {
        resolve(res);
        if (res.data.code !== IS_OK) {
          let msg = res.data.msg ? res.data.msg : "后台没提示";
          Message.error(msg);
        }
      })
      .catch((err: any) => {
        console.log(Vue.prototype.count)
        if (Vue.prototype.count == 0) {
          if (err.response.status === 401) {
            MessageBox.confirm(err.response.data.msg, "系统提示", {
              confirmButtonText: "重新登录",
              showClose: false,
              showCancelButton: false,
              closeOnClickModal: false,
              type: "error"
            }).then(() => {
              document.dispatchEvent(new Event("logout"));
            });
          } else {
            Message.error(err.message);
          }
          Vue.prototype.count++;
        }
      });
  })
}