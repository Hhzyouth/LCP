import request from '../https/request';

//获取商品
export const getCurrentPageGoods = (page) => {
    return request({
        url: '/store/list',
        method: 'get',
        params: {
            page : page
          },
    });
};