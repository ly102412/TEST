<template lang="html">
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="card">
          <div class="card-header">
            活动模板
          </div>
          <div class="card-block">
            <div class="row">
              <div class="col-sm-6 col-lg-3">
                <div class="active-box">
                  <div class="pic">
                    <span class="status">New</span>
                    <img src="../../static/img/turnplates.jpg" alt="">
                  </div>
                  <div class="bottom">
                    <strong>超级大转盘</strong>
                    <span><el-button type="primary" size="mini" icon="plus"
                      @click="goToCreate(1)">创建活动</el-button></span>
                  </div>
                </div>
              </div><!--/.col-->
              <div class="col-sm-6 col-lg-3">
                <div class="active-box">
                  <div class="pic">
                    <span class="status">敬请期待</span>
                    <img src="../../static/img/guaguaka.jpg" alt="">
                  </div>
                  <div class="bottom">
                    <strong>幸运刮刮卡</strong>
                    <span><el-button type="primary" size="mini" icon="plus"
                      @click="goToCreate(2)">创建活动</el-button></span>
                  </div>
                </div>
              </div><!--/.col-->
              <div class="col-sm-6 col-lg-3">
                <div class="active-box">
                  <div class="pic">
                    <span class="status">正在开发</span>
                    <img src="../../static/img/eggs.jpg" alt="">
                  </div>
                  <div class="bottom">
                    <strong>砸金蛋</strong>
                    <span><el-button type="primary" size="mini" icon="plus"
                      @click="goToCreate(3)">创建活动</el-button></span>
                  </div>
                </div>
              </div><!--/.col-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    // 跳转编辑活动
    goToCreate (type) {
      this.$router.push({ path:'main',query:{code:'0',act: 'create',activity_type: type}})
    },
  }
}
</script>

<style lang="less">
.active-box{
  border: 1px solid #e7e7e7;
  background: #fff;
  padding: 5px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  .pic{
    width: 100%;
    overflow: hidden;
    img{
      width: 100%;
      transition: ease-in all .3s;
    }

    .status{
      display: block;
      position: absolute;
      width:100px;
      height:24px;
      line-height: 24px;
      color: #fff;
      text-align: center;
      transform: rotate(45deg);
      background: #39b2d5;
      right: -20px;
      top: 20px;
      z-index: 1
    }
  }
  .bottom{
    height: 30px;
    line-height: 30px;
    margin-top: 6px;

    span{
      float: right;
    }
  }
  &:hover{
    box-shadow: 0 0 8px rgba(0,0,0,0.25);
    img{
      transform: scale(1.2);
    }
  }
}
</style>
