import axios from "axios";
import { message } from "antd";

const ajax = axios.create({
  // baseURL: "http://mock-api.com/mnEd3LgJ.mock",
  // baseURL: "http://localhost:3000",
  // 在package.json 设置代理，让请求的路径继承自当前url，解决本地服务器的跨域
  timeout: 2000,
});

// 响应拦截器
// 在使用 async await 简化请求的情况下，可以优先拦截请求错误
// ajax.interceptors.response.use(
//   // 请求成功处理
//   (response) => {
//     return response;
//   },
//   //接口错误状态处理，也就是说无响应时的处理
//   (error) => {
//     message.error(`请求异常 ${error.response.status}`);
//     // return error.response;
//     // console.log(error);
//     return Promise.reject(error.response.status); // 返回接口返回的错误信息
//   }
// );

export default ajax;
