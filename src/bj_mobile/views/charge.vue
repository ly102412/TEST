<template>
    <div>
        <!--流量直冲-->
        <div class="extractModule" v-show="iscanuse">
            <div class="phoneBox">
                <input type="tel" maxlength="13" placeholder="请输入11位手机号码" v-model="phone_number" @keyup="tel_change()" @keypress="tel_change()" @input="isEmpty=true">
                <div class="belong_name" :class="{'red':isRed}">{{addr}}</div>
                <div class="empty_phone_num" v-if="isEmpty" @click="empty()"></div>
            </div>
            <div class="flow_balance" v-show="isFlowBalance">流量余额{{score}}M</div>
            <div class="selectBox">
                <!--静态流量包-->
                <ul class="clearfix" v-if="list.length<=0">
                    <li class="discount" v-for="(item,_index) in list_static">
                        <div class="flow">{{item.package}}</div>
                    </li>
                </ul>
                <!--动态流量包-->
                <ul class="select clearfix" :class="{'discount':isDicount}">
                    <li v-for="(item,_index) in list" @click="choice(item.money,_index)" :class="{'active':_index==index, 'canuse':item.money == 0,'discount':item.money != 0}">
                        <div class="flow">{{item.packageSize |filter_pkg}}</div>
                    </li>
                </ul>
            </div>
            <div class="btn_box">
                <a href="javascript:;" class="charge" :class="{active:isCharge}" @click='showChoice()'>立即提取</a>
            </div>
        </div>
        <!--流量不足-->
        <div class="notEnough" v-show="notEnough">
            <p>流量余额{{score|filter_pkg}}</p>
            <p>亲爱的用户，存满100M流量再来提取吧</p>
            <router-link to="/index" class="goback">返回流量银行</router-link>
        </div>
        <div class="tipBox">
            温馨提示： <br>
            <p>1、月初的第一天和月末最后一天不能提取。</p>
            <p>2、流量支持提取到中国移动、中国联通、中国电信任意号码，虚拟运营商除外。</p>
            <p>3、流量成功提取到手机上后，根据流量运营商提供流量包标准，仅当月有效且不结转。</p>
        </div>
        <!--确认弹窗-->
        <div class="alertmask" v-show="alertmask">
            <div class="alertbox">
                <h2>确认订单</h2>
                <div class="order">
                    <div class="info clearfix">
                        <p>充值号码：</p>
                        <span>{{phone_number}}</span>
                    </div>
                    <div class="info clearfix">
                        <p>流量大小：</p>
                        <span>{{packageSizeInfo|filter_pkg}}</span>
                    </div>
                </div>
                <div class="btnbox">
                    <span @click="alertmask=false">再看看</span>
                    <span @click="charge()">确认</span>
                </div>
            </div>
        </div>
        <div class="submitInfo" v-show="isSucc">
            <div class="process">
                <dl>
                    <dt class="num active">1</dt>
                    <dd class="line active"></dd>
                    <dd class="text active">选择需要充值的手机号和具体流量包</dd>
                </dl>
                <dl>
                    <dt class="num active">√</dt>
                    <dd class="line"></dd>
                    <dd class="text_two active">{{order.create_time}}<br>流量充值申请提交成功，请耐心等待</dd>
                </dl>
                <dl>
                    <dt class="num">3</dt>
                    <dd class="text">充值成功，流量充值到账后运营商短信通知为准</dd>
                </dl>
            </div>
            <div class="order_info">
                <div class="clearfix">
                    <p>充值号码</p>
                    <span>{{order.phone_number}}</span>
                </div>
                <div class="clearfix">
                    <p>流量规格</p>
                    <span>{{order.package_size|filter_pkg}}</span>
                </div>
            </div>
            <div class="finishbox">
                <router-link to="/index" class="finish">完成</router-link>
            </div>
        </div>
        <loading v-show="loading"></loading>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../assets/css/common";
    .col-money-yellow {
        color: #ff9d4d;
    }
    .extractModule {
        overflow: hidden;
        height: 9.5rem;
        .phoneBox {
            width: 100%;
            height: 1.8rem;
            border-bottom: 1px solid $color-boder;
            padding-bottom: 0.12rem;
            position: relative;
            input {
                background: rgba(0, 0, 0, 0);
                border: none;
                outline: none;
                width: 100%;
                padding: 0.43rem 0 0 0.3rem;
                font-size: 0.46rem;
                color: $color-blank;
            }
            .belong_name{
                font-size: 0.24rem;
                color: $color-boder;
                margin-left: 0.3rem;
            }
            .red{
                color: $color-red;
            }
            .empty_phone_num{
                width: 0.5rem;
                height:0.5rem;
                background:url("../assets/images/icon-empty.png")  no-repeat;
                background-size: 100% 100%;
                position: absolute;
                right:0.5rem;
                top:0.65rem;
                z-index: 999;
            }
        }
        .flow_balance{
            float: right;
            margin-right: 0.3rem;
            font-size: 0.24rem;
            color: $color-blank;
            margin-top: 0.26rem;
        }
        .selectBox {
            width: 100%;
            padding-top: 0.8rem;
            ul {
                li {
                    width: 2.1rem;
                    height: 1rem;
                    border-radius: 0.1rem;
                    margin: 0 0 0.25rem 0.27rem;
                    float: left;
                    text-align: center;
                    position: relative;
                    .flow {
                        font-size: 0.32rem;
                        line-height: 1rem;
                    }
                    &.discount{
                        border:2px solid $color-charge-btn;
                        color: $color-charge-btn;
                    }
                    &.active{
                        border:2px solid $color-green;
                        color:$color-green;
                        background-color: #cfe5d3;
                    }
                    &.canuse{
                        border:2px solid $color-green;
                        color:$color-green;
                    }
                }

            }
            .select{
                max-height: 3.8rem;
                overflow-y: auto;
            }
            .discount{
                li{
                    border:2px solid $color-charge-btn !important;
                    color: $color-charge-btn !important;
                }
            }

        }
        .btn_box{
            width: 100%;
            margin-top:0.7rem;
            .charge{
                width: 5.30rem;
                height: 1rem;
                line-height: 1rem;
                color: $color-white;
                background-color:$color-boder ;
                text-align: center;
                display: block;
                margin: 0 auto;
                border-radius: 0.1rem;
                font-size: 0.32rem;
                &.active{
                    background-color: #2d9b44;
                    color: $color-white;
                }
            }
        }
    }
    .tipBox {
        width: 6.9rem;
        height: 2rem;
        font-size: 0.26rem;
        line-height: 0.40rem;
        color: $color-blank;
        position: absolute;
        left: 0.3rem;
        bottom: 0.5rem;
    }
    .notEnough{
        width: 100%;
        padding-top: 1.10rem;
        color: $color-blank;
        font-size: 0.32rem;
        text-align: center;
        p{
            margin-top:0.34rem;
        }
        .goback{
            width: 5.30rem;
            height: 1rem;
            line-height: 1rem;
            margin: 1rem auto 0;
            border-radius: 0.1rem;
            background-color: #2d9b44;
            color: $color-white;
            text-align: center;
            display: block;
            font-size: 0.32rem;
        }
    }
    .alertmask{
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        background-color: rgba(0,0,0,0.38);
        .alertbox{
            width: 5.9rem;
            height: 4.10rem;
            position: absolute;
            left:50%;
            top:50%;
            margin-left: -2.95rem;
            margin-top: -2.05rem;
            background-color: $color-white;
            color: $color-blank;
            border-radius: 0.1rem;
            h2{
                width: 100%;
                height: 1.2rem;
                line-height: 1.2rem;
                text-align: center;
                font-size: 0.36rem;
            }
            .order{
                width:5.1rem;
                padding-bottom: 0.4rem;
                border-top: 1px solid $color-boder;
                border-bottom: 1px solid $color-boder;
                margin: 0 auto;
                font-size: 0.26rem;
                .info{
                    p{
                        float: left;
                        margin-top: 0.38rem;
                        margin-left: 0.1rem;
                    }
                    span{
                        display: block;
                        float: right;
                        margin-top: 0.38rem;
                        margin-right: 0.1rem;
                    }
                }
            }
            .btnbox{
                display: flex;
                font-size: 0.32rem;
                line-height: 0.6rem;
                text-align: center;
                margin-top: 0.2rem;
                span{
                    display: block;
                    flex:1;
                    height: 0.54rem;
                }
                span:nth-child(2){
                    color: $color-green;
                    border-left:1px solid $color-boder;
                }
            }
        }
    }
    .submitInfo{
        width: 100%;
        padding-top: 0.7rem;
        font-size: 0.32rem;
        .process{
            width: 6.7rem;
            margin: 0 auto;
            dl{
                position: relative;
                left: 0;
                top:0;
                .num{
                    width: 0.4rem;
                    height:0.4rem;
                    background-color: $color-boder;
                    color: $color-white !important;
                    text-align: center;
                    line-height: 0.4rem;
                    border-radius: 50%;
                }
                .line{
                    width: 0.04rem;
                    height:0.9rem;
                    background-color: $color-boder;
                    margin-left: 0.18rem;
                }
                .text,.text_two{
                    font-size: 0.28rem;
                    color:$color-boder ;
                    background-color: $color-white !important;
                    position: absolute;
                    left: 0.75rem;
                    top:0rem
                }
                .text_two{
                    top:-0.25rem
                }
                .active{
                    background-color: $color-green;
                    color: $color-blank;
                }
            }
        }
        .order_info{
            width: 6.7rem;
            margin: 0.62rem auto 0;
            div{
                color: $color-blank;
                font-size:0.32rem;
                width: 100%;
                height: 1rem;
                line-height: 1rem;
                border-top: 1px solid $color-boder;
                p{
                    float: left;
                }
                span{
                    float: right;
                }
            }
        }
        .finishbox{
            .finish{
                width: 5.30rem;
                height: 1rem;
                line-height: 1rem;
                margin: 1rem auto 0;
                border-radius: 0.1rem;
                background-color: #2d9b44;
                color: $color-white;
                text-align: center;
                display: block;
                font-size: 0.32rem;
            }
        }
    }

