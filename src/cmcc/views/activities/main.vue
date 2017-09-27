<template>
    <div>
        <el-dialog title="上传图片" v-model="is_dialog_show" size="tiny">
            <el-upload
                    class="avatar-uploader"
                    action="/api/mmt/img/upload"
                    :show-file-list="false"
                    :on-success="handleUploadScucess"
                    :on-error="handleUploadFaild"
                    :disabled="isDisable"
            >
                <img v-if="activity.upload_image_url" :src="activity.upload_image_url" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="is_dialog_show = false">取 消</el-button> -->
        <el-button type="primary" @click="resetImg">恢复默认</el-button>
      </span>
        </el-dialog>
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            活动编辑
                            <span class="float-right">
                <el-button v-if="this.act == 'create'" type="success" icon="check"
                           @click.native.prevent="saveActivity('activity.base_setting')"
                           :loading="loading">立即创建</el-button>
                <el-button v-if="this.act == 'edit'" type="info" icon="setting" @click.native.prevent="updateActivity()"
                           :loading="loading">保存活动</el-button>
              </span>
                        </div>
                        <div class="card-block">
                            <el-tabs v-model="activity.main_tab" @tab-click="handleClick">
                                <el-tab-pane v-if="activity_type !=2" v-for="item of activity.tab_setting.tab"
                                             :label="item.lable" :name="item.name"></el-tab-pane>
                                <el-tab-pane v-if="activity_type ==2" v-for="item of activity.tab_setting.tab_1"
                                             :label="item.lable" :name="item.name"></el-tab-pane>
                            </el-tabs>
                            <!-- <input type="button" name="" value="prev" @click="tabPrev">
                            <input type="button" name="" value="next" @click="tabNext"> -->
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="device">
                                        <div class="device-content">
                                            <div class="device-title">{{activity.base_setting.activity_name}}</div>
                                            <iframe ref="iframe" frameborder="0" scrolling="no"
                                                    style="width:100%;height:100%;" :src="srcTemp" width="320"
                                                    height="560" @load="load"></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <el-tabs type="border-card" id="activity_setting" v-model="activity.activity_tab">
                                        <el-tab-pane>
                                            <span slot="label"><i class="el-icon-setting"></i> 基础设置</span>
                                            <el-form :model="activity.base_setting" :rules="base_setting_rules"
                                                     ref="activity.base_setting" label-width="120px">
                                                <el-form-item label="活动名称" prop="activity_name" required>
                                                    <el-input v-model="activity.base_setting.activity_name"></el-input>
                                                </el-form-item>
                                                <el-form-item label="开始时间" required prop="begin_date" required>
                                                    <el-col :span="14">
                                                        <el-form-item>
                                                            <el-date-picker
                                                                            v-model="activity.base_setting.begin_date"
                                                                            type="datetime"
                                                                            placeholder="选择开始时间"
                                                                            style="width:100%"
                                                                            :editable="false"
                                                                    >
                                                            </el-date-picker>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-form-item>
                                                <el-form-item label="结束时间" required prop="end_date" required>
                                                    <el-col :span="14">
                                                        <el-form-item>
                                                            <el-date-picker v-model="activity.base_setting.end_date"
                                                                            type="datetime"
                                                                            placeholder="选择结束时间"
                                                                            style="width:100%;"
                                                                            :editable="false">
                                                            </el-date-picker>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-form-item>
                                                <el-form-item label="虚拟参与人数 （不计入统计）" data-source="fictitious_join_num">
                                                    <el-switch on-text="隐藏" off-text="显示"
                                                               v-model="activity.base_setting.is_join_num"

                                                    ></el-switch>
                                                </el-form-item>
                                                <el-form-item data-source="fictitious_join_num" label=""
                                                              v-if="activity.base_setting.is_join_num">
                                                    <el-col :span="24">
                                                        <el-input placeholder="请输入参与人数"
                                                                  v-model="activity.base_setting.fictitious_join_num">
                                                            <template slot="prepend">在实际参与人数基础上增加</template>
                                                            <template slot="append">人</template>
                                                        </el-input>
                                                    </el-col>
                                                </el-form-item>
                                                <el-form-item label="参与人数限制">
                                                    <el-switch on-text="限制" off-text="不限"
                                                               v-model="activity.base_setting.is_join_num_limit"></el-switch>
                                                </el-form-item>
                                                <el-form-item label="" v-if="activity.base_setting.is_join_num_limit">
                                                    <el-col :span="16">
                                                        <el-input placeholder="请输入内容"
                                                                  v-model="activity.base_setting.join_num">
                                                            <template slot="append">人参与</template>
                                                        </el-input>
                                                    </el-col>
                                                </el-form-item>
                                                <el-form-item label="活动说明" data-source="activity_des">
                                                    <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 8}"
                                                              v-model="activity.base_setting.activity_des"></el-input>
                                                </el-form-item>
                                            </el-form>
                                        </el-tab-pane>
                                        <el-tab-pane>
                                            <span slot="label"><i class="el-icon-menu"></i> 派奖方式</span>
                                            <el-form :model="activity.lottery_setting" :rules="lottery_setting_rules"
                                                     ref="activity.lottery_setting" label-width="120px">
                                                <el-form-item label="总抽奖机会" data-source="total_lottery_time">
                                                    <el-radio label="0"
                                                              v-model="activity.lottery_setting.is_total_lottery"
                                                              :disabled="isDisable"
                                                    >不限
                                                    </el-radio>
                                                    <el-radio label="1"
                                                              v-model="activity.lottery_setting.is_total_lottery"
                                                              :disabled="isDisable"
                                                    >限制
                                                    </el-radio>
                                                </el-form-item>
                                                <el-form-item v-if="activity.lottery_setting.is_total_lottery == 1">
                                                    <el-input placeholder="请输入内容"
                                                              v-model="activity.lottery_setting.total_lottery_time"
                                                              :disabled="isDisable"
                                                    >
                                                        <template slot="prepend">每人最多有</template>
                                                        <template slot="append">次抽奖机会</template>
                                                    </el-input>
                                                </el-form-item>
                                                <el-form-item label="每日抽奖机会" data-source="daily_lottery_time"
                                                              prop="daily_lottery_time" required>
                                                    <el-input placeholder="请输入内容"
                                                              v-model="activity.lottery_setting.daily_lottery_time"
                                                              :disabled="isDisable"
                                                        >
                                                        <template slot="prepend">每人每日有</template>
                                                        <template slot="append">次抽奖机会</template>
                                                    </el-input>
                                                </el-form-item>
                                                <el-form-item label="每人中奖次数" prop="winning_time" required>
                                                    <el-input placeholder="请输入内容"
                                                              v-model="activity.lottery_setting.winning_time"
                                                              :disabled="isDisable"
                                                    >
                                                        <template slot="prepend">每人最多可中奖</template>
                                                        <template slot="append">次</template>
                                                    </el-input>
                                                </el-form-item>

                                                <!-- <el-form-item label="好友助力" >
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
                                            <el-tabs v-model="edit_awards_tabs_value" type="card"
                                                     @edit="handleTabsEdit" :editable="!isDisable">
                                                <el-tab-pane
                                                        v-for="(item, index) in activity.award_setting"
                                                        :label="item.award_level"
                                                        :name="item.name"
                                                >
                                                    <el-form ref="activity.award_setting"
                                                             label-width="120px" style="padding:0 10px">
                                                        <el-form-item label="奖品类型" v-if="item.award_value !== '-1'">
                                                            <el-radio-group v-model="item.award_type"
                                                                            @change="clearAwardValue(item)"
                                                                            :disabled="isDisable"
                                                                >
                                                                <el-radio-button label="1">流量</el-radio-button>
                                                                <el-radio-button label="2">流量券</el-radio-button>
                                                            </el-radio-group>
                                                        </el-form-item>
                                                        <el-form-item label="奖品名称" data-source="award_setting"
                                                                      data-type="2">
                                                            <el-input v-model="item.award_name" :disabled="isDisable"></el-input>
                                                        </el-form-item>
                                                        <el-form-item label="奖品大小"
                                                                      v-if="item.award_type == '1' && item.award_value !== '-1'">
                                                            <el-input v-model="item.award_value" type="number" :disabled="isDisable">
                                                                <template slot="append">M</template>
                                                            </el-input>
                                                        </el-form-item>
                                                        <el-form-item label="奖品大小"
                                                                      v-if="item.award_type == '2' && item.award_value !== '-1'">
                                                            <el-select v-model="item.award_value" placeholder="请选择" :disabled="isDisable">
                                                                <el-option
                                                                        v-for="list in award_list_value"
                                                                        :label="list.label"
                                                                        :value="list.value">
                                                                </el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                        <el-form-item label="奖品数量" v-if="item.award_type !=='0'">
                                                            <el-input v-model.number="item.award_num" type="number" :disabled="isDisable"></el-input>
                                                        </el-form-item>
                                                        <el-form-item label="中奖概率">
                                                            <!-- <el-input v-model="item.winning_rate">
                                                              <template slot="append">%</template>
                                                            </el-input> -->
                                                            <el-slider
                                                                    v-model="item.winning_rate"
                                                                    :disabled="isDisable"
                                                                    show-input>
                                                            </el-slider>
                                                        </el-form-item>
                                                    </el-form>
                                                </el-tab-pane>
                                            </el-tabs>
                                            <div class="row">
                                                <div class="col-12 col-lg-12">
                                                    <div class="card">
                                                        <div class="card-block p-3 clearfix"><i
                                                                class="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left"></i>
                                                            <div class="h5 text-warning mb-0 mt-2">活动预计需要费用{{freeze_money}}元</div>
                                                            <div class="text-muted text-uppercase font-weight-bold font-xs">
                                                                账户可用余额为{{business_info.money}}元
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-tab-pane>
                                        <el-tab-pane>
                                            <span slot="label" ><i class="el-icon-share"></i> 分享设置</span>
                                            <el-form :model="activity.sharing_setting" :rules="sharing_setting_rules"
                                                     ref="activity.sharing_setting" label-width="120px">
                                                <!-- <el-form-item label="分享活动">
                                                    <el-radio label="0"
                                                              v-model="activity.sharing_setting.is_allow_sharing"
                                                              :disabled="isDisable"
                                                    >允许分享
                                                    </el-radio>
                                                    <el-radio label="1"
                                                              v-model="activity.sharing_setting.is_allow_sharing"
                                                              :disabled="isDisable"
                                                    >禁止分享
                                                    </el-radio>
                                                </el-form-item> -->
                                                <el-form-item label="微信分享图标"
                                                              v-if="activity.sharing_setting.is_allow_sharing == '0'">
                                                    <el-radio label="0"
                                                              v-model="activity.sharing_setting.is_wx_sharing_icon"
                                                              :disabled="isDisable"
                                                    >默认
                                                    </el-radio>
                                                    <el-radio label="1"
                                                              v-model="activity.sharing_setting.is_wx_sharing_icon"
                                                              :disabled="isDisable"
                                                    >自定义
                                                    </el-radio>
                                                    <el-col v-if="activity.sharing_setting.is_wx_sharing_icon == '1'">
                                                        <el-upload
                                                                class="avatar-uploader"
                                                                action="/api/mmt/img/upload"
                                                                :show-file-list="false"
                                                                :on-success="handleUploadWX"
                                                                :on-error="handleUploadFaild"
                                                                :disabled="isDisable"
                                                        >
                                                            <img v-if="activity.upload_image_url"
                                                                 :src="activity.upload_image_url" class="avatar">
                                                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                                        </el-upload>
                                                        <span slot="footer" class="dialog-footer">
                              <!-- <el-button @click="is_dialog_show = false">取 消</el-button> -->
                              <el-button type="primary" @click="resetImg">恢复默认</el-button>
                            </span>
                                                    </el-col>
                                                </el-form-item>
                                                <el-form-item label="微信分享内容"
                                                              v-if="activity.sharing_setting.is_allow_sharing == '0'">
                                                    <el-radio label="0"
                                                              v-model="activity.sharing_setting.is_wx_sharing_content"
                                                              :disabled="isDisable"
                                                    >默认
                                                    </el-radio>
                                                    <el-radio label="1"
                                                              v-model="activity.sharing_setting.is_wx_sharing_content"
                                                              :disabled="isDisable"
                                                    >自定义
                                                    </el-radio>
                                                    <el-col>
                                                        <div class="text-tips">
                                                            <p>好友成功参与后才能获得奖励，邀请同一位好友无效；</p>
                                                            <p>分享提示语仅在抽奖次数为零时提示，次数不为零时分享也会额外增加抽奖机会；</p>
                                                            <p>开启有被微信拉黑朋友圈仅自己可见的风险，请慎用！</p>
                                                        </div>
                                                    </el-col>
                                                    <el-col v-if="activity.sharing_setting.is_wx_sharing_content == '1'">
                                                        <div class="card card-accent-warning">
                                                            <div class="card-header">
                                                                分享内容(获奖的玩家)
                                                            </div>
                                                            <div class="card-block">
                                                                <el-input type="textarea"
                                                                          :autosize="{ minRows: 4, maxRows: 8}"
                                                                          v-model="activity.sharing_setting.wx_sharing_winner_content"
                                                                          :disabled="isDisable"
                                                                ></el-input>
                                                            </div>
                                                        </div>
                                                    </el-col>
                                                </el-form-item>
                                            </el-form>
                                        </el-tab-pane>
                                        <el-tab-pane>
                                            <span slot="label"><i class="el-icon-more"></i> 高级设置</span>
                                            <el-form :model="activity.advanced_setting" :rules="advanced_setting_rules"
                                                     ref="activity.advanced_setting" label-width="100px">
                                                <el-tabs v-model="advanced_tab" @tab-click="handleClick">
                                                    <el-tab-pane label="企业信息" name="1" style="padding:10px">
                                                        <el-form-item label="主办单位" data-source="enterprise_setting">
                                                            <el-input
                                                                    v-model="activity.advanced_setting.enterprise_setting.organizers"
                                                                    :disabled="isDisable"
                                                            ></el-input>
                                                        </el-form-item>
                                                        <el-form-item label="链接地址">
                                                            <el-input
                                                                    v-model="activity.advanced_setting.enterprise_setting.website_url"
                                                                    :disabled="isDisable"
                                                            ></el-input>
                                                        </el-form-item>
                                                        <!-- <el-form-item label="企业Logo">
                                                            <el-radio label="0"
                                                                      v-model="activity.advanced_setting.enterprise_setting.is_showing_logo"
                                                                      :disabled="isDisable"
                                                            >
                                                                隐藏
                                                            </el-radio>
                                                            <el-radio label="1"
                                                                      v-model="activity.advanced_setting.enterprise_setting.is_showing_logo"
                                                                      :disabled="isDisable"
                                                            >
                                                                显示
                                                            </el-radio>
                                                            <el-col v-if="activity.advanced_setting.enterprise_setting.is_showing_logo == '1'">
                                                                <el-upload
                                                                        class="avatar-uploader"
                                                                        action="/api/mmt/img/upload"
                                                                        :show-file-list="false"
                                                                        :on-success="handleUploadScucess"
                                                                        :on-error="handleUploadFaild"
                                                                        :disabled="isDisable"
                                                                >
                                                                    <img v-if="activity.upload_image_url"
                                                                         :src="activity.upload_image_url"
                                                                         class="avatar">
                                                                    <i v-else
                                                                       class="el-icon-plus avatar-uploader-icon"></i>
                                                                </el-upload>
                                                            </el-col>
                                                        </el-form-item>
                                                        <el-form-item label="页面加载图片">
                                                            <el-radio label="0"
                                                                      v-model="activity.advanced_setting.enterprise_setting.is_loading_img"
                                                                      :disabled="isDisable"
                                                            >
                                                                隐藏
                                                            </el-radio>
                                                            <el-radio label="1"
                                                                      v-model="activity.advanced_setting.enterprise_setting.is_loading_img"
                                                                      :disabled="isDisable"
                                                            >
                                                                自定义
                                                            </el-radio>
                                                            <el-col v-if="activity.advanced_setting.enterprise_setting.is_loading_img == '1'">
                                                                <el-upload
                                                                        class="avatar-uploader"
                                                                        action="/api/mmt/img/upload"
                                                                        :show-file-list="false"
                                                                        :on-success="handleUploadScucess"
                                                                        :on-error="handleUploadFaild"
                                                                        :disabled="isDisable"
                                                                >
                                                                    <img v-if="activity.upload_image_url"
                                                                         :src="activity.upload_image_url"
                                                                         class="avatar">
                                                                    <i v-else
                                                                       class="el-icon-plus avatar-uploader-icon"></i>
                                                                </el-upload>
                                                            </el-col>
                                                        </el-form-item>
                                                        <el-form-item label="功能按钮">
                                                            <el-radio label="0"
                                                                      v-model="activity.advanced_setting.enterprise_setting.is_showing_function_button"
                                                                      :disabled="isDisable"
                                                            >隐藏
                                                            </el-radio>
                                                            <el-radio label="1"
                                                                      v-model="activity.advanced_setting.enterprise_setting.is_showing_function_button"
                                                                      :disabled="isDisable"
                                                            >
                                                                页面跳转
                                                            </el-radio>
                                                            <el-radio label="2"
                                                                      v-model="activity.advanced_setting.enterprise_setting.is_showing_function_button"
                                                                      :disabled="isDisable"
                                                            >
                                                                一键关注
                                                            </el-radio>
                                                            <div class="card card-accent-primary"
                                                                 v-if="activity.advanced_setting.enterprise_setting.is_showing_function_button == '1'">
                                                                <div class="card-header">
                                                                    页面跳转
                                                                </div>
                                                                <div class="card-block">
                                                                    <el-form-item label="按钮名称"
                                                                                  data-source="button_link_text">
                                                                        <el-col :span="12">
                                                                            <el-input
                                                                                    v-model="activity.advanced_setting.enterprise_setting.button_link_text"
                                                                                    :disabled="isDisable"
                                                                            ></el-input>
                                                                        </el-col>
                                                                    </el-form-item>
                                                                    <el-form-item label="按钮链接">
                                                                        <el-col :span="12">
                                                                            <el-input
                                                                                    v-model="activity.advanced_setting.enterprise_setting.button_link_url"
                                                                                    :disabled="isDisable"
                                                                            ></el-input>
                                                                        </el-col>
                                                                    </el-form-item>
                                                                </div>
                                                            </div>
                                                            <div class="card card-accent-primary"
                                                                 v-if="activity.advanced_setting.enterprise_setting.is_showing_function_button == '2'">
                                                                <div class="card-header">
                                                                    一键关注
                                                                </div>
                                                                <div class="card-block">
                                                                    <el-form-item label="按钮名称">
                                                                        <el-col :span="12">
                                                                            <el-input
                                                                                    v-model="activity.advanced_setting.enterprise_setting.button_flow_text"
                                                                                    :disabled="isDisable"
                                                                            ></el-input>
                                                                        </el-col>
                                                                    </el-form-item>
                                                                    <el-form-item label="微信公众号">
                                                                        <el-col :span="12">
                                                                            <el-upload
                                                                                    class="upload-demo"
                                                                                    drag
                                                                                    action="//jsonplaceholder.typicode.com/posts/"
                                                                                    mutiple
                                                                                    :disabled="isDisable"
                                                                            >
                                                                                <i class="el-icon-upload"></i>
                                                                                <div class="el-upload__text">
                                                                                    将二维码图片拖到此处，或<em>点击上传</em></div>
                                                                                <div class="el-upload__tip" slot="tip">
                                                                                    只能上传jpg/png文件，且不超过500KB
                                                                                </div>
                                                                            </el-upload>
                                                                        </el-col>
                                                                    </el-form-item>
                                                                </div>
                                                            </div>
                                                        </el-form-item> -->
                                                    </el-tab-pane>
                                                    <el-tab-pane label="游戏设置" name="2" disabled>
                                                        <el-form-item label="广告">
                                                            <el-col>
                                                                <el-radio label="0"
                                                                          v-model="activity.advanced_setting.game_setting.is_showing_ad"
                                                                          :disabled="isDisable"
                                                                >
                                                                    显示
                                                                </el-radio>
                                                                <el-radio label="1"
                                                                          v-model="activity.advanced_setting.game_setting.is_showing_ad"
                                                                          :disabled="isDisable"
                                                                >
                                                                    隐藏
                                                                </el-radio>
                                                            </el-col>
                                                        </el-form-item>
                                                        <el-form-item label="轮播中奖信息">
                                                            <el-col>
                                                                <el-radio label="0"
                                                                          v-model="activity.advanced_setting.game_setting.is_play_award_info"
                                                                          :disabled="isDisable"
                                                                >
                                                                    关闭
                                                                </el-radio>
                                                                <el-radio label="1"
                                                                          v-model="activity.advanced_setting.game_setting.is_play_award_info"
                                                                          :disabled="isDisable"
                                                                >
                                                                    开启
                                                                </el-radio>
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
        </div>
    </div>

</template>
<script>
    import $ from 'jquery'
    import {createActivity, getActivityById, editActivity, getBussinessInfo, getFlowPrice} from '../../api/api'
    import NProgress from 'nprogress'
    import moment from 'moment'

    export default {
        data() {
            // 验证总每人每日抽奖次数
            var validateDailyLotteryTime = (rule, value, callback) => {
                if (this.activity.lottery_setting.is_total_lottery == 1) {
                    if (value === '' || value == 0) {
                        callback(new Error('请输入每日抽奖机会'))
                    } else if (value > this.activity.lottery_setting.total_lottery_time) {
                        callback(new Error('每日抽奖机会不能大于总抽奖机会'))
                    } else {
                        callback()
                    }
                }else if(this.activity.lottery_setting.is_total_lottery == 0){
                  if (value === '' || value == 0) {
                        callback(new Error('请输入每日抽奖机会'))
                    }
                }
            };
            // 验证每人总中奖次数
            var validateWinningTime = (rule, value, callback) => {
                if (this.activity.lottery_setting.is_total_lottery == 1) {
                    if (value === '' || value == 0) {
                        callback(new Error('请输入中奖次数'))
                    } else if (value > this.activity.lottery_setting.total_lottery_time) {
                        callback(new Error('每人中奖次数不能大于总抽奖机会'))
                    } else {
                        callback()
                    }
                }
            };
            return {
                isDisable:false,
                code: '',
                act: '',
                is_dialog_show: false,
                srcTemp: '',
                advanced_tab: '1',
                edit_awards_tabs_value: '1',
                tab_awards_name_list: ['奖项一', '奖项二', '奖项三', '奖项四', '奖项五', '奖项六', '奖项七', '奖项八'],
                tabIndex: 1,
                loading: false,
                business_info: {},
                flow_price_info: {},
                freeze_money: 0,    //消费金额
                award_list_value: [
                    {
                        value: '100',
                        label: '100M流量包'
                    },
                    {
                        value: '500',
                        label: '500M流量包'
                    }
                ],
                activity: {

                    // 基础设置
                    main_tab: '1',                  // 当前导航栏状态
                    upload_image_url: '',           // 上传图片地址
                    upload_image_name: '',          // 需要上传的图片名称
                    activity_tab: '0',              // 活动设置导航状态
                    tab_setting: {
                        tab: [
                            {lable: '首页', name: '1'},
                            {lable: '活动奖品', name: '2'},
                            {lable: '中奖页面', name: '4'},
                            {lable: '没中奖页', name: '5'}
                        ],
                        tab_1: [
                            {lable: '首页', name: '1'},
                            {lable: '抽奖', name: '2'},
                            {lable: '活动奖品', name: '3'},
                            {lable: '中奖页面', name: '4'},
                            {lable: '没中奖页', name: '5'}
                        ]
                    },
                    activity_img_upload: {          // 活动图片素材上传
                        main_bg: require('../../../../static/template/common/images/active-bg.jpg'),                      // 活动背景图
                        rules_icon: require('../../../../static/template/common/images/ruleImg_yellow.png'),                   // 活动图标
                        turnplate_bg: require('../../../../static/template/common/images/turnplate-bg.png'),                 // 大转盘背景
                        lottery_success: require('../../../../static/template/common/images/gift.png'),              // 抽奖成功图片
                        lottery_faild: require('../../../../static/template/common/images/faiImg.png')                 // 抽奖失败图片
                    },
                    base_setting: {
                        activity_name: '',    // 活动名称
                        activity_type: '1',           // 活动类型
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
                        total_lottery_time: 0,        // 总抽奖次数
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
                            award_level: '谢谢参与',       // 奖品等级
                            award_type: '0',            // 奖品类型 0谢谢参与 1流量 2流量券   活动发布后类型无法修改
                            award_name: '谢谢参与',      // 奖品名称                    活动发布后名称无法修改
                            award_num: 0,             // 奖品数量
                            award_value: '-1',           // 奖品值
                            winning_rate: 0,           // 中奖概率
                        }
                    ],
                    // 分享设置
                    sharing_setting: {
                        is_allow_sharing: '0',          // 是否允许分享
                        is_wx_sharing_icon: '0',        // 微信分享图标 0默认 1自定义上传
                        wx_sharing_icon_url: require('../../../../static/template/common/images/turnplate-bg.png'),      // 上传的微信图标urlturnplates.jpg
                        is_wx_sharing_content: '0',     // 微信分享内容 0默认 1自定义
                        wx_sharing_loser_content: '​轻轻松松就能抽到大奖，积攒多年的人品终于有用了，你也赶紧来抽奖吧！！', // 没有获奖的玩家分享的内容
                        wx_sharing_winner_content: '​我已经在活动中抽到了奖品，你也快来抽大奖吧！',// 获奖玩家分享的内容
                    },
                    // 高级设置
                    advanced_setting: {
                        enterprise_setting: {
                            organizers: '',                 // 主办单位
                            website_url: 'javascript:;',    // 链接地址
                            is_showing_logo: '0',           // 是否显示企业Logo
                            logo_url: '',                   // 企业logo
                            is_loading_img: '0',            // 页面加载图片
                            loading_img_url: '',            // 加载图片url
                            is_showing_function_button: '0', //功能按钮  0隐藏 1页面跳转 2一键关注
                            button_link_text: '企业官网', // 点击按钮跳转链接地址
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
                        {required: true, message: '请输入活动名称', trigger: 'blur'}
                    ],
                    begin_date: [
                        { type: 'date', required: true, message: '请选择开始日期', trigger: 'change' }
                    ],
                    end_date: [
                        {type: 'date', required: true, message: '请选择结束日期', trigger: 'change'},
                    ],
                },
                lottery_setting_rules: {
                    daily_lottery_time: [
                        {validator: validateDailyLotteryTime, required: true, trigger: 'blur'}
                    ],
                    winning_time: [
                        {validator: validateWinningTime, trigger: 'blur'}
                    ]
                },
                award_setting_rules: {},
                sharing_setting_rules: {},
                advanced_setting_rules: {}
            }
        },
        created() {
            this.code = this.$route.query.code
            this.act = this.$route.query.act
            this.activity_type = this.$route.query.activity_type
            this.activity.base_setting.activity_type = this.$route.query.activity_type
            this.setTemplate(this.activity_type)
            this.getBussiness()
            this.getPrice()
            if (this.act === 'edit') {
                this.getActivityInfo(this.code)

            }
        },
        watch: {
            'activity': {
                handler: function () {
                    this.load()
                },
                deep: true
            },
            'activity.award_setting': {
                handler: function () {
                    var freeze_money = 0;
                    console.log(typeof freeze_money)
                    let scores = 0;
                    let coupon_size_100 = 0;
                    let coupon_size_500 = 0;
                    for (let item of this.activity.award_setting) {
                        if (item.award_value <= 0) {
                            continue;
                        }
                        if (item.award_type == 1) {
                            scores += item.award_value * item.award_num;
                            freeze_money += Math.abs(Number(item.award_value) * item.award_num * this.flow_price_info.flow)
                        }
                        if (item.award_type == 2 && item.award_value == 100) {
                            coupon_size_100 += item.award_num;
                            freeze_money += Math.abs(item.award_num * this.flow_price_info.coupon_size_100)
                        }
                        if (item.award_type == 2 && item.award_value == 500) {
                            coupon_size_500 += item.award_num;
                            freeze_money += Math.abs(item.award_num * this.flow_price_info.coupon_size_500)
                        }

                    }
                    this.freeze_money = freeze_money.toFixed(2)
                    console.log(this.freeze_money)
                },
                deep: true
            },
            'activity.base_setting.fictitious_join_num': function () {
                this.activity.base_setting.fictitious_join_num = this.activity.base_setting.fictitious_join_num ? this.activity.base_setting.fictitious_join_num : 0
            },

        },
        methods: {
            // 设置活动模板
            setTemplate(type) {
                //alert(typeof type)
                if (type == '1') {
                    this.srcTemp = 'static/template/turnplate/index.html'
                } else if (type == '2') {
                    this.srcTemp = 'static/template/scratch/index.html'
                } else if (type == '3') {
                    this.srcTemp = 'static/template/eggs/index.html'
                }
            },
            // 获取商家信息
            getBussiness() {
                let params = {}
                NProgress.start()
                getBussinessInfo(params).then((res) => {
                    NProgress.done()
                    if (res.status === 0) {
                        this.business_info = res.data
                    }
                })
            },
            getPrice() {
                let params = {}
                NProgress.start()
                getFlowPrice(params).then((res) => {
                    NProgress.done()
                    if (res.data.status === 0) {
                        console.log(res.data.data)
                        this.flow_price_info = res.data.data
                    }
                })
            },
            handleClick(tab, event) {
            },
            clearAwardValue(item) {
                if (item.award_type == 2 && item.award_value != '-1') {
                    item.award_value = ''
                }
            },
            // 获取当前活动信息
            getActivityInfo(code) {
                NProgress.start()
                let params = {
                    'code': code
                }
                getActivityById(params).then((res) => {
                    NProgress.done()
                    if (res.data.status === 0) {
                        this.$notify({
                            title: '成功',
                            message: '成功获取活动信息',
                            type: 'success'
                        })
                        console.log(res.data.data)
                        this.activity = res.data.data
                        if(res.data.data.activity_status == 0){
                            this.isDisable = false
                        }else{
                            this.isDisable = true
                        }

                        this.setTemplate(this.activity.base_setting.activity_type)
                    } else {
                        this.$notify({
                            title: '失败',
                            message: res.data.message,
                            type: 'error'
                        })
                    }
                })
            },
            // 保存编辑活动
            updateActivity() {
                this.loading = true
                NProgress.start()
                if(this.activity.base_setting.begin_date){
                    this.activity.base_setting.begin_date = moment(this.activity.base_setting.begin_date).format('YYYY-MM-DD HH:mm:ss')
                }
                if(this.activity.base_setting.end_date){
                    this.activity.base_setting.end_date = moment(this.activity.base_setting.end_date).format('YYYY-MM-DD HH:mm:ss')
                }
                this.activity.main_tab = '1'
                let params = {
                    'code': this.code,
                    'activity': this.activity
                }
                editActivity(params).then((res) => {
                    if (res.data.status == 0) {
                        this.loading = false
                        NProgress.done()
                        console.log(res)
                        this.$notify({
                            title: '成功',
                            message: '保存活动成功',
                            type: 'success'
                        })
                        this.$router.push({path: 'activityList'})
                    }
                })
            },
            // 创建活动
            saveActivity(formName) {
                let _this = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$confirm('请核对您添加的信息', '提示', {}).then(() => {
                            this.loading = true
                            NProgress.start()
                            this.activity.base_setting.begin_date = moment(this.activity.base_setting.begin_date).format('YYYY-MM-DD HH:mm:ss')
                            this.activity.base_setting.end_date = moment(this.activity.base_setting.end_date).format('YYYY-MM-DD HH:mm:ss')
                            let params = {'activity': this.activity}
                            createActivity(params).then((res) => {
                                this.loading = false
                                NProgress.done()
                                if (res.data.status == 0) {
                                    this.$notify({
                                        title: '成功',
                                        message: '添加活动成功',
                                        type: 'success'
                                    })
                                    this.$refs[formName].resetFields()
                                    this.$router.push({path: 'activityList'})
                                } else {
                                    this.$notify({
                                        title: '错误',
                                        message: res.data.message,
                                        type: 'error'
                                    })
                                }
                            })
                        })
                    }
                })

            },
            // 上传微信分享图片
            handleUploadWX(res, file) {
                if (res.status == 0) {
                    this.activity.upload_image_url = res.data.file
                    this.$message({
                        message: res.message,
                        type: 'success'
                    });
                    this.activity.sharing_setting.wx_sharing_icon_url = this.activity.upload_image_url
                }
            },
            // 图片上传成功后的处理
            handleUploadScucess(res, file) {
                if (res.status == 0) {
                    this.activity.upload_image_url = res.data.file
                    console.log(this.activity.upload_image_url);
                    this.$message({
                        message: res.message,
                        type: 'success'
                    });
                    console.log(this.activity.upload_image_name);
                    switch (this.activity.upload_image_name) {
                        case 'main_bg':
                            this.activity.activity_img_upload.main_bg = this.activity.upload_image_url
                            break
                        case 'rules_icon':
                            this.activity.activity_img_upload.rules_icon = this.activity.upload_image_url
                            break
                        case 'turnplate_bg':
                            this.activity.activity_img_upload.turnplate_bg = this.activity.upload_image_url
                            break
                        case 'lottery_success':
                            this.activity.activity_img_upload.lottery_success = this.activity.upload_image_url
                            break
                        case 'lottery_faild':
                            this.activity.activity_img_upload.lottery_faild = this.activity.upload_image_url
                            break
                    }
                }
            },
            // 重置默认图片
            resetImg() {
                switch (this.activity.upload_image_name) {
                    case 'main_bg':
                        this.activity.activity_img_upload.main_bg = require('../../../../static/template/common/images/active-bg.jpg')
                        this.activity.upload_image_url = ''
                        break
                    case 'rules_icon':
                        this.activity.activity_img_upload.rules_icon = require('../../../../static/template/common/images/ruleImg_yellow.png')
                        this.activity.upload_image_url = ''
                        break
                    case 'turnplate_bg':
                        this.activity.activity_img_upload.turnplate_bg = require('../../../../static/template/common/images/turnplate-bg.png')
                        this.activity.upload_image_url = ''
                        break
                    case 'lottery_success':
                        this.activity.activity_img_upload.lottery_success = require('../../../../static/template/common/images/gift.png')
                        this.activity.upload_image_url = ''
                        break
                    case 'lottery_faild':
                        this.activity.activity_img_upload.lottery_faild = require('../../../../static/template/common/images/faiImg.png')
                        this.activity.upload_image_url = ''
                        break
                }
            },
            handleUploadFaild(res, filr) {
                this.$message.error('上传失败,请重试');
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
            load(activity) {
                window._setProperty = this.setProperty
                const app = this.$refs.iframe.contentWindow.app
                if (app && app.setContent) {
                    app.setContent(this.activity)
                } else {
                    window._activity = this.activity
                }
            },
            // 设置当前选中活动属性 type:1 图片上传  type:2 文字内容
            setProperty(name, type) {
                this.activity.upload_image_name = name
                let self = this
                if (type == '2') {
                    let list = $('.el-form-item');
                    $.each(list, function (index, item) {
                        if ($('.check-border')) {
                            $(item).removeClass('check-border')
                        }
                        if ($(item).attr('data-source') == name) {
                            $(item).addClass('check-border')
                            setTimeout(function () {
                                $(item).removeClass('check-border')
                            }, 2000)
                            // $(item).parents('.el-form').parents('.el-tab-pane').show().siblings().hide();
                            let pane_index = $(item).parents('.el-form').parents('.el-tab-pane').index();
                            self.activity.activity_tab = pane_index + ''
                        }
                        if (name == 'award_setting') {
                            self.activity.activity_tab = '2'
                        }

                    })
                } else {
                    // 图片上传
                    this.is_dialog_show = true
                }
            },
            // 保存并替换图片
            setBackgroundImg(file, name) {
                console.log(file)
                console.log(name)

            },
            // 修改奖品tabs
            handleTabsEdit(targetName, action) {
                let tabs = this.activity.award_setting
                let tab_length = this.activity.award_setting.length
                // 判断用户操作
                if (action === 'add') {
                    let tab_name = ''
                    let tab_targetName = ++this.tabIndex + ''
                    for (let i = 0; i < tab_length; i++) {
                        tab_name = this.tab_awards_name_list[i]
                    }
                    // 最多添加8个奖品
                    if (tab_length < 8) {
                        this.activity.award_setting.push({
                            name: tab_targetName,
                            content: 'New Tab content',
                            award_id: this.activity.award_setting.length + 1,
                            award_level: tab_name,
                            award_type: '1',
                            award_name: '',
                            award_num: '',
                            award_value: '',
                            winning_rate: 0,
                            limit_begin_time: '',
                            limit_end_time: ''
                        });
                        this.edit_awards_tabs_value = tab_targetName
                        // 回滚
                        this.activity.award_setting = this.activity.award_setting.filter(tab => true)
                    } else {
                        this.$notify({
                            title: '提示',
                            message: '最多可添加8个奖品',
                            type: 'warning'
                        });
                    }
                }
                if (action === 'remove') {
                    let activeName = this.edit_awards_tabs_value
                    if (tab_length > 1) {
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
                    } else {
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
    .avatar-uploader {
        width: 178px;
        height: 178px;
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader:hover {
        border-color: #20a0ff;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }

    @media screen and (min-width: 768px) {
        .device.device-fixed {
            position: fixed;
            right: auto;
        }
    }

    .device {
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

            .device-title {
                width: 321px;
                height: 64px;
                background-image: url('../../static/img/page-title.png');
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
        p {
            padding: 0;
            margin: 0;
        }
    }

    .check-border {
        box-shadow: 1px 0 15px rgba(32, 160, 255, 0.8), -1px 0 15px rgba(32, 160, 255, 0.8), 0px 1px 15px rgba(32, 160, 255, 0.8), 0px -1px 15px rgba(32, 160, 255, 0.8);
    }
</style>
