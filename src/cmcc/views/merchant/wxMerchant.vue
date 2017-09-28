<template lang="html">
  <div class="animated fadeIn">
     <div class="row">
      <div class="col-sm-12 col-lg-12">
        <div class="card">
          <div class="card-header"><strong>1、入口</strong>
          </div>
          <div class="card-block">
            <form action="" method="post" class="form-horizontal">
              <div class="form-group row">
                <div class="col-md-12">
                    <img :src='wx_1' width="100%">
                </div>
                <div class="col-md-12  mt-4">
                   <b>注：选择左侧栏目中的"活动列表"，进入活动列表</b>
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
          <div class="card-header"><strong>2、二维码预览</strong>
          </div>
          <div class="card-block">
            <form action="" method="post" class="form-horizontal">
              <div class="form-group row">
                <div class="col-md-12">
                    <img :src='wx_2' width="100%">
                </div>
                <div class="col-md-12  mt-4">
                   <b>注：选择想要预览的活动，鼠标移入标注的位置，显示出活动的二维码，使用微信"扫一扫"，预览活动</b>
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
          <div class="card-header"><strong>3、复制链接</strong>
          </div>
          <div class="card-block">
            <form action="" method="post" class="form-horizontal">
              <div class="form-group row">
                <div class="col-md-12">
                    <img :src='wx_3' width="100%">
                </div>
                <div class="col-md-12  mt-4">
                   <b>注：选择要复制链接的活动，鼠标移入标注的位置，点击显示链接的弹出框，复制链接，将链接添加到微信公众号的入口中</b>
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
        wx_1:require('../../static/img/merchant/wx-1.jpg'),
        wx_2:require('../../static/img/merchant/wx-2.jpg'),
        wx_3:require('../../static/img/merchant/wx-3.jpg'),
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
