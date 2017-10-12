import axios from 'axios'

let base = '/api/business'
let mmt = '/api/mmt'
/**
 * [getBussinessInfo 获取商家信息]
 * @param  {[type]} params [description]
 * @return {[Object]}        [data]
 */
export const getBussinessInfo = params => {return axios.get(`${base}/info`, { params: params}).then(res => res.data)}
/**
 * [getActivityList 获取活动列表]
 * @param  {[type]} params [description]
 * @return {[Object]}        [data]
 */
export const getActivityList = params => {return axios.get(`${base}/activity/info/list`, { params: params}).then(res => res.data)}
/**
 * [getActivityRecord 查询中奖纪录]
 * @param  {[String]} params [business_activity_info_id]
 * @return {[Object]}        [data]
 */
export const getActivityRecord = params => {return axios.get(`${base}/activity/code/list`, { params: params}).then(res => res.data)}
/**
 * [getAccountInfo 查询账户信息]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getAccountInfo = params => {return axios.get(`${base}/account/detail/info`, { params: params}).then(res => res.data)}
/**
 * [getOrderList 采购记录]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getOrderList = params => {return axios.get(`${base}/order/list`, { params: params}).then(res => res.data)}
/**
 * [getRecordList 消耗记录]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getRecordList = params => {return axios.get(`${base}/money/record/list`, { params: params}).then(res => res.data)}
/**
 * [imgUpload 图片上传]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
// export const imgUpload = params => {return axios.post(`${mmt}/img/upload`, { params: params}).then(res => res.data)}
/**
 * [createActivity description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const createActivity = params => { return axios.post(`${mmt}/create/activity/info`, params)}

/**
 * [delActivity 删除活动]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const delActivity = params => { return axios.get(`${mmt}/del/activity`, { params: params})}
/**
 * [getActivityById 获取活动信息]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getActivityById = params => { return axios.get(`${mmt}/get/activity`, { params: params})}
/**
 * [getActivityById 修改活动]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const editActivity = params => { return axios.post(`${mmt}/update/activity`, params)}
/**
 * [releaseActivity 发布活动]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const releaseActivity = params => { return axios.get(`${mmt}/release/activity`, { params: params})}
/**
 * [getLotteryRecord 获取中奖信息]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getLotteryRecord = params => { return axios.get(`${mmt}/front/user/lottery/list`, { params: params})}
/**
 * [lotteryEnd 结束活动]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const lotteryEnd = params => { return axios.get(`${mmt}/end/activity`, { params: params})}
/**
 * [lotteryEnd 结束活动]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getFlowPrice = params => { return axios.get(`${mmt}/activity/price`, { params: params})}


/**
 * [getSecretKey 获取秘钥]
 */
export const getSecretKey = params => { return axios.get(`${base}/get/secretkey`, { params: params}).then(res => res.data)}

/**
 * [resetSecretKey 重置秘钥]
 */
export const resetSecretKey = params => { return axios.get(`${base}/reset/secretkey`, { params: params}).then(res => res.data)}


/**
 * 账号批冲
 * [readAccountCsv 获取导入的手机号码]
 */
export const readAccountCsv = params => { return axios.get(`/api/batch/recharge/read/csv/bank`, { params: params}).then(res => res.data)}

/**
 * 账号批冲
 * [createAccountCsv 创建账号批冲]
 */
export const createAccountCsv = params => { return axios.post(`/api/batch/recharge/create/bank/activity`, params).then(res => res.data)}


/**
 * 手机号码批冲
 * [readCsvPhone 获取导入的手机号码]
 */
export const readPhoneCsv = params => { return axios.get(`/api/batch/recharge/read/csv/phone`, { params: params}).then(res => res.data)}

/**
 * 手机号码批冲
 * [createPhoneCsv 创建手机号码批冲]
 */
export const createPhoneCsv = params => { return axios.post(`/api/batch/recharge/create/phone/activity`, params).then(res => res.data)}

/**
 * 批冲列表
 * [rechargeList 批冲列表]
 */
export const rechargeList = params => { return axios.post(`/api/batch/recharge/list`, params).then(res => res.data)}

/**
 * 批冲详情
 * [rechargeDetail 批冲详情]
 */
export const rechargeDetail = params => { return axios.post(`api/batch/recharge/detail`, params).then(res => res.data)}

