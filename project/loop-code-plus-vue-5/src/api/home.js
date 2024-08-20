import request from '../https/request';
import requestwi from '../https/requestWI';

//获取排位分数
export const getRanks = () => {
    return requestwi({
        url: '/user/getExtra',
        method: 'get',
    });
};