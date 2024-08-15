import requestwi from '../https/requestWI';
import request from '../https/request';

// 题库发送运行评测代码
export const run = (code,uid,pid) => {
    return requestwi({
        url: '/run/python',
        method: 'post',
        data : {code : code,userId:uid,problemId:pid},
        timeout: 10000
    });
};
export const getProblemContent = (problemId) => {
    return request({
        url: '/problem/getContent',
        method: 'get',
        params: {
            problemId:problemId
        }
    });
};