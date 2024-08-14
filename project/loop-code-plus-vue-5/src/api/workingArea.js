import requestwi from '../https/requestWI';

//注册
export const run = (code,uid,pid) => {
    return requestwi({
        url: '/run/python',
        method: 'post',
        data : {code : code,userId:uid,problemId:pid},
        timeout: 10000
    });
};