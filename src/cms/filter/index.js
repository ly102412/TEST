'use strict'
import Vue from 'vue'
import moment from 'moment'

// moment 转换日期时间格式
Vue.filter('filter_date_time', function(value, formatString){
  formatString = formatString || 'YYYY-MM-DD'
  return moment(value).format(formatString)
})
