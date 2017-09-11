import axios from 'axios';

let base = '/api/icbc/server';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const requestLogout = params => {return axios.get(`${base}/logout`, { params: params }).then(res => res.data); }

export const getCouponList = params => { return axios.get(`${base}/coupon/list`, { params: params }); };

export const createCoupon = params => { return axios.post(`${base}/couponinfo/create`, params).then(res => res.data); };// 新增流量卡

export const getCouponInfo = params => { return axios.get(`${base}/coupon/info`, { params: params }); };

export const editCoupon = params => { return axios.post(`${base}/couponinfo/editor`, params); };

export const getRedeemCodeList = params => { return axios.get(`${base}/coupon/list`, { params: params }); }; // 流量兑换码管理页面表单

export const getRedeemCodeRecordList = params => { return axios.get(`${base}/flow/consume/record/10000003`, { params: params }); }; // 流量兑换码记录页面表单

export const getOnlineOffline = params => { return axios.get(`${base}/coupon/online`, { params: params }); }; // 流量兑换码管理上架下架
export const viewExchangeCodeList = params => { return axios.get(`${base}/export/coupon`, { params: params }); }; // 查看兑换码列表
