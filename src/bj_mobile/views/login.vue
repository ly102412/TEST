<template>
    <div class="loginBox">
        <div class="loginModule">
            <div class="topBox">
                <i></i>
                <p>手机快捷登录</p>
            </div>
            <div class="inputBox">
                <input type="tel" class="iptPhone" placeholder="请输入手机号" id="querytel " maxlength="11"  v-model="telNum">
                <div class="verifyBox">
                    <input type="tel" placeholder="请输入验证码" class="iptVerify"  maxlength="6" id="querypwd"
                           v-model="vcode">
                    <div class="getVerifyBtn" id="auth_btn" @click="getAuth()">{{countDown}}</div>
                    <div class="loginBtn"  @click="queryInfo()">登录</div>
                </div>
            </div>
            <div class="helpBtn"><a href="tel:4008796969" v-if="!isAndroid" >收不到验证码</a> <a  href="javascript:;" v-if="isAndroid"  @click="call">收不到验证码</a></div>
        </div>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss">
    @import "../assets/css/common";
    .col-money-yellow {
        color: #ff9d4d;
    }
    .loginBox{
        overflow: hidden;
        background-color: #f5f5f5;
    }
    .loginModule {
        height: 100%;
        margin-top: 0.83rem;

        .topBox {
            i{
                width:0.56rem;
                height:0.92rem;
                background: url("../assets/images/icon-phone.png")no-repeat;
                background-size: 100% 100%;
                display: block;
                margin:0 auto 0.28rem;

            }
            p{
                width:100%;
                text-align: center;
                font-size: 0.28rem;
                color: $color-white;
                padding-bottom: 0.4rem;
                color: #333;
            }

        }
        .inputBox{
            width:5.9rem;
            margin:0 auto 0.48rem;
            color: $color-white;
            font-size: 0.28rem;
            .iptPhone {
                width:100%;
                height:0.88rem;
                line-height: 0.88rem;
                text-indent: 2em;
                margin:0 0 0.3rem;
                background: $color-white;
                color: $color-blank;
                border-radius: 0.08rem;
                font-size: 0.28rem;
            }
            .verifyBox{
                width:100%;
                /*height:0.88rem;*/
                margin-bottom: 0.4rem;
                .iptVerify{
                    display: inline-block;
                    width:3.52rem;
                    height:0.88rem;
                    text-indent: 2em;
                    margin-right: 0.2rem;
                    border-radius: 0.08rem;
                    background: $color-white;
                    color: $color-blank;
                    font-size: 0.28rem;
                }
                .getVerifyBtn{
                    width:2.08rem;
                    height:0.88rem;
                    display: inline-block;
                    text-align: center;
                    background: $color-green;
                    border-radius: 0.08rem;
                    line-height: 0.88rem;

                }
            }
            .loginBtn{
                width:100%;
                height:0.88rem;
                color: $color-white;
                border-radius: 0.08rem;
                line-height: 0.88rem;
                text-align: center;
                background: $color-green;
                margin-top:0.4rem;

            }

        }

    }
    .helpBtn{
        font-size: 0.28rem;
        text-decoration: underline;
        width:50%;
        margin:0 auto;
        text-align: center;
        a{
            color: $color-green;
        }
    }

</style>
<script>
  import {Toast} from 'mint-ui';
  import $ from 'jquery';
  export default {
    mounted () {
      // this.getUser()
//      window.location.replace('/#/index')
      let u = navigator.userAgent;
      let isAnd = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      this.isAndroid=isAnd
    },
    data () {
      return {
        telNum: '',
        vcode: '',
        disabled: 0,
        countDown: '获取验证码', //
        isAndroid:false// 是否是安卓
      }
    },
    methods: {
      getUser () {
        this.$http.get('/api/salesystem/is_login').then((res) => {
          if (res.data.errcode === 200) {
          }
        }, (res) => {
          console.log('error')
        })
      },
      call(){ // 判断是否是安卓。是安卓的话调用
        window&&window.JSInterface&&window.JSInterface.Tel("4008796969");
      },
      getAuth () { // 获取验证码
        if (!this.validatemobile(this.telNum)) return
        console.log(this.disabled);
        if (this.disabled == 1) return
        this.disabled = 1
        console.log(this.disabled);
//        let btnText = $('#auth_btn').text()
        let timeouts = 60
        let selfThis = this
        let interval = setInterval(function () {
          timeouts--
//          $('#auth_btn').html('<i style="margin-right:0.7rem">' + timeouts + 's</i>')
          selfThis.countDown = timeouts+'s'
          if (timeouts <= 0) {
//            $('#auth_btn').text(btnText)
            selfThis.countDown = '获取验证码'
            clearInterval(interval)
            selfThis.disabled = 0
          }
        }, 1000)
//        this.show = true
        this.$http.post('/api/sms/get_sms_code', {
          phone_number: this.telNum
        }, {emulateJSON: true}).then(function (res) {
//          this.show = false
          console.log(res.data.status)
          if (res.data.status === 0) {
//            selfThis.disabled = 0
          } else {
            //$('#auth_btn').text(btnText)
            clearInterval(interval)
            selfThis.disabled = 0
            Toast('验证码获取失败!')
          }
        }, function (res) {
          //$('#auth_btn').text(btnText)
          clearInterval(interval)
          selfThis.disabled = 0
          Toast('验证码获取失败!')
        })
      },
      queryInfo () {
        if (this.telNum.length !== 11 || this.vcode.length !== 6) {
          Toast('请输入正确的手机号及验证码')
          return
        }
//        if (this.disabled === 1) return
//        this.disabled = 1
//        this.show = true
        this.$http.post('/api/sms/bind/phone_number', {
          phone_number: this.telNum, code: this.vcode
        }, {emulateJSON: true}).then(function (res) {
//          this.show = false
          console.log(res.data.status)
          if (res.data.status === 0) {
            this.$router.replace({name: 'index'})
            //window.location.replace('/flowbank/index.html#/index')
          } else {
            Toast('验证失败！')
          }
        }, function () {
          Toast('验证失败！')
        })
      },
      validatemobile (mobile) {
        if (this.telNum.length === 0) {
          Toast('请输入手机号码!')
          return false
        }
        if (this.telNum.length !== 11) {
          Toast('请输入有效的手机号码!')
          return false
        }
        let myreg = /^((13[4-9])|(147)|(15[0-2,7-9])|(178)|(18[2-4,7-8]))+\d{8}$/
        let myreg1 = /^((13[0-2])|(145)|(15[5-6])|(17[5-6])|(18[5-6]))+\d{8}$/
        let myreg2 = /^((133)|(149)|(153)|(17[3,7])|(18[0-1,9]))+\d{8}$/
        let myreg3 = /^(17[0-1])+\d{8}$/
        if (!myreg.test(mobile) && !myreg1.test(mobile) && !myreg2.test(mobile) && !myreg3.test(mobile)) {
          Toast('请输入有效的手机号码!')
          return false
        }
        return true
      }
    }
  }
</script>


