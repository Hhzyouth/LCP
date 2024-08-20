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
//获取题目集列表
export const getCollectionList = () => {
    return request({
        url: '/problem/colList',
        method: 'get',
    });
};


