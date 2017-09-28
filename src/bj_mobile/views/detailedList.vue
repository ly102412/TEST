<template>
    <div>
        <div class="detList">
            <div class="header_tab">
                <span @click="toggle(index,index-1)" v-for="(tab,index) in tabs"
                      :class="{on:isOn===index}">{{tab.text}}</span>
            </div>
            <div class="det">
                <mt-loadmore :top-method="loadTop"  @top-status-change="handleTopChange" ref="loadmore">
                    <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="scroll"
                    infinite-scroll-distance="50">
                        <li class="clearfix" v-for="(item, index) in scoreList">
                            <div class="det_top">
                                <h5 class="det_tit">{{item.desc}}</h5>
                                <div class="flow_type" :class="item.type ? 'flow_income' : 'flow_pay'">{{item.type ? '+' :'-'}}{{item.score}}M
                                </div>

                            </div>
                            <div class="det_bottom">
                                <p class="det_time">{{item.create_time}}</p>
                                <!--<div class="flow_num">余额{{item.user_score}}</div>-->
                            </div>
                        </li>
                        <div v-if="noMore" class="no_more">没有更多了</div>
                    </ul>
                    <div slot="top" class="mint-loadmore-top" top-pull-text="下拉刷新">
                        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">下拉刷新</span>
                        <span v-show="topStatus === 'loading'">加载中，请稍候...</span>
                    </div>
                </mt-loadmore>
                <loadinglist v-show="listLoading"></loadinglist>
                <nomsg v-show="noData" :msg="'暂无记录'"></nomsg>
            </div>
        </div>
        <v-loading v-show="loading"></v-loading>
    </div>
</template>
<script>
  import {InfiniteScroll, Spinner, Toast, Loadmore} from 'mint-ui';
  import VLoading from '../components/loading'
  import loadinglist from '../components/loadinglist'
  import nomsg from '../components/nomsg'
  export default {
    mounted(){

    },
    data () {
      return {
        topStatus:'',
        isOn: 0,
        listView: -1,
        scoreList:[],
        pageNum: 0,
        noData:false, // 没有数据
        noMore:false,
        listLoading:false, // 控制listloading
        loading:true, // 控制loading
        tabs:[
            {
                text: '全部'
            },
            {
                text: '支出'
            },
            {
                text: '收入'
            }
        ]
      }
    },
    methods:{
       toggle (i,type) {
         this.scoreList = [];
         this.pageNum = 1
         this.isOn = i
         this.listView = type
         this.noMore = false
         this.loading = true
         this.init()
       },
       handleTopChange(status) {
           this.topStatus = status;
       },
       loadTop() {
           let This = this;
           // 加载更多数据
           setTimeout(function(){
              This.$refs.loadmore.onTopLoaded()
              This.noMore = false
              This.loading = true
              This.scoreList = []
              This.pageNum = 1
              This.init(This.pageNum)
           },2000)
       },
       init () {
           let that = this
           this.listLoading = true
           this.$http.get('/api/bank/score/list', {
               params: {
                   type:this.listView,
                   page_number:this.pageNum,
                   page_size:10
               }
           }).then(function (res) {
               let list = res.data;
               that.listLoading = false
               console.log('---------/api/user/score/list----------')
               console.log(JSON.stringify(list))
               if (res.data.status == 0) {
                   console.log('success')
                   this.loading = false
                   if(this.pageNum >parseInt(res.data.data.rows/res.data.data.page_size)+1){
                       that.scroll = false
                   }
                   if (res.data.data.rows  == 0){
                       that.noData = true
                       that.noMore = false
                   }else{
                       that.noData = false
                       that.noMore = true
                    }
                   if (res.data.data.list && res.data.data.list.length > 0) {
                       let result = res.data.data.list
                        // 拼接下数组
                       that.scoreList = that.scoreList.concat(result)
                   } else {
                       if (res.data.data.rows  == 0){
                          that.noData = true
                          that.noMore = false
                       }else{
                          that.noData = false
                          that.noMore = true
                       }
                   }
               } else {
                   that.noData = true
               }
            }, function (res) {
                   Toast(res.data.message)
                   that.listLoading = false
            })
        },
        loadMore() {
            this.scroll = true
            this.pageNum++
            this.init(this.pageNum)
        }
    },
    components:{
      loadinglist,
      VLoading,
      nomsg
    }
  }



</script>
<style lang="scss" rel="stylesheet/scss">
    @import '../assets/css/common';
    .mint-loadmore-top{
        color: $color-boder;
        font-size: 0.3rem;
    }
    .detList {
        width: 100%;
        overflow: hidden;
        .header_tab {
            width: 100%;
            height: 0.9rem;
            display: flex;
            border-bottom: 1px solid $color-boder;
            span {
                display: block;
                flex: 1;
                color: $color-green;
                font-size: 0.28rem;
                line-height: 0.9rem;
                text-align: center;
                &.on {
                    background-color: $color-green;
                    color: $color-white;
                }
            }
        }
        .det {
            width: 100%;

            ul {
                width: 6.9rem;

                margin-left: 0.3rem;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
                li {
                    border-bottom: 1px solid $color-boder;
                    padding-bottom: 0.2rem;
                    width: 100%;
                    height: 1.06rem;
                    .det_top {
                        width: 100%;
                        margin-top: 0.24rem;
                        font-weight: normal;
                        height: 0.4rem;
                        h5 {
                            font-size: 0.28rem;
                            float: left;
                        }
                        .flow_type {
                            font-size: 0.32rem;
                            float: right;
                        }
                        .flow_income {
                            color: #3bd57c;
                        }
                        .flow_pay {
                            color: #e44648;
                        }
                    }
                    .det_bottom {
                        width: 100%;
                        margin-top: 0.24rem;
                        font-size: 0.28rem;
                        .det_time {
                            color: $color-boder;
                            float: left;
                        }
                        .flow_num {
                            float: left;
                        }
                    }
                }
            }
            .no_more {
                width: 100%;
                text-align: center;
                color: $color-boder;
                font-size: 0.3rem;
                margin-top: 0.2rem;
                line-height: 1rem;
                padding-bottom: 1.2rem;

            }
            .detList_none {
                width: 1.25rem;
                height: 2rem;
                /* background: red; */
                position: absolute;
                left: 50%;
                top: 3.8rem;
                left: 3.15rem;
                overflow: hidden;
                p {
                    text-align: center;
                    font-size: 0.28rem;
                    color: $color-boder;
                    margin-top: 0.3rem;
                }
            }
        }
    }
</style>

