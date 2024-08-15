import request from '../https/request';
import requestwi from '../https/requestWI';

//获取我的题目
export const getMyProblems=(page,userId)=>{
    return requestwi({
        url: '/myProblem/list',
        method: 'get',
        params: {
            page : page,
            userId : userId
          },
    });
}
//获取可编辑的题目内容
export const getMyProblem=(problemId,userId)=>{
    return requestwi({
        url: '/myProblem/get',
        method: 'get',
        params: {
            problemId : problemId,
            userId : userId
          },
    });
}
//设置题目
export const setProblem = (data) => {
    let temp=JSON.parse(JSON.stringify(data));
    temp.tag=JSON.stringify(data.tag)
    temp.collection=JSON.stringify(data.collection)
    return requestwi({
        url: '/problem/add',
        method: 'post',
        data: temp
    });
};
//删除我的题目
export const deleteMyProblem=(problemId,userId)=>{
    return requestwi({
        url: '/myProblem/delete',
        method: 'delete',
        params: {
            problemId : problemId,
            userId : userId
          },
    });
}
//获取我的题目集
export const getMyCollections=(page,userId)=>{
    return requestwi({
        url: '/myCollection/list',
        method: 'get',
        params: {
            page : page,
            userId : userId
          },
    });
}
//删除我的题目
export const deleteMyCollection=(collectionId,userId)=>{
    return requestwi({
        url: '/myCollection/delete',
        method: 'delete',
        params: {
            collectionId : collectionId,
            userId : userId
          },
    });
}