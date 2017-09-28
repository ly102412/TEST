<template>
    <div>
        <div class="mycoupon price clearfix">
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
</template>
<script>
  export default {
    props: ['item']
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../assets/css/common";
    .mycoupon {
        width: 6.4rem;
        height: 1.78rem;
        position: relative;
        margin-top: 0.16rem;
        overflow: hidden;
    }
    .price {
        background: url(../assets/images/bg-coupon-info.png) no-repeat;
        background-size: 100% 100%;
        color: $color-green;
        .type {
            left: 0.26rem;
            top: 0.33rem;
            padding: 0rem 0.1rem;
            height: 0.22rem;
            font-size: 0.2rem;
            border: 1px solid $color-green;
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
            margin-left: 2.1rem;
            margin-top: 0.48rem;
            .flow_title{
                font-size: 0.28rem;
                color: $color-blank;
            }
            .flow_time{
                font-size:0.22rem ;
                color: $color-boder;
                margin-top: 0.1rem;
            }
        }
    }




</style>

