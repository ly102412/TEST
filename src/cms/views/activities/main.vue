<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            活动编辑
          </div>
          <div class="card-block">
            <el-tabs v-model="activity.main_tab" @tab-click="handleClick">
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
                    <div class="device-title">{{activity.base_setting.activity_name}}</div>
                    <iframe ref="iframe" frameborder="0" scrolling="no" style="width:100%;height:100%;" src="../../../static/template/turnplate/index.html" width="320" height="560" @load="load"></iframe>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <el-tabs type="border-card">
                  <el-tab-pane>
                    <span slot="label"><i class="el-icon-setting"></i> 基础设置</span>
                    <el-form :model="activity.base_setting" :rules="base_setting_rules" ref="activity.base_setting" label-width="120px">
                      <el-form-item label="活动名称" porp="activity_name" required>
                        <el-input v-model="activity.base_setting.activity_name"></el-input>
                      </el-form-item>
                      <el-form-item label="开始时间" required>
                        <el-col :span="12">
                          <el-form-item prop="begin_date">
                            <el-date-picker v-model="activity.base_setting.begin_date" type="datetime" placeholder="选择开始时间" format="yyyy-MM-dd hh:mm:ss" style="width:100%;">
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
                        <el-col :span="24">
                          <el-input placeholder="请输入内容" v-model="activity.base_setting.fictitious_join_num">
                            <template slot="prepend">在实际参与人数基础上增加</template>
                            <template slot="append">人(只展示不计入系统)</template>
                          </el-input>
                        </el-col>
                      </el-form-item>
                      <el-form-item label="参与人数限制" prop="is_join_num_limit">
                        <el-switch on-text="限制" off-text="不限" v-model="activity.base_setting.is_join_num_limit"></el-switch>
                      </el-form-item>
                      <el-form-item label="" v-if="activity.base_setting.is_join_num_limit">
                        <el-col :span="16">
                          <el-input placeholder="请输入内容" v-model="activity.base_setting.join_num">
                            <template slot="append">人参与</template>
                          </el-input>
                        </el-col>
                      </el-form-item>
                      <el-form-item label="活动说明" prop="activity_des">
                          <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 8}" v-model="activity.base_setting.activity_des"></el-input>
                      </el-form-item>
                    </el-form>
                  </el-tab-pane>
                  <el-tab-pane>
                    <span slot="label"><i class="el-icon-menu"></i> 派奖方式</span>
                    <el-form :model="activity.lottery_setting" :rules="lottery_setting_rules" ref="activity.lottery_setting" label-width="120px">
                      <el-form-item label="总抽奖机会" porp="activity.lottery_setting.is_total_lottery">
                        <el-col :span="6">
                          <el-radio label="0" v-model="activity.lottery_setting.is_total_lottery">不限</el-radio>
                          <el-radio label="1" v-model="activity.lottery_setting.is_total_lottery">限制</el-radio>
                        </el-col>
                        <el-col :span="12">
                          <el-input placeholder="请输入内容" v-model="activity.lottery_setting.total_lottery_time" v-if="activity.lottery_setting.is_total_lottery == 1">
                            <template slot="prepend">每人最多有</template>
                            <template slot="append">次抽奖机会</template>
                          </el-input>
                        </el-col>
                      </el-form-item>
                      <el-form-item label="每日抽奖机会">
                        <el-input placeholder="请输入内容" v-model="activity.lottery_setting.daily_lottery_time">
                          <template slot="prepend">每人每日有</template>
                          <template slot="append">次抽奖机会</template>
                        </el-input>
                      </el-form-item>
                      <el-form-item label="每人中奖次数">
                        <el-input placeholder="请输入内容" v-model="activity.lottery_setting.winning_time">
                          <template slot="prepend">每人组多可中奖</template>
                          <template slot="append">次</template>
                        </el-input>
                      </el-form-item>

                      <!-- <el-form-item label="好友助力" prop="is_join_num_limit">
                        <el-col :span="12">
                          <el-radio label="0" v-model="activity.lottery_setting.friend_booster">关闭</el-radio>
                          <el-radio label="1" v-model="activity.lottery_setting.friend_booster">分享奖励</el-radio>
                          <el-radio label="2" v-model="activity.lottery_setting.friend_booster">邀请奖励</el-radio>
                        </el-col>
                      </el-form-item>
                      <el-form-item label="" v-if="activity.lottery_setting.friend_booster == '1'">
                        <el-input placeholder="请输入内容" v-model="activity.lottery_setting.friend_sharing_time">
                          <template slot="prepend">分享给好友或朋友圈，当天将额外获得</template>
                          <template slot="append">次抽奖机会</template>
                        </el-input>
                        <el-col>
                          <div class="text-tips">
                            <p>分享奖励仅当日首次分享有效；</p>
                            <p>分享提示语仅在抽奖次数为零时提示，次数不为零时分享也会额外增加抽奖机会；</p>
                            <p>开启有被微信拉黑朋友圈仅自己可见的风险，请慎用！</p>
                          </div>
                        </el-col>
                      </el-form-item>
                      <el-form-item v-if="activity.lottery_setting.friend_booster == '2'">
                        <el-input placeholder="请输入内容" v-model="activity.lottery_setting.friend_Invitation_time">
                          <template slot="prepend">每成功邀请一位好友，当天将额外获得一次抽奖机会，每天最多获得</template>
                          <template slot="append">次</template>
                        </el-input>
                        <el-col>
                          <div class="text-tips">
                            <p>好友成功参与后才能获得奖励，邀请同一位好友无效；</p>
                            <p>分享提示语仅在抽奖次数为零时提示，次数不为零时分享也会额外增加抽奖机会；</p>
                            <p>开启有被微信拉黑朋友圈仅自己可见的风险，请慎用！</p>
                          </div>
                        </el-col>
                      </el-form-item> -->
                    </el-form>
                  </el-tab-pane>
                  <el-tab-pane>
                    <span slot="label"><i class="el-icon-star-on"></i> 奖项设置</span>
                    <el-tabs v-model="edit_awards_tabs_value" type="card" editable @edit="handleTabsEdit">
                      <el-tab-pane
                        v-for="(item, index) in activity.award_setting"
                        :label="item.award_level"
                        :name="item.name"
                      >
                      <el-form :rules="award_setting_rules" ref="activity.award_setting" label-width="120px">
                        <el-form-item label="奖品等级">
                          <el-input v-model="item.award_level" disabled></el-input>
                        </el-form-item>
                        <el-form-item label="奖品类型">
                          <el-radio label="0" v-model="item.award_type">流量</el-radio>
                          <el-radio label="1" v-model="item.award_type">流量券</el-radio>
                          <el-radio label="2" v-model="item.award_type">实物</el-radio>
                        </el-form-item>
                        <el-form-item label="奖品名称">
                          <el-input v-model="item.award_name"></el-input>
                        </el-form-item>
                        <el-form-item label="奖品数量">
                          <el-input v-model="item.award_num"></el-input>
                        </el-form-item>
                        <el-form-item label="中奖概率">
                          <el-input v-model="item.winning_rate">
                            <template slot="append">%</template>
                          </el-input>
                        </el-form-item>
                        <el-form-item label="有效期开始时间">
                          <el-date-picker v-model="item.limit_begin_time" type="datetime" placeholder="选择开始时间" style="width:100%;">
                         </el-date-picker>
                        </el-form-item>
                        <el-form-item label="有效期结束时间">
                          <el-date-picker v-model="item.limit_end_time" type="datetime" placeholder="选择结束时间" style="width:100%;">
                         </el-date-picker>
                        </el-form-item>
                      </el-form>
                      </el-tab-pane>
                    </el-tabs>
                  </el-tab-pane>
                  <el-tab-pane>
                    <span slot="label"><i class="el-icon-share"></i> 分享设置</span>
                    <el-form :model="activity.sharing_setting" :rules="sharing_setting_rules" ref="activity.sharing_setting" label-width="120px">
                      <el-form-item label="分享活动">
                        <el-radio label="0" v-model="activity.sharing_setting.is_allow_sharing">允许分享</el-radio>
                        <el-radio label="1" v-model="activity.sharing_setting.is_allow_sharing">禁止分享</el-radio>
                      </el-form-item>
                      <el-form-item label="微信分享图标" v-if="activity.sharing_setting.is_allow_sharing == '0'">
                        <el-radio label="0" v-model="activity.sharing_setting.is_wx_sharing_icon">默认</el-radio>
                        <el-radio label="1" v-model="activity.sharing_setting.is_wx_sharing_icon">自定义</el-radio>
                        <el-col v-if="activity.sharing_setting.is_wx_sharing_icon == '1'">
                          <el-upload
                            class="upload-demo"
                            drag
                            action="//jsonplaceholder.typicode.com/posts/"
                            mutiple>
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
                            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                          </el-upload>
                        </el-col>
                      </el-form-item>
                      <el-form-item label="微信分享内容" v-if="activity.sharing_setting.is_allow_sharing == '0'">
                        <el-radio label="0" v-model="activity.sharing_setting.is_wx_sharing_content">默认</el-radio>
                        <el-radio label="1" v-model="activity.sharing_setting.is_wx_sharing_content">自定义</el-radio>
                        <el-col>
                          <div class="text-tips">
                            <p>好友成功参与后才能获得奖励，邀请同一位好友无效；</p>
                            <p>分享提示语仅在抽奖次数为零时提示，次数不为零时分享也会额外增加抽奖机会；</p>
                            <p>开启有被微信拉黑朋友圈仅自己可见的风险，请慎用！</p>
                          </div>
                        </el-col>
                        <el-col v-if="activity.sharing_setting.is_wx_sharing_content == '1'">
                          <div class="card card-accent-primary">
                            <div class="card-header">
                              分享内容(没有获奖的内容)
                            </div>
                            <div class="card-block">
                              <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 8}" v-model="activity.sharing_setting.wx_sharing_loser_content"></el-input>
                            </div>
                          </div>
                          <div class="card card-accent-warning">
                            <div class="card-header">
                              分享内容(获奖的玩家)
                            </div>
                            <div class="card-block">
                              <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 8}" v-model="activity.sharing_setting.wx_sharing_winner_content"></el-input>
                            </div>
                          </div>
                        </el-col>
                      </el-form-item>
                    </el-form>
                  </el-tab-pane>
                  <el-tab-pane>
                    <span slot="label"><i class="el-icon-more"></i> 高级设置</span>
                    <el-form :model="activity.advanced_setting" :rules="advanced_setting_rules" ref="activity.advanced_setting" label-width="120px">
                      <el-tabs v-model="advanced_tab" @tab-click="handleClick">
                        <el-tab-pane label="企业信息" name="1">
                          <el-form-item label="主办单位">
                            <el-input v-model="activity.advanced_setting.enterprise_setting.organizers"></el-input>
                          </el-form-item>
                          <el-form-item label="链接地址">
                            <el-input v-model="activity.advanced_setting.enterprise_setting.website_url"></el-input>
                          </el-form-item>
                          <el-form-item label="企业Logo">
                            <el-radio label="0" v-model="activity.advanced_setting.enterprise_setting.is_showing_logo">隐藏</el-radio>
                            <el-radio label="1" v-model="activity.advanced_setting.enterprise_setting.is_showing_logo">显示</el-radio>
                            <el-col v-if="activity.advanced_setting.enterprise_setting.is_showing_logo == '1'">
                              <el-upload
                                class="upload-demo"
                                drag
                                action="//jsonplaceholder.typicode.com/posts/"
                                mutiple>
                                <i class="el-icon-upload"></i>
                                <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
                                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                              </el-upload>
                            </el-col>
                          </el-form-item>
                          <el-form-item label="页面加载图片">
                            <el-radio label="0" v-model="activity.advanced_setting.enterprise_setting.is_loading_img">隐藏</el-radio>
                            <el-radio label="1" v-model="activity.advanced_setting.enterprise_setting.is_loading_img">自定义</el-radio>
                            <el-col v-if="activity.advanced_setting.enterprise_setting.is_loading_img == '1'">
                              <el-upload
                                class="upload-demo"
                                drag
                                action="//jsonplaceholder.typicode.com/posts/"
                                mutiple>
                                <i class="el-icon-upload"></i>
                                <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
                                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                              </el-upload>
                            </el-col>
                          </el-form-item>
                          <el-form-item label="功能按钮">
                            <el-radio label="0" v-model="activity.advanced_setting.enterprise_setting.is_showing_function_button">隐藏</el-radio>
                            <el-radio label="1" v-model="activity.advanced_setting.enterprise_setting.is_showing_function_button">页面跳转</el-radio>
                            <el-radio label="2" v-model="activity.advanced_setting.enterprise_setting.is_showing_function_button">一键关注</el-radio>
                            <div class="card card-accent-primary" v-if="activity.advanced_setting.enterprise_setting.is_showing_function_button == '1'">
                              <div class="card-header">
                                页面跳转
                              </div>
                              <div class="card-block">
                                <el-form-item label="按钮名称">
                                  <el-col :span="12">
                                    <el-input v-model="activity.advanced_setting.enterprise_setting.button_link_text"></el-input>
                                  </el-col>
                                </el-form-item>
                                <el-form-item label="按钮链接">
                                  <el-col :span="12">
                                    <el-input v-model="activity.advanced_setting.enterprise_setting.button_link_url"></el-input>
                                  </el-col>
                                </el-form-item>
                              </div>
                            </div>
                            <div class="card card-accent-primary" v-if="activity.advanced_setting.enterprise_setting.is_showing_function_button == '2'">
                              <div class="card-header">
                                一键关注
                              </div>
                              <div class="card-block">
                                <el-form-item label="按钮名称">
                                  <el-col :span="12">
                                    <el-input v-model="activity.advanced_setting.enterprise_setting.button_flow_text"></el-input>
                                  </el-col>
                                </el-form-item>
                                <el-form-item label="微信公众号">
                                  <el-col :span="12">
                                    <el-upload
                                      class="upload-demo"
                                      drag
                                      action="//jsonplaceholder.typicode.com/posts/"
                                      mutiple>
                                      <i class="el-icon-upload"></i>
                                      <div class="el-upload__text">将二维码图片拖到此处，或<em>点击上传</em></div>
                                      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                                    </el-upload>
                                  </el-col>
                                </el-form-item>
                              </div>
                            </div>
                          </el-form-item>
                        </el-tab-pane>
                        <el-tab-pane label="游戏设置" name="2">
                          <el-form-item label="广告">
                            <el-col>
                              <el-radio label="0" v-model="activity.advanced_setting.game_setting.is_showing_ad">显示</el-radio>
                              <el-radio label="1" v-model="activity.advanced_setting.game_setting.is_showing_ad">隐藏</el-radio>
                            </el-col>
                          </el-form-item>
                          <el-form-item label="轮播中奖信息">
                            <el-col>
                              <el-radio label="0" v-model="activity.advanced_setting.game_setting.is_play_award_info">关闭</el-radio>
                              <el-radio label="1" v-model="activity.advanced_setting.game_setting.is_play_award_info">开启</el-radio>
                            </el-col>
                          </el-form-item>
                        </el-tab-pane>
                      </el-tabs>
                    </el-form>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <input v-model="activity.award_setting" @change="setArr"/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        advanced_tab: '1',
        edit_awards_tabs_value: '1',
        tab_awards_name_list: ['奖项一','奖项二','奖项三','奖项四','奖项五','奖项六','奖项七','奖项八'],
        tabIndex: 1,
        activity: {
          // 基础设置
          main_tab: '1',                  // 当前导航栏状态
          base_setting: {
            activity_name: '大转盘活动',    // 活动名称
            begin_date: '',               // 活动开始时间
            end_date: '',                 // 活动结束时间
            is_join_num: false,           // 是否显示参与人数 boolean
            is_join_num_limit: false,     // 是否限制参与人数 boolean
            join_num: 0,                  // 限制参与人数量
            fictitious_join_num: 0,       // 虚拟参加人数
            activity_des: '获奖后凭兑奖码联系活动主办单位即可兑奖'              // 活动兑奖说明
          },
          // 派奖方式
          lottery_setting: {
            is_total_lottery: '0',        // 是否限制总抽奖机会 boolean
            total_lottery_time: 6,        // 总抽奖次数
            daily_lottery_time: 3,        // 每人每日抽奖次数
            winning_time: 1,              // 每人中奖次数
            // total_winning_rate: 10,       // 总中奖概率 百分比
            friend_booster: '0',            // 好友助力 0关闭 1分享奖励 2邀请奖励
            friend_sharing_time: 0,       // 分享活动可获得的抽奖次数
            friend_Invitation_time: 0     // 每成功邀请一位好友，当天将额外获得一次抽奖机会，每天最多获得n次
          },
          // 奖项设置
          award_setting: [
            {
              title: 'Tab 1',
              name: '1',
              content: 'Tab 1 content',
              award_id: 1,
              award_level: '奖项一',       // 奖品等级
              award_type: '0',            // 奖品类型 0流量 1流量券 2实物   活动发布后类型无法修改
              award_name: '100M流量',      // 奖品名称                    活动发布后名称无法修改
              award_num: 100,             // 奖品数量
              winning_rate: 10,           // 中奖概率
              limit_begin_time: '',       // 限制有效期开始时间
              limit_end_time: ''          // 限制有效期结束时间
            }
          ],
          // 分享设置
          sharing_setting: {
            is_allow_sharing: '0',       // 是否允许分享
            is_wx_sharing_icon: '0',        // 微信分享图标 0默认 1自定义上传
            wx_sharing_icon_url: '',      // 上传的微信图标url
            is_wx_sharing_content: '0',     // 微信分享内容 0默认 1自定义
            wx_sharing_loser_content: '​轻轻松松就能抽到大奖，积攒多年的人品终于有用了，你也赶紧来抽奖吧！！', // 没有获奖的玩家分享的内容
            wx_sharing_winner_content: '​我已经在活动中抽到了奖品，你也快来抽大奖吧！',// 获奖玩家分享的内容
          },
          // 高级设置
          advanced_setting: {
            enterprise_setting:{
              organizers: '',             // 主办单位
              website_url: '',            // 链接地址
              is_showing_logo: '0',     // 是否显示企业Logo
              logo_url: '',               // 企业logo
              is_loading_img: '0',          // 页面加载图片
              loading_img_url: '',        // 加载图片url
              is_showing_function_button: '0', //功能按钮  0隐藏 1页面跳转 2一键关注
              button_link_text: '企业官网',        // 点击按钮跳转链接地址
              button_link_url: '',        // 点击按钮跳转链接地址
              button_flow_text: ''        // 点击按钮一键关注
            },
            game_setting: {
              is_showing_ad: '0',           // 是否显示广告
              is_play_award_info: '0',     // 是否播放获奖信息
            }
          }
        },
        base_setting_rules: {
          activity_name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        },
        lottery_setting_rules: {
          activity_name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        },
        award_setting_rules: {
          activity_name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        },
        sharing_setting_rules: {
          activity_name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        },
        advanced_setting_rules: {
          activity_name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        }
      }
    },
    watch: {
      'activity' : {
        handler: function(){
          this.load()
        },
        deep: true
      }
    },
    // computed: {
    //     'activity.award_setting': function () {
    //         return activity.award_setting
    //     }
    // },
    methods: {
      handleClick(tab, event) {
      },
      setArr(){
        this.load()
      },
      // 切换选项卡tab
      // tabPrev () {
      //   let tabLength = $('.el-tabs__item').length
      //   if(this.activeName <= tabLength){
      //     this.activeName = (parseInt(this.activeName) - 1) + ''
      //     if(this.activeName < '1'){
      //       this.activeName = tabLength + ''
      //     }
      //   }
      // },
      // tabNext () {
      //   let tabLength = $('.el-tabs__item').length
      //   if(this.activeName < tabLength){
      //     this.activeName = (parseInt(this.activeName) + 1) + ''
      //   } else {
      //     this.activeName = '1'
      //   }
      // },
      // 重载 iframe 页面里的数据
      load (activity) {
        const app = this.$refs.iframe.contentWindow.app
        if (app && app.setContent){
          app.setContent(this.activity)
        } else {
          window._activity = this.activity
        }
      },
      // 修改奖品tabs
      handleTabsEdit(targetName, action) {
        let tabs = this.activity.award_setting
        let tab_length = this.activity.award_setting.length
        if (action === 'add') {
          let tab_name = ''
          let tab_targetName = ++this.tabIndex + ''
          for (let i = 0;i<tab_length;i++){
            tab_name = this.tab_awards_name_list[i+1]
          }
          if (tab_length < 8){
            this.activity.award_setting.push({
              name: tab_targetName,
              content: 'New Tab content',
              award_id: this.activity.award_setting.length + 1,
              award_level: tab_name,
              award_type: '0',
              award_name: '',
              award_num: 100,
              winning_rate: 10,
              limit_begin_time: '',
              limit_end_time: ''
            });
            this.edit_awards_tabs_value = tab_targetName
            this.activity.award_setting = this.activity.award_setting.filter(tab => true)
          }else{
            this.$notify({
              title: '提示',
              message: '最多可添加8个奖品',
              type: 'warning'
            });
          }
        }
        if (action === 'remove') {
          let activeName = this.edit_awards_tabs_value
          if(tab_length > 1){
            if (activeName === targetName) {
              tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                  let nextTab = tabs[index + 1] || tabs[index - 1]
                  if (nextTab) {
                    activeName = nextTab.name
                  }
                }
              })
            }

            this.edit_awards_tabs_value = activeName
            this.activity.award_setting = tabs.filter(tab => tab.name !== targetName)
          }else{
            this.$notify({
              title: '提示',
              message: '请最少保留1个奖品',
              type: 'warning'
            })
          }
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
  margin-left: 70px;
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

      .device-title {
        width: 321px;
        height: 64px;
        background-image:url('../../static/img/page-title.png');
        color: #fff;
        text-align: center;
        line-height: 84px;
        font-size: 22px;
        font-weight: bold
      }
  }
}
.text-tips {
  padding: 10px 0;
  color: #8492A6;
  p{
    padding:0;
    margin:0;
  }
}
</style>
