import requestwi from '../https/requestWI';
import request from '../https/request';

//获取题解列表
export const getSolutions = (problemId,page) => {
    return request({
        url: '/solution/get',
        method: 'get',
        params: {
            problemId:problemId,
            page:page
        }
    });
};

//获取可编辑题解内容
export const getSolution = (solutionId) => {
    return requestwi({
        url: '/solution/updateContent',
        method: 'get',
        params: {
            solutionId:solutionId,
        }
    });
};

//设置题目
export const setSolution = (data) => {
    let temp=JSON.parse(JSON.stringify(data));
    temp.tag=JSON.stringify(data.tag)
    return requestwi({
        url: '/solution/add',
        method: 'post',
        data: temp
    });
};