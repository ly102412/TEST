<template lang="html">
  <div class="animated fadeIn">
     <div class="row">
      <div class="col-sm-12 col-lg-12">
        <div class="card">
          <div class="card-header"><strong>商户ID&秘钥</strong>
          </div>
          <div class="card-block">
            <form action="" method="post" class="form-horizontal">
              <div class="form-group row">
                <div class="col-md-3">
                    <b>商户ID（business_id）：</b>
                </div>
                <div class="col-md-9">
                {{SecretData.business_id}}
                </div>

              </div>
              <div class="form-group row">
                <span class="col-md-3">
                <b>秘钥（secret_key）：</b>
                </span>
                <input class="col-md-9" type="text" readonly="readonly" v-model="SecretKey">
              </div>
              <el-button type="primary" @click="open">重置秘钥</el-button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-lg-12">
        <div class="card">
          <div class="card-header"><strong>1、介绍</strong>
          </div>
          <div class="card-block">
            <form action="" method="post" class="form-horizontal">
              <div class="form-group row">
                <div class="col-md-12" style="text-indent: 2em">
                  口粮营销活动是以手机流量为切入点、帮助合作方达到推广运营等市场需求的营销工具。主要形式有大转盘、摇一摇、刮刮卡、砸金蛋、领红包等。

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
          <div class="card-header"><strong>2、活动流程图</strong>
          </div>
          <div class="card-block">
            <form action="" method="post" class="form-horizontal">
              <div class="form-group row">

                <div class="col-md-12">
                    <img :src='activeFlow' width="100%">
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
          <div class="card-header"><strong>3、技术对接说明</strong>
          </div>
          <div class="card-block">
            <form action="" method="post" class="form-horizontal">
              <div class="form-group row">
                <div class="col-md-12" style="text-indent: 2em">
                    活动页面全部基H5开发。活动前期的资格判定由合作方自己负责，口粮不涉及具体业务，营销页面及流量充值由口粮负责，页面之间跳转采用<b>http/https</b>协议<b>get</b>传参请求方式。因为涉及俩个平台之间的数据通信，为了安全跳转时需要进行身份合法性认证，认证方式采用MD5签名验证的方式。
                </div>
              </div>
              <div class="form-group row">
                 <div class="col-md-12">
                    请求参数：
                 </div>
             </div>
              <div class="form-group row">
                <div class="col-md-12">
                    <table class="table table-bordered table-hover">
                          <thead>
                              <tr>
                                 <th>参数名称</th>
                                 <th>参考值</th>
                                 <th>必须</th>
                                 <th>参数说明</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>activity_code</td>
                                 <td>7293a51e-ac2c-41bc-9489-22073455b0c8</td>
                                 <td>Y</td>
                                 <td>活动code</td>
                              </tr>
                              <tr>
                                 <td>business_id</td>
                                 <td>10000001</td>
                                 <td>Y</td>
                                 <td>商户ID</td>
                              </tr>
                              <tr>
                                 <td>phone_number</td>
                                 <td>18810395607</td>
                                 <td>N</td>
                                 <td>用户手机号码</td>
                              </tr>
                              <tr>
                                 <td>uuid</td>
                                 <td>18810395607</td>
                                 <td>Y</td>
                                 <td>用户唯一标识</td>
                              </tr>
                              <tr>
                                 <td>timestamp</td>
                                 <td>1487827759145</td>
                                 <td>Y</td>
                                 <td>时间戳。定义为从格林威治时间1970年01月01日00时00分00秒（北京时间1970年01月01日08时00分00秒）起至现在的总毫秒数</td>
                              </tr>
                               <tr>
                                 <td>sign</td>
                                 <td>85b22037e44b7e401eafbf643c779f2e</td>
                                 <td>Y</td>
                                 <td>签名MD5值</td>
                              </tr>
                           </tbody>
                        </table>

                    </div>
              </div>
              <div class="form-group row">
                <label for="hf-email" class="col-md-9 form-control-label">完整跳转路径样例：<b style="color: red;">（请求参数需转换成base64放到data里）</b></label>
                <div class="col-md-12" style="word-wrap: break-word;
word-break: normal;">
                    <b>活动入口：</b><br/>
                    https://m.ruwe.cn/api/app/user/auth?data= YWN0aXZpdHlfY29kZT03MjkzYTUxZS1hYzJjLTQxYmMtOTQ4OS0yMjA3MzQ1NWIwYzgmYnVzaW5lc3NfaWQ9MTAwMDAwMDEmcGhvbmVfbnVtYmVyPTE4ODEwMzk1NjA3JnRpbWVzdGFtcD0xNTA1NDYyMzkxNDk1JnV1aWQ9MTg4MTAzOTU2MDcmc2lnbj04NWIyMjAzN2U0NGI3ZTQwMWVhZmJmNjQzYzc3OWYyZQ==
                    <br/>
                     <b>流量银行入口：<b style="color: red;">(参数不需要 activity_code)</b></b><br/>
                    https://m.ruwe.cn/api/app/user/auth/tobank?data= YWN0aXZpdHlfY29kZT03MjkzYTUxZS1hYzJjLTQxYmMtOTQ4OS0yMjA3MzQ1NWIwYzgmYnVzaW5lc3NfaWQ9MTAwMDAwMDEmcGhvbmVfbnVtYmVyPTE4ODEwMzk1NjA3JnRpbWVzdGFtcD0xNTA1NDYyMzkxNDk1JnV1aWQ9MTg4MTAzOTU2MDcmc2lnbj04NWIyMjAzN2U0NGI3ZTQwMWVhZmJmNjQzYzc3OWYyZQ==
                    </br>
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
          <div class="card-header"><strong>4、签名&验签方式</strong>
          </div>
          <div class="card-block">
            <form action="" method="post" class="form-horizontal">
              <div class="form-group row">
                 <div class="col-md-12">
                    <img :src='parameter' width="100%">
                 </div>
              </div>
              <div class="form-group row">
                <div class="col-md-12" style="text-indent: 2em">
                   注：<b>secret_key</b>由口粮提供。
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
          <div class="card-header"><strong>附件：测试数据</strong>
          </div>
          <div class="card-block">
            <form action="" method="post" class="form-horizontal">
              <div class="form-group row">
                 <div class="col-md-12">
                    <b>secret_key：1199bd4aea685f080a07652cb87ea488</b>
                 </div>
              </div>
              <div class="form-group row">
                 <div class="col-md-12" style="word-wrap: break-word;
word-break: normal;">
                    <b>明文：{{express}}</b>
                 </div>
              </div>
              <div class="form-group row">
                 <div class="col-md-12">
                    <b>签名：85b22037e44b7e401eafbf643c779f2e</b>
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
import {getSecretKey,resetSecretKey} from '../../api/api'
import NProgress from 'nprogress'
export default {
  data () {
    return {
        SecretData: {},
        SecretKey:'',
        activeFlow:require('../../static/img/merchant/flow-chart.jpg'),
        parameter:require('../../static/img/merchant/parameter.jpg'),
        express:'1199bd4aea685f080a07652cb87ea488&activity_code=7293a51e-ac2c-41bc-9489-22073455b0c8&business_id=10000001&phone_number=18810395607&timestamp=1487827759145&uuid=' +
        '18810395607&1199bd4aea685f080a07652cb87ea488'
    }
  },
  methods: {
      getSecretKey(){
          let params = {}
          NProgress.start()
          getSecretKey().then((res) => {
            console.log(res)
            NProgress.done()
            if(res.status == 0){
                this.SecretData = res.data
                this.SecretKey  = res.data.secret_key

            }
          })
     },
      resetSecretKey(){
          let params = {}
          NProgress.start()
          resetSecretKey().then((res) => {
              console.log(res)
              NProgress.done()
              if(res.status == 0){
                  this.SecretKey = res.data
              }
          })
      },
      open() {
          this.$confirm('此操作将重置秘钥，是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
          }).then(() => {
              this.resetSecretKey()
              this.$message({
                  type: 'success',
                  message: '重置成功！'
              });
          }).catch(() => {
              this.$message({
                  type: 'info',
                  message: '已取消重置！'
              });
          });
      }
  },
  mounted () {
    this.getSecretKey()
  }
}
</script>

<style lang="css" scoped>
    .table,.table thead tr th{
        text-align: center;
    }
    .el-button{
        margin-top: 15px!important;
    }
</style>
