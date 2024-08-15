import request from '../https/request';

//注册
export const register = (data) => {
    return request({
        url: '/user/register',
        method: 'post',
        data : data,
    });
};

//登录
export const login = (data) => {
    return request({
        url: '/user/login',
        method: 'post',
        data : data,
    });
};