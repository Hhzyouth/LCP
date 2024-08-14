import axios from 'axios';
import router from "@/router/index";

const servicewi = axios.create({
    baseURL:"/api",//http://192.168.115.15:8080/
    timeout: 5000,//设置超时时间

});
servicewi.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem('token');
        console.log("token request",token)
        // config.headers['authorization'] = token;
        config.headers.Authorization = token
        return config;
    },
    (error) => {
        // console.log("requesrt error:",error);
        return Promise.reject(error);
    }
);

servicewi.interceptors.response.use(
    (response) => {
        // console.log(response.headers.authorization,'response===',response)
        if(response.headers.authorization){
            console.log('token过期续签')
            localStorage.setItem('token',response.headers.authorization)
        }
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
           return Promise.reject(response);
        }
    },
    (error) => {
        if(error.response){
            switch(error.response.status) {
                // 401: 未登录
                case 401: 
                  localStorage.removeItem('token');
                  alert('连接超时，请重新登录');
                  router.replace({ path: '/Login' })
                  break
                // 403： 登录过期
                case 403:
                  alert('登录过期，请重新登录');
                  localStorage.removeItem('token');
                  router.replace({ path: '/Login' })
                  break
                // 404: 请求不存在
                case 404: 
                  alert('网络请求不存在');
                  break
                // 500: 服务错误
                case 500:
                  alert('网络请求有误');
                default:
                  alert('服务错误');
              }
     
        }else{
            // 配置服务器没有返回结果情况
            if(!window.navigator.onLine) {
                // 断网情况，进行断网处理
                return
            }
            console.log("response:",error);
            return Promise.reject(error);
        }
    }
);
export default servicewi;