<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-6 col-lg-4">
        <div class="card card-inverse card-primary">
          <div class="card-block pb-0">
            <h4 class="mb-0">{{full_money}}元</h4>
            <p>账户总余额</p>
          </div>
        </div>
      </div><!--/.col-->

      <div class="col-sm-6 col-lg-4">
        <div class="card card-inverse card-info">
          <div class="card-block pb-0">
            <h4 class="mb-0">{{money}}元</h4>
            <p>可用余额</p>
          </div>
        </div>
      </div><!--/.col-->

      <div class="col-sm-6 col-lg-4">
        <div class="card card-inverse card-danger">
          <div class="card-block pb-0">
            <div class="btn-group float-right">
            </div>
            <h4 class="mb-0">{{freeze_money}}元</h4>
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
            <div class="h5 text-primary mb-0 mt-2"><router-link :to="{path:'/bussiness/balanceInfo'}">查看锁定余额</router-link></div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">金额用于活动消耗活动结束后，剩余金额释放</div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4"><div class="card"><div class="card-block p-3 clearfix"><i class="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left"></i> <div class="h5 text-warning mb-0 mt-2">账户资金剩余{{businessInfo.money_expire_days}}</div> <div class="text-muted text-uppercase font-weight-bold font-xs">{{businessInfo.money_expire_date}}&nbsp;到期</div></div></div></div>
    </div>
    <div class="card">
      <div class="card-block">
        <div class="row">
          <div class="col-sm-5">
            <h4 class="card-title mb-0">活动详情</h4>
          </div><!--/.col-->
        </div><!--/.row-->

      </div>
      <!-- <div class="card-footer">
        <ul>
          <li>
            <div class="text-muted">微信</div>
            <strong>{{parseInt((businessInfo.wx_user_today / businessInfo.wx_user_sum)*100)}} %</strong>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar bg-success" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </li>
          <li class="hidden-sm-down">
            <div class="text-muted">APP</div>
            <strong>{{parseInt((businessInfo.app_user_today / businessInfo.app_user_sum)*100)}} %</strong>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </li>
        </ul>
      </div> -->
    </div>
    <div class="row">
      <div class="col-sm-6 col-lg-6">
        <div class="social-box wechat">
          <i class="fa fa-wechat"></i>
          <ul>
            <li>
              <strong>{{businessInfo.wx_user_today}}</strong>
              <span>今日活动参与人数</span>
            </li>
            <li>
              <strong>{{businessInfo.wx_user_sum}}</strong>
              <span>活动参与总人数</span>
            </li>
          </ul>
        </div><!--/.social-box-->
      </div><!--/.col-->

      <div class="col-sm-6 col-lg-6">
        <div class="social-box twitter">
          <i class="fa fa-android"></i>
          <ul>
            <li>
              <strong>{{businessInfo.app_user_today}}</strong>
              <span>今日活动参与人数</span>
            </li>
            <li>
              <strong>{{businessInfo.app_user_sum}}</strong>
              <span>活动参与总人数</span>
            </li>
          </ul>
        </div><!--/.social-box-->
      </div><!--/.col-->

      <!--/.col-->
    </div>
  </div>
</template>

<script>
import { getBussinessInfo } from '../api/api'
import NProgress from 'nprogress'
export default {
  data () {
    return {
      businessInfo: {},
      freeze_money:'',
      money:'',
      full_money:''
    }
  },
  mounted () {
    this.getBussiness()
  },
  methods: {
    // 获取商家信息
    getBussiness () {
      let params = {}
      NProgress.start()
      getBussinessInfo(params).then((res) => {
        NProgress.done()
        if(res.status === 0){
          console.log(res.data)
          this.businessInfo = res.data
          this.freeze_money = Number(res.data.freeze_money).toFixed(2)
          this.money = res.data.money.toFixed(2)
          this.full_money = (Number(this.freeze_money) + Number(this.money)).toFixed(2)
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
