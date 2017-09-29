<template>
    <div>
        <div class="messageList">
            <div class="message_list_box">
                <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
                    <ul class="msgList"  v-infinite-scroll="loadMore" infinite-scroll-disabled="scroll" infinite-scroll-distance="50">
                        <li v-for="(msg, index) in message">
                            <div class="msgTime">{{msg.create_time}}</div>
                            <div class="msgContent clearfix">
                                <div class="bankLogo"></div>
                                <div class="msg">
                                    <div class="msgText">
                                        <p v-html="msg.content"></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <nomore v-if="noMore"></nomore>
                    </ul>
                    <div slot="top" class="mint-loadmore-top">
                        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">下拉刷新</span>
                        <span v-show="topStatus === 'loading'">加载中，请稍候...</span>
                    </div>
                </mt-loadmore>
            </div>
            <nomsg v-show="noData" :msg="'暂无数据'"></nomsg>
        </div>
        <v-loading v-show="loading"></v-loading>
    </div>
</template>
<script>
    import {InfiniteScroll, Spinner, Toast} from 'mint-ui';
    import VLoading from '../components/loading'
    import loadlist from '../components/loadinglist'
    import nomore from '../components/nomore'
    import nomsg from '../components/nomsg'
    export default{
        mounted(){
            //this.init()
        },
        data () {
            return {
                //listLoading:false,
                loading:true,
                noData:false,
                noMore:false,
                scroll:false,
                message:[],
                pageNum: 0,
                topStatus:''
            }
        },
        methods:{
            handleTopChange(status) {
                this.topStatus = status;
            },
            loadTop() {
                let self = this;
                // 刷新
                setTimeout(function(){
                    self.noMore = false
                    self.message = []
                    self.pageNum = 1
                    self.init(self.pageNum)
                    self.$refs.loadmore.onTopLoaded()
                },2000)
            },
            init () {
                let that = this
                //this.listLoading = true
                that.loading = true
                this.$http.get('/api/bank/msg/list', {
                    params: {
                        page_number: this.pageNum,
                        page_size:10
                    }
                }).then(function (res) {
                    let list = res.data;
                    //that.listLoading = false
                    console.log('---------api/msg/list----------')
                    if (res.data.status == 0) {
                        console.log('success')
                        this.loading = false
                        if (!res.data.data.rows){
                            that.noData = true
                            that.noMore = false
                            return
                        }
                        if(this.pageNum >parseInt(res.data.data.rows/res.data.data.page_size)+1){
                            that.scroll = true
                            that.noMore = true
                            return
                        }
                        let result = res.data.data.list
                        if (result && result.length > 0) {
                          // 拼接下数组
                          that.message = that.message.concat(result)
                          that.scroll = false
                        } else {
                          that.noMore = true
                        }
                        console.log(that.counponList)
                    }
                }, function (res) {
                       Toast(res.data.message)
                       //that.listLoading = false
                       that.loading = false
                })
            },
            loadMore() {
                this.scroll = true
                console.log("执行loadMore")
                this.pageNum++
                this.init(this.pageNum)
            }
        },
        components:{
            loadlist,
            nomore,
            VLoading,
            nomsg
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import '../assets/css/common';
    .messageList{
        width: 100%;
        height:100%;
        display: flex;
        flex-direction:column;
        position: relative;
        .message_list_box{
            width: 100%;
            flex: 1;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            padding-top: 0.52rem;
            .msgList{
                margin-bottom:1.5rem;
                color: $color-font-msg;
                li{
                    width:6.2rem;
                    margin: 0.36rem 1rem 0rem 0.3rem;
                    .msgTime{
                        width: 2.8rem;
                        height:0.4rem;
                        line-height: 0.4rem;
                        font-size: 0.22rem;
                        margin-left: 2.1rem;
                        text-align: center;
                        border-radius: 0.06rem;
                        background-color: $color-boder;
                    }
                    .msgContent{
                        margin-top: 0.1rem;
                        .bankLogo{
                            width: 0.92rem;
                            height:0.92rem;
                            border-radius: 50%;
                            float: left;
                            background-image: url(../assets/images/icon-message-head.png);
                            background-repeat: no-repeat;
                            background-size: 100% 100%;
                        }
                        .msg{
                            float: left;
                            margin-left: 0.46rem;
                            .msgText{
                                width: 4.8rem;
                                line-height: 0.44rem;
                                font-size: 0.3rem;
                                padding-top: 0.34rem;
                                padding-bottom: 0.54rem;
                                float: left;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

