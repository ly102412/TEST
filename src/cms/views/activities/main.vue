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
              <!-- <el-tab-pane label="奖品详情" name="4"></el-tab-pane> -->
              <el-tab-pane label="中奖页面" name="4"></el-tab-pane>
              <el-tab-pane label="没中奖页" name="5"></el-tab-pane>
            </el-tabs>
            <!-- <input type="button" name="" value="prev" @click="tabPrev">
            <input type="button" name="" value="next" @click="tabNext"> -->
            <div class="row">
              <div class="col-md-5">
                <div class="device">
                  <div class="device-content">
                    <iframe ref="iframe" frameborder="0" scrolling="no" style="width:100%;height:100%;" src="../../../static/template/turnplate/index.html" width="320" height="560" @load="load"></iframe>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <el-tabs type="border-card">
                  <el-tab-pane>
                    <span slot="label"><i class="el-icon-setting"></i> 基础设置</span>
                    <el-form :model="activity.base_setting" :rules="base_settingRules" ref="activity.base_setting" label-width="100px">
                      <el-form-item label="活动名称" porp="activity_name" required>
                        <el-input v-model="activity.base_setting.activity_name"></el-input>
                      </el-form-item>
                      <el-form-item label="开始时间" required>
                        <el-col :span="12">
                          <el-form-item prop="begin_date">
                            <el-date-picker v-model="activity.base_setting.begin_date" type="datetime" placeholder="选择开始时间" style="width:100%;">
                           </el-date-picker>
                          </el-form-item>
                        </el-col>
                      </el-form-item>
                      <el-form-item label="结束时间" required>
                        <el-col :span="12">
                          <el-form-item prop="end_date">
                            <el-date-picker v-model="activity.base_setting.end_date" type="datetime" placeholder="选择结束时间" style="width:100%;">
                          </el-form-item>
                        </el-col>
                      </el-form-item>
                      <el-form-item label="参与人数" prop="is_join_num">
                        <el-switch on-text="隐藏" off-text="显示" v-model="activity.base_setting.is_join_num"></el-switch>
                      </el-form-item>
                      <el-form-item label="" v-if="activity.base_setting.is_join_num">
                        在实际参与人数基础上增加<el-input v-model="activity.base_setting.fictitious_join_num" style="width:50px"></el-input>人(只展示不计入系统)
                      </el-form-item>
                      <el-form-item label="参与人数限制" prop="is_join_num_limit">
                        <el-switch on-text="限制" off-text="不限" v-model="activity.base_setting.is_join_num_limit"></el-switch>
                      </el-form-item>
                      <el-form-item label="" v-if="activity.base_setting.is_join_num_limit">
                          <el-input v-model="activity.base_setting.join_num" style="width:50px"></el-input>人参与
                      </el-form-item>
                      <el-form-item label="活动说明" prop="activity_des">
                          <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 8}" v-model="activity.base_setting.activity_des"></el-input>
                      </el-form-item>
                    </el-form>
                  </el-tab-pane>
                  <el-tab-pane>
                    <span slot="label"><i class="el-icon-menu"></i> 派奖方式</span>
                    222
                  </el-tab-pane>
                  <el-tab-pane>
                    <span slot="label"><i class="el-icon-star-on"></i> 奖项设置</span>
                    333
                  </el-tab-pane>
                  <el-tab-pane>
                    <span slot="label"><i class="el-icon-share"></i> 分享设置</span>
                    444
                  </el-tab-pane>
                  <el-tab-pane>
                    <span slot="label"><i class="el-icon-more"></i> 高级设置</span>
                    555
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: '1',
        item: '张三',
        activity: {
          // 基础设置
          base_setting: {
            activity_name: '',            // 活动名称
            begin_date: '',               // 活动开始时间
            end_date: '',                 // 活动结束时间
            is_join_num: false,           // 是否显示参与人数 boolean
            is_join_num_limit: false,     // 是否限制参与人数 boolean
            join_num: 0,                  // 实际参与人数
            fictitious_join_num: 0,       // 虚拟参加人数
            activity_des: ''              // 活动兑奖说明
          },
          // 派奖方式
          lottery_setting: {
            is_total_lottery: false,      // 是否限制总抽奖机会 boolean
            total_lottery_time: 0,        // 总抽奖次数
            daily_lottery_time: 0,        // 每人每日抽奖次数
            winning_time: 0,              // 每人中奖次数
            // total_winning_rate: 10,       // 总中奖概率 百分比
            friend_booster: 0,            // 好友助力 0关闭 1分享奖励 2邀请奖励
            friend_sharing_time: 0,       // 分享活动可获得的抽奖次数
            friend_Invitation_time: 0     // 每成功邀请一位好友，当天将额外获得一次抽奖机会，每天最多获得n次
          },
          // 奖项设置
          award_setting: [
            {
              award_level: '一等奖',       // 奖品等级
              award_type: 0,              // 奖品类型 0流量 1流量券 2实物   活动发布后类型无法修改
              award_name: '100M流量',      // 奖品名称                    活动发布后名称无法修改
              award_num: 0,               // 奖品数量
              winning_rate: 0,            // 中奖概率
              limit_begin_time: '',       // 限制有效期开始时间
              limit_end_time: ''          // 限制有效期结束时间
            },
            {
              award_level: '一等奖',       // 奖品等级
              award_type: 0,              // 奖品类型 0流量 1流量券 2实物   活动发布后类型无法修改
              award_name: '100M流量',      // 奖品名称                    活动发布后名称无法修改
              award_num: 0,               // 奖品数量
              winning_rate: 0,            // 中奖概率
              limit_begin_time: '',       // 限制有效期开始时间
              limit_end_time: ''          // 限制有效期结束时间
            },
            {
              award_level: '一等奖',       // 奖品等级
              award_type: 0,              // 奖品类型 0流量 1流量券 2实物   活动发布后类型无法修改
              award_name: '100M流量',      // 奖品名称                    活动发布后名称无法修改
              award_num: 0,               // 奖品数量
              winning_rate: 0,            // 中奖概率
              limit_begin_time: '',       // 限制有效期开始时间
              limit_end_time: ''          // 限制有效期结束时间
            }
          ],
          // 分享设置
          sharing_setting: {
            is_allow_sharing: true,       // 是否允许分享
            is_wx_sharing_icon: 0,        // 微信分享图标 0默认 1自定义上传
            wx_sharing_icon_url: '',      // 上传的微信图标url
            is_wx_sharing_content: 0,     // 微信分享内容 0默认 1自定义
            wx_sharing_loser_content: '', // 没有获奖的玩家分享的内容
            wx_sharing_winner_content: '',// 获奖玩家分享的内容
          },
          // 高级设置
          advanced_setting: {
            enterprise_setting:{
              organizers: '',             // 主办单位
              website_url: '',            // 链接地址
              is_showing_logo: false,     // 是否显示企业Logo
              logo_url: '',               // 企业logo
              is_loading_img: 0,          // 页面加载图片
              loading_img_url: '',        // 加载图片url
              is_showing_function_button: 0, //功能按钮  0隐藏 1页面跳转 2一键关注
              button_text: '',            // 功能按钮名称
              button_link_text: ''        // 点击按钮跳转链接地址
            },
            game_setting: {
              is_showing_ad: 0,           // 是否显示广告
              play_award_info: false,     // 是否播放获奖信息
            }
          }
        },
        base_settingRules: {
          activity_name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        }
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
