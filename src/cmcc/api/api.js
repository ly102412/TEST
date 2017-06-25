import axios from 'axios'

let base = '/cmcc/business'
let mmt = '/cmcc/mmt'

// 获取商家信息
export const getBussinessInfo = params => {return axios.get(`${base}/info`, { params: params}).then(res => res.data)}
// 获取活动列表
export const getActivityList = params => {return axios.get(`${base}/activity/info/list`, { params: params}).then(res => res.data)}
// 查询中奖纪录
export const getActivityRecord = params => {return axios.get(`${base}/activity/code/list`, { params: params}).then(res => res.data)}
// 查询账户信息
export const getAccountInfo = params => {return axios.get(`${base}/account/detail/info`, { params: params}).then(res => res.data)}
// 采购记录
export const getOrderList = params => {return axios.get(`${base}/order/list`, { params: params}).then(res => res.data)}
// 消耗记录
export const getRecordList = params => {return axios.get(`${base}/money/record/list`, { params: params}).then(res => res.data)}
// 图片上传
// export const imgUpload = params => {return axios.post(`${mmt}/img/upload`, { params: params}).then(res => res.data)}
// 创建活动
export const createActivity = params => { return axios.post(`${mmt}/create/activity/info`, params)}
