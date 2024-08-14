import request from '../https/request';
import requestwi from '../https/requestWI';

//获取题目
export const getProblems = (page,tag,collection,userId) => {
    return request({
        url: '/problem/list',
        method: 'get',
        params: {
            page : page,
            tag : tag,
            collection : collection,
            userId : userId
          },
    });
};

//设置题目
export const setProblem = (data) => {
    data.tag=JSON.stringify(data.tag)
    data.collection=JSON.stringify(data.collection)
    return requestwi({
        url: '/problem/add',
        method: 'post',
        data: data
    });
};
