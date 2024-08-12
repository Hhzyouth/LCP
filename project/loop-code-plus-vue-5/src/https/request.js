import axios from 'axios';
import router from "@/router/index";

const service = axios.create({
    baseURL:"/api",//http://192.168.115.15:8080/
    timeout: 5000,//设置超时时间

});

export default service;