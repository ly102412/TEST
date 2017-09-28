<template>
    <div>
        <div class="mycoupon" :class="{toggle:active}">
            <div class="font">
                <div class="price clearfix">
                    <div class="type">
                        全国
                    </div>
                    <div class="coupon_money">
                        {{item.package_size |filter_pkg}}
                    </div>
                    <div class="flow">
                        <p class="flow_title">
                            {{item.coupon_name}}
                        </p>
                        <p class="flow_time">
                            获取时间：{{item.create_time}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="back">
                <div class="price">
                    <div class="price_top clearfix">
                        <div class="used_time">
                            {{item|filter_ordertime}}
                        </div>
                        <div class="status paying">
                            {{item|filter_orderstatus}}
                            <i></i>
                        </div>
                    </div>
                    <div class="price_bottom clearfix">
                        <div class="tel">
                            充值号码：{{item.phone_number}}
                        </div>
                        <div class="coupon_info">
                            -{{item.package_size |filter_pkg}}流量券
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    props: ['item','active']
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../assets/css/common";
    .mycoupon {
        width: 7rem;
        height: 1.78rem;
        position: relative;
        margin-top: 0.16rem;
        overflow: hidden;
    }
    .font{
        width: 7rem;
        height: 1.78rem;
        position: absolute;
        transition: transform 0.4s;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        transform: rotateY( 0deg);
        .price {
            width: 100%;
            height: 100%;
            background: url(../assets/images/bg-usedcoupon-font-info.png) no-repeat;
            background-size: 100% 100%;
            color: $color-boder;
            .type {
                left: 0.26rem;
                top: 0.33rem;
                padding: 0rem 0.1rem;
                height: 0.22rem;
                font-size: 0.2rem;
                border: 1px solid $color-boder;
                border-radius: 0.24rem;
                line-height: 0.24rem;
                transform: scale(0.8);
                position: absolute;
            }
            .coupon_money {
                float: left;
                width: 1.5rem;
                height: 1.6rem;
                margin-top: 0.65rem;
                margin-left: 0.2rem;
                text-align: center;
                font-size: 0.50rem;
                font-weight: bold;
                span{
                    font-size: 0.36rem;
                    font-weight: normal;
                }
            }
            .flow {
                position: absolute;
                width: 3.6rem;
                float: left;
                margin-left: 2.4rem;
                margin-top: 0.48rem;
                .flow_title{
                    font-size: 0.28rem;
                    color: $color-boder;
                }
                .flow_time{
                    font-size:0.22rem ;
                    color: $color-boder;
                    margin-top: 0.1rem;
                }
            }
        }
    }
    .back{
        width: 7rem;
        height: 1.78rem;
        position: absolute;
        transition: transform 0.8s;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        transform: rotateY( -180deg);
        .price{
            width: 100%;
            height: 100%;
            background: url(../assets/images/bg-usedcoupon-back-info.png) no-repeat;
            background-size: 100% 100%;
            color: $color-blank;
            font-size: 0.28rem;
            .price_top{
                line-height: 0.8rem;
                margin-left:0.4rem;
                margin-right: 0.34rem;
                .used_time{
                    float: left;
                }
                .status{
                    float: right;
                    i{
                        width:0.32rem;
                        height: 0.32rem;
                        display: block;
                        background: url("../assets/images/icon-usedcoupon-back.png") no-repeat;
                        background-size: 100% 100%;
                        float: right;
                        margin-left: 0.1rem;
                        margin-top: 0.2rem;
                    }
                    &.paying{
                        color:#f39e2f;
                    }
                }
            }
            .price_bottom{
                line-height: 1rem;
                margin-left:0.4rem;
                margin-right: 0.3rem;
                .tel{
                    float: left;
                }
                .coupon_info{
                    float: right;
                }

            }
        }
    }

    .toggle{
        .font {
            transform: rotateY( 180deg);
        }
        .back {
            transform: rotateY( 0deg);
        }
    }




</style>

