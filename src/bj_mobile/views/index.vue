<template>
  <div class="wrap">
      <header class="header">
          <div class="msg_box" @click="goMessage">
              <div class="msg" :class="{'msg_active':isMessage}"></div>
              <p class="msg_text">消息</p>
          </div>
          <div class="content">
              <h5 class="my_flow">我的流量</h5>
              <p class="flow_num">{{score}}M</p>
              <router-link to="/detailedList" class="details">查看明细</router-link>
          </div>
          <div class="btn_box">
              <router-link :to="{ name: 'mycoupon', query: {phone_number:phone_number}}"class="my_coupon">
                  <div>
                      <i></i>
                      <p>我的流量券</p>
                  </div>
                  <span :class="{'coupon_active':isCoupon}" v-show="isCoupon">{{coupon_count}}</span>
              </router-link>
              <router-link :to="{ name: 'charge', query: {score:score ,phone_number:phone_number}}" class="extract_flow">
                  <div>
                      <i></i>
                      <p>提取流量</p>
                  </div>
              </router-link>
          </div>
      </header>
      <footer class="footer">
          <p>本系统由若为信息技术有限公司提供技术支持</p>
          <p>客服电话：<span>400-879-6969</span></p>
      </footer>
    <loading v-show="loading"></loading>
  </div>
</template>
<script>
    import loading from '../components/loading.vue'
    export default {
        mounted(){
            this.getUseInfo()
        },
        data (){
            return {
               isMessage:false,
               isCoupon:false,
               loading:false,
               score:'',
               coupon_count:'',
               phone_number:''
            }
        },
        components:{
            loading
        },
        methods:{
            goMessage(){
                this.$router.push('/message')
            },
            getUseInfo(){
               this.loading = true
               this.$http.get('/api/bank/user/info').then(function (res) {
                 this.loading = false
                 console.log('---------user/info---------')
                  if (res.data.status == 0) {
                     this.score = res.data.data.score
                     this.coupon_count = res.data.data.coupon_count
                     this.phone_number = res.data.data.phone_number
                     if(!this.phone_number){
                        this.$router.replace({name: 'login'})
                        return
                     }
                     if(this.coupon_count>0){
                         this.isCoupon = true
                         if(this.coupon_count>=100){
                            this.coupon_count = '...'
                         }
                     }else{
                         this.isCoupon = false
                     }
                     if(res.data.data.msg_count>0){
                        this.isMessage = true
                     }else{
                        this.isMessage = false
                     }
                  }
               }, function (res) {
                   this.loading = false
               })
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import '../assets/css/common';
  .wrap{
      width: 100%;
      position: relative;
      min-height: 10rem;
      left:0;
      top:0;
      .header{
          width:100%;
          height: 5.65rem;
          background: url(../assets/images/bg-index.jpg) no-repeat;
          background-size:100% 100%;
          .msg_box{
              width:0.79rem;
              text-align: center;
              float: right;
              margin-right: 0.58rem;
              margin-top: 0.44rem;
              .msg{
                  width:0.79rem;
                  height: 0.79rem;
                  background: url(../assets/images/icon-msg.png) no-repeat;
                  background-size:100% 100%;
              }
              .msg_active{
                  background: url(../assets/images/icon-msg-active.png) no-repeat;
                  background-size:100% 100%;
              }
              .msg_text{
                  font-size: 0.28rem;
                  color:$color-white ;
                  margin-top: 0.12rem;
              }
          }
          .content{
              width: 100%;
              height: 2.9rem;
              text-align: center;
              margin-top: 1.78rem;
              position: relative;
              overflow: hidden;
              .my_flow{
                  color:#f6f6f6;
                  font-size: 0.36rem;
              }
              .flow_num{
                  font-size: 1rem;
                  color: $color-white;
              }
              .details{
                  font-size: 0.32rem;
                  color: $color-font-see;
                  position: absolute;
                  transform: translatex(-50%);
                  left:50%;
                  margin-top: 0.5rem;
              }
          }
          .btn_box{
              width: 5.92rem;
              margin: 0.42rem auto 0;
              font-size: 0.36rem;
              line-height: 1.18rem;
              .my_coupon{
                  width:100%;
                  height:1.18rem;
                  border-radius:1.18rem;
                  display: block;
                  color: $color-green;
                  background-color: $color-white;
                  position: relative;
                  box-shadow:0px 0px 8px 1px $color-green;
                  div{
                      height: 100%;
                      margin-left: 1.88rem;
                      i{
                          width:0.37rem;
                          height:0.27rem;
                          background: url(../assets/images/icon-coupon.png) no-repeat;
                          background-size: 100% 100%;
                          display: block;
                          float: left;
                          margin-top: 0.43rem;
                      }
                      p{
                         margin-left: 0.26rem;
                          float: left;
                      }

                  }
                  .coupon_active{
                      display: block;
                      width: 0.42rem;
                      height: 0.42rem;
                      border:0.06rem solid $color-white;
                      background-color: $color-red;
                      text-align: center;
                      line-height: 0.42rem;
                      font-size:0.24rem;
                      color: $color-white;
                      position: absolute;
                      top: -0.21rem;
                      left:4.64rem;
                      border-radius: 50%;
                  }
              }
              .extract_flow{
                  width:100%;
                  height:1.18rem;
                  border-radius:1.18rem;
                  display: block;
                  margin-top: 0.5rem;
                  color: $color-white;
                  background-color: $color-green;
                  div{
                      height: 100%;
                      margin-left: 1.88rem;
                      i{
                          width:0.37rem;
                          height:0.27rem;
                          background: url(../assets/images/icon-charge.png) no-repeat;
                          background-size: 100% 100%;
                          display: block;
                          float:left;
                          margin-top: 0.43rem;
                      }
                      p{
                          margin-left: 0.26rem;
                          float:left;
                      }
                  }
              }
          }
      }
      .footer{
          width: 100%;
          position: absolute;
          left:0;
          bottom:0.2rem;
          text-align: center;
          color: $color-blank;
          font-size: 0.24rem;
          p{
              line-height: 0.42rem;
              span{
                  color: $color-green;
                  text-decoration: underline;
              }
          }

      }

  }
</style>