</style>
<script>
  import loading from '../components/loading'
  import {InfiniteScroll, Spinner, Toast} from 'mint-ui';
  import '../assets/js/jquery-2.1.1.min.js'
  export default {
    mounted () {
       this.score = this.$route.query.score
       if(this.$route.query.phone_number){
          this.phone_number = this.$route.query.phone_number.replace(/(\d{3})(\d{4})(\d{4})/,'$1 $2 $3')
       }
       this.package_size = this.$route.query.package_size
       this.coupon_user_info_id = this.$route.query.coupon_user_info_id
       this.getTrafficList()
    },
    data () {
      return {
        loading:false,
        phone_number:'', //手机号码,
        score:'', //可提取的流量包
        list:[],  //流量包列表
        list_static: [
            {package:'100M'},
            {package:'300M'},
            {package:'500M'},
            {package:'1G'},
            {package:'3G'},
            {package:'6G'}
        ],
        belong_name:'', //手机号码归属地
        area_name:'',
        addr:'',
        packageSizeInfo:'',
        money:'',
        index: 0,
        selectIndex: 0,
        iscanuse:true,
        alertmask:false,
        isCharge:false,
        isRed:false,
        isDicount:false,
        isSucc:false,
        notEnough:false,
        isFlowBalance:true,
        isEmpty:false,
        order:{},
        package_size:'',
        coupon_user_info_id:''
      }
    },
    methods: {
        getTrafficList () {
            this.loading = true
            let tel = this.phone_number.replace(/ /ig, '');
            if(this.coupon_user_info_id){
                this.isFlowBalance = false
                this.$http.get('/api/bank/qry/package/recharge', {
                    params: {
                        phone_number: tel,
                        coupon_user_info_id:this.coupon_user_info_id
                    }
                }).then(function (res) {
                    this.loading = false
                    console.log('---------api/qry/package/recharge---------')
                    if (res.data.status == 0) {
                        this.index = 0
                        this.isDicount = false
                        this.isRed = false
                        this.list = res.data.packageData
                        this.belong_name = res.data.belongName
                        this.area_name = res.data.areaName
                        this.addr = res.data.addr
                        this.isCharge = true
                    }
                }, function () {
                    this.loading = false
                })
                return
            }
            if(this.score<100){
                this.loading = false
                this.notEnough = true
                this.iscanuse = false
                return
            }

            this.$http.get('/api/bank/qry/package/extract', {
                params: {
                    phone_number: tel
                }
            }).then(function (res) {
                this.loading = false
                console.log('---------api/qry/package---------')
                if (res.data.status == 0) {
                    this.isDicount = false
                    this.isRed = false
                    this.list = res.data.packageData
                    this.belong_name = res.data.belongName
                    this.area_name = res.data.areaName
                    this.index = res.data.max
                    this.addr = res.data.addr
                    this.isCharge = true
                }
            }, function () {
                this.loading = false
            })
        },
        choice(money,index) {
            if(this.isDicount){
                return
            }
            this.money = money
            if(this.money == 0){
                this.index = index
                this.isCharge = true
            }
        },
        //清空手机号
        empty (){
            this.phone_number = ''
            this.index = -1;
            this.isDicount = true //流量包全部都置灰
            this.isCharge = false //提取流量按钮置灰
            this.addr = ''        //提示语置空
            this.isEmpty = false  //清空按钮隐藏
        },
        //手机号码间隔
        tel_change () {
            if (this.phone_number.length == 4) {
                if (this.phone_number.substring(3, 4) != ' ') {
                    this.phone_number = this.phone_number.substring(0, 3) + ' ' + this.phone_number.substring(3, 4);
                } else {
                    this.phone_number = this.phone_number.substring(0, 3);
                }
            }
            if (this.phone_number.length == 9) {
                if (this.phone_number.substring(8, 9) != ' ') {
                    this.phone_number = this.phone_number.substring(0, 8) + ' ' + this.phone_number.substring(8, 9);
                } else {
                    this.phone_number = this.phone_number.substring(0, 8);
                }
            }
            let phone = this.phone_number.replace(/ /ig, '')
            if (phone.length == 0){
                this.isEmpty = false
                this.addr = '手机号码不能为空'
                this.isRed = true
                return
            }
            if (this.phone_number.length == 13) {
                let myreg = /^((13[4-9])|(147)|(15[0-2,7-9])|(178)|(18[2-4,7-8]))+\d{8}$/
                let myreg1 = /^((13[0-2])|(145)|(15[5-6])|(17[5-6])|(18[5-6]))+\d{8}$/
                let myreg2 = /^((133)|(149)|(153)|(17[3,7])|(18[0-1,9]))+\d{8}$/
                let myreg3 = /^(17[0-1])+\d{8}$/
                if (!myreg.test(phone) && !myreg1.test(phone) && !myreg2.test(phone) &&!myreg3.test(phone)) {
                    this.addr = '请输入正确的手机号码'
                    this.isRed = true
                    this.isCharge = false
                    return
                }
                this.getTrafficList()
            } else {
                this.index = -1;
                this.isDicount = true //流量包全部都置灰
                this.isCharge = false //提取流量按钮置灰
                this.addr = '请输入正确的手机号码'
                this.isRed = true
                this.isEmpty = true

            }
        },
        showChoice () {
            let phone = this.phone_number.replace(/ /ig, '')
            if (!phone){
                this.addr = '手机号码不能为空'
                this.isRed = true
                return
            }
            if (phone.length !== 11) {
                this.addr = '请输入正确的手机号码'
                this.isRed = true
                return
            } else {
                let myreg = /^((13[4-9])|(147)|(15[0-2,7-9])|(178)|(18[2-4,7-8]))+\d{8}$/
                let myreg1 = /^((13[0-2])|(145)|(15[5-6])|(17[5-6])|(18[5-6]))+\d{8}$/
                let myreg2 = /^((133)|(149)|(153)|(17[3,7])|(18[0-1,9]))+\d{8}$/
                let myreg3 = /^(17[0-1])+\d{8}$/
                if (!myreg.test(phone) && !myreg1.test(phone) && !myreg2.test(phone) &&!myreg3.test(phone)) {
                    this.addr = '请输入正确的手机号码'
                    this.isRed = true
                    return
                }
            }
            if(this.isCharge){
                this.alertmask = true
                this.packageSizeInfo = this.list[this.index].packageSize
            }
        },
        charge (value){
            this.loading = true
            this.alertmask = false
            let that = this
            if(this.coupon_user_info_id){
                this.$http.post('/api/bank/recharge/order',{
                   phone_number: this.phone_number.replace(/ /ig, ''),
                   package_size: this.list[this.index].packageSize,
                   belong_name: this.belong_name,
                   area_name:this.area_name,
                   coupon_user_info_id:this.coupon_user_info_id
                },{emulateJSON:true}).then(function (res) {
                    this.loading = false;
                    console.log('---------api/extract/recharge/pay---------');
                    if (res.data.status == 0) { //流量提取成功
                        this.isSucc = true
                        //this.alertmask = false
                        this.iscanuse = false
                        this.order =  res.data.data
                    }else if(res.data.status == 1){//流量提取失败
                        Toast(res.data.message)
                        //this.alertmask = false
                        this.iscanuse = true
                    }
                }, function (res) {
                    this.loading = false
                })
                return
            }
            this.$http.post('/api/bank/extract/recharge',{
               phone_number: this.phone_number.replace(/ /ig, ''),
               package_size: this.list[this.index].packageSize,
               belong_name: this.belong_name,
               area_name:this.area_name
            },{emulateJSON:true}).then(function (res) {
                this.loading = false;
                console.log('---------api/extract/recharge/pay---------');
                if (res.data.status == 0) { //流量提取成功
                    this.isSucc = true
                    //this.alertmask = false
                    this.iscanuse = false
                    this.order =  res.data.data
                }else if(res.data.status == 1){//流量提取失败
                    Toast(res.data.message)
                    //this.alertmask = false
                    this.iscanuse = true
                }
            }, function (res) {
                this.loading = false
            })
            console.log('rows===='+this.list[this.index].rows)
        }
      },
    components:{
        loading
    }
  }
</script>

