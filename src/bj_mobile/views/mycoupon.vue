<template>
    <div>
        <div class="myCouponModule">
            <div class="myCoupon">
                <p class="couponProblem">
                    <router-link to="/explain">
                        <i></i>
                        <span>什么是流量券</span>
                    </router-link>
                </p>
                <div class="coupon_list_box">
                    <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">

                            <ul class="coupon_list"  v-infinite-scroll="loadMore" infinite-scroll-disabled="scroll" infinite-scroll-distance="50">
                                <li v-for="(item, _index) in counponList" >
                                    <coupon :item = "item" @click.native="useCoupon(_index)"></coupon>
                                </li>
                                <nomore v-show="noMore"></nomore>
                            </ul>
                        <div slot="top" class="mint-loadmore-top">
                            <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">下拉刷新</span>
                            <span v-show="topStatus === 'loading'">加载中，请稍候...</span>
                        </div>
                    </mt-loadmore>
                </div>
                <div class="coupon_disable">
                    <router-link to="/usedcoupon">
                        <span>查看已使用流量券 ></span>
                    </router-link>
                </div>
                <nomsg v-show="noData" :msg="'暂无可用流量券'"></nomsg>
                <v-loading v-show="loading"></v-loading>
            </div>
        </div>
    </div>
</template>
<script>
  import {InfiniteScroll, Spinner, Toast, Loadmore} from 'mint-ui';
  import coupon from '../components/coupon'
  import VLoading from '../components/loading.vue'
  import nomore from '../components/nomore'
  import nomsg from '../components/nomsg'
  import loadlist from '../components/loadinglist'

  export default {
    mounted(){
       if(this.$route.query.phone_number){
          this.phone_number = this.$route.query.phone_number.replace(/(\d{3})(\d{4})(\d{4})/,'$1 $2 $3')
       }
    },
    data () {
      return {
        loading:false,
        listLoading:false,
        scroll:false,//加载开关  若为true，则无限滚动不会被触发
        noData:false, // 没有数据
        noMore:false, // 没有更多
        topStatus:'', // 下拉刷新
        counponList: [], // 流量券列表
        pageNum: 0,
        phone_number:''
      }
    },
    methods: {
      handleTopChange(status) {
         this.topStatus = status;
      },
      loadTop() {
         let self = this;
         // 刷新
         setTimeout(function(){
             self.noMore = false
             self.counponList = []
             self.pageNum = 1
             self.init(self.pageNum)
             self.$refs.loadmore.onTopLoaded()
         },2000)
      },
      init(){
        let that = this
        this.loading = true
        this.$http.get('/api/bank/coupon/list',{
          params: {
            page_number: this.pageNum,
            page_size:10,
            type:1
          }
        }).then(function (res) {
          this.loading = false
          console.log('成功')
          if (res.data.status == 0) {
            if (!res.data.data.rows){
              that.noData = true
              that.noMore = false
            }
            if(this.pageNum >parseInt(res.data.data.rows/res.data.data.page_size)+1){
              this.scroll = true
              this.noMore = true
              return
            }
            let result = res.data.data.list
            if (result && result.length > 0) {
              // 拼接下数组
              that.counponList = that.counponList.concat(result)
              this.scroll = false
            }
            console.log(that.counponList)
          }
        }, function (res) {
          this.loading = false
        })
      },
      loadMore() {
        this.scroll = true
        console.log("执行loadMore")
        this.pageNum++
        this.init(this.pageNum)
      },
      useCoupon (i) {
         this.coupon_user_info_id = this.counponList[i].coupon_user_info_id
         console.log(this.coupon_user_info_id)
         this.$router.push({ name: 'charge', query: { coupon_user_info_id: this.coupon_user_info_id,phone_number:this.phone_number}})
      }
    },
    components: {
      coupon, // 粮票组件
      VLoading, // 加载组件
      loadlist,
      nomore,
      nomsg
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../assets/css/common';
    .mint-loadmore-top{
        color: $color-boder;
        font-size: 0.3rem;
    }
    .myCouponModule{
        width: 100%;
        height:100%;
        background-color: $color-mycoupon-bg;
        .myCoupon {
            height: 100%;
            position: relative;
            overflow:hidden;
            display: flex;
            flex-direction:column;
            .couponProblem {
                width: 2.2rem;
                height: 0.2rem;
                margin: 0rem auto;
                padding: 0.4rem 0;
                font-size: 0.28rem;
                a {
                    color: $color-green;
                    i {
                        width: 0.32rem;
                        height: 0.32rem;
                        display: block;
                        float: left;
                        background:url("../assets/images/icon-coupon-info.png")  no-repeat;
                        background-size: 100% 100%;
                        margin-top: 0.04rem;
                    }
                    span {
                        margin-left: 0.14rem;
                    }
                }
            }
            .coupon_list_box{
                width: 100%;
                flex: 1;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
                .coupon_list {
                    width: 100%;
                    padding-bottom: 0.4rem;
                    li{
                        width: 6.4rem;
                        margin: 0 auto;
                    }
                }
            }

            .coupon_disable {
                a {
                    width: 100%;
                    height: 1rem;
                    line-height: 1rem;
                    display: block;
                    color: $color-green;
                    font-size: 0.28rem;
                    text-align: center;
                }
            }
        }
    }
</style>

