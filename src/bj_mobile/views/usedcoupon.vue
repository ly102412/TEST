<template>
    <div class="myCouponModule">
        <div class="myCoupon">
            <div class="coupon_list_box">
                <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
                    <ul class="coupon_list"  v-infinite-scroll="loadMore" infinite-scroll-disabled="scroll" infinite-scroll-distance="50">
                        <li v-for="(item, _index) in counponList" @click="togglecoupon(_index)" >
                            <coupon :item = "item" :active = "_index==index" ></coupon>
                        </li>
                        <nomore v-if="noMore"></nomore>
                    </ul>
                    <div slot="top" class="mint-loadmore-top">
                        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">下拉刷新</span>
                        <span v-show="topStatus === 'loading'">加载中，请稍候...</span>
                    </div>
                </mt-loadmore>
            </div>
            <div class="myCouponBottom">

            </div>
        </div>
        <nomsg v-show="noData" :msg="'暂无已使用流量券'"></nomsg>
        <v-loading v-show="loading"></v-loading>
    </div>
</template>
<script>
  import {InfiniteScroll, Spinner, Toast} from 'mint-ui';
  import coupon from '../components/usedcoupon'
  import VLoading from '../components/loading.vue'
  import nomore from '../components/nomore'
  import nomsg from '../components/nomsg'
  import loadlist from '../components/loadinglist'

  export default {
    mounted(){
     // this.init()
//      this.loader = true
//      this.noData = true
    },
    data () {
      return {
        loading:false,
        loadlist:false,
        isNone: false,
        scroll:false,//加载开关  若为true，则无限滚动不会被触发
        noData:false, // 没有数据
        noMore:false, // 没有更多
        counponList: [], // 粮票列表
        pageNum: 0,
        index:-1,
        active:false,
        topStatus:''
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
             self.index = -1
             self.noMore = false
             self.counponList = []
             self.pageNum = 1
             self.init()
             self.$refs.loadmore.onTopLoaded()
           },2000)
      },
      togglecoupon (index) {
        if(this.index==index){
            this.index=-1;
        }else{
            this.index = index;
        }
      },
      init (){
        let that = this
        this.loading = true
        this.$http.get('/api/bank/coupon/list',{
          params: {
            page_number: this.pageNum,
            page_size:10,
            type:2
          }
        }).then(function (res) {
          this.loading = false
          console.log('成功')
          if (res.data.status == 0) {
            //无使用过的流量券
            if (res.data.data.rows == 0){
              this.noData = true
              this.noMore = false
              return
            }
            //下拉请求无数据 关闭下拉加载功能
            if(this.pageNum >parseInt(res.data.data.rows/res.data.data.page_size)+1){
              this.scroll = true
              this.noMore = true
              return
            }
            let result = res.data.data.list
            if (result && result.length) {
              // 拼接下数组
              this.counponList = this.counponList.concat(result)
              this.scroll = false
            } else {
              this.noMore = true
            }
          }
        }, function (res) {
          this.loading = false
        })
      },
      loadMore() {
        this.scroll = true
        console.log("执行loadMore")
        this.pageNum++
        this.init()
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
    .myCouponModule{
        width: 100%;
        height:100%;
        background-color: $color-mycoupon-bg;
        .myCoupon {
            width: 100%;
            height:100%;
            display: flex;
            flex-direction:column;
            position: relative;
            .coupon_list_box{
                width: 100%;
                flex: 1;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
                padding-top: 0.52rem;
                .coupon_list {
                    width: 7rem;
                    flex:1;
                    margin:0 auto;
                }
            }
            .myCouponBottom{
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
</style>

