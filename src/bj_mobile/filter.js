import Vue from 'vue'
import  moment from 'moment'
//过滤手机号
Vue.filter('filter_phone_num', function(value) {
    if(!value) return '';
    return value.replace(/(\d{3})(\d{4})(\d{4})/,'$1****$3')
})

//手机号四位加空格
Vue.filter('filter_phone_num_space', function(value) {
  if(!value) return '';
  return value.replace(/(\d{3})(\d{4})(\d{4})/,'$1 $2 $3')
})
//过滤流量包大小
Vue.filter('filter_pkg', function(value) {
    if(!value) return '';
    if(value<1024){
        return value+'M'
    }else{
        return parseInt(value/1024)+'G'
    }
})
//过滤流量包大小
Vue.filter('filter_userbalance', function(value) {
    if(!value) return '0MB';
    if(value<1024){
      return value+'MB'
    }else{
      return (value/1024).toFixed(2)+'GB'
    }
})

//过滤钱
Vue.filter('filter_money', function(value) {
    if(!value) return '0.00元';
    return parseFloat(value).toFixed(2)+'元';
})

//过滤钱2
Vue.filter('filter_money_icon', function(value) {
  if(!value) return '¥0.00';
  return '¥'+parseFloat(value).toFixed(2);
})

//过滤手机号
Vue.filter('filter_phone_number', function(value,value2) {
    if(!value) return '';

    let phone_number = value.replace(/ /ig,'');

    if (phone_number.length !== 11) {
        return '请输入有效的手机号码';
    }else{
        let myreg = /^((13[4-9])|(147)|(15[0-2,7-9])|(178)|(18[2-4,7-8]))+\d{8}$/
        let myreg1 = /^((13[0-2])|(145)|(15[5-6])|(17[5-6])|(18[5-6]))+\d{8}$/
        let myreg2 = /^((133)|(149)|(153)|(17[3,7])|(18[0-1,9]))+\d{8}$/
        let myreg3 = /^(17[0-1])+\d{8}$/
        if (!myreg.test(phone_number) && !myreg1.test(phone_number) && !myreg2.test(phone_number) && !myreg3.test(phone_number)) {
            return '请输入有效的手机号码';

        }else{
            return value2;
        }
    }
})

//支付状态
Vue.filter('filter_pay', function(obj) {
  let value
  switch (obj.pay_status){
    case 0:
      value = '待支付';//未支付
      break;
    case 1:
      value = '支付成功';//支付成功
      switch (obj.recharge_status){
        case 0:
          value = '待充值';//待充值
          break;
        case 1:
          value = '充值中';//流量充值中
          break;
        case 2:
          value = '充值成功';//充值成功
          break;
        case 3:
          value = '充值失败';//充值失败
          break;
      }
      break;
    case 2:
      value = '支付失败';// 支付失败
      break;
    case 3:
      value = '已退还';// 已退还
      break;
    case 4:
      value = '交易关闭';// 交易关闭
      break;
  }
  return value
})

//过滤粮票使用时间
Vue.filter('filter_coupontime', function(obj) {
  if(obj.time_slot == 1){
    return obj.use_end_time
  }else{
    return moment().add({days:obj.interval_time}).format('YYYY-MM-DD HH:mm:ss')
  }
})

//过滤粮票状态样式
Vue.filter('filter_couponstatusstyle', function(obj) {
  if(obj.coupon_status == 1){// 未使用
    if(obj.coupon_type == 3){
      return 'price'
    }else{
      return 'minus'
    }
  }else if(obj.coupon_status == 2){// 已使用
    return 'used'
  }else if(obj.coupon_status == 3){// 已过期
   return 'expired'
  }
})
//过滤周几
Vue.filter('filter_week', function(time) {
  let obj = {
    0:'周日',
    1:'周一',
    2:'周二',
    3:'周三',
    4:'周四',
    5:'周五',
    6:'周六',
  }
  let day = moment(time).day();
  return obj[day]
})
//过滤时间格式
Vue.filter('filter_dateformat', function(time) {
  return  moment(time).format('MM-DD');
})

//过滤订单状态样式
Vue.filter('filter_orderstatus', function(obj) {
  let value = []
  switch (obj.recharge_status){
    case 0:
      value = '待充值'
      break;
    case 1:
      value = '充值中'
      break;
    case 2:
      value = '充值成功'
      break;
    case 3:
      value = '充值失败';
      break;
  }
  return value
})

//过滤订单状态样式
Vue.filter('filter_ordertime', function(obj) {
  let value = []
  switch (obj.recharge_status){
    case 0:
      value = obj.order_create_time
      break;
    case 1:
      value = obj.receive_start_time
      break;
    case 2:
      value = obj.recharge_success_time
      break;
    case 3:
      value = obj.recharge_error_time
      break;
  }
  return value
})
