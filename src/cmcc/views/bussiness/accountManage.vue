<template lang="html">
  <div class="animated fadeIn">
    <div class="alert alert-info">
			<div class="text-muted text-uppercase font-weight-bold font-xs">账户资金用于营销活动中用户获奖赠送流量扣除，活动进行时，用户获奖将按照 流量价格 扣除对应余额。流量有两种形式，一种是流量币（可随意切割大小），存放在用户流量银行内，可以累加；一种为流量包，两种大小100M、500M，不可拆分，用户需一次性使用（用户端以流量券形式存在）。</div>
		</div>
    <div class="row">
      <div class="col-sm-6 col-lg-4">
        <div class="card card-inverse card-primary">
          <div class="card-block pb-0">
            <h4 class="mb-0">{{businessInfo.freeze_money + businessInfo.money}}元</h4>
            <p>账户总余额</p>
          </div>
        </div>
      </div><!--/.col-->

      <div class="col-sm-6 col-lg-4">
        <div class="card card-inverse card-info">
          <div class="card-block pb-0">
            <h4 class="mb-0">{{businessInfo.money}}元</h4>
            <p>可用余额</p>
          </div>
        </div>
      </div><!--/.col-->

      <div class="col-sm-6 col-lg-4">
        <div class="card card-inverse card-danger">
          <div class="card-block pb-0">
            <div class="btn-group float-right">
            </div>
            <h4 class="mb-0">{{businessInfo.freeze_money}}元</h4>
            <p>锁定余额
              <el-tooltip placement="top">
                <div slot="content">金额用于活动消耗<br/>活动结束后，剩余金额释放</div>
                <i class="fa fa-question-circle"></i>
              </el-tooltip>
            </p>
          </div>
        </div>
      </div><!--/.col-->

    </div>
    <div class="row">
      <div class="col-12 col-lg-8">
        <div class="card">
          <div class="card-block p-3 clearfix">
            <i class="fa fa-laptop bg-primary p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-primary mb-0 mt-2"><router-link :to="{path:'balanceInfo'}">查看锁定余额</router-link></div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">金额用于活动消耗活动结束后，剩余金额释放</div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4"><div class="card"><div class="card-block p-3 clearfix"><i class="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left"></i> <div class="h5 text-warning mb-0 mt-2">账户资金{{businessInfo.money_expire_days}}天</div> <div class="text-muted text-uppercase font-weight-bold font-xs">{{businessInfo.money_expire_date}}&nbsp;到期</div></div></div></div>
    </div>
    <div class="row">
      <div class="col-sm-6 col-md-6">
        <div class="card">
          <div class="card-block">
            <div class="h1 text-muted text-right mb-4">
              <i class="icon-basket-loaded"></i>
            </div>
            <div class="h4 mb-0">{{businessInfo.total_purchase_money}}元</div>
            <small class="text-muted text-uppercase font-weight-bold">累计采购资金总额</small>
            <div class="progress mt-3 mb-0">
              <router-link class="btn btn-success btn-lg btn-block" :to="{path:'accountPurchaseRecord'}" >查看资金采购记录</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6">
        <div class="card">
          <div class="card-block">
            <div class="h1 text-muted text-right mb-4">
              <i class="icon-pie-chart"></i>
            </div>
            <div class="h4 mb-0">{{businessInfo.total_use_money}}元</div>
            <small class="text-muted text-uppercase font-weight-bold">账户消耗资金总额</small>
            <div class="progress mt-3 mb-0">
              <router-link class="btn btn-success btn-lg btn-block" :to="{path:'accountConsumeRecord'}" >查看资金消耗记录</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getBussinessInfo
} from '../../api/api'
import NProgress from 'nprogress'
export default {
  data() {
    return {
      businessInfo: {}
    }
  },
  mounted() {
    this.getBussiness()
  },
  methods: {
    // 获取商家信息
    getBussiness() {
      let params = {}
      NProgress.start()
      getBussinessInfo(params).then((res) => {
        NProgress.done()
        if (res.status === 0) {
          console.log(res.data)
          this.businessInfo = res.data
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
