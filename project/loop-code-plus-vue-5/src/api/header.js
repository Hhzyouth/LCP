import requestwi from '../https/requestWI';

// 获取个人基本信息
export const getBaseInfo = () => {
    return requestwi({
        url: '/user/baseInfo',
        method: 'get',
    });
};