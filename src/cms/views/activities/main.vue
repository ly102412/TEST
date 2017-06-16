<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            活动编辑
          </div>
          <div class="card-block">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="首页" name="1"></el-tab-pane>
              <el-tab-pane label="活动奖品" name="2"></el-tab-pane>
              <el-tab-pane label="我的奖品" name="3"></el-tab-pane>
              <el-tab-pane label="奖品详情" name="4"></el-tab-pane>
              <el-tab-pane label="中奖页面" name="5"></el-tab-pane>
              <el-tab-pane label="没中奖页" name="6"></el-tab-pane>
            </el-tabs>
            <!-- <input type="button" name="" value="prev" @click="tabPrev">
            <input type="button" name="" value="next" @click="tabNext"> -->
            <input type="text" name="" value="" v-model="item">
            <div class="row">
              <div class="col-md-5">
                <div class="device">
                  <div class="device-content">
                    <iframe ref="iframe" src="../../../static/2.html" width="320" height="560" @load="load"></iframe>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                {{item}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Turnplate from '../components/pages/turnplate'
  export default {
    data() {
      return {
        activeName: '1',
        item: '张三'
      }
    },
    watch: {
      'item': function(){
        this.load()
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      },
      tabPrev () {
        let tabLength = $('.el-tabs__item').length
        if(this.activeName <= tabLength){
          this.activeName = (parseInt(this.activeName) - 1) + ''
          if(this.activeName < '1'){
            this.activeName = tabLength + ''
          }
        }
      },
      tabNext () {
        let tabLength = $('.el-tabs__item').length
        if(this.activeName < tabLength){
          this.activeName = (parseInt(this.activeName) + 1) + ''
        } else {
          this.activeName = '1'
        }
      },
      load (item) {
        console.log(this.$refs)
        const app = this.$refs.iframe.contentWindow.app
        if (app && app.setContent){
          app.setContent(this.item)
        } else {
          window._item = this.item
        }
      }
    },
    components: {
      Turnplate
    }
  }
</script>

<style lang="less" scoped>
@media screen and (min-width: 768px){
  .device.device-fixed {
      position: fixed;
      right: auto;
  }
}

.device{
  position: relative;
  top: 50px;
  display: block;
  width: 395px;
  height: 813px;
  font-family: "Helvetica Neue", sans-serif;
  margin-bottom: 100px;
  background-image: url(../../static/img/device-sprite.png);
  background-size: 300%;
  background-repeat: no-repeat;
  background-position: 0 0;
  -webkit-transition: background-image 0.1s linear;
  transition: background-image 0.1s linear;

  .device-content {
      position: absolute;
      top: 117px;
      left: 37px;
      width: 321px;
      height: 569px;
      overflow: hidden;
      font-size: 0.85rem;
      line-height: 1.05rem;
      background: #eeeeee;
  }
}
</style>
