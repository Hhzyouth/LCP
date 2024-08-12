import request from '../https/request';

//注册
export const register = (data) => {
    return request({
        url: '/user/register',
        method: 'post',
        data : data,
    });
};