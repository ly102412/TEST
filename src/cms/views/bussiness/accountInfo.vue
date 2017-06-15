<template lang="html">
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-12 col-lg-12">
        <div class="card">
          <div class="card-header"><strong>商家信息</strong>
          </div>
          <div class="card-block">
            <form action="" method="post" class="form-horizontal">
              <div class="form-group row">
                <label for="hf-email" class="col-md-3 form-control-label">商户名</label>
                <div class="col-md-9">
                  {{accountInfo.business_name}}
                </div>
              </div>
              <div class="form-group row">
                <label for="hf-email" class="col-md-3 form-control-label">商户开通时间</label>
                <div class="col-md-9">
                  {{accountInfo.create_time}}
                </div>
              </div>
              <div class="form-group row">
                <label for="hf-email" class="col-md-3 form-control-label">公司地址</label>
                <div class="col-md-9">
                  {{accountInfo.addr}}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-lg-12">
        <div class="card">
          <div class="card-header"><strong>联系人信息</strong>
          </div>
          <div class="card-block">
            <form action="" method="post" class="form-horizontal">
              <div class="form-group row">
                <label for="hf-email" class="col-md-3 form-control-label">姓名</label>
                <div class="col-md-9">
                  {{accountInfo.contact_name}}
                </div>
              </div>
              <div class="form-group row">
                <label for="hf-email" class="col-md-3 form-control-label">电话</label>
                <div class="col-md-9">
                  {{accountInfo.phone_number}}
                </div>
              </div>
              <div class="form-group row">
                <label for="hf-email" class="col-md-3 form-control-label">邮箱</label>
                <div class="col-md-9">
                  {{accountInfo.email}}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-lg-12">
        <div class="card">
          <div class="card-header"><strong>客户经理信息</strong>
          </div>
          <div class="card-block">
            <form action="" method="post" class="form-horizontal">
              <div class="form-group row">
                <label for="hf-email" class="col-md-3 form-control-label">名称</label>
                <div class="col-md-9">
                  {{accountInfo.manager_name}}
                </div>
              </div>
              <div class="form-group row">
                <label for="hf-email" class="col-md-3 form-control-label">职位</label>
                <div class="col-md-9">
                  {{accountInfo.manager_position}}
                </div>
              </div>
              <div class="form-group row">
                <label for="hf-email" class="col-md-3 form-control-label">描述</label>
                <div class="col-md-9">
                  {{accountInfo.manager_desc}}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getAccountInfo} from '../../api/api'
import NProgress from 'nprogress'
export default {
  data () {
    return {
      accountInfo: {}
    }
  },
  methods: {
    getAccount(){
      let params = {}
      NProgress.start()
      getAccountInfo(params).then((res) => {
        console.log(res)
        NProgress.done()
        if(res.status === 0){
          this.accountInfo = res.data
        }
      })
    }
  },
  created () {
    this.getAccount()
  }
}
</script>

<style lang="css">
</style>
