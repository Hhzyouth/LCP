import request from '../https/request';
import requestwi from '../https/requestWI';

//获取我的题目
export const getMyProblems=(page)=>{
    return requestwi({
        url: '/problem/myList',
        method: 'get',
        params: {
            page : page,
          },
    });
}
//获取可编辑的题目内容
export const getMyProblem=(problemId)=>{
    return requestwi({
        url: '/problem/updateContent',
        method: 'get',
        params: {
            problemId : problemId,
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
export const deleteMyProblem=(problemId)=>{
    return requestwi({
        url: '/problem/delete',
        method: 'delete',
        params: {
            problemId : problemId,
          },
    });
}
//获取我的题目集
export const getMyCollections=(page)=>{
    return requestwi({
        url: '/collection/list',
        method: 'get',
        params: {
            page : page
          },
    });
}
//删除我的题目集
export const deleteMyCollection=(collectionId)=>{
    return requestwi({
        url: '/collection/deleteCollection',
        method: 'delete',
        params: {
            colId : collectionId
          },
    });
}
//获取可编辑的题目集内容
export const getMyCollection=(collectionId)=>{
    return requestwi({
        url: '/collection/getCollection',
        method: 'get',
        params: {
            colId : collectionId
          },
    });
}
//设置题目集
export const setCollection = (data) => {
    let temp=JSON.parse(JSON.stringify(data));
    temp.problemList=JSON.stringify(data.problemList)
    return requestwi({
        url: '/collection/add',
        method: 'post',
        data: temp
    });
};