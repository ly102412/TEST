import axios from 'axios';

let base = '/api';

export const requestLogin = params => { return axios.post(`${base}/service/login`, params).then(res => res.data); };

export const requestLogout = params => {return axios.get(`${base}/service/logout`, { params: params }).then(res => res.data); };


// 订单管理页面表单
export const getOrderCodeList = params => { return axios.get(`${base}/service/business/order/list`, { params: params }); };

//审核通过
export const adoptOrder = params => { return axios.post(`${base}/service/busicess/order/confirm`, params); };

//上传文件成功后记录文件地址
export const sendFile = params => { return axios.post(`${base}/service/send/file`, params); };

