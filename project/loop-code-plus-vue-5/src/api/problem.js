import request from '../https/request';

//获取商品
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