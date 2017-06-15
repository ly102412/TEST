<template>
  <div class="animated fadeIn">
    <div class="rows">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            活动编辑
          </div>
          <div class="card-block">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="首页" name="first"></el-tab-pane>
              <el-tab-pane label="活动奖品" name="second"></el-tab-pane>
              <el-tab-pane label="我的奖品" name="third"></el-tab-pane>
              <el-tab-pane label="奖品详情" name="fourth"></el-tab-pane>
              <el-tab-pane label="中奖页面" name="five"></el-tab-pane>
              <el-tab-pane label="没中奖页" name="six"></el-tab-pane>
            </el-tabs>
            <div class="phone">
              <div class="wxTitle">
                  <div id="actName" class="actName ng-binding" ng-bind="game.name">参与活动赢大奖</div>
              </div>
              <div id="changeLeft" class="changePage">
                  <div class="leftImg img"></div>
              </div>
              <div id="changeRight" class="changePage">
                  <div class="rightImg img"></div>
              </div>
              <div id="gameContent">
                  <iframe id="gamePreviewPage" frameborder="0" scrolling="no" style="width:100%;height:100%;" src="//hd.faisco.cn/zhuanpan.jsp?_manage=d&amp;aid=13132664&amp;style=0&amp;tplId=-1&amp;gameType=0&amp;id=10&amp;modAid=&amp;modGameId=47"></iframe>
                  <div id="imgSizeShow" style="display: none;">
                      <div>宽：<span></span></div>
                      <div>高：<span></span></div>
                  </div>
              </div>
              <div id="moduleLayerBox"><div class="moduleLayer" style="display: none;"><div class="item"><a class="item tool" hidefocus="true" href="javascript:;">编辑音效</a></div></div><div class="moduleLayer" style="display: none;"><div class="item"><a class="item tool" hidefocus="true" href="javascript:;">编辑背景</a></div></div></div>
          </div>
          <div class="editDetailBox">
                <div class="phone absImp">
                    <div class="wxTitle">
                        <div id="actName" class="actName ng-binding" ng-bind="game.name">参与活动赢大奖</div>
                    </div>
                    <div id="changeLeft" class="changePage">
                        <div class="leftImg img"></div>
                    </div>
                    <div id="changeRight" class="changePage">
                        <div class="rightImg img"></div>
                    </div>
                    <div id="gameContent">
                        <iframe id="gamePreviewPage" frameborder="0" scrolling="no" style="width:100%;height:100%;" src="//hd.faisco.cn/zhuanpan.jsp?_manage=d&amp;aid=13132664&amp;style=0&amp;tplId=-1&amp;gameType=0&amp;id=10&amp;modAid=&amp;modGameId=47"></iframe>
                        <div id="imgSizeShow" style="display: none;">
                            <div>宽：<span></span></div>
                            <div>高：<span></span></div>
                        </div>
                    </div>
                    <div id="moduleLayerBox"><div class="moduleLayer" style="display: none;"><div class="item"><a class="item tool" hidefocus="true" href="javascript:;">编辑音效</a></div></div><div class="moduleLayer" style="display: none;"><div class="item"><a class="item tool" hidefocus="true" href="javascript:;">编辑背景</a></div></div></div>
                </div>
                <div class="phone_holder"></div>
                <div class="editDetail">
                    <div id="activeTab" class="commBg"><!--
                     --><div class="tabSetting" option="0" onclick="changeTab(this,event);">基础设置</div><!--
                     --><div class="tabSetting" option="4" onclick="changeTab(this,event);">派奖方式</div><!--
                     --><div class="tabSetting" option="1" onclick="changeTab(this,event);">奖项设置</div><!--
                     --><div class="tabSetting" option="2" onclick="changeTab(this,event);">分享设置</div><!--
                     --><div class="tabSetting checked" option="3" onclick="changeTab(this,event);">高级设置</div><!--
                 --></div>
                    <div id="baseSetting" class="settingBox" style="display: none;">
                        <div id="actNameSetting">
                            <span class="leftTitle"><span class="flag">*</span><span class="baseSettingTitle">活动标题：</span></span>
                            <input id="name" class="activeName input input1 ng-pristine ng-untouched ng-valid" type="text" name="activeName" ng-model="game.name">
                        </div>
                        <div id="setGameTimeBox">
                            <div class="baseLine">
                                <span class="leftTitle"><span class="flag">*</span><span class="baseSettingTitle">开始时间：</span></span>
                                <input id="beginTime" class="input input1 hasDatepicker" type="text" name="beginTime" readonly="" style="cursor:pointer" value="2017-06-13 18:09">
                            </div>
                            <div class="baseLine1">
                                <span class="leftTitle"><span class="flag">*</span><span class="baseSettingTitle">结束时间：</span></span>
                                <input id="endTime" type="text" class="input input1 hasDatepicker" name="endTime" readonly="" style="cursor:pointer" value="2017-06-20 18:09">
                            </div>
                        </div>
                        <div id="setLimitJoinNumBox" class="hide" style="margin-bottom: 10px; display: block;">

                            <div id="joinNumBox" class="baseLine baseLine1">
                                <span class="leftTitle"><span class="flag">&nbsp;</span><span class="baseSettingTitle">参与人数：</span></span>
                                <input id="hideJoinNum" ng-model="game._flag.f2" ng-value="false" type="radio" name="isShowJoinNum" class="ng-pristine ng-untouched ng-valid" value="false"><label for="hideJoinNum">隐藏</label>
                                <input id="showJoinNum" ng-model="game._flag.f2" ng-value="true" type="radio" name="isShowJoinNum" class="ng-pristine ng-untouched ng-valid" value="true"><label for="showJoinNum">展示</label>
                                <div class="commMg otherLine virtualLine" ed-show="game._flag.f2">
                                    <span>在实际参与人数基础上增加 <input type="text" id="virtualJoinNum" ng-model="game._setting.vjn" model-format="int" maxlength="6" class="input inputNum onlyNum input3 ng-pristine ng-untouched ng-valid ng-valid-maxlength"> 人</span> <span class="explain">（只展示不计入统计）</span>

                                </div>
                            </div>

                            <div class="baseLine1 joinNumLimit inputLh verTipsBox">
                                <span class="leftTitle"><span class="powerIcon ver_biz flag"></span><span class="baseSettingTitle">参与人数限制：</span></span>
                                <input class="js_ver ng-pristine ng-untouched ng-valid" _ver="2" _strict="true" id="noLimitNum" ng-model="game._flag.f4096" ng-value="false" type="radio" name="isLimitNum" value="false" disabled="disabled"><label for="noLimitNum">不限</label>
                                <input id="LimitNum" ng-model="game._flag.f4096" ng-value="true" type="radio" name="isLimitNum" class="ng-pristine ng-untouched ng-valid" value="true"><label for="LimitNum" style="margin:0;">限制</label>
                                <span id="limitNumBox" ed-show="game._flag.f4096">
                                    <input type="text" id="theLimitNum" maxlength="6" ng-model="game._setting.ljn" model-format="int" ng-blur="game.$$joinNumBlur('ljn')" class="input inputNum onlyNum input3 ng-pristine ng-untouched ng-valid ng-valid-maxlength"> 人参与


                                    <div class="errMsg commMg limitNumErr hide ng-binding" style="display: none;">互动免费版最大参与人数限制为100人</div>

                                </span>
                            </div>
                            <div class="baseLine1 joinNumLimit inputLh hide verTipsBox">
                                <span class="leftTitle"><span class="powerIcon ver_biz flag"></span>
                                <span class="baseSettingTitle">分享人数限制：</span></span>
                                <input class="js_ver ng-pristine ng-untouched ng-valid" _ver="2" _strict="true" id="noShareLimitNum" ng-model="game._flag.f1073741824" ng-value="false" type="radio" name="isShareLimitNum" value="false" disabled="disabled"><label for="noShareLimitNum">不限</label>
                                <input id="shareLimitNum" ng-model="game._flag.f1073741824" ng-value="true" type="radio" name="isShareLimitNum" class="ng-pristine ng-untouched ng-valid" value="true" checked="checked"><label for="shareLimitNum" style="margin:0;">限制</label>
                                <span id="limitShareNumBox" ed-show="game._flag.f1073741824" class="ERR_lock ERR_lock_strict" style="display: none;">
                                    <input type="text" id="theShareLimitNum" maxlength="4" class="input inputNum onlyNum input3 ng-pristine ng-untouched ng-valid ng-valid-maxlength" ng-model="game._setting.lsn" model-format="int" ng-blur="game.$$joinNumBlur('lsn')"> 人可分享到朋友圈

                                    <div class="tipsColor commMg limitNumMsg">超出最大分享人数限制时，分享朋友圈按钮将不可见</div>


                                    <div class="errMsg commMg limitNumErr hide ng-binding" style="display: none;">互动免费版最大分享人数限制为100人</div>

                                </span>
                            </div>
                        </div>
                        <div id="setLimitRegNumBox" class="hide ERR_lock" style="margin-bottom: 10px; display: none;">

                            <div id="regNumBox" class="baseLine baseLine1">
                                <span class="leftTitle"><span class="flag">&nbsp;</span><span class="baseSettingTitle">报名人数：</span></span>
                                <input id="hideRegNum" ng-model="game._flag.f2048" ng-value="false" type="radio" name="isShowRegNum" class="ng-pristine ng-untouched ng-valid" value="false"><label for="hideRegNum">隐藏</label>
                                <input id="showRegNum" ng-model="game._flag.f2048" ng-value="true" type="radio" name="isShowRegNum" class="ng-pristine ng-untouched ng-valid" value="true"><label for="showRegNum">展示</label>
                                <div class="commMg otherLine virtualLine" ed-show="game._flag.f2048">
                                    <span>在实际参与人数基础上增加 <input type="text" id="virtualRegNum" class="input inputNum onlyNum input3 ng-pristine ng-untouched ng-valid ng-valid-maxlength" ng-model="game._setting.vrn" model-format="int" maxlength="6"> 人</span> <spna class="explain">（只展示不计入统计）
                                </spna></div>
                            </div>

                            <div class="baseLine1 regNumLimit inputLh verTipsBox">
                                <span class="leftTitle"><span class="powerIcon ver_biz flag"></span>
                                <span class="baseSettingTitle">报名人数限制：</span></span>
                                <input class="js_ver ng-pristine ng-untouched ng-valid" _ver="2" _strict="true" id="noLimitRegNum" ng-model="game._flag.f8192" ng-value="false" type="radio" name="isLimitRegNum" value="false" disabled="disabled"><label for="noLimitRegNum">不限报名人数</label>
                                <input id="LimitRegNum" ng-model="game._flag.f8192" ng-value="true" type="radio" name="isLimitRegNum" class="ng-pristine ng-untouched ng-valid" value="true"><label for="LimitRegNum" style="margin: 0px;">限制</label>
                                <span id="limitRegNumBox" style="line-height:30px;" ng-show="game._flag.f8192">
                                    <input type="text" id="theLimitRegNum" maxlength="6" ng-model="game._setting.lrn" model-format="int" ng-blur="game.$$joinNumBlur('lrn')" class="input inputNum onlyNum input3 ng-pristine ng-untouched ng-valid ng-valid-maxlength"> 人报名
                                    <br>


                                    <div class="errMsg commMg limitNumErr hide ng-binding" style="display: none;">互动免费版最大报名人数限制为100人</div>

                                </span>
                            </div>
                        </div>

                        <div class="baseLine1">
                            <span class="leftTitle" style="vertical-align:138px"><span class="baseSettingTitle">活动及兑奖说明：</span></span>
                            <textarea id="activeExplain" ng-model="game._setting.ep" ng-trim="false" class="input scrollBox ng-pristine ng-untouched ng-valid"></textarea>
                        </div>

                    </div>

<div id="awardsSetting" ng-controller="awardListCtrl" class="settingBox hide ng-scope" style="display: none;">
    <div id="awardBox" class="awardBox relative">
        <div id="awardBoxTitle" class="fixedImp" style="top: 72px; left: 450.875px;">
            <div class="awardNums pd10 commBg">

                <span class="topAwardExplain text">请设置活动需要派发的奖项</span>


                <div style="float:right;">
                    <input type="checkbox" id="comfortSetting" ng-model="game._flag.f16" style="margin-right: 5px;" class="ng-untouched ng-valid ng-dirty ng-valid-parse"><label for="comfortSetting">设置安慰奖</label>
                </div>

            </div>
            <div class="awardLevelBox commBg">
                <!-- ngRepeat: index in getIntList(1,game._setting.an) track by index --><div class="awardLevelItem norLevelItem ng-scope" ng-class="{checked:game.$checkeIndex == index-1}" ng-repeat="index in getIntList(1,game._setting.an) track by index" ng-click="game.$checkeIndex = index-1"><span class="awardItemName ng-binding noBorder">奖项一</span><div class="awardErrDot"></div></div><!-- end ngRepeat: index in getIntList(1,game._setting.an) track by index --><div class="awardLevelItem norLevelItem ng-scope checked" ng-class="{checked:game.$checkeIndex == index-1}" ng-repeat="index in getIntList(1,game._setting.an) track by index" ng-click="game.$checkeIndex = index-1"><span class="awardItemName ng-binding noBorder">奖项二</span><div class="awardErrDot"></div></div><!-- end ngRepeat: index in getIntList(1,game._setting.an) track by index --><div class="awardLevelItem norLevelItem ng-scope" ng-class="{checked:game.$checkeIndex == index-1}" ng-repeat="index in getIntList(1,game._setting.an) track by index" ng-click="game.$checkeIndex = index-1"><span class="awardItemName ng-binding">奖项三</span><div class="awardErrDot"></div></div><!-- end ngRepeat: index in getIntList(1,game._setting.an) track by index --><div class="awardLevelItem norLevelItem ng-scope" ng-class="{checked:game.$checkeIndex == index-1}" ng-repeat="index in getIntList(1,game._setting.an) track by index" ng-click="game.$checkeIndex = index-1"><span class="awardItemName ng-binding">奖项四</span><div class="awardErrDot"></div></div><!-- end ngRepeat: index in getIntList(1,game._setting.an) track by index --><div class="awardLevelItem norLevelItem ng-scope" ng-class="{checked:game.$checkeIndex == index-1}" ng-repeat="index in getIntList(1,game._setting.an) track by index" ng-click="game.$checkeIndex = index-1"><span class="awardItemName ng-binding">奖项五</span><div class="awardErrDot"></div></div><!-- end ngRepeat: index in getIntList(1,game._setting.an) track by index --><div class="awardLevelItem norLevelItem ng-scope" ng-class="{checked:game.$checkeIndex == index-1}" ng-repeat="index in getIntList(1,game._setting.an) track by index" ng-click="game.$checkeIndex = index-1"><span class="awardItemName ng-binding">奖项六</span><div class="awardErrDot"></div></div><!-- end ngRepeat: index in getIntList(1,game._setting.an) track by index --><div class="awardLevelItem norLevelItem ng-scope" ng-class="{checked:game.$checkeIndex == index-1}" ng-repeat="index in getIntList(1,game._setting.an) track by index" ng-click="game.$checkeIndex = index-1"><span class="awardItemName ng-binding">奖项七</span><div class="awardErrDot"></div></div><!-- end ngRepeat: index in getIntList(1,game._setting.an) track by index --><div class="awardLevelItem norLevelItem ng-scope" ng-class="{checked:game.$checkeIndex == index-1}" ng-repeat="index in getIntList(1,game._setting.an) track by index" ng-click="game.$checkeIndex = index-1"><span class="awardItemName ng-binding">奖项八</span><div class="awardErrDot"></div></div><!-- end ngRepeat: index in getIntList(1,game._setting.an) track by index --><!--
                --><!-- ngIf: game._flag.f16&&true -->

                <span class="awardNumOptBox">
                    <div id="delAwardNum" ng-click="setAwardNum(-1)" ng-hide="game._setting.an == 1" class="awardNumOpt pointer delAwardNum"></div><div id="addAwardNum" ng-click="setAwardNum(1)" ng-hide="game._setting.an == 8" class="awardNumOpt pointer addAwardNum ng-hide" style="margin-left:9px"></div>
                </span>

            </div>
        </div>
        <div id="awardBoxTitle_holder" class=""></div>
        <div style="padding: 10px 0px;">
            <div id="awardDetail" class="awardDetail transitionPanel" style="overflow: visible;">
                <!-- ngRepeat: award in ::game._awardList --><div class="awardSettingBox ng-scope" ng-repeat="award in ::game._awardList" ng-controller="awardCtrl" ng-class="::{'hide':index != game.$checkeIndex}" ed-lock="!award.$isOpenAward" style="left: -500px; display: none;">
                    <div class="baseLine awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖项等级：</div></span>
                        <input ng-model="award.style" class="awardStyle input input1 ng-valid ng-dirty ng-valid-parse ng-touched" type="text">
                    </div>

                    <!-- ngIf: award.awardType != -1 --><div ng-if="award.awardType != -1" class="baseLine3 awardSettingLine ng-scope">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖品类型：</div></span>
                        <div class="awardTypeSetBox in-bl">
                            <div class="awardTypeValue divBeInput" ng-click="toggleAwardTypeBox()" ng-class="{'disableBg':award.$disabled}">
                                <span class="type ng-binding">礼品</span><!-- ngIf: award.$awardTypeItem.ver -->
                                <div class="detailIcon"></div>
                            </div>
                            <div class="awardTypeBox ng-hide" ng-show="showAwardTypeBox">
                                <!-- ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope checked"><span class="type ng-binding">礼品</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">门店优惠券</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">电商优惠券</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">微信口令红包</span><!-- ngIf: ::info.ver --><span ng-if="::info.ver" style="margin-left:3px;" class="powerIcon flag ng-scope ver_biz" ng-class="::game.$$verInfo.map[info.ver].class"></span><!-- end ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">微信优惠券</span><!-- ngIf: ::info.ver --><span ng-if="::info.ver" style="margin-left:3px;" class="powerIcon flag ng-scope ver_biz" ng-class="::game.$$verInfo.map[info.ver].class"></span><!-- end ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list -->
                            </div>
                        </div>
                        <div class="tipsColor awardMg">活动发布后类型将无法更改</div>
                        <!-- ngIf: ::!isComfort --><div ng-if="::!isComfort" ng-show="award.awardtype == 5" class="tipsColor awardMg passWordredTips ng-scope ng-hide">由于口令红包需关注后方可领取，有可能被微信封公众号，请慎用！</div><!-- end ngIf: ::!isComfort -->
                        <!-- ngIf: ::!isComfort&&game.$$afterWXCardModify --><div ng-if="::!isComfort&amp;&amp;game.$$afterWXCardModify" ng-show="award.awardtype == 4" class="tipsColor awardMg ng-scope ng-hide">生成卡券后，<span style="color:#f00">请勿</span>到微信公众平台内<span style="color:#f00">操作卡券</span></div><!-- end ngIf: ::!isComfort&&game.$$afterWXCardModify -->
                    </div><!-- end ngIf: award.awardType != -1 -->
                    <!-- ngIf: ::game.$$afterWXCardModify --><div ng-if="::game.$$afterWXCardModify" class="awardWXBrandNameBox baseLine3 awardSettingLine ng-scope ERR_lock ERR_lock_strict" ed-show="award.awardtype == 4" style="display: none;">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">卡券商户：</div></span>
                        <input id="wxCardName0" ng-model="award.wxcardcomname" class="input1 hd-wxCardName-value ng-pristine ng-untouched ng-valid" type="text" placeholder="请填写卡券的商户名称(如：海底捞)" ng-disabled="game.$$isPublish&amp;&amp;awardLast().genewxcard">
                        <div class="tipsColor awardMg">确认发布后无法修改，请认真选择！<a href="http://hd.faisco.com/news/4232" target="_blank" class="aTips">了解更多</a></div>
                        <div class="tipsColor awardMg">
                            注：卡券商户名称请勿与授权公众号名称相差太大，否则将有可能被<br>
                            微信视为代建而查封，卡券将无法使用！
                        </div>
                    </div><!-- end ngIf: ::game.$$afterWXCardModify -->
                    <div class="awardDescribeBox baseLine3 awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖项名称：</div></span>
                        <input ng-model="award.name" ng-disabled="award.$disabled" class="awardDescribe input input1 ng-pristine ng-valid ng-touched" type="text">
                        <div class="tipsColor awardMg">活动发布后名称将无法更改</div>
                    </div>
                    <!-- ngIf: ::isComfort&&false -->
                    <!-- 奖品图片 HYKJ -->
                    <!-- ngIf: ::!isComfort && game.style == 48 -->

                    <!-- 未发布奖品显示逻辑 -->
                    <!-- ngIf: ::!isComfort && !game.$$isPublish --><div ng-if="::!isComfort &amp;&amp; !game.$$isPublish" class="baseLine3 amounLine awardSettingLine ng-scope">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖品数量：</div></span>
                        <input ng-model="award.amount" model-format="int" ng-blur="!award.amount&amp;&amp;(award.amount=0)" class="awardAmount input onlyNum input1 ng-pristine ng-valid ng-valid-maxlength ng-touched" maxlength="5" type="text" name="">
                    </div><!-- end ngIf: ::!isComfort && !game.$$isPublish -->
                    <!-- ngIf: ::!isComfort && game.$$isPublish -->

                    <!-- ngIf: ::!isComfort && game.$$afterWXCardModify --><div ng-if="::!isComfort &amp;&amp; game.$$afterWXCardModify" class="setAwardQRCodeBox baseLine3 awardSettingLine ng-scope ERR_lock ERR_lock_strict" ed-show="award.awardtype == 4" style="display: none;">
                        <span class="leftTitle2"><div class="awardTitle">核销方式：</div></span>
                        <input id="openAwardQRC0" ng-model="award.opqrc" ng-value="true" ng-disabled="award.$disabled&amp;&amp;!award.opqrc" class="openAwardQRC ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardQRC0" value="true"><label for="openAwardQRC0">二维码</label>
                        <input id="closeAwardQRC0" ng-model="award.opqrc" ng-value="false" ng-disabled="award.$disabled&amp;&amp;award.opqrc" class="closeAwardQRC ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardQRC0" value="false"><label for="closeAwardQRC0">仅卡券号</label>
                        <div class="tipsColor awardMg">活动发布后核销方式将无法更改</div>
                    </div><!-- end ngIf: ::!isComfort && game.$$afterWXCardModify -->
                    <!-- ngIf: ::!isComfort && game.$$afterWxCard --><div ng-if="::!isComfort &amp;&amp; game.$$afterWxCard" ed-show="award.awardtype == 5" class="passwordrednumBox baseLine3 awardSettingLine hide ng-scope ERR_lock ERR_lock_strict" style="display: none;">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">单个金额：</div></span>
                        <input class="passwordrednum input input1 ng-pristine ng-untouched ng-valid ng-valid-maxlength" ng-model="award.passwordrednum" model-format="float ::passwordredFormat" ng-blur="!award.passwordrednum&amp;&amp;(award.passwordrednum=100)" ng-disabled="award.$disabled" maxlength="6" type="text" name=""> 元
                        <div class="tipsColor awardMg">微信规定单个红包金额必须高于1元低于200元</div>
                    </div><!-- end ngIf: ::!isComfort && game.$$afterWxCard -->
                    <!-- ngIf: ::!isComfort && game.style == 48 -->
                    <!-- ngIf: ::game.$$isAwardWithPot && !isComfort -->

                    <div class="setCashTypeBox baseLine3 awardSettingLine" ng-show="award.$type.showcashtype">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">兑奖方式：</div></span>
                        <input id="cashUnderline0" ng-model="award.cashtype" ng-value="::2" class="cashUnderline wxCardInput ng-untouched ng-valid ng-dirty ng-valid-parse" type="radio" name="cashType0" value="2"><label for="cashUnderline0">线下兑奖</label>

                        <!-- ngIf: ::!isComfort || game.$$afterComCodeModify --><span ng-if="::!isComfort || game.$$afterComCodeModify" class="ng-scope"><input id="cashWx0" ng-model="award.cashtype" ng-value="::3" class="cashWx wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType0" ng-disabled="::!game.$$hasWXCash" value="3" disabled="disabled"><label for="cashWx0">公众号兑奖</label></span><!-- end ngIf: ::!isComfort || game.$$afterComCodeModify -->
                        <input id="cashWeb0" ng-model="award.cashtype" ng-value="::4" class="cashWeb wxCardInput ng-untouched ng-valid ng-dirty" type="radio" name="cashType0" value="4"><label for="cashWeb0">网页兑奖</label>
                        <div class="tipsColor cashWxTip ng-hide" ng-show="award.cashtype == 3">开通公众号核销功能后，玩家回复兑奖码到公众号，将实现自动核销<a href="http://hd.faisco.com/news/6341" class="aTips" target="_blank">了解更多</a>
                        </div>

                    </div>
                    <div class="setAwardBox" ed-show="award.$type.showsitebox" style="display: block;">
                        <div class="setAwardOptInfoBox baseLine3 awardSettingLine">
                            <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">操作提示：</div></span>
                            <input ng-model="award.opti" class="awardOptInfo input input1 blurCheck wxCardInput ng-pristine ng-valid ng-touched" type="text">
                        </div>
                        <div class="setAwardCashSiteBox baseLine3 awardSettingLine clearfix" ed-hide="award.$type.sitetype=='none'">
                            <div class="leftTitle2"><span class="flag">*</span><div class="awardTitle ng-binding">兑奖地址：</div></div>
                            <div class="rightBox">

                                <div class="cashAddress" ed-hide="(award.awardtype == 0 || (award.awardtype == 2 &amp;&amp; award.cashtype == 2)) &amp;&amp; award.storeType != 1">
                                    <div class="cashSiteIpt" ed-show="award.$type.sitetype == 'text'" style="display: block;">
                                        <input ng-model="award.cashsite" class="awardCashSite input input1 blurCheck wxCardInput ng-pristine ng-valid ng-touched" type="text">
                                    </div>
                                    <div class="cashUrlIpt ERR_lock ERR_lock_strict" ed-show="award.$type.sitetype == 'url'" style="display: none;">
                                        <input ng-model="award.$cashsiteurl" class="awardCashSiteUrl input input6 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="setCodeTimeBox baseLine baseLine3 awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="usePeriod awardTitle ng-binding">兑奖期限：</div></span>
                        <input ng-model="award.t_type" value="DATE_TYPE_FIX_TIME_RANGE" id="timeRangeType0" class="timeRangeType ng-pristine ng-untouched ng-valid" ng-disabled="(award.$disabled || (game.$$isPublish &amp;&amp; awardLast().genewxcard)) &amp;&amp; award.t_type == 'DATE_TYPE_FIX_TERM'" type="radio" name="timeType0"><label for="timeRangeType0">固定日期</label>
                        <input ng-model="award.t_type" value="DATE_TYPE_FIX_TERM" id="termType0" class="termType ng-pristine ng-untouched ng-valid" ng-disabled="(award.$disabled || (game.$$isPublish &amp;&amp; awardLast().genewxcard)) &amp;&amp; award.t_type == 'DATE_TYPE_FIX_TIME_RANGE'" type="radio" name="timeType0"><label for="termType0">固定时长</label>
                        <div class="codeTimeBox awardMg">
                            <div id="timeRangeBox0" class="timeRangeBox" ng-show="award.t_type == 'DATE_TYPE_FIX_TIME_RANGE'">
                                <input class="useCodeBeginTime input pointer wxCardInput hasDatepicker" style="width:202px" readonly="" type="text" ng-value="::award.cbt" value="2017-06-13 00:00" id="dp1497530394934"> 至
                                <input class="useCodeEndTime input pointer wxCardInput hasDatepicker" style="width:202px" readonly="" type="text" ng-value="::award.cet" value="2017-06-20 23:59" id="dp1497530394935">
                            </div>
                            <div id="termBox0" class="termBox ng-hide" ng-show="award.t_type == 'DATE_TYPE_FIX_TERM'">
                                领取后 <select ng-model="award.cfbt" ng-options="i as (i==0?'当天':i+'天') for i in award.$fixedBeginTermList track by i" class="codeFixedBeginTerm input wxCardInput ng-pristine ng-untouched ng-valid"><option value="0" label="当天" selected="selected">当天</option><option value="1" label="1天">1天</option><option value="2" label="2天">2天</option><option value="3" label="3天">3天</option><option value="4" label="4天">4天</option><option value="5" label="5天">5天</option><option value="6" label="6天">6天</option><option value="7" label="7天">7天</option><option value="8" label="8天">8天</option><option value="9" label="9天">9天</option><option value="10" label="10天">10天</option><option value="11" label="11天">11天</option><option value="12" label="12天">12天</option><option value="13" label="13天">13天</option><option value="14" label="14天">14天</option><option value="15" label="15天">15天</option><option value="16" label="16天">16天</option><option value="17" label="17天">17天</option><option value="18" label="18天">18天</option><option value="19" label="19天">19天</option><option value="20" label="20天">20天</option><option value="21" label="21天">21天</option><option value="22" label="22天">22天</option><option value="23" label="23天">23天</option><option value="24" label="24天">24天</option><option value="25" label="25天">25天</option><option value="26" label="26天">26天</option><option value="27" label="27天">27天</option><option value="28" label="28天">28天</option><option value="29" label="29天">29天</option><option value="30" label="30天">30天</option><option value="31" label="31天">31天</option><option value="32" label="32天">32天</option><option value="33" label="33天">33天</option><option value="34" label="34天">34天</option><option value="35" label="35天">35天</option><option value="36" label="36天">36天</option><option value="37" label="37天">37天</option><option value="38" label="38天">38天</option><option value="39" label="39天">39天</option><option value="40" label="40天">40天</option><option value="41" label="41天">41天</option><option value="42" label="42天">42天</option><option value="43" label="43天">43天</option><option value="44" label="44天">44天</option><option value="45" label="45天">45天</option><option value="46" label="46天">46天</option><option value="47" label="47天">47天</option><option value="48" label="48天">48天</option><option value="49" label="49天">49天</option><option value="50" label="50天">50天</option><option value="51" label="51天">51天</option><option value="52" label="52天">52天</option><option value="53" label="53天">53天</option><option value="54" label="54天">54天</option><option value="55" label="55天">55天</option><option value="56" label="56天">56天</option><option value="57" label="57天">57天</option><option value="58" label="58天">58天</option><option value="59" label="59天">59天</option><option value="60" label="60天">60天</option><option value="61" label="61天">61天</option><option value="62" label="62天">62天</option><option value="63" label="63天">63天</option><option value="64" label="64天">64天</option><option value="65" label="65天">65天</option><option value="66" label="66天">66天</option><option value="67" label="67天">67天</option><option value="68" label="68天">68天</option><option value="69" label="69天">69天</option><option value="70" label="70天">70天</option><option value="71" label="71天">71天</option><option value="72" label="72天">72天</option><option value="73" label="73天">73天</option><option value="74" label="74天">74天</option><option value="75" label="75天">75天</option><option value="76" label="76天">76天</option><option value="77" label="77天">77天</option><option value="78" label="78天">78天</option><option value="79" label="79天">79天</option><option value="80" label="80天">80天</option><option value="81" label="81天">81天</option><option value="82" label="82天">82天</option><option value="83" label="83天">83天</option><option value="84" label="84天">84天</option><option value="85" label="85天">85天</option><option value="86" label="86天">86天</option><option value="87" label="87天">87天</option><option value="88" label="88天">88天</option><option value="89" label="89天">89天</option><option value="90" label="90天">90天</option></select> 生效，有效天数 <select ng-model="award.cft" ng-options="i as i+'天' for i in award.$fixedTermList track by i" class="codeFixedTerm input wxCardInput ng-pristine ng-untouched ng-valid"><option value="1" label="1天">1天</option><option value="2" label="2天">2天</option><option value="3" label="3天">3天</option><option value="4" label="4天">4天</option><option value="5" label="5天">5天</option><option value="6" label="6天">6天</option><option value="7" label="7天">7天</option><option value="8" label="8天">8天</option><option value="9" label="9天">9天</option><option value="10" label="10天">10天</option><option value="11" label="11天">11天</option><option value="12" label="12天">12天</option><option value="13" label="13天">13天</option><option value="14" label="14天">14天</option><option value="15" label="15天">15天</option><option value="16" label="16天">16天</option><option value="17" label="17天">17天</option><option value="18" label="18天">18天</option><option value="19" label="19天">19天</option><option value="20" label="20天">20天</option><option value="21" label="21天">21天</option><option value="22" label="22天">22天</option><option value="23" label="23天">23天</option><option value="24" label="24天">24天</option><option value="25" label="25天">25天</option><option value="26" label="26天">26天</option><option value="27" label="27天">27天</option><option value="28" label="28天">28天</option><option value="29" label="29天">29天</option><option value="30" label="30天" selected="selected">30天</option><option value="31" label="31天">31天</option><option value="32" label="32天">32天</option><option value="33" label="33天">33天</option><option value="34" label="34天">34天</option><option value="35" label="35天">35天</option><option value="36" label="36天">36天</option><option value="37" label="37天">37天</option><option value="38" label="38天">38天</option><option value="39" label="39天">39天</option><option value="40" label="40天">40天</option><option value="41" label="41天">41天</option><option value="42" label="42天">42天</option><option value="43" label="43天">43天</option><option value="44" label="44天">44天</option><option value="45" label="45天">45天</option><option value="46" label="46天">46天</option><option value="47" label="47天">47天</option><option value="48" label="48天">48天</option><option value="49" label="49天">49天</option><option value="50" label="50天">50天</option><option value="51" label="51天">51天</option><option value="52" label="52天">52天</option><option value="53" label="53天">53天</option><option value="54" label="54天">54天</option><option value="55" label="55天">55天</option><option value="56" label="56天">56天</option><option value="57" label="57天">57天</option><option value="58" label="58天">58天</option><option value="59" label="59天">59天</option><option value="60" label="60天">60天</option><option value="61" label="61天">61天</option><option value="62" label="62天">62天</option><option value="63" label="63天">63天</option><option value="64" label="64天">64天</option><option value="65" label="65天">65天</option><option value="66" label="66天">66天</option><option value="67" label="67天">67天</option><option value="68" label="68天">68天</option><option value="69" label="69天">69天</option><option value="70" label="70天">70天</option><option value="71" label="71天">71天</option><option value="72" label="72天">72天</option><option value="73" label="73天">73天</option><option value="74" label="74天">74天</option><option value="75" label="75天">75天</option><option value="76" label="76天">76天</option><option value="77" label="77天">77天</option><option value="78" label="78天">78天</option><option value="79" label="79天">79天</option><option value="80" label="80天">80天</option><option value="81" label="81天">81天</option><option value="82" label="82天">82天</option><option value="83" label="83天">83天</option><option value="84" label="84天">84天</option><option value="85" label="85天">85天</option><option value="86" label="86天">86天</option><option value="87" label="87天">87天</option><option value="88" label="88天">88天</option><option value="89" label="89天">89天</option><option value="90" label="90天">90天</option></select>
                            </div>
                            <div class="tipsColor ng-hide" ng-show="award.awardtype!=5&amp;&amp;award.genewxcard">微信优惠券的使用期限在活动发布后只能延长不能缩短</div>
                        </div>
                    </div>
                    <div class="openContactAward awardSettingLine ERR_lock ERR_lock_strict" ed-show="!game._setting.linkInfoAll &amp;&amp; game._setting.linkInfotype == 4" style="display: none;">
                        <span class="leftTitle2"><span class="awardTitle">联系信息：</span></span>
                        <input type="radio" id="openContactAward0" ng-value="true" ng-model="award.oplink" class="openContact ng-pristine ng-untouched ng-valid" name="contactAward0" value="true"><label for="openContactAward0">开启</label>
                        <input type="radio" id="closeContactAward0" ng-value="false" ng-model="award.oplink" class="closeContact ng-pristine ng-untouched ng-valid" name="contactAward0" value="false"><label for="closeContactAward0">关闭</label>
                    </div>
                    <!-- ngIf: ::!game.$$afterWXCardModify && game.$$afterWxCard && !isComfort -->
                    <div class="baseLine3 awardSettingLine">
                        <div class="showAwardDetailLine pointer" style="padding-right:28px;">
                            <span style="margin-left: 30px;">详情设置</span>
                            <div class="detailIcon awardDetailIcon close"></div>
                        </div>
                        <div style="border-bottom:1px #DCDCDC dashed;width:545px;margin:auto;"></div>
                    </div>
                    <div class="awardDetailSetting">
                        <!-- ngIf: ::!isComfort || !game.$$afterComCodeModify --><div ng-if="::!isComfort || !game.$$afterComCodeModify" class="verTipsBox baseLine3 awardSettingLine setCusCodeBox ng-scope" ed-show="award.$type.cuscode" style="display: block;">
                            <span class="leftTitle2"><span class="powerIcon ver_biz flag"></span><div class="awardTitle">生成券号：</div></span>
                            <input id="sysAwardCode0" ng-model="award.iscuscode" ng-value="false" class="sysAwardCode ng-pristine ng-untouched ng-valid" type="radio" name="setCusCode0" ng-disabled="::game.$$isPublish &amp;&amp; award.iscuscode" value="false"><label for="sysAwardCode0">系统生成</label>
                            <input id="cusAwardCode0" ng-model="award.iscuscode" ng-value="true" class="cusAwardCode js_ver ng-pristine ng-untouched ng-valid" _ver="2" type="radio" name="setCusCode0" ng-disabled="::game.$$isPublish &amp;&amp; !award.iscuscode" value="true" disabled="disabled"><label for="cusAwardCode0">手工导入</label>
                            <!-- ngIf: ::!isComfort --><div ng-if="::!isComfort" class="cusCodeInputBox ng-scope ERR_lock ERR_lock_strict" ed-show="!award.$isExcelCode &amp;&amp; award.iscuscode" style="display: none;">
                                <textarea class="cusCodeBox awardTextArea awardMg ng-binding" ng-disabled="::game.$$isPublish"></textarea>
                                <div class="tipsColor awardMg  in-bl" style="width: 450px;">8000个券号以上请先输入奖品数量再上传，一行一个券号，券号数量与奖品数量需一致，发布后生成券号方式将无法更改</div>
                                <div class="checkCuscodeBtn in-bl pointer awardMg" ng-hide="::game.$$isPublish">检测格式</div>
                            </div><!-- end ngIf: ::!isComfort -->
                            <!-- ngIf: ::isComfort -->
                            <div class="uploadCusCode awardMg ERR_lock ERR_lock_strict" ed-show="award.$isExcelCode &amp;&amp; award.iscuscode" style="display: none;">

                                <div class="uploadBtn upload main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="application/msexcel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"><a id="file_upload_1-button" href="###" class="uploadify-button">上传文件</a></div>
                                <div class="cusCodeFile">
                                    <a href="###" ng-show="!game.$$isPublish &amp;&amp; award.excelName != ''" ng-click="downloadCusCode(false,index)" class="ng-binding ng-hide">兑奖码.xls</a>
                                    <span class="errMsg hide">请上传文件</span>
                                </div>

                                <div class="downloadBtn"><a ng-click="downloadCusCode(true,index)" href="###">下载模版</a></div>
                                <div class="uploadTip tipsColor in-bl">
                                    每个券号不超过20个字符，券号数量与奖品数量需一致，发布后生成券号方式将无法更改
                                </div>
                            </div>
                            <form class="exportCusCodeForm ng-pristine ng-valid" method="post" action="">
                                <textarea name="codeList" class="cusCodeStr hide"></textarea>
                            </form>
                        </div><!-- end ngIf: ::!isComfort || !game.$$afterComCodeModify -->

                        <div class="awardOtherSetting">

                            <div class="setAwardTimeLimitBox baseLine3 awardSettingLine" ed-show="award.$type.term" style="display: block;">
                                <span class="leftTitle2"><div class="awardTitle">可用时段：</div></span>
                                <input id="allTimeLimit0" ng-model="award.$timeLimitSelAll" ng-value="true" class="allTimeLimit ng-pristine ng-untouched ng-valid" type="radio" name="timeLimitType0" value="true"><label for="allTimeLimit0">全部时段</label>
                                <input id="someTimeLimit0" ng-model="award.$timeLimitSelAll" ng-value="false" class="someTimeLimit ng-pristine ng-untouched ng-valid" type="radio" name="timeLimitType0" value="false"><label for="someTimeLimit0">部分时段</label>
                                <div id="timeLimitSelBox0" class="timeLimitSelBox blurCheck awardMg ERR_lock ERR_lock_strict" ed-hide="award.$timeLimitSelAll" style="display: none;">
                                    <!-- ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome0_0" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay0" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome0_0" class="ng-binding">周一</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome0_1" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay0" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome0_1" class="ng-binding">周二</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome0_2" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay0" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome0_2" class="ng-binding">周三</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome0_3" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay0" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome0_3" class="ng-binding">周四</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome0_4" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay0" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome0_4" class="ng-binding">周五</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome0_5" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay0" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome0_5" class="ng-binding">周六</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome0_6" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay0" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome0_6" class="ng-binding">周日</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) -->
                                </div>
                            </div>
                            <div class="setAwardSubTitleBox baseLine3 awardSettingLine">
                                <span class="leftTitle2"><div class="awardTitle">副标题：</div></span>
                                <input ng-model="award.stl" class="awardSubTile input input1 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>

                            <div class="setServicePhoneBox baseLine3 awardSettingLine">
                                <span class="leftTitle2"><div class="awardTitle">客服电话：</div></span>
                                <input ng-model="award.servicepho" class="servicePhone input input1 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>

                        </div>

                        <div class="setCashInfoBox baseLine3 awardSettingLine ">
                            <span class="leftTitle2" style="vertical-align:top"><div class="awardTitle alignTop ng-binding">兑奖须知：</div></span>
                            <textarea ng-model="award.cashinfo" ng-trim="false" class="cashInfoContent input awardTextArea wxCardInput ng-pristine ng-untouched ng-valid"></textarea>
                        </div>

                        <div class="setAwardBtnBox baseLine3 awardSettingLine" ed-show="!award.$type.btn" style="display: block;">
                            <span class="leftTitle2"><div class="awardTitle">自定义按钮：</div>
                            </span>
                            <input id="closeAwardBtn0" ng-model="award.attention" ng-value="::1" class="closeAwardBtn cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardBtn0" value="1"><label for="closeAwardBtn0">关闭</label>
                            <input id="openAwardBtn0" ng-model="award.attention" ng-value="::2" class="openAwardBtn cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardBtn0" value="2"><label for="openAwardBtn0">页面跳转</label>
                            <span ng-hide="award.awardtype == 4"><input id="newAttention0" ng-model="award.attention" ng-value="::3" type="radio" name="cusAwardBtn0" class="newAttention cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" value="3"><label for="newAttention0">一键关注</label></span>
                            <div class="awardBtnBox awardMg ERR_lock ERR_lock_strict" ed-hide="award.attention == 1" style="display: none;">
                                <div class="setAwardCusBtnBox baseLine3">
                                    <span class="leftTitle2"><span class="flag">*</span>按钮名称：</span>
                                    <input ng-model="award.btn" class="awartBtnTitle input input6 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                </div>
                                <div class="baseLine3 uploadQrCode">
                                    <span class="leftTitle2"><span class="AttentionName ng-binding">微信公众号：</span></span>
                                    <input ng-model="award.btl" ng-show="award.attention == 2" class="awardBtnLink input input6 wxCardInput ng-pristine ng-untouched ng-valid ng-valid-maxlength ng-hide" maxlength="1000" type="text">
                                    <div id="AttentionBox0" ng-show="award.attention == 3" style="display:inline-block" class="AttentionBox ng-hide">
                                        <div class="attentionImg comUploadImg">
                                            <img ng-src="//hd.faisys.com/image/qrcodeImg.jpg" onload="hdFaiOperateImg(this);" src="//hd.faisys.com/image/qrcodeImg.jpg" width="52" height="52" style="display: block;">
                                        </div>
                                        <div class="QRloaBox comUploadBox chooseImg">
                                            <span id="AtentionBtn0" class="btn main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="image/bmp,image/jpg,image/png,image/gif,image/jpeg"><a id="file_upload_1-button" href="###" class="uploadify-button">＋ 上传二维码</a></span>
                                            <a id="attentionBtn0" class="comUploadExplain aTips" target="_blank" href="http://jz.faisco.com/blog/1647" style="display:block;">如何找到公众号二维码？</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div><!-- end ngRepeat: award in ::game._awardList --><div class="awardSettingBox ng-scope hide" ng-repeat="award in ::game._awardList" ng-controller="awardCtrl" ng-class="::{'hide':index != game.$checkeIndex}" ed-lock="!award.$isOpenAward" style="left: 0px; display: block;">
                    <div class="baseLine awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖项等级：</div></span>
                        <input ng-model="award.style" class="awardStyle input input1 ng-pristine ng-untouched ng-valid" type="text">
                    </div>

                    <!-- ngIf: award.awardType != -1 --><div ng-if="award.awardType != -1" class="baseLine3 awardSettingLine ng-scope">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖品类型：</div></span>
                        <div class="awardTypeSetBox in-bl">
                            <div class="awardTypeValue divBeInput" ng-click="toggleAwardTypeBox()" ng-class="{'disableBg':award.$disabled}">
                                <span class="type ng-binding">礼品</span><!-- ngIf: award.$awardTypeItem.ver -->
                                <div class="detailIcon"></div>
                            </div>
                            <div class="awardTypeBox ng-hide" ng-show="showAwardTypeBox">
                                <!-- ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope checked"><span class="type ng-binding">礼品</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">门店优惠券</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">电商优惠券</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">微信口令红包</span><!-- ngIf: ::info.ver --><span ng-if="::info.ver" style="margin-left:3px;" class="powerIcon flag ng-scope ver_biz" ng-class="::game.$$verInfo.map[info.ver].class"></span><!-- end ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">微信优惠券</span><!-- ngIf: ::info.ver --><span ng-if="::info.ver" style="margin-left:3px;" class="powerIcon flag ng-scope ver_biz" ng-class="::game.$$verInfo.map[info.ver].class"></span><!-- end ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list -->
                            </div>
                        </div>
                        <div class="tipsColor awardMg">活动发布后类型将无法更改</div>
                        <!-- ngIf: ::!isComfort --><div ng-if="::!isComfort" ng-show="award.awardtype == 5" class="tipsColor awardMg passWordredTips ng-scope ng-hide">由于口令红包需关注后方可领取，有可能被微信封公众号，请慎用！</div><!-- end ngIf: ::!isComfort -->
                        <!-- ngIf: ::!isComfort&&game.$$afterWXCardModify --><div ng-if="::!isComfort&amp;&amp;game.$$afterWXCardModify" ng-show="award.awardtype == 4" class="tipsColor awardMg ng-scope ng-hide">生成卡券后，<span style="color:#f00">请勿</span>到微信公众平台内<span style="color:#f00">操作卡券</span></div><!-- end ngIf: ::!isComfort&&game.$$afterWXCardModify -->
                    </div><!-- end ngIf: award.awardType != -1 -->
                    <!-- ngIf: ::game.$$afterWXCardModify --><div ng-if="::game.$$afterWXCardModify" class="awardWXBrandNameBox baseLine3 awardSettingLine ng-scope ERR_lock ERR_lock_strict" ed-show="award.awardtype == 4" style="display: none;">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">卡券商户：</div></span>
                        <input id="wxCardName1" ng-model="award.wxcardcomname" class="input1 hd-wxCardName-value ng-pristine ng-untouched ng-valid" type="text" placeholder="请填写卡券的商户名称(如：海底捞)" ng-disabled="game.$$isPublish&amp;&amp;awardLast().genewxcard">
                        <div class="tipsColor awardMg">确认发布后无法修改，请认真选择！<a href="http://hd.faisco.com/news/4232" target="_blank" class="aTips">了解更多</a></div>
                        <div class="tipsColor awardMg">
                            注：卡券商户名称请勿与授权公众号名称相差太大，否则将有可能被<br>
                            微信视为代建而查封，卡券将无法使用！
                        </div>
                    </div><!-- end ngIf: ::game.$$afterWXCardModify -->
                    <div class="awardDescribeBox baseLine3 awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖项名称：</div></span>
                        <input ng-model="award.name" ng-disabled="award.$disabled" class="awardDescribe input input1 ng-pristine ng-untouched ng-valid" type="text">
                        <div class="tipsColor awardMg">活动发布后名称将无法更改</div>
                    </div>
                    <!-- ngIf: ::isComfort&&false -->
                    <!-- 奖品图片 HYKJ -->
                    <!-- ngIf: ::!isComfort && game.style == 48 -->

                    <!-- 未发布奖品显示逻辑 -->
                    <!-- ngIf: ::!isComfort && !game.$$isPublish --><div ng-if="::!isComfort &amp;&amp; !game.$$isPublish" class="baseLine3 amounLine awardSettingLine ng-scope">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖品数量：</div></span>
                        <input ng-model="award.amount" model-format="int" ng-blur="!award.amount&amp;&amp;(award.amount=0)" class="awardAmount input onlyNum input1 ng-pristine ng-untouched ng-valid ng-valid-maxlength" maxlength="5" type="text" name="">
                    </div><!-- end ngIf: ::!isComfort && !game.$$isPublish -->
                    <!-- ngIf: ::!isComfort && game.$$isPublish -->

                    <!-- ngIf: ::!isComfort && game.$$afterWXCardModify --><div ng-if="::!isComfort &amp;&amp; game.$$afterWXCardModify" class="setAwardQRCodeBox baseLine3 awardSettingLine ng-scope ERR_lock ERR_lock_strict" ed-show="award.awardtype == 4" style="display: none;">
                        <span class="leftTitle2"><div class="awardTitle">核销方式：</div></span>
                        <input id="openAwardQRC1" ng-model="award.opqrc" ng-value="true" ng-disabled="award.$disabled&amp;&amp;!award.opqrc" class="openAwardQRC ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardQRC1" value="true"><label for="openAwardQRC1">二维码</label>
                        <input id="closeAwardQRC1" ng-model="award.opqrc" ng-value="false" ng-disabled="award.$disabled&amp;&amp;award.opqrc" class="closeAwardQRC ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardQRC1" value="false"><label for="closeAwardQRC1">仅卡券号</label>
                        <div class="tipsColor awardMg">活动发布后核销方式将无法更改</div>
                    </div><!-- end ngIf: ::!isComfort && game.$$afterWXCardModify -->
                    <!-- ngIf: ::!isComfort && game.$$afterWxCard --><div ng-if="::!isComfort &amp;&amp; game.$$afterWxCard" ed-show="award.awardtype == 5" class="passwordrednumBox baseLine3 awardSettingLine hide ng-scope ERR_lock ERR_lock_strict" style="display: none;">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">单个金额：</div></span>
                        <input class="passwordrednum input input1 ng-pristine ng-untouched ng-valid ng-valid-maxlength" ng-model="award.passwordrednum" model-format="float ::passwordredFormat" ng-blur="!award.passwordrednum&amp;&amp;(award.passwordrednum=100)" ng-disabled="award.$disabled" maxlength="6" type="text" name=""> 元
                        <div class="tipsColor awardMg">微信规定单个红包金额必须高于1元低于200元</div>
                    </div><!-- end ngIf: ::!isComfort && game.$$afterWxCard -->
                    <!-- ngIf: ::!isComfort && game.style == 48 -->
                    <!-- ngIf: ::game.$$isAwardWithPot && !isComfort -->

                    <div class="setCashTypeBox baseLine3 awardSettingLine" ng-show="award.$type.showcashtype">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">兑奖方式：</div></span>
                        <input id="cashUnderline1" ng-model="award.cashtype" ng-value="::2" class="cashUnderline wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType1" value="2"><label for="cashUnderline1">线下兑奖</label>

                        <!-- ngIf: ::!isComfort || game.$$afterComCodeModify --><span ng-if="::!isComfort || game.$$afterComCodeModify" class="ng-scope"><input id="cashWx1" ng-model="award.cashtype" ng-value="::3" class="cashWx wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType1" ng-disabled="::!game.$$hasWXCash" value="3" disabled="disabled"><label for="cashWx1">公众号兑奖</label></span><!-- end ngIf: ::!isComfort || game.$$afterComCodeModify -->
                        <input id="cashWeb1" ng-model="award.cashtype" ng-value="::4" class="cashWeb wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType1" value="4"><label for="cashWeb1">网页兑奖</label>
                        <div class="tipsColor cashWxTip ng-hide" ng-show="award.cashtype == 3">开通公众号核销功能后，玩家回复兑奖码到公众号，将实现自动核销<a href="http://hd.faisco.com/news/6341" class="aTips" target="_blank">了解更多</a>
                        </div>

                    </div>
                    <div class="setAwardBox" ed-show="award.$type.showsitebox" style="display: block;">
                        <div class="setAwardOptInfoBox baseLine3 awardSettingLine">
                            <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">操作提示：</div></span>
                            <input ng-model="award.opti" class="awardOptInfo input input1 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                        </div>
                        <div class="setAwardCashSiteBox baseLine3 awardSettingLine clearfix" ed-hide="award.$type.sitetype=='none'">
                            <div class="leftTitle2"><span class="flag">*</span><div class="awardTitle ng-binding">兑奖地址：</div></div>
                            <div class="rightBox">

                                <div class="cashAddress" ed-hide="(award.awardtype == 0 || (award.awardtype == 2 &amp;&amp; award.cashtype == 2)) &amp;&amp; award.storeType != 1">
                                    <div class="cashSiteIpt" ed-show="award.$type.sitetype == 'text'" style="display: block;">
                                        <input ng-model="award.cashsite" class="awardCashSite input input1 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                    </div>
                                    <div class="cashUrlIpt ERR_lock ERR_lock_strict" ed-show="award.$type.sitetype == 'url'" style="display: none;">
                                        <input ng-model="award.$cashsiteurl" class="awardCashSiteUrl input input6 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="setCodeTimeBox baseLine baseLine3 awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="usePeriod awardTitle ng-binding">兑奖期限：</div></span>
                        <input ng-model="award.t_type" value="DATE_TYPE_FIX_TIME_RANGE" id="timeRangeType1" class="timeRangeType ng-pristine ng-untouched ng-valid" ng-disabled="(award.$disabled || (game.$$isPublish &amp;&amp; awardLast().genewxcard)) &amp;&amp; award.t_type == 'DATE_TYPE_FIX_TERM'" type="radio" name="timeType1"><label for="timeRangeType1">固定日期</label>
                        <input ng-model="award.t_type" value="DATE_TYPE_FIX_TERM" id="termType1" class="termType ng-pristine ng-untouched ng-valid" ng-disabled="(award.$disabled || (game.$$isPublish &amp;&amp; awardLast().genewxcard)) &amp;&amp; award.t_type == 'DATE_TYPE_FIX_TIME_RANGE'" type="radio" name="timeType1"><label for="termType1">固定时长</label>
                        <div class="codeTimeBox awardMg">
                            <div id="timeRangeBox1" class="timeRangeBox" ng-show="award.t_type == 'DATE_TYPE_FIX_TIME_RANGE'">
                                <input class="useCodeBeginTime input pointer wxCardInput hasDatepicker" style="width:202px" readonly="" type="text" ng-value="::award.cbt" value="2017-06-13 00:00" id="dp1497530394936"> 至
                                <input class="useCodeEndTime input pointer wxCardInput hasDatepicker" style="width:202px" readonly="" type="text" ng-value="::award.cet" value="2017-06-20 23:59" id="dp1497530394937">
                            </div>
                            <div id="termBox1" class="termBox ng-hide" ng-show="award.t_type == 'DATE_TYPE_FIX_TERM'">
                                领取后 <select ng-model="award.cfbt" ng-options="i as (i==0?'当天':i+'天') for i in award.$fixedBeginTermList track by i" class="codeFixedBeginTerm input wxCardInput ng-pristine ng-untouched ng-valid"><option value="0" label="当天" selected="selected">当天</option><option value="1" label="1天">1天</option><option value="2" label="2天">2天</option><option value="3" label="3天">3天</option><option value="4" label="4天">4天</option><option value="5" label="5天">5天</option><option value="6" label="6天">6天</option><option value="7" label="7天">7天</option><option value="8" label="8天">8天</option><option value="9" label="9天">9天</option><option value="10" label="10天">10天</option><option value="11" label="11天">11天</option><option value="12" label="12天">12天</option><option value="13" label="13天">13天</option><option value="14" label="14天">14天</option><option value="15" label="15天">15天</option><option value="16" label="16天">16天</option><option value="17" label="17天">17天</option><option value="18" label="18天">18天</option><option value="19" label="19天">19天</option><option value="20" label="20天">20天</option><option value="21" label="21天">21天</option><option value="22" label="22天">22天</option><option value="23" label="23天">23天</option><option value="24" label="24天">24天</option><option value="25" label="25天">25天</option><option value="26" label="26天">26天</option><option value="27" label="27天">27天</option><option value="28" label="28天">28天</option><option value="29" label="29天">29天</option><option value="30" label="30天">30天</option><option value="31" label="31天">31天</option><option value="32" label="32天">32天</option><option value="33" label="33天">33天</option><option value="34" label="34天">34天</option><option value="35" label="35天">35天</option><option value="36" label="36天">36天</option><option value="37" label="37天">37天</option><option value="38" label="38天">38天</option><option value="39" label="39天">39天</option><option value="40" label="40天">40天</option><option value="41" label="41天">41天</option><option value="42" label="42天">42天</option><option value="43" label="43天">43天</option><option value="44" label="44天">44天</option><option value="45" label="45天">45天</option><option value="46" label="46天">46天</option><option value="47" label="47天">47天</option><option value="48" label="48天">48天</option><option value="49" label="49天">49天</option><option value="50" label="50天">50天</option><option value="51" label="51天">51天</option><option value="52" label="52天">52天</option><option value="53" label="53天">53天</option><option value="54" label="54天">54天</option><option value="55" label="55天">55天</option><option value="56" label="56天">56天</option><option value="57" label="57天">57天</option><option value="58" label="58天">58天</option><option value="59" label="59天">59天</option><option value="60" label="60天">60天</option><option value="61" label="61天">61天</option><option value="62" label="62天">62天</option><option value="63" label="63天">63天</option><option value="64" label="64天">64天</option><option value="65" label="65天">65天</option><option value="66" label="66天">66天</option><option value="67" label="67天">67天</option><option value="68" label="68天">68天</option><option value="69" label="69天">69天</option><option value="70" label="70天">70天</option><option value="71" label="71天">71天</option><option value="72" label="72天">72天</option><option value="73" label="73天">73天</option><option value="74" label="74天">74天</option><option value="75" label="75天">75天</option><option value="76" label="76天">76天</option><option value="77" label="77天">77天</option><option value="78" label="78天">78天</option><option value="79" label="79天">79天</option><option value="80" label="80天">80天</option><option value="81" label="81天">81天</option><option value="82" label="82天">82天</option><option value="83" label="83天">83天</option><option value="84" label="84天">84天</option><option value="85" label="85天">85天</option><option value="86" label="86天">86天</option><option value="87" label="87天">87天</option><option value="88" label="88天">88天</option><option value="89" label="89天">89天</option><option value="90" label="90天">90天</option></select> 生效，有效天数 <select ng-model="award.cft" ng-options="i as i+'天' for i in award.$fixedTermList track by i" class="codeFixedTerm input wxCardInput ng-pristine ng-untouched ng-valid"><option value="1" label="1天">1天</option><option value="2" label="2天">2天</option><option value="3" label="3天">3天</option><option value="4" label="4天">4天</option><option value="5" label="5天">5天</option><option value="6" label="6天">6天</option><option value="7" label="7天">7天</option><option value="8" label="8天">8天</option><option value="9" label="9天">9天</option><option value="10" label="10天">10天</option><option value="11" label="11天">11天</option><option value="12" label="12天">12天</option><option value="13" label="13天">13天</option><option value="14" label="14天">14天</option><option value="15" label="15天">15天</option><option value="16" label="16天">16天</option><option value="17" label="17天">17天</option><option value="18" label="18天">18天</option><option value="19" label="19天">19天</option><option value="20" label="20天">20天</option><option value="21" label="21天">21天</option><option value="22" label="22天">22天</option><option value="23" label="23天">23天</option><option value="24" label="24天">24天</option><option value="25" label="25天">25天</option><option value="26" label="26天">26天</option><option value="27" label="27天">27天</option><option value="28" label="28天">28天</option><option value="29" label="29天">29天</option><option value="30" label="30天" selected="selected">30天</option><option value="31" label="31天">31天</option><option value="32" label="32天">32天</option><option value="33" label="33天">33天</option><option value="34" label="34天">34天</option><option value="35" label="35天">35天</option><option value="36" label="36天">36天</option><option value="37" label="37天">37天</option><option value="38" label="38天">38天</option><option value="39" label="39天">39天</option><option value="40" label="40天">40天</option><option value="41" label="41天">41天</option><option value="42" label="42天">42天</option><option value="43" label="43天">43天</option><option value="44" label="44天">44天</option><option value="45" label="45天">45天</option><option value="46" label="46天">46天</option><option value="47" label="47天">47天</option><option value="48" label="48天">48天</option><option value="49" label="49天">49天</option><option value="50" label="50天">50天</option><option value="51" label="51天">51天</option><option value="52" label="52天">52天</option><option value="53" label="53天">53天</option><option value="54" label="54天">54天</option><option value="55" label="55天">55天</option><option value="56" label="56天">56天</option><option value="57" label="57天">57天</option><option value="58" label="58天">58天</option><option value="59" label="59天">59天</option><option value="60" label="60天">60天</option><option value="61" label="61天">61天</option><option value="62" label="62天">62天</option><option value="63" label="63天">63天</option><option value="64" label="64天">64天</option><option value="65" label="65天">65天</option><option value="66" label="66天">66天</option><option value="67" label="67天">67天</option><option value="68" label="68天">68天</option><option value="69" label="69天">69天</option><option value="70" label="70天">70天</option><option value="71" label="71天">71天</option><option value="72" label="72天">72天</option><option value="73" label="73天">73天</option><option value="74" label="74天">74天</option><option value="75" label="75天">75天</option><option value="76" label="76天">76天</option><option value="77" label="77天">77天</option><option value="78" label="78天">78天</option><option value="79" label="79天">79天</option><option value="80" label="80天">80天</option><option value="81" label="81天">81天</option><option value="82" label="82天">82天</option><option value="83" label="83天">83天</option><option value="84" label="84天">84天</option><option value="85" label="85天">85天</option><option value="86" label="86天">86天</option><option value="87" label="87天">87天</option><option value="88" label="88天">88天</option><option value="89" label="89天">89天</option><option value="90" label="90天">90天</option></select>
                            </div>
                            <div class="tipsColor ng-hide" ng-show="award.awardtype!=5&amp;&amp;award.genewxcard">微信优惠券的使用期限在活动发布后只能延长不能缩短</div>
                        </div>
                    </div>
                    <div class="openContactAward awardSettingLine ERR_lock ERR_lock_strict" ed-show="!game._setting.linkInfoAll &amp;&amp; game._setting.linkInfotype == 4" style="display: none;">
                        <span class="leftTitle2"><span class="awardTitle">联系信息：</span></span>
                        <input type="radio" id="openContactAward1" ng-value="true" ng-model="award.oplink" class="openContact ng-pristine ng-untouched ng-valid" name="contactAward1" value="true"><label for="openContactAward1">开启</label>
                        <input type="radio" id="closeContactAward1" ng-value="false" ng-model="award.oplink" class="closeContact ng-pristine ng-untouched ng-valid" name="contactAward1" value="false"><label for="closeContactAward1">关闭</label>
                    </div>
                    <!-- ngIf: ::!game.$$afterWXCardModify && game.$$afterWxCard && !isComfort -->
                    <div class="baseLine3 awardSettingLine">
                        <div class="showAwardDetailLine pointer" style="padding-right:28px;">
                            <span style="margin-left: 30px;">详情设置</span>
                            <div class="detailIcon awardDetailIcon close"></div>
                        </div>
                        <div style="border-bottom:1px #DCDCDC dashed;width:545px;margin:auto;"></div>
                    </div>
                    <div class="awardDetailSetting">
                        <!-- ngIf: ::!isComfort || !game.$$afterComCodeModify --><div ng-if="::!isComfort || !game.$$afterComCodeModify" class="verTipsBox baseLine3 awardSettingLine setCusCodeBox ng-scope" ed-show="award.$type.cuscode" style="display: block;">
                            <span class="leftTitle2"><span class="powerIcon ver_biz flag"></span><div class="awardTitle">生成券号：</div></span>
                            <input id="sysAwardCode1" ng-model="award.iscuscode" ng-value="false" class="sysAwardCode ng-pristine ng-untouched ng-valid" type="radio" name="setCusCode1" ng-disabled="::game.$$isPublish &amp;&amp; award.iscuscode" value="false"><label for="sysAwardCode1">系统生成</label>
                            <input id="cusAwardCode1" ng-model="award.iscuscode" ng-value="true" class="cusAwardCode js_ver ng-pristine ng-untouched ng-valid" _ver="2" type="radio" name="setCusCode1" ng-disabled="::game.$$isPublish &amp;&amp; !award.iscuscode" value="true" disabled="disabled"><label for="cusAwardCode1">手工导入</label>
                            <!-- ngIf: ::!isComfort --><div ng-if="::!isComfort" class="cusCodeInputBox ng-scope ERR_lock ERR_lock_strict" ed-show="!award.$isExcelCode &amp;&amp; award.iscuscode" style="display: none;">
                                <textarea class="cusCodeBox awardTextArea awardMg ng-binding" ng-disabled="::game.$$isPublish"></textarea>
                                <div class="tipsColor awardMg  in-bl" style="width: 450px;">8000个券号以上请先输入奖品数量再上传，一行一个券号，券号数量与奖品数量需一致，发布后生成券号方式将无法更改</div>
                                <div class="checkCuscodeBtn in-bl pointer awardMg" ng-hide="::game.$$isPublish">检测格式</div>
                            </div><!-- end ngIf: ::!isComfort -->
                            <!-- ngIf: ::isComfort -->
                            <div class="uploadCusCode awardMg ERR_lock ERR_lock_strict" ed-show="award.$isExcelCode &amp;&amp; award.iscuscode" style="display: none;">

                                <div class="uploadBtn upload main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="application/msexcel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"><a id="file_upload_1-button" href="###" class="uploadify-button">上传文件</a></div>
                                <div class="cusCodeFile">
                                    <a href="###" ng-show="!game.$$isPublish &amp;&amp; award.excelName != ''" ng-click="downloadCusCode(false,index)" class="ng-binding ng-hide">兑奖码.xls</a>
                                    <span class="errMsg hide">请上传文件</span>
                                </div>

                                <div class="downloadBtn"><a ng-click="downloadCusCode(true,index)" href="###">下载模版</a></div>
                                <div class="uploadTip tipsColor in-bl">
                                    每个券号不超过20个字符，券号数量与奖品数量需一致，发布后生成券号方式将无法更改
                                </div>
                            </div>
                            <form class="exportCusCodeForm ng-pristine ng-valid" method="post" action="">
                                <textarea name="codeList" class="cusCodeStr hide"></textarea>
                            </form>
                        </div><!-- end ngIf: ::!isComfort || !game.$$afterComCodeModify -->

                        <div class="awardOtherSetting">

                            <div class="setAwardTimeLimitBox baseLine3 awardSettingLine" ed-show="award.$type.term" style="display: block;">
                                <span class="leftTitle2"><div class="awardTitle">可用时段：</div></span>
                                <input id="allTimeLimit1" ng-model="award.$timeLimitSelAll" ng-value="true" class="allTimeLimit ng-pristine ng-untouched ng-valid" type="radio" name="timeLimitType1" value="true"><label for="allTimeLimit1">全部时段</label>
                                <input id="someTimeLimit1" ng-model="award.$timeLimitSelAll" ng-value="false" class="someTimeLimit ng-pristine ng-untouched ng-valid" type="radio" name="timeLimitType1" value="false"><label for="someTimeLimit1">部分时段</label>
                                <div id="timeLimitSelBox1" class="timeLimitSelBox blurCheck awardMg ERR_lock ERR_lock_strict" ed-hide="award.$timeLimitSelAll" style="display: none;">
                                    <!-- ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome1_0" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay1" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome1_0" class="ng-binding">周一</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome1_1" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay1" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome1_1" class="ng-binding">周二</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome1_2" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay1" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome1_2" class="ng-binding">周三</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome1_3" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay1" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome1_3" class="ng-binding">周四</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome1_4" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay1" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome1_4" class="ng-binding">周五</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome1_5" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay1" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome1_5" class="ng-binding">周六</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome1_6" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay1" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome1_6" class="ng-binding">周日</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) -->
                                </div>
                            </div>
                            <div class="setAwardSubTitleBox baseLine3 awardSettingLine">
                                <span class="leftTitle2"><div class="awardTitle">副标题：</div></span>
                                <input ng-model="award.stl" class="awardSubTile input input1 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>

                            <div class="setServicePhoneBox baseLine3 awardSettingLine">
                                <span class="leftTitle2"><div class="awardTitle">客服电话：</div></span>
                                <input ng-model="award.servicepho" class="servicePhone input input1 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>

                        </div>

                        <div class="setCashInfoBox baseLine3 awardSettingLine ">
                            <span class="leftTitle2" style="vertical-align:top"><div class="awardTitle alignTop ng-binding">兑奖须知：</div></span>
                            <textarea ng-model="award.cashinfo" ng-trim="false" class="cashInfoContent input awardTextArea wxCardInput ng-pristine ng-untouched ng-valid"></textarea>
                        </div>

                        <div class="setAwardBtnBox baseLine3 awardSettingLine" ed-show="!award.$type.btn">
                            <span class="leftTitle2"><div class="awardTitle">自定义按钮：</div>
                            </span>
                            <input id="closeAwardBtn1" ng-model="award.attention" ng-value="::1" class="closeAwardBtn cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardBtn1" value="1"><label for="closeAwardBtn1">关闭</label>
                            <input id="openAwardBtn1" ng-model="award.attention" ng-value="::2" class="openAwardBtn cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardBtn1" value="2"><label for="openAwardBtn1">页面跳转</label>
                            <span ng-hide="award.awardtype == 4"><input id="newAttention1" ng-model="award.attention" ng-value="::3" type="radio" name="cusAwardBtn1" class="newAttention cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" value="3"><label for="newAttention1">一键关注</label></span>
                            <div class="awardBtnBox awardMg ERR_lock ERR_lock_strict" ed-hide="award.attention == 1" style="display: none;">
                                <div class="setAwardCusBtnBox baseLine3">
                                    <span class="leftTitle2"><span class="flag">*</span>按钮名称：</span>
                                    <input ng-model="award.btn" class="awartBtnTitle input input6 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                </div>
                                <div class="baseLine3 uploadQrCode">
                                    <span class="leftTitle2"><span class="AttentionName ng-binding">微信公众号：</span></span>
                                    <input ng-model="award.btl" ng-show="award.attention == 2" class="awardBtnLink input input6 wxCardInput ng-pristine ng-untouched ng-valid ng-valid-maxlength ng-hide" maxlength="1000" type="text">
                                    <div id="AttentionBox1" ng-show="award.attention == 3" style="display:inline-block" class="AttentionBox ng-hide">
                                        <div class="attentionImg comUploadImg">
                                            <img ng-src="//hd.faisys.com/image/qrcodeImg.jpg" onload="hdFaiOperateImg(this);" src="//hd.faisys.com/image/qrcodeImg.jpg" width="52" height="52" style="display: block;">
                                        </div>
                                        <div class="QRloaBox comUploadBox chooseImg">
                                            <span id="AtentionBtn1" class="btn main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="image/bmp,image/jpg,image/png,image/gif,image/jpeg"><a id="file_upload_1-button" href="###" class="uploadify-button">＋ 上传二维码</a></span>
                                            <a id="attentionBtn1" class="comUploadExplain aTips" target="_blank" href="http://jz.faisco.com/blog/1647" style="display:block;">如何找到公众号二维码？</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div><!-- end ngRepeat: award in ::game._awardList --><div class="awardSettingBox ng-scope hide" ng-repeat="award in ::game._awardList" ng-controller="awardCtrl" ng-class="::{'hide':index != game.$checkeIndex}" ed-lock="!award.$isOpenAward" style="left: 500px; display: none;">
                    <div class="baseLine awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖项等级：</div></span>
                        <input ng-model="award.style" class="awardStyle input input1 ng-pristine ng-untouched ng-valid" type="text">
                    </div>

                    <!-- ngIf: award.awardType != -1 --><div ng-if="award.awardType != -1" class="baseLine3 awardSettingLine ng-scope">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖品类型：</div></span>
                        <div class="awardTypeSetBox in-bl">
                            <div class="awardTypeValue divBeInput" ng-click="toggleAwardTypeBox()" ng-class="{'disableBg':award.$disabled}">
                                <span class="type ng-binding">礼品</span><!-- ngIf: award.$awardTypeItem.ver -->
                                <div class="detailIcon"></div>
                            </div>
                            <div class="awardTypeBox ng-hide" ng-show="showAwardTypeBox">
                                <!-- ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope checked"><span class="type ng-binding">礼品</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">门店优惠券</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">电商优惠券</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">微信口令红包</span><!-- ngIf: ::info.ver --><span ng-if="::info.ver" style="margin-left:3px;" class="powerIcon flag ng-scope ver_biz" ng-class="::game.$$verInfo.map[info.ver].class"></span><!-- end ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">微信优惠券</span><!-- ngIf: ::info.ver --><span ng-if="::info.ver" style="margin-left:3px;" class="powerIcon flag ng-scope ver_biz" ng-class="::game.$$verInfo.map[info.ver].class"></span><!-- end ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list -->
                            </div>
                        </div>
                        <div class="tipsColor awardMg">活动发布后类型将无法更改</div>
                        <!-- ngIf: ::!isComfort --><div ng-if="::!isComfort" ng-show="award.awardtype == 5" class="tipsColor awardMg passWordredTips ng-scope ng-hide">由于口令红包需关注后方可领取，有可能被微信封公众号，请慎用！</div><!-- end ngIf: ::!isComfort -->
                        <!-- ngIf: ::!isComfort&&game.$$afterWXCardModify --><div ng-if="::!isComfort&amp;&amp;game.$$afterWXCardModify" ng-show="award.awardtype == 4" class="tipsColor awardMg ng-scope ng-hide">生成卡券后，<span style="color:#f00">请勿</span>到微信公众平台内<span style="color:#f00">操作卡券</span></div><!-- end ngIf: ::!isComfort&&game.$$afterWXCardModify -->
                    </div><!-- end ngIf: award.awardType != -1 -->
                    <!-- ngIf: ::game.$$afterWXCardModify --><div ng-if="::game.$$afterWXCardModify" class="awardWXBrandNameBox baseLine3 awardSettingLine ng-scope ERR_lock ERR_lock_strict" ed-show="award.awardtype == 4" style="display: none;">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">卡券商户：</div></span>
                        <input id="wxCardName2" ng-model="award.wxcardcomname" class="input1 hd-wxCardName-value ng-pristine ng-untouched ng-valid" type="text" placeholder="请填写卡券的商户名称(如：海底捞)" ng-disabled="game.$$isPublish&amp;&amp;awardLast().genewxcard">
                        <div class="tipsColor awardMg">确认发布后无法修改，请认真选择！<a href="http://hd.faisco.com/news/4232" target="_blank" class="aTips">了解更多</a></div>
                        <div class="tipsColor awardMg">
                            注：卡券商户名称请勿与授权公众号名称相差太大，否则将有可能被<br>
                            微信视为代建而查封，卡券将无法使用！
                        </div>
                    </div><!-- end ngIf: ::game.$$afterWXCardModify -->
                    <div class="awardDescribeBox baseLine3 awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖项名称：</div></span>
                        <input ng-model="award.name" ng-disabled="award.$disabled" class="awardDescribe input input1 ng-pristine ng-untouched ng-valid" type="text">
                        <div class="tipsColor awardMg">活动发布后名称将无法更改</div>
                    </div>
                    <!-- ngIf: ::isComfort&&false -->
                    <!-- 奖品图片 HYKJ -->
                    <!-- ngIf: ::!isComfort && game.style == 48 -->

                    <!-- 未发布奖品显示逻辑 -->
                    <!-- ngIf: ::!isComfort && !game.$$isPublish --><div ng-if="::!isComfort &amp;&amp; !game.$$isPublish" class="baseLine3 amounLine awardSettingLine ng-scope">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖品数量：</div></span>
                        <input ng-model="award.amount" model-format="int" ng-blur="!award.amount&amp;&amp;(award.amount=0)" class="awardAmount input onlyNum input1 ng-pristine ng-untouched ng-valid ng-valid-maxlength" maxlength="5" type="text" name="">
                    </div><!-- end ngIf: ::!isComfort && !game.$$isPublish -->
                    <!-- ngIf: ::!isComfort && game.$$isPublish -->

                    <!-- ngIf: ::!isComfort && game.$$afterWXCardModify --><div ng-if="::!isComfort &amp;&amp; game.$$afterWXCardModify" class="setAwardQRCodeBox baseLine3 awardSettingLine ng-scope ERR_lock ERR_lock_strict" ed-show="award.awardtype == 4" style="display: none;">
                        <span class="leftTitle2"><div class="awardTitle">核销方式：</div></span>
                        <input id="openAwardQRC2" ng-model="award.opqrc" ng-value="true" ng-disabled="award.$disabled&amp;&amp;!award.opqrc" class="openAwardQRC ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardQRC2" value="true"><label for="openAwardQRC2">二维码</label>
                        <input id="closeAwardQRC2" ng-model="award.opqrc" ng-value="false" ng-disabled="award.$disabled&amp;&amp;award.opqrc" class="closeAwardQRC ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardQRC2" value="false"><label for="closeAwardQRC2">仅卡券号</label>
                        <div class="tipsColor awardMg">活动发布后核销方式将无法更改</div>
                    </div><!-- end ngIf: ::!isComfort && game.$$afterWXCardModify -->
                    <!-- ngIf: ::!isComfort && game.$$afterWxCard --><div ng-if="::!isComfort &amp;&amp; game.$$afterWxCard" ed-show="award.awardtype == 5" class="passwordrednumBox baseLine3 awardSettingLine hide ng-scope ERR_lock ERR_lock_strict" style="display: none;">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">单个金额：</div></span>
                        <input class="passwordrednum input input1 ng-pristine ng-untouched ng-valid ng-valid-maxlength" ng-model="award.passwordrednum" model-format="float ::passwordredFormat" ng-blur="!award.passwordrednum&amp;&amp;(award.passwordrednum=100)" ng-disabled="award.$disabled" maxlength="6" type="text" name=""> 元
                        <div class="tipsColor awardMg">微信规定单个红包金额必须高于1元低于200元</div>
                    </div><!-- end ngIf: ::!isComfort && game.$$afterWxCard -->
                    <!-- ngIf: ::!isComfort && game.style == 48 -->
                    <!-- ngIf: ::game.$$isAwardWithPot && !isComfort -->

                    <div class="setCashTypeBox baseLine3 awardSettingLine" ng-show="award.$type.showcashtype">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">兑奖方式：</div></span>
                        <input id="cashUnderline2" ng-model="award.cashtype" ng-value="::2" class="cashUnderline wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType2" value="2"><label for="cashUnderline2">线下兑奖</label>

                        <!-- ngIf: ::!isComfort || game.$$afterComCodeModify --><span ng-if="::!isComfort || game.$$afterComCodeModify" class="ng-scope"><input id="cashWx2" ng-model="award.cashtype" ng-value="::3" class="cashWx wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType2" ng-disabled="::!game.$$hasWXCash" value="3" disabled="disabled"><label for="cashWx2">公众号兑奖</label></span><!-- end ngIf: ::!isComfort || game.$$afterComCodeModify -->
                        <input id="cashWeb2" ng-model="award.cashtype" ng-value="::4" class="cashWeb wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType2" value="4"><label for="cashWeb2">网页兑奖</label>
                        <div class="tipsColor cashWxTip ng-hide" ng-show="award.cashtype == 3">开通公众号核销功能后，玩家回复兑奖码到公众号，将实现自动核销<a href="http://hd.faisco.com/news/6341" class="aTips" target="_blank">了解更多</a>
                        </div>

                    </div>
                    <div class="setAwardBox" ed-show="award.$type.showsitebox" style="display: block;">
                        <div class="setAwardOptInfoBox baseLine3 awardSettingLine">
                            <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">操作提示：</div></span>
                            <input ng-model="award.opti" class="awardOptInfo input input1 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                        </div>
                        <div class="setAwardCashSiteBox baseLine3 awardSettingLine clearfix" ed-hide="award.$type.sitetype=='none'">
                            <div class="leftTitle2"><span class="flag">*</span><div class="awardTitle ng-binding">兑奖地址：</div></div>
                            <div class="rightBox">

                                <div class="cashAddress" ed-hide="(award.awardtype == 0 || (award.awardtype == 2 &amp;&amp; award.cashtype == 2)) &amp;&amp; award.storeType != 1">
                                    <div class="cashSiteIpt" ed-show="award.$type.sitetype == 'text'" style="display: block;">
                                        <input ng-model="award.cashsite" class="awardCashSite input input1 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                    </div>
                                    <div class="cashUrlIpt ERR_lock ERR_lock_strict" ed-show="award.$type.sitetype == 'url'" style="display: none;">
                                        <input ng-model="award.$cashsiteurl" class="awardCashSiteUrl input input6 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="setCodeTimeBox baseLine baseLine3 awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="usePeriod awardTitle ng-binding">兑奖期限：</div></span>
                        <input ng-model="award.t_type" value="DATE_TYPE_FIX_TIME_RANGE" id="timeRangeType2" class="timeRangeType ng-pristine ng-untouched ng-valid" ng-disabled="(award.$disabled || (game.$$isPublish &amp;&amp; awardLast().genewxcard)) &amp;&amp; award.t_type == 'DATE_TYPE_FIX_TERM'" type="radio" name="timeType2"><label for="timeRangeType2">固定日期</label>
                        <input ng-model="award.t_type" value="DATE_TYPE_FIX_TERM" id="termType2" class="termType ng-pristine ng-untouched ng-valid" ng-disabled="(award.$disabled || (game.$$isPublish &amp;&amp; awardLast().genewxcard)) &amp;&amp; award.t_type == 'DATE_TYPE_FIX_TIME_RANGE'" type="radio" name="timeType2"><label for="termType2">固定时长</label>
                        <div class="codeTimeBox awardMg">
                            <div id="timeRangeBox2" class="timeRangeBox" ng-show="award.t_type == 'DATE_TYPE_FIX_TIME_RANGE'">
                                <input class="useCodeBeginTime input pointer wxCardInput hasDatepicker" style="width:202px" readonly="" type="text" ng-value="::award.cbt" value="2017-06-13 00:00" id="dp1497530394938"> 至
                                <input class="useCodeEndTime input pointer wxCardInput hasDatepicker" style="width:202px" readonly="" type="text" ng-value="::award.cet" value="2017-06-20 23:59" id="dp1497530394939">
                            </div>
                            <div id="termBox2" class="termBox ng-hide" ng-show="award.t_type == 'DATE_TYPE_FIX_TERM'">
                                领取后 <select ng-model="award.cfbt" ng-options="i as (i==0?'当天':i+'天') for i in award.$fixedBeginTermList track by i" class="codeFixedBeginTerm input wxCardInput ng-pristine ng-untouched ng-valid"><option value="0" label="当天" selected="selected">当天</option><option value="1" label="1天">1天</option><option value="2" label="2天">2天</option><option value="3" label="3天">3天</option><option value="4" label="4天">4天</option><option value="5" label="5天">5天</option><option value="6" label="6天">6天</option><option value="7" label="7天">7天</option><option value="8" label="8天">8天</option><option value="9" label="9天">9天</option><option value="10" label="10天">10天</option><option value="11" label="11天">11天</option><option value="12" label="12天">12天</option><option value="13" label="13天">13天</option><option value="14" label="14天">14天</option><option value="15" label="15天">15天</option><option value="16" label="16天">16天</option><option value="17" label="17天">17天</option><option value="18" label="18天">18天</option><option value="19" label="19天">19天</option><option value="20" label="20天">20天</option><option value="21" label="21天">21天</option><option value="22" label="22天">22天</option><option value="23" label="23天">23天</option><option value="24" label="24天">24天</option><option value="25" label="25天">25天</option><option value="26" label="26天">26天</option><option value="27" label="27天">27天</option><option value="28" label="28天">28天</option><option value="29" label="29天">29天</option><option value="30" label="30天">30天</option><option value="31" label="31天">31天</option><option value="32" label="32天">32天</option><option value="33" label="33天">33天</option><option value="34" label="34天">34天</option><option value="35" label="35天">35天</option><option value="36" label="36天">36天</option><option value="37" label="37天">37天</option><option value="38" label="38天">38天</option><option value="39" label="39天">39天</option><option value="40" label="40天">40天</option><option value="41" label="41天">41天</option><option value="42" label="42天">42天</option><option value="43" label="43天">43天</option><option value="44" label="44天">44天</option><option value="45" label="45天">45天</option><option value="46" label="46天">46天</option><option value="47" label="47天">47天</option><option value="48" label="48天">48天</option><option value="49" label="49天">49天</option><option value="50" label="50天">50天</option><option value="51" label="51天">51天</option><option value="52" label="52天">52天</option><option value="53" label="53天">53天</option><option value="54" label="54天">54天</option><option value="55" label="55天">55天</option><option value="56" label="56天">56天</option><option value="57" label="57天">57天</option><option value="58" label="58天">58天</option><option value="59" label="59天">59天</option><option value="60" label="60天">60天</option><option value="61" label="61天">61天</option><option value="62" label="62天">62天</option><option value="63" label="63天">63天</option><option value="64" label="64天">64天</option><option value="65" label="65天">65天</option><option value="66" label="66天">66天</option><option value="67" label="67天">67天</option><option value="68" label="68天">68天</option><option value="69" label="69天">69天</option><option value="70" label="70天">70天</option><option value="71" label="71天">71天</option><option value="72" label="72天">72天</option><option value="73" label="73天">73天</option><option value="74" label="74天">74天</option><option value="75" label="75天">75天</option><option value="76" label="76天">76天</option><option value="77" label="77天">77天</option><option value="78" label="78天">78天</option><option value="79" label="79天">79天</option><option value="80" label="80天">80天</option><option value="81" label="81天">81天</option><option value="82" label="82天">82天</option><option value="83" label="83天">83天</option><option value="84" label="84天">84天</option><option value="85" label="85天">85天</option><option value="86" label="86天">86天</option><option value="87" label="87天">87天</option><option value="88" label="88天">88天</option><option value="89" label="89天">89天</option><option value="90" label="90天">90天</option></select> 生效，有效天数 <select ng-model="award.cft" ng-options="i as i+'天' for i in award.$fixedTermList track by i" class="codeFixedTerm input wxCardInput ng-pristine ng-untouched ng-valid"><option value="1" label="1天">1天</option><option value="2" label="2天">2天</option><option value="3" label="3天">3天</option><option value="4" label="4天">4天</option><option value="5" label="5天">5天</option><option value="6" label="6天">6天</option><option value="7" label="7天">7天</option><option value="8" label="8天">8天</option><option value="9" label="9天">9天</option><option value="10" label="10天">10天</option><option value="11" label="11天">11天</option><option value="12" label="12天">12天</option><option value="13" label="13天">13天</option><option value="14" label="14天">14天</option><option value="15" label="15天">15天</option><option value="16" label="16天">16天</option><option value="17" label="17天">17天</option><option value="18" label="18天">18天</option><option value="19" label="19天">19天</option><option value="20" label="20天">20天</option><option value="21" label="21天">21天</option><option value="22" label="22天">22天</option><option value="23" label="23天">23天</option><option value="24" label="24天">24天</option><option value="25" label="25天">25天</option><option value="26" label="26天">26天</option><option value="27" label="27天">27天</option><option value="28" label="28天">28天</option><option value="29" label="29天">29天</option><option value="30" label="30天" selected="selected">30天</option><option value="31" label="31天">31天</option><option value="32" label="32天">32天</option><option value="33" label="33天">33天</option><option value="34" label="34天">34天</option><option value="35" label="35天">35天</option><option value="36" label="36天">36天</option><option value="37" label="37天">37天</option><option value="38" label="38天">38天</option><option value="39" label="39天">39天</option><option value="40" label="40天">40天</option><option value="41" label="41天">41天</option><option value="42" label="42天">42天</option><option value="43" label="43天">43天</option><option value="44" label="44天">44天</option><option value="45" label="45天">45天</option><option value="46" label="46天">46天</option><option value="47" label="47天">47天</option><option value="48" label="48天">48天</option><option value="49" label="49天">49天</option><option value="50" label="50天">50天</option><option value="51" label="51天">51天</option><option value="52" label="52天">52天</option><option value="53" label="53天">53天</option><option value="54" label="54天">54天</option><option value="55" label="55天">55天</option><option value="56" label="56天">56天</option><option value="57" label="57天">57天</option><option value="58" label="58天">58天</option><option value="59" label="59天">59天</option><option value="60" label="60天">60天</option><option value="61" label="61天">61天</option><option value="62" label="62天">62天</option><option value="63" label="63天">63天</option><option value="64" label="64天">64天</option><option value="65" label="65天">65天</option><option value="66" label="66天">66天</option><option value="67" label="67天">67天</option><option value="68" label="68天">68天</option><option value="69" label="69天">69天</option><option value="70" label="70天">70天</option><option value="71" label="71天">71天</option><option value="72" label="72天">72天</option><option value="73" label="73天">73天</option><option value="74" label="74天">74天</option><option value="75" label="75天">75天</option><option value="76" label="76天">76天</option><option value="77" label="77天">77天</option><option value="78" label="78天">78天</option><option value="79" label="79天">79天</option><option value="80" label="80天">80天</option><option value="81" label="81天">81天</option><option value="82" label="82天">82天</option><option value="83" label="83天">83天</option><option value="84" label="84天">84天</option><option value="85" label="85天">85天</option><option value="86" label="86天">86天</option><option value="87" label="87天">87天</option><option value="88" label="88天">88天</option><option value="89" label="89天">89天</option><option value="90" label="90天">90天</option></select>
                            </div>
                            <div class="tipsColor ng-hide" ng-show="award.awardtype!=5&amp;&amp;award.genewxcard">微信优惠券的使用期限在活动发布后只能延长不能缩短</div>
                        </div>
                    </div>
                    <div class="openContactAward awardSettingLine ERR_lock ERR_lock_strict" ed-show="!game._setting.linkInfoAll &amp;&amp; game._setting.linkInfotype == 4" style="display: none;">
                        <span class="leftTitle2"><span class="awardTitle">联系信息：</span></span>
                        <input type="radio" id="openContactAward2" ng-value="true" ng-model="award.oplink" class="openContact ng-pristine ng-untouched ng-valid" name="contactAward2" value="true"><label for="openContactAward2">开启</label>
                        <input type="radio" id="closeContactAward2" ng-value="false" ng-model="award.oplink" class="closeContact ng-pristine ng-untouched ng-valid" name="contactAward2" value="false"><label for="closeContactAward2">关闭</label>
                    </div>
                    <!-- ngIf: ::!game.$$afterWXCardModify && game.$$afterWxCard && !isComfort -->
                    <div class="baseLine3 awardSettingLine">
                        <div class="showAwardDetailLine pointer" style="padding-right:28px;">
                            <span style="margin-left: 30px;">详情设置</span>
                            <div class="detailIcon awardDetailIcon close"></div>
                        </div>
                        <div style="border-bottom:1px #DCDCDC dashed;width:545px;margin:auto;"></div>
                    </div>
                    <div class="awardDetailSetting">
                        <!-- ngIf: ::!isComfort || !game.$$afterComCodeModify --><div ng-if="::!isComfort || !game.$$afterComCodeModify" class="verTipsBox baseLine3 awardSettingLine setCusCodeBox ng-scope" ed-show="award.$type.cuscode" style="display: block;">
                            <span class="leftTitle2"><span class="powerIcon ver_biz flag"></span><div class="awardTitle">生成券号：</div></span>
                            <input id="sysAwardCode2" ng-model="award.iscuscode" ng-value="false" class="sysAwardCode ng-pristine ng-untouched ng-valid" type="radio" name="setCusCode2" ng-disabled="::game.$$isPublish &amp;&amp; award.iscuscode" value="false"><label for="sysAwardCode2">系统生成</label>
                            <input id="cusAwardCode2" ng-model="award.iscuscode" ng-value="true" class="cusAwardCode js_ver ng-pristine ng-untouched ng-valid" _ver="2" type="radio" name="setCusCode2" ng-disabled="::game.$$isPublish &amp;&amp; !award.iscuscode" value="true" disabled="disabled"><label for="cusAwardCode2">手工导入</label>
                            <!-- ngIf: ::!isComfort --><div ng-if="::!isComfort" class="cusCodeInputBox ng-scope ERR_lock ERR_lock_strict" ed-show="!award.$isExcelCode &amp;&amp; award.iscuscode" style="display: none;">
                                <textarea class="cusCodeBox awardTextArea awardMg ng-binding" ng-disabled="::game.$$isPublish"></textarea>
                                <div class="tipsColor awardMg  in-bl" style="width: 450px;">8000个券号以上请先输入奖品数量再上传，一行一个券号，券号数量与奖品数量需一致，发布后生成券号方式将无法更改</div>
                                <div class="checkCuscodeBtn in-bl pointer awardMg" ng-hide="::game.$$isPublish">检测格式</div>
                            </div><!-- end ngIf: ::!isComfort -->
                            <!-- ngIf: ::isComfort -->
                            <div class="uploadCusCode awardMg ERR_lock ERR_lock_strict" ed-show="award.$isExcelCode &amp;&amp; award.iscuscode" style="display: none;">

                                <div class="uploadBtn upload main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="application/msexcel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"><a id="file_upload_1-button" href="###" class="uploadify-button">上传文件</a></div>
                                <div class="cusCodeFile">
                                    <a href="###" ng-show="!game.$$isPublish &amp;&amp; award.excelName != ''" ng-click="downloadCusCode(false,index)" class="ng-binding ng-hide">兑奖码.xls</a>
                                    <span class="errMsg hide">请上传文件</span>
                                </div>

                                <div class="downloadBtn"><a ng-click="downloadCusCode(true,index)" href="###">下载模版</a></div>
                                <div class="uploadTip tipsColor in-bl">
                                    每个券号不超过20个字符，券号数量与奖品数量需一致，发布后生成券号方式将无法更改
                                </div>
                            </div>
                            <form class="exportCusCodeForm ng-pristine ng-valid" method="post" action="">
                                <textarea name="codeList" class="cusCodeStr hide"></textarea>
                            </form>
                        </div><!-- end ngIf: ::!isComfort || !game.$$afterComCodeModify -->

                        <div class="awardOtherSetting">

                            <div class="setAwardTimeLimitBox baseLine3 awardSettingLine" ed-show="award.$type.term" style="display: block;">
                                <span class="leftTitle2"><div class="awardTitle">可用时段：</div></span>
                                <input id="allTimeLimit2" ng-model="award.$timeLimitSelAll" ng-value="true" class="allTimeLimit ng-pristine ng-untouched ng-valid" type="radio" name="timeLimitType2" value="true"><label for="allTimeLimit2">全部时段</label>
                                <input id="someTimeLimit2" ng-model="award.$timeLimitSelAll" ng-value="false" class="someTimeLimit ng-pristine ng-untouched ng-valid" type="radio" name="timeLimitType2" value="false"><label for="someTimeLimit2">部分时段</label>
                                <div id="timeLimitSelBox2" class="timeLimitSelBox blurCheck awardMg ERR_lock ERR_lock_strict" ed-hide="award.$timeLimitSelAll" style="display: none;">
                                    <!-- ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome2_0" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay2" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome2_0" class="ng-binding">周一</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome2_1" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay2" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome2_1" class="ng-binding">周二</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome2_2" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay2" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome2_2" class="ng-binding">周三</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome2_3" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay2" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome2_3" class="ng-binding">周四</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome2_4" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay2" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome2_4" class="ng-binding">周五</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome2_5" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay2" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome2_5" class="ng-binding">周六</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome2_6" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay2" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome2_6" class="ng-binding">周日</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) -->
                                </div>
                            </div>
                            <div class="setAwardSubTitleBox baseLine3 awardSettingLine">
                                <span class="leftTitle2"><div class="awardTitle">副标题：</div></span>
                                <input ng-model="award.stl" class="awardSubTile input input1 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>

                            <div class="setServicePhoneBox baseLine3 awardSettingLine">
                                <span class="leftTitle2"><div class="awardTitle">客服电话：</div></span>
                                <input ng-model="award.servicepho" class="servicePhone input input1 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>

                        </div>

                        <div class="setCashInfoBox baseLine3 awardSettingLine ">
                            <span class="leftTitle2" style="vertical-align:top"><div class="awardTitle alignTop ng-binding">兑奖须知：</div></span>
                            <textarea ng-model="award.cashinfo" ng-trim="false" class="cashInfoContent input awardTextArea wxCardInput ng-pristine ng-untouched ng-valid"></textarea>
                        </div>

                        <div class="setAwardBtnBox baseLine3 awardSettingLine" ed-show="!award.$type.btn">
                            <span class="leftTitle2"><div class="awardTitle">自定义按钮：</div>
                            </span>
                            <input id="closeAwardBtn2" ng-model="award.attention" ng-value="::1" class="closeAwardBtn cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardBtn2" value="1"><label for="closeAwardBtn2">关闭</label>
                            <input id="openAwardBtn2" ng-model="award.attention" ng-value="::2" class="openAwardBtn cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardBtn2" value="2"><label for="openAwardBtn2">页面跳转</label>
                            <span ng-hide="award.awardtype == 4"><input id="newAttention2" ng-model="award.attention" ng-value="::3" type="radio" name="cusAwardBtn2" class="newAttention cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" value="3"><label for="newAttention2">一键关注</label></span>
                            <div class="awardBtnBox awardMg ERR_lock ERR_lock_strict" ed-hide="award.attention == 1" style="display: none;">
                                <div class="setAwardCusBtnBox baseLine3">
                                    <span class="leftTitle2"><span class="flag">*</span>按钮名称：</span>
                                    <input ng-model="award.btn" class="awartBtnTitle input input6 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                </div>
                                <div class="baseLine3 uploadQrCode">
                                    <span class="leftTitle2"><span class="AttentionName ng-binding">微信公众号：</span></span>
                                    <input ng-model="award.btl" ng-show="award.attention == 2" class="awardBtnLink input input6 wxCardInput ng-pristine ng-untouched ng-valid ng-valid-maxlength ng-hide" maxlength="1000" type="text">
                                    <div id="AttentionBox2" ng-show="award.attention == 3" style="display:inline-block" class="AttentionBox ng-hide">
                                        <div class="attentionImg comUploadImg">
                                            <img ng-src="//hd.faisys.com/image/qrcodeImg.jpg" onload="hdFaiOperateImg(this);" src="//hd.faisys.com/image/qrcodeImg.jpg" width="52" height="52" style="display: block;">
                                        </div>
                                        <div class="QRloaBox comUploadBox chooseImg">
                                            <span id="AtentionBtn2" class="btn main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="image/bmp,image/jpg,image/png,image/gif,image/jpeg"><a id="file_upload_1-button" href="###" class="uploadify-button">＋ 上传二维码</a></span>
                                            <a id="attentionBtn2" class="comUploadExplain aTips" target="_blank" href="http://jz.faisco.com/blog/1647" style="display:block;">如何找到公众号二维码？</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div><!-- end ngRepeat: award in ::game._awardList --><div class="awardSettingBox ng-scope hide" ng-repeat="award in ::game._awardList" ng-controller="awardCtrl" ng-class="::{'hide':index != game.$checkeIndex}" ed-lock="!award.$isOpenAward" style="left: 500px; display: none;">
                    <div class="baseLine awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖项等级：</div></span>
                        <input ng-model="award.style" class="awardStyle input input1 ng-pristine ng-untouched ng-valid" type="text">
                    </div>

                    <!-- ngIf: award.awardType != -1 --><div ng-if="award.awardType != -1" class="baseLine3 awardSettingLine ng-scope">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖品类型：</div></span>
                        <div class="awardTypeSetBox in-bl">
                            <div class="awardTypeValue divBeInput" ng-click="toggleAwardTypeBox()" ng-class="{'disableBg':award.$disabled}">
                                <span class="type ng-binding">礼品</span><!-- ngIf: award.$awardTypeItem.ver -->
                                <div class="detailIcon"></div>
                            </div>
                            <div class="awardTypeBox ng-hide" ng-show="showAwardTypeBox">
                                <!-- ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope checked"><span class="type ng-binding">礼品</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">门店优惠券</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">电商优惠券</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">微信口令红包</span><!-- ngIf: ::info.ver --><span ng-if="::info.ver" style="margin-left:3px;" class="powerIcon flag ng-scope ver_biz" ng-class="::game.$$verInfo.map[info.ver].class"></span><!-- end ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">微信优惠券</span><!-- ngIf: ::info.ver --><span ng-if="::info.ver" style="margin-left:3px;" class="powerIcon flag ng-scope ver_biz" ng-class="::game.$$verInfo.map[info.ver].class"></span><!-- end ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list -->
                            </div>
                        </div>
                        <div class="tipsColor awardMg">活动发布后类型将无法更改</div>
                        <!-- ngIf: ::!isComfort --><div ng-if="::!isComfort" ng-show="award.awardtype == 5" class="tipsColor awardMg passWordredTips ng-scope ng-hide">由于口令红包需关注后方可领取，有可能被微信封公众号，请慎用！</div><!-- end ngIf: ::!isComfort -->
                        <!-- ngIf: ::!isComfort&&game.$$afterWXCardModify --><div ng-if="::!isComfort&amp;&amp;game.$$afterWXCardModify" ng-show="award.awardtype == 4" class="tipsColor awardMg ng-scope ng-hide">生成卡券后，<span style="color:#f00">请勿</span>到微信公众平台内<span style="color:#f00">操作卡券</span></div><!-- end ngIf: ::!isComfort&&game.$$afterWXCardModify -->
                    </div><!-- end ngIf: award.awardType != -1 -->
                    <!-- ngIf: ::game.$$afterWXCardModify --><div ng-if="::game.$$afterWXCardModify" class="awardWXBrandNameBox baseLine3 awardSettingLine ng-scope ERR_lock ERR_lock_strict" ed-show="award.awardtype == 4" style="display: none;">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">卡券商户：</div></span>
                        <input id="wxCardName3" ng-model="award.wxcardcomname" class="input1 hd-wxCardName-value ng-pristine ng-untouched ng-valid" type="text" placeholder="请填写卡券的商户名称(如：海底捞)" ng-disabled="game.$$isPublish&amp;&amp;awardLast().genewxcard">
                        <div class="tipsColor awardMg">确认发布后无法修改，请认真选择！<a href="http://hd.faisco.com/news/4232" target="_blank" class="aTips">了解更多</a></div>
                        <div class="tipsColor awardMg">
                            注：卡券商户名称请勿与授权公众号名称相差太大，否则将有可能被<br>
                            微信视为代建而查封，卡券将无法使用！
                        </div>
                    </div><!-- end ngIf: ::game.$$afterWXCardModify -->
                    <div class="awardDescribeBox baseLine3 awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖项名称：</div></span>
                        <input ng-model="award.name" ng-disabled="award.$disabled" class="awardDescribe input input1 ng-pristine ng-untouched ng-valid" type="text">
                        <div class="tipsColor awardMg">活动发布后名称将无法更改</div>
                    </div>
                    <!-- ngIf: ::isComfort&&false -->
                    <!-- 奖品图片 HYKJ -->
                    <!-- ngIf: ::!isComfort && game.style == 48 -->

                    <!-- 未发布奖品显示逻辑 -->
                    <!-- ngIf: ::!isComfort && !game.$$isPublish --><div ng-if="::!isComfort &amp;&amp; !game.$$isPublish" class="baseLine3 amounLine awardSettingLine ng-scope">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖品数量：</div></span>
                        <input ng-model="award.amount" model-format="int" ng-blur="!award.amount&amp;&amp;(award.amount=0)" class="awardAmount input onlyNum input1 ng-pristine ng-untouched ng-valid ng-valid-maxlength" maxlength="5" type="text" name="">
                    </div><!-- end ngIf: ::!isComfort && !game.$$isPublish -->
                    <!-- ngIf: ::!isComfort && game.$$isPublish -->

                    <!-- ngIf: ::!isComfort && game.$$afterWXCardModify --><div ng-if="::!isComfort &amp;&amp; game.$$afterWXCardModify" class="setAwardQRCodeBox baseLine3 awardSettingLine ng-scope ERR_lock ERR_lock_strict" ed-show="award.awardtype == 4" style="display: none;">
                        <span class="leftTitle2"><div class="awardTitle">核销方式：</div></span>
                        <input id="openAwardQRC3" ng-model="award.opqrc" ng-value="true" ng-disabled="award.$disabled&amp;&amp;!award.opqrc" class="openAwardQRC ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardQRC3" value="true"><label for="openAwardQRC3">二维码</label>
                        <input id="closeAwardQRC3" ng-model="award.opqrc" ng-value="false" ng-disabled="award.$disabled&amp;&amp;award.opqrc" class="closeAwardQRC ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardQRC3" value="false"><label for="closeAwardQRC3">仅卡券号</label>
                        <div class="tipsColor awardMg">活动发布后核销方式将无法更改</div>
                    </div><!-- end ngIf: ::!isComfort && game.$$afterWXCardModify -->
                    <!-- ngIf: ::!isComfort && game.$$afterWxCard --><div ng-if="::!isComfort &amp;&amp; game.$$afterWxCard" ed-show="award.awardtype == 5" class="passwordrednumBox baseLine3 awardSettingLine hide ng-scope ERR_lock ERR_lock_strict" style="display: none;">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">单个金额：</div></span>
                        <input class="passwordrednum input input1 ng-pristine ng-untouched ng-valid ng-valid-maxlength" ng-model="award.passwordrednum" model-format="float ::passwordredFormat" ng-blur="!award.passwordrednum&amp;&amp;(award.passwordrednum=100)" ng-disabled="award.$disabled" maxlength="6" type="text" name=""> 元
                        <div class="tipsColor awardMg">微信规定单个红包金额必须高于1元低于200元</div>
                    </div><!-- end ngIf: ::!isComfort && game.$$afterWxCard -->
                    <!-- ngIf: ::!isComfort && game.style == 48 -->
                    <!-- ngIf: ::game.$$isAwardWithPot && !isComfort -->

                    <div class="setCashTypeBox baseLine3 awardSettingLine" ng-show="award.$type.showcashtype">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">兑奖方式：</div></span>
                        <input id="cashUnderline3" ng-model="award.cashtype" ng-value="::2" class="cashUnderline wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType3" value="2"><label for="cashUnderline3">线下兑奖</label>

                        <!-- ngIf: ::!isComfort || game.$$afterComCodeModify --><span ng-if="::!isComfort || game.$$afterComCodeModify" class="ng-scope"><input id="cashWx3" ng-model="award.cashtype" ng-value="::3" class="cashWx wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType3" ng-disabled="::!game.$$hasWXCash" value="3" disabled="disabled"><label for="cashWx3">公众号兑奖</label></span><!-- end ngIf: ::!isComfort || game.$$afterComCodeModify -->
                        <input id="cashWeb3" ng-model="award.cashtype" ng-value="::4" class="cashWeb wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType3" value="4"><label for="cashWeb3">网页兑奖</label>
                        <div class="tipsColor cashWxTip ng-hide" ng-show="award.cashtype == 3">开通公众号核销功能后，玩家回复兑奖码到公众号，将实现自动核销<a href="http://hd.faisco.com/news/6341" class="aTips" target="_blank">了解更多</a>
                        </div>

                    </div>
                    <div class="setAwardBox" ed-show="award.$type.showsitebox" style="display: block;">
                        <div class="setAwardOptInfoBox baseLine3 awardSettingLine">
                            <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">操作提示：</div></span>
                            <input ng-model="award.opti" class="awardOptInfo input input1 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                        </div>
                        <div class="setAwardCashSiteBox baseLine3 awardSettingLine clearfix" ed-hide="award.$type.sitetype=='none'">
                            <div class="leftTitle2"><span class="flag">*</span><div class="awardTitle ng-binding">兑奖地址：</div></div>
                            <div class="rightBox">

                                <div class="cashAddress" ed-hide="(award.awardtype == 0 || (award.awardtype == 2 &amp;&amp; award.cashtype == 2)) &amp;&amp; award.storeType != 1">
                                    <div class="cashSiteIpt" ed-show="award.$type.sitetype == 'text'" style="display: block;">
                                        <input ng-model="award.cashsite" class="awardCashSite input input1 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                    </div>
                                    <div class="cashUrlIpt ERR_lock ERR_lock_strict" ed-show="award.$type.sitetype == 'url'" style="display: none;">
                                        <input ng-model="award.$cashsiteurl" class="awardCashSiteUrl input input6 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="setCodeTimeBox baseLine baseLine3 awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="usePeriod awardTitle ng-binding">兑奖期限：</div></span>
                        <input ng-model="award.t_type" value="DATE_TYPE_FIX_TIME_RANGE" id="timeRangeType3" class="timeRangeType ng-pristine ng-untouched ng-valid" ng-disabled="(award.$disabled || (game.$$isPublish &amp;&amp; awardLast().genewxcard)) &amp;&amp; award.t_type == 'DATE_TYPE_FIX_TERM'" type="radio" name="timeType3"><label for="timeRangeType3">固定日期</label>
                        <input ng-model="award.t_type" value="DATE_TYPE_FIX_TERM" id="termType3" class="termType ng-pristine ng-untouched ng-valid" ng-disabled="(award.$disabled || (game.$$isPublish &amp;&amp; awardLast().genewxcard)) &amp;&amp; award.t_type == 'DATE_TYPE_FIX_TIME_RANGE'" type="radio" name="timeType3"><label for="termType3">固定时长</label>
                        <div class="codeTimeBox awardMg">
                            <div id="timeRangeBox3" class="timeRangeBox" ng-show="award.t_type == 'DATE_TYPE_FIX_TIME_RANGE'">
                                <input class="useCodeBeginTime input pointer wxCardInput hasDatepicker" style="width:202px" readonly="" type="text" ng-value="::award.cbt" value="2017-06-13 00:00" id="dp1497530394940"> 至
                                <input class="useCodeEndTime input pointer wxCardInput hasDatepicker" style="width:202px" readonly="" type="text" ng-value="::award.cet" value="2017-06-20 23:59" id="dp1497530394941">
                            </div>
                            <div id="termBox3" class="termBox ng-hide" ng-show="award.t_type == 'DATE_TYPE_FIX_TERM'">
                                领取后 <select ng-model="award.cfbt" ng-options="i as (i==0?'当天':i+'天') for i in award.$fixedBeginTermList track by i" class="codeFixedBeginTerm input wxCardInput ng-pristine ng-untouched ng-valid"><option value="0" label="当天" selected="selected">当天</option><option value="1" label="1天">1天</option><option value="2" label="2天">2天</option><option value="3" label="3天">3天</option><option value="4" label="4天">4天</option><option value="5" label="5天">5天</option><option value="6" label="6天">6天</option><option value="7" label="7天">7天</option><option value="8" label="8天">8天</option><option value="9" label="9天">9天</option><option value="10" label="10天">10天</option><option value="11" label="11天">11天</option><option value="12" label="12天">12天</option><option value="13" label="13天">13天</option><option value="14" label="14天">14天</option><option value="15" label="15天">15天</option><option value="16" label="16天">16天</option><option value="17" label="17天">17天</option><option value="18" label="18天">18天</option><option value="19" label="19天">19天</option><option value="20" label="20天">20天</option><option value="21" label="21天">21天</option><option value="22" label="22天">22天</option><option value="23" label="23天">23天</option><option value="24" label="24天">24天</option><option value="25" label="25天">25天</option><option value="26" label="26天">26天</option><option value="27" label="27天">27天</option><option value="28" label="28天">28天</option><option value="29" label="29天">29天</option><option value="30" label="30天">30天</option><option value="31" label="31天">31天</option><option value="32" label="32天">32天</option><option value="33" label="33天">33天</option><option value="34" label="34天">34天</option><option value="35" label="35天">35天</option><option value="36" label="36天">36天</option><option value="37" label="37天">37天</option><option value="38" label="38天">38天</option><option value="39" label="39天">39天</option><option value="40" label="40天">40天</option><option value="41" label="41天">41天</option><option value="42" label="42天">42天</option><option value="43" label="43天">43天</option><option value="44" label="44天">44天</option><option value="45" label="45天">45天</option><option value="46" label="46天">46天</option><option value="47" label="47天">47天</option><option value="48" label="48天">48天</option><option value="49" label="49天">49天</option><option value="50" label="50天">50天</option><option value="51" label="51天">51天</option><option value="52" label="52天">52天</option><option value="53" label="53天">53天</option><option value="54" label="54天">54天</option><option value="55" label="55天">55天</option><option value="56" label="56天">56天</option><option value="57" label="57天">57天</option><option value="58" label="58天">58天</option><option value="59" label="59天">59天</option><option value="60" label="60天">60天</option><option value="61" label="61天">61天</option><option value="62" label="62天">62天</option><option value="63" label="63天">63天</option><option value="64" label="64天">64天</option><option value="65" label="65天">65天</option><option value="66" label="66天">66天</option><option value="67" label="67天">67天</option><option value="68" label="68天">68天</option><option value="69" label="69天">69天</option><option value="70" label="70天">70天</option><option value="71" label="71天">71天</option><option value="72" label="72天">72天</option><option value="73" label="73天">73天</option><option value="74" label="74天">74天</option><option value="75" label="75天">75天</option><option value="76" label="76天">76天</option><option value="77" label="77天">77天</option><option value="78" label="78天">78天</option><option value="79" label="79天">79天</option><option value="80" label="80天">80天</option><option value="81" label="81天">81天</option><option value="82" label="82天">82天</option><option value="83" label="83天">83天</option><option value="84" label="84天">84天</option><option value="85" label="85天">85天</option><option value="86" label="86天">86天</option><option value="87" label="87天">87天</option><option value="88" label="88天">88天</option><option value="89" label="89天">89天</option><option value="90" label="90天">90天</option></select> 生效，有效天数 <select ng-model="award.cft" ng-options="i as i+'天' for i in award.$fixedTermList track by i" class="codeFixedTerm input wxCardInput ng-pristine ng-untouched ng-valid"><option value="1" label="1天">1天</option><option value="2" label="2天">2天</option><option value="3" label="3天">3天</option><option value="4" label="4天">4天</option><option value="5" label="5天">5天</option><option value="6" label="6天">6天</option><option value="7" label="7天">7天</option><option value="8" label="8天">8天</option><option value="9" label="9天">9天</option><option value="10" label="10天">10天</option><option value="11" label="11天">11天</option><option value="12" label="12天">12天</option><option value="13" label="13天">13天</option><option value="14" label="14天">14天</option><option value="15" label="15天">15天</option><option value="16" label="16天">16天</option><option value="17" label="17天">17天</option><option value="18" label="18天">18天</option><option value="19" label="19天">19天</option><option value="20" label="20天">20天</option><option value="21" label="21天">21天</option><option value="22" label="22天">22天</option><option value="23" label="23天">23天</option><option value="24" label="24天">24天</option><option value="25" label="25天">25天</option><option value="26" label="26天">26天</option><option value="27" label="27天">27天</option><option value="28" label="28天">28天</option><option value="29" label="29天">29天</option><option value="30" label="30天" selected="selected">30天</option><option value="31" label="31天">31天</option><option value="32" label="32天">32天</option><option value="33" label="33天">33天</option><option value="34" label="34天">34天</option><option value="35" label="35天">35天</option><option value="36" label="36天">36天</option><option value="37" label="37天">37天</option><option value="38" label="38天">38天</option><option value="39" label="39天">39天</option><option value="40" label="40天">40天</option><option value="41" label="41天">41天</option><option value="42" label="42天">42天</option><option value="43" label="43天">43天</option><option value="44" label="44天">44天</option><option value="45" label="45天">45天</option><option value="46" label="46天">46天</option><option value="47" label="47天">47天</option><option value="48" label="48天">48天</option><option value="49" label="49天">49天</option><option value="50" label="50天">50天</option><option value="51" label="51天">51天</option><option value="52" label="52天">52天</option><option value="53" label="53天">53天</option><option value="54" label="54天">54天</option><option value="55" label="55天">55天</option><option value="56" label="56天">56天</option><option value="57" label="57天">57天</option><option value="58" label="58天">58天</option><option value="59" label="59天">59天</option><option value="60" label="60天">60天</option><option value="61" label="61天">61天</option><option value="62" label="62天">62天</option><option value="63" label="63天">63天</option><option value="64" label="64天">64天</option><option value="65" label="65天">65天</option><option value="66" label="66天">66天</option><option value="67" label="67天">67天</option><option value="68" label="68天">68天</option><option value="69" label="69天">69天</option><option value="70" label="70天">70天</option><option value="71" label="71天">71天</option><option value="72" label="72天">72天</option><option value="73" label="73天">73天</option><option value="74" label="74天">74天</option><option value="75" label="75天">75天</option><option value="76" label="76天">76天</option><option value="77" label="77天">77天</option><option value="78" label="78天">78天</option><option value="79" label="79天">79天</option><option value="80" label="80天">80天</option><option value="81" label="81天">81天</option><option value="82" label="82天">82天</option><option value="83" label="83天">83天</option><option value="84" label="84天">84天</option><option value="85" label="85天">85天</option><option value="86" label="86天">86天</option><option value="87" label="87天">87天</option><option value="88" label="88天">88天</option><option value="89" label="89天">89天</option><option value="90" label="90天">90天</option></select>
                            </div>
                            <div class="tipsColor ng-hide" ng-show="award.awardtype!=5&amp;&amp;award.genewxcard">微信优惠券的使用期限在活动发布后只能延长不能缩短</div>
                        </div>
                    </div>
                    <div class="openContactAward awardSettingLine ERR_lock ERR_lock_strict" ed-show="!game._setting.linkInfoAll &amp;&amp; game._setting.linkInfotype == 4" style="display: none;">
                        <span class="leftTitle2"><span class="awardTitle">联系信息：</span></span>
                        <input type="radio" id="openContactAward3" ng-value="true" ng-model="award.oplink" class="openContact ng-pristine ng-untouched ng-valid" name="contactAward3" value="true"><label for="openContactAward3">开启</label>
                        <input type="radio" id="closeContactAward3" ng-value="false" ng-model="award.oplink" class="closeContact ng-pristine ng-untouched ng-valid" name="contactAward3" value="false"><label for="closeContactAward3">关闭</label>
                    </div>
                    <!-- ngIf: ::!game.$$afterWXCardModify && game.$$afterWxCard && !isComfort -->
                    <div class="baseLine3 awardSettingLine">
                        <div class="showAwardDetailLine pointer" style="padding-right:28px;">
                            <span style="margin-left: 30px;">详情设置</span>
                            <div class="detailIcon awardDetailIcon close"></div>
                        </div>
                        <div style="border-bottom:1px #DCDCDC dashed;width:545px;margin:auto;"></div>
                    </div>
                    <div class="awardDetailSetting">
                        <!-- ngIf: ::!isComfort || !game.$$afterComCodeModify --><div ng-if="::!isComfort || !game.$$afterComCodeModify" class="verTipsBox baseLine3 awardSettingLine setCusCodeBox ng-scope" ed-show="award.$type.cuscode" style="display: block;">
                            <span class="leftTitle2"><span class="powerIcon ver_biz flag"></span><div class="awardTitle">生成券号：</div></span>
                            <input id="sysAwardCode3" ng-model="award.iscuscode" ng-value="false" class="sysAwardCode ng-pristine ng-untouched ng-valid" type="radio" name="setCusCode3" ng-disabled="::game.$$isPublish &amp;&amp; award.iscuscode" value="false"><label for="sysAwardCode3">系统生成</label>
                            <input id="cusAwardCode3" ng-model="award.iscuscode" ng-value="true" class="cusAwardCode js_ver ng-pristine ng-untouched ng-valid" _ver="2" type="radio" name="setCusCode3" ng-disabled="::game.$$isPublish &amp;&amp; !award.iscuscode" value="true" disabled="disabled"><label for="cusAwardCode3">手工导入</label>
                            <!-- ngIf: ::!isComfort --><div ng-if="::!isComfort" class="cusCodeInputBox ng-scope ERR_lock ERR_lock_strict" ed-show="!award.$isExcelCode &amp;&amp; award.iscuscode" style="display: none;">
                                <textarea class="cusCodeBox awardTextArea awardMg ng-binding" ng-disabled="::game.$$isPublish"></textarea>
                                <div class="tipsColor awardMg  in-bl" style="width: 450px;">8000个券号以上请先输入奖品数量再上传，一行一个券号，券号数量与奖品数量需一致，发布后生成券号方式将无法更改</div>
                                <div class="checkCuscodeBtn in-bl pointer awardMg" ng-hide="::game.$$isPublish">检测格式</div>
                            </div><!-- end ngIf: ::!isComfort -->
                            <!-- ngIf: ::isComfort -->
                            <div class="uploadCusCode awardMg ERR_lock ERR_lock_strict" ed-show="award.$isExcelCode &amp;&amp; award.iscuscode" style="display: none;">

                                <div class="uploadBtn upload main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="application/msexcel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"><a id="file_upload_1-button" href="###" class="uploadify-button">上传文件</a></div>
                                <div class="cusCodeFile">
                                    <a href="###" ng-show="!game.$$isPublish &amp;&amp; award.excelName != ''" ng-click="downloadCusCode(false,index)" class="ng-binding ng-hide">兑奖码.xls</a>
                                    <span class="errMsg hide">请上传文件</span>
                                </div>

                                <div class="downloadBtn"><a ng-click="downloadCusCode(true,index)" href="###">下载模版</a></div>
                                <div class="uploadTip tipsColor in-bl">
                                    每个券号不超过20个字符，券号数量与奖品数量需一致，发布后生成券号方式将无法更改
                                </div>
                            </div>
                            <form class="exportCusCodeForm ng-pristine ng-valid" method="post" action="">
                                <textarea name="codeList" class="cusCodeStr hide"></textarea>
                            </form>
                        </div><!-- end ngIf: ::!isComfort || !game.$$afterComCodeModify -->

                        <div class="awardOtherSetting">

                            <div class="setAwardTimeLimitBox baseLine3 awardSettingLine" ed-show="award.$type.term" style="display: block;">
                                <span class="leftTitle2"><div class="awardTitle">可用时段：</div></span>
                                <input id="allTimeLimit3" ng-model="award.$timeLimitSelAll" ng-value="true" class="allTimeLimit ng-pristine ng-untouched ng-valid" type="radio" name="timeLimitType3" value="true"><label for="allTimeLimit3">全部时段</label>
                                <input id="someTimeLimit3" ng-model="award.$timeLimitSelAll" ng-value="false" class="someTimeLimit ng-pristine ng-untouched ng-valid" type="radio" name="timeLimitType3" value="false"><label for="someTimeLimit3">部分时段</label>
                                <div id="timeLimitSelBox3" class="timeLimitSelBox blurCheck awardMg ERR_lock ERR_lock_strict" ed-hide="award.$timeLimitSelAll" style="display: none;">
                                    <!-- ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome3_0" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay3" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome3_0" class="ng-binding">周一</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome3_1" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay3" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome3_1" class="ng-binding">周二</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome3_2" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay3" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome3_2" class="ng-binding">周三</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome3_3" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay3" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome3_3" class="ng-binding">周四</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome3_4" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay3" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome3_4" class="ng-binding">周五</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome3_5" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay3" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome3_5" class="ng-binding">周六</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome3_6" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay3" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome3_6" class="ng-binding">周日</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) -->
                                </div>
                            </div>
                            <div class="setAwardSubTitleBox baseLine3 awardSettingLine">
                                <span class="leftTitle2"><div class="awardTitle">副标题：</div></span>
                                <input ng-model="award.stl" class="awardSubTile input input1 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>

                            <div class="setServicePhoneBox baseLine3 awardSettingLine">
                                <span class="leftTitle2"><div class="awardTitle">客服电话：</div></span>
                                <input ng-model="award.servicepho" class="servicePhone input input1 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>

                        </div>

                        <div class="setCashInfoBox baseLine3 awardSettingLine ">
                            <span class="leftTitle2" style="vertical-align:top"><div class="awardTitle alignTop ng-binding">兑奖须知：</div></span>
                            <textarea ng-model="award.cashinfo" ng-trim="false" class="cashInfoContent input awardTextArea wxCardInput ng-pristine ng-untouched ng-valid"></textarea>
                        </div>

                        <div class="setAwardBtnBox baseLine3 awardSettingLine" ed-show="!award.$type.btn">
                            <span class="leftTitle2"><div class="awardTitle">自定义按钮：</div>
                            </span>
                            <input id="closeAwardBtn3" ng-model="award.attention" ng-value="::1" class="closeAwardBtn cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardBtn3" value="1"><label for="closeAwardBtn3">关闭</label>
                            <input id="openAwardBtn3" ng-model="award.attention" ng-value="::2" class="openAwardBtn cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardBtn3" value="2"><label for="openAwardBtn3">页面跳转</label>
                            <span ng-hide="award.awardtype == 4"><input id="newAttention3" ng-model="award.attention" ng-value="::3" type="radio" name="cusAwardBtn3" class="newAttention cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" value="3"><label for="newAttention3">一键关注</label></span>
                            <div class="awardBtnBox awardMg ERR_lock ERR_lock_strict" ed-hide="award.attention == 1" style="display: none;">
                                <div class="setAwardCusBtnBox baseLine3">
                                    <span class="leftTitle2"><span class="flag">*</span>按钮名称：</span>
                                    <input ng-model="award.btn" class="awartBtnTitle input input6 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                </div>
                                <div class="baseLine3 uploadQrCode">
                                    <span class="leftTitle2"><span class="AttentionName ng-binding">微信公众号：</span></span>
                                    <input ng-model="award.btl" ng-show="award.attention == 2" class="awardBtnLink input input6 wxCardInput ng-pristine ng-untouched ng-valid ng-valid-maxlength ng-hide" maxlength="1000" type="text">
                                    <div id="AttentionBox3" ng-show="award.attention == 3" style="display:inline-block" class="AttentionBox ng-hide">
                                        <div class="attentionImg comUploadImg">
                                            <img ng-src="//hd.faisys.com/image/qrcodeImg.jpg" onload="hdFaiOperateImg(this);" src="//hd.faisys.com/image/qrcodeImg.jpg" width="52" height="52" style="display: block;">
                                        </div>
                                        <div class="QRloaBox comUploadBox chooseImg">
                                            <span id="AtentionBtn3" class="btn main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="image/bmp,image/jpg,image/png,image/gif,image/jpeg"><a id="file_upload_1-button" href="###" class="uploadify-button">＋ 上传二维码</a></span>
                                            <a id="attentionBtn3" class="comUploadExplain aTips" target="_blank" href="http://jz.faisco.com/blog/1647" style="display:block;">如何找到公众号二维码？</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div><!-- end ngRepeat: award in ::game._awardList --><div class="awardSettingBox ng-scope hide" ng-repeat="award in ::game._awardList" ng-controller="awardCtrl" ng-class="::{'hide':index != game.$checkeIndex}" ed-lock="!award.$isOpenAward" style="left: -500px; display: none;">
                    <div class="baseLine awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖项等级：</div></span>
                        <input ng-model="award.style" class="awardStyle input input1 ng-pristine ng-untouched ng-valid" type="text">
                    </div>

                    <!-- ngIf: award.awardType != -1 --><div ng-if="award.awardType != -1" class="baseLine3 awardSettingLine ng-scope">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖品类型：</div></span>
                        <div class="awardTypeSetBox in-bl">
                            <div class="awardTypeValue divBeInput" ng-click="toggleAwardTypeBox()" ng-class="{'disableBg':award.$disabled}">
                                <span class="type ng-binding">礼品</span><!-- ngIf: award.$awardTypeItem.ver -->
                                <div class="detailIcon"></div>
                            </div>
                            <div class="awardTypeBox ng-hide" ng-show="showAwardTypeBox">
                                <!-- ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope checked"><span class="type ng-binding">礼品</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">门店优惠券</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">电商优惠券</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">微信口令红包</span><!-- ngIf: ::info.ver --><span ng-if="::info.ver" style="margin-left:3px;" class="powerIcon flag ng-scope ver_biz" ng-class="::game.$$verInfo.map[info.ver].class"></span><!-- end ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">微信优惠券</span><!-- ngIf: ::info.ver --><span ng-if="::info.ver" style="margin-left:3px;" class="powerIcon flag ng-scope ver_biz" ng-class="::game.$$verInfo.map[info.ver].class"></span><!-- end ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list -->
                            </div>
                        </div>
                        <div class="tipsColor awardMg">活动发布后类型将无法更改</div>
                        <!-- ngIf: ::!isComfort --><div ng-if="::!isComfort" ng-show="award.awardtype == 5" class="tipsColor awardMg passWordredTips ng-scope ng-hide">由于口令红包需关注后方可领取，有可能被微信封公众号，请慎用！</div><!-- end ngIf: ::!isComfort -->
                        <!-- ngIf: ::!isComfort&&game.$$afterWXCardModify --><div ng-if="::!isComfort&amp;&amp;game.$$afterWXCardModify" ng-show="award.awardtype == 4" class="tipsColor awardMg ng-scope ng-hide">生成卡券后，<span style="color:#f00">请勿</span>到微信公众平台内<span style="color:#f00">操作卡券</span></div><!-- end ngIf: ::!isComfort&&game.$$afterWXCardModify -->
                    </div><!-- end ngIf: award.awardType != -1 -->
                    <!-- ngIf: ::game.$$afterWXCardModify --><div ng-if="::game.$$afterWXCardModify" class="awardWXBrandNameBox baseLine3 awardSettingLine ng-scope ERR_lock ERR_lock_strict" ed-show="award.awardtype == 4" style="display: none;">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">卡券商户：</div></span>
                        <input id="wxCardName4" ng-model="award.wxcardcomname" class="input1 hd-wxCardName-value ng-pristine ng-untouched ng-valid" type="text" placeholder="请填写卡券的商户名称(如：海底捞)" ng-disabled="game.$$isPublish&amp;&amp;awardLast().genewxcard">
                        <div class="tipsColor awardMg">确认发布后无法修改，请认真选择！<a href="http://hd.faisco.com/news/4232" target="_blank" class="aTips">了解更多</a></div>
                        <div class="tipsColor awardMg">
                            注：卡券商户名称请勿与授权公众号名称相差太大，否则将有可能被<br>
                            微信视为代建而查封，卡券将无法使用！
                        </div>
                    </div><!-- end ngIf: ::game.$$afterWXCardModify -->
                    <div class="awardDescribeBox baseLine3 awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖项名称：</div></span>
                        <input ng-model="award.name" ng-disabled="award.$disabled" class="awardDescribe input input1 ng-pristine ng-untouched ng-valid" type="text">
                        <div class="tipsColor awardMg">活动发布后名称将无法更改</div>
                    </div>
                    <!-- ngIf: ::isComfort&&false -->
                    <!-- 奖品图片 HYKJ -->
                    <!-- ngIf: ::!isComfort && game.style == 48 -->

                    <!-- 未发布奖品显示逻辑 -->
                    <!-- ngIf: ::!isComfort && !game.$$isPublish --><div ng-if="::!isComfort &amp;&amp; !game.$$isPublish" class="baseLine3 amounLine awardSettingLine ng-scope">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖品数量：</div></span>
                        <input ng-model="award.amount" model-format="int" ng-blur="!award.amount&amp;&amp;(award.amount=0)" class="awardAmount input onlyNum input1 ng-pristine ng-untouched ng-valid ng-valid-maxlength" maxlength="5" type="text" name="">
                    </div><!-- end ngIf: ::!isComfort && !game.$$isPublish -->
                    <!-- ngIf: ::!isComfort && game.$$isPublish -->

                    <!-- ngIf: ::!isComfort && game.$$afterWXCardModify --><div ng-if="::!isComfort &amp;&amp; game.$$afterWXCardModify" class="setAwardQRCodeBox baseLine3 awardSettingLine ng-scope ERR_lock ERR_lock_strict" ed-show="award.awardtype == 4" style="display: none;">
                        <span class="leftTitle2"><div class="awardTitle">核销方式：</div></span>
                        <input id="openAwardQRC4" ng-model="award.opqrc" ng-value="true" ng-disabled="award.$disabled&amp;&amp;!award.opqrc" class="openAwardQRC ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardQRC4" value="true"><label for="openAwardQRC4">二维码</label>
                        <input id="closeAwardQRC4" ng-model="award.opqrc" ng-value="false" ng-disabled="award.$disabled&amp;&amp;award.opqrc" class="closeAwardQRC ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardQRC4" value="false"><label for="closeAwardQRC4">仅卡券号</label>
                        <div class="tipsColor awardMg">活动发布后核销方式将无法更改</div>
                    </div><!-- end ngIf: ::!isComfort && game.$$afterWXCardModify -->
                    <!-- ngIf: ::!isComfort && game.$$afterWxCard --><div ng-if="::!isComfort &amp;&amp; game.$$afterWxCard" ed-show="award.awardtype == 5" class="passwordrednumBox baseLine3 awardSettingLine hide ng-scope ERR_lock ERR_lock_strict" style="display: none;">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">单个金额：</div></span>
                        <input class="passwordrednum input input1 ng-pristine ng-untouched ng-valid ng-valid-maxlength" ng-model="award.passwordrednum" model-format="float ::passwordredFormat" ng-blur="!award.passwordrednum&amp;&amp;(award.passwordrednum=100)" ng-disabled="award.$disabled" maxlength="6" type="text" name=""> 元
                        <div class="tipsColor awardMg">微信规定单个红包金额必须高于1元低于200元</div>
                    </div><!-- end ngIf: ::!isComfort && game.$$afterWxCard -->
                    <!-- ngIf: ::!isComfort && game.style == 48 -->
                    <!-- ngIf: ::game.$$isAwardWithPot && !isComfort -->

                    <div class="setCashTypeBox baseLine3 awardSettingLine" ng-show="award.$type.showcashtype">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">兑奖方式：</div></span>
                        <input id="cashUnderline4" ng-model="award.cashtype" ng-value="::2" class="cashUnderline wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType4" value="2"><label for="cashUnderline4">线下兑奖</label>

                        <!-- ngIf: ::!isComfort || game.$$afterComCodeModify --><span ng-if="::!isComfort || game.$$afterComCodeModify" class="ng-scope"><input id="cashWx4" ng-model="award.cashtype" ng-value="::3" class="cashWx wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType4" ng-disabled="::!game.$$hasWXCash" value="3" disabled="disabled"><label for="cashWx4">公众号兑奖</label></span><!-- end ngIf: ::!isComfort || game.$$afterComCodeModify -->
                        <input id="cashWeb4" ng-model="award.cashtype" ng-value="::4" class="cashWeb wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType4" value="4"><label for="cashWeb4">网页兑奖</label>
                        <div class="tipsColor cashWxTip ng-hide" ng-show="award.cashtype == 3">开通公众号核销功能后，玩家回复兑奖码到公众号，将实现自动核销<a href="http://hd.faisco.com/news/6341" class="aTips" target="_blank">了解更多</a>
                        </div>

                    </div>
                    <div class="setAwardBox" ed-show="award.$type.showsitebox" style="display: block;">
                        <div class="setAwardOptInfoBox baseLine3 awardSettingLine">
                            <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">操作提示：</div></span>
                            <input ng-model="award.opti" class="awardOptInfo input input1 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                        </div>
                        <div class="setAwardCashSiteBox baseLine3 awardSettingLine clearfix" ed-hide="award.$type.sitetype=='none'">
                            <div class="leftTitle2"><span class="flag">*</span><div class="awardTitle ng-binding">兑奖地址：</div></div>
                            <div class="rightBox">

                                <div class="cashAddress" ed-hide="(award.awardtype == 0 || (award.awardtype == 2 &amp;&amp; award.cashtype == 2)) &amp;&amp; award.storeType != 1">
                                    <div class="cashSiteIpt" ed-show="award.$type.sitetype == 'text'" style="display: block;">
                                        <input ng-model="award.cashsite" class="awardCashSite input input1 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                    </div>
                                    <div class="cashUrlIpt ERR_lock ERR_lock_strict" ed-show="award.$type.sitetype == 'url'" style="display: none;">
                                        <input ng-model="award.$cashsiteurl" class="awardCashSiteUrl input input6 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="setCodeTimeBox baseLine baseLine3 awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="usePeriod awardTitle ng-binding">兑奖期限：</div></span>
                        <input ng-model="award.t_type" value="DATE_TYPE_FIX_TIME_RANGE" id="timeRangeType4" class="timeRangeType ng-pristine ng-untouched ng-valid" ng-disabled="(award.$disabled || (game.$$isPublish &amp;&amp; awardLast().genewxcard)) &amp;&amp; award.t_type == 'DATE_TYPE_FIX_TERM'" type="radio" name="timeType4"><label for="timeRangeType4">固定日期</label>
                        <input ng-model="award.t_type" value="DATE_TYPE_FIX_TERM" id="termType4" class="termType ng-pristine ng-untouched ng-valid" ng-disabled="(award.$disabled || (game.$$isPublish &amp;&amp; awardLast().genewxcard)) &amp;&amp; award.t_type == 'DATE_TYPE_FIX_TIME_RANGE'" type="radio" name="timeType4"><label for="termType4">固定时长</label>
                        <div class="codeTimeBox awardMg">
                            <div id="timeRangeBox4" class="timeRangeBox" ng-show="award.t_type == 'DATE_TYPE_FIX_TIME_RANGE'">
                                <input class="useCodeBeginTime input pointer wxCardInput hasDatepicker" style="width:202px" readonly="" type="text" ng-value="::award.cbt" value="2017-06-13 00:00" id="dp1497530394942"> 至
                                <input class="useCodeEndTime input pointer wxCardInput hasDatepicker" style="width:202px" readonly="" type="text" ng-value="::award.cet" value="2017-06-20 23:59" id="dp1497530394943">
                            </div>
                            <div id="termBox4" class="termBox ng-hide" ng-show="award.t_type == 'DATE_TYPE_FIX_TERM'">
                                领取后 <select ng-model="award.cfbt" ng-options="i as (i==0?'当天':i+'天') for i in award.$fixedBeginTermList track by i" class="codeFixedBeginTerm input wxCardInput ng-pristine ng-untouched ng-valid"><option value="0" label="当天" selected="selected">当天</option><option value="1" label="1天">1天</option><option value="2" label="2天">2天</option><option value="3" label="3天">3天</option><option value="4" label="4天">4天</option><option value="5" label="5天">5天</option><option value="6" label="6天">6天</option><option value="7" label="7天">7天</option><option value="8" label="8天">8天</option><option value="9" label="9天">9天</option><option value="10" label="10天">10天</option><option value="11" label="11天">11天</option><option value="12" label="12天">12天</option><option value="13" label="13天">13天</option><option value="14" label="14天">14天</option><option value="15" label="15天">15天</option><option value="16" label="16天">16天</option><option value="17" label="17天">17天</option><option value="18" label="18天">18天</option><option value="19" label="19天">19天</option><option value="20" label="20天">20天</option><option value="21" label="21天">21天</option><option value="22" label="22天">22天</option><option value="23" label="23天">23天</option><option value="24" label="24天">24天</option><option value="25" label="25天">25天</option><option value="26" label="26天">26天</option><option value="27" label="27天">27天</option><option value="28" label="28天">28天</option><option value="29" label="29天">29天</option><option value="30" label="30天">30天</option><option value="31" label="31天">31天</option><option value="32" label="32天">32天</option><option value="33" label="33天">33天</option><option value="34" label="34天">34天</option><option value="35" label="35天">35天</option><option value="36" label="36天">36天</option><option value="37" label="37天">37天</option><option value="38" label="38天">38天</option><option value="39" label="39天">39天</option><option value="40" label="40天">40天</option><option value="41" label="41天">41天</option><option value="42" label="42天">42天</option><option value="43" label="43天">43天</option><option value="44" label="44天">44天</option><option value="45" label="45天">45天</option><option value="46" label="46天">46天</option><option value="47" label="47天">47天</option><option value="48" label="48天">48天</option><option value="49" label="49天">49天</option><option value="50" label="50天">50天</option><option value="51" label="51天">51天</option><option value="52" label="52天">52天</option><option value="53" label="53天">53天</option><option value="54" label="54天">54天</option><option value="55" label="55天">55天</option><option value="56" label="56天">56天</option><option value="57" label="57天">57天</option><option value="58" label="58天">58天</option><option value="59" label="59天">59天</option><option value="60" label="60天">60天</option><option value="61" label="61天">61天</option><option value="62" label="62天">62天</option><option value="63" label="63天">63天</option><option value="64" label="64天">64天</option><option value="65" label="65天">65天</option><option value="66" label="66天">66天</option><option value="67" label="67天">67天</option><option value="68" label="68天">68天</option><option value="69" label="69天">69天</option><option value="70" label="70天">70天</option><option value="71" label="71天">71天</option><option value="72" label="72天">72天</option><option value="73" label="73天">73天</option><option value="74" label="74天">74天</option><option value="75" label="75天">75天</option><option value="76" label="76天">76天</option><option value="77" label="77天">77天</option><option value="78" label="78天">78天</option><option value="79" label="79天">79天</option><option value="80" label="80天">80天</option><option value="81" label="81天">81天</option><option value="82" label="82天">82天</option><option value="83" label="83天">83天</option><option value="84" label="84天">84天</option><option value="85" label="85天">85天</option><option value="86" label="86天">86天</option><option value="87" label="87天">87天</option><option value="88" label="88天">88天</option><option value="89" label="89天">89天</option><option value="90" label="90天">90天</option></select> 生效，有效天数 <select ng-model="award.cft" ng-options="i as i+'天' for i in award.$fixedTermList track by i" class="codeFixedTerm input wxCardInput ng-pristine ng-untouched ng-valid"><option value="1" label="1天">1天</option><option value="2" label="2天">2天</option><option value="3" label="3天">3天</option><option value="4" label="4天">4天</option><option value="5" label="5天">5天</option><option value="6" label="6天">6天</option><option value="7" label="7天">7天</option><option value="8" label="8天">8天</option><option value="9" label="9天">9天</option><option value="10" label="10天">10天</option><option value="11" label="11天">11天</option><option value="12" label="12天">12天</option><option value="13" label="13天">13天</option><option value="14" label="14天">14天</option><option value="15" label="15天">15天</option><option value="16" label="16天">16天</option><option value="17" label="17天">17天</option><option value="18" label="18天">18天</option><option value="19" label="19天">19天</option><option value="20" label="20天">20天</option><option value="21" label="21天">21天</option><option value="22" label="22天">22天</option><option value="23" label="23天">23天</option><option value="24" label="24天">24天</option><option value="25" label="25天">25天</option><option value="26" label="26天">26天</option><option value="27" label="27天">27天</option><option value="28" label="28天">28天</option><option value="29" label="29天">29天</option><option value="30" label="30天" selected="selected">30天</option><option value="31" label="31天">31天</option><option value="32" label="32天">32天</option><option value="33" label="33天">33天</option><option value="34" label="34天">34天</option><option value="35" label="35天">35天</option><option value="36" label="36天">36天</option><option value="37" label="37天">37天</option><option value="38" label="38天">38天</option><option value="39" label="39天">39天</option><option value="40" label="40天">40天</option><option value="41" label="41天">41天</option><option value="42" label="42天">42天</option><option value="43" label="43天">43天</option><option value="44" label="44天">44天</option><option value="45" label="45天">45天</option><option value="46" label="46天">46天</option><option value="47" label="47天">47天</option><option value="48" label="48天">48天</option><option value="49" label="49天">49天</option><option value="50" label="50天">50天</option><option value="51" label="51天">51天</option><option value="52" label="52天">52天</option><option value="53" label="53天">53天</option><option value="54" label="54天">54天</option><option value="55" label="55天">55天</option><option value="56" label="56天">56天</option><option value="57" label="57天">57天</option><option value="58" label="58天">58天</option><option value="59" label="59天">59天</option><option value="60" label="60天">60天</option><option value="61" label="61天">61天</option><option value="62" label="62天">62天</option><option value="63" label="63天">63天</option><option value="64" label="64天">64天</option><option value="65" label="65天">65天</option><option value="66" label="66天">66天</option><option value="67" label="67天">67天</option><option value="68" label="68天">68天</option><option value="69" label="69天">69天</option><option value="70" label="70天">70天</option><option value="71" label="71天">71天</option><option value="72" label="72天">72天</option><option value="73" label="73天">73天</option><option value="74" label="74天">74天</option><option value="75" label="75天">75天</option><option value="76" label="76天">76天</option><option value="77" label="77天">77天</option><option value="78" label="78天">78天</option><option value="79" label="79天">79天</option><option value="80" label="80天">80天</option><option value="81" label="81天">81天</option><option value="82" label="82天">82天</option><option value="83" label="83天">83天</option><option value="84" label="84天">84天</option><option value="85" label="85天">85天</option><option value="86" label="86天">86天</option><option value="87" label="87天">87天</option><option value="88" label="88天">88天</option><option value="89" label="89天">89天</option><option value="90" label="90天">90天</option></select>
                            </div>
                            <div class="tipsColor ng-hide" ng-show="award.awardtype!=5&amp;&amp;award.genewxcard">微信优惠券的使用期限在活动发布后只能延长不能缩短</div>
                        </div>
                    </div>
                    <div class="openContactAward awardSettingLine ERR_lock ERR_lock_strict" ed-show="!game._setting.linkInfoAll &amp;&amp; game._setting.linkInfotype == 4" style="display: none;">
                        <span class="leftTitle2"><span class="awardTitle">联系信息：</span></span>
                        <input type="radio" id="openContactAward4" ng-value="true" ng-model="award.oplink" class="openContact ng-pristine ng-untouched ng-valid" name="contactAward4" value="true"><label for="openContactAward4">开启</label>
                        <input type="radio" id="closeContactAward4" ng-value="false" ng-model="award.oplink" class="closeContact ng-pristine ng-untouched ng-valid" name="contactAward4" value="false"><label for="closeContactAward4">关闭</label>
                    </div>
                    <!-- ngIf: ::!game.$$afterWXCardModify && game.$$afterWxCard && !isComfort -->
                    <div class="baseLine3 awardSettingLine">
                        <div class="showAwardDetailLine pointer" style="padding-right:28px;">
                            <span style="margin-left: 30px;">详情设置</span>
                            <div class="detailIcon awardDetailIcon close"></div>
                        </div>
                        <div style="border-bottom:1px #DCDCDC dashed;width:545px;margin:auto;"></div>
                    </div>
                    <div class="awardDetailSetting">
                        <!-- ngIf: ::!isComfort || !game.$$afterComCodeModify --><div ng-if="::!isComfort || !game.$$afterComCodeModify" class="verTipsBox baseLine3 awardSettingLine setCusCodeBox ng-scope" ed-show="award.$type.cuscode" style="display: block;">
                            <span class="leftTitle2"><span class="powerIcon ver_biz flag"></span><div class="awardTitle">生成券号：</div></span>
                            <input id="sysAwardCode4" ng-model="award.iscuscode" ng-value="false" class="sysAwardCode ng-pristine ng-untouched ng-valid" type="radio" name="setCusCode4" ng-disabled="::game.$$isPublish &amp;&amp; award.iscuscode" value="false"><label for="sysAwardCode4">系统生成</label>
                            <input id="cusAwardCode4" ng-model="award.iscuscode" ng-value="true" class="cusAwardCode js_ver ng-pristine ng-untouched ng-valid" _ver="2" type="radio" name="setCusCode4" ng-disabled="::game.$$isPublish &amp;&amp; !award.iscuscode" value="true" disabled="disabled"><label for="cusAwardCode4">手工导入</label>
                            <!-- ngIf: ::!isComfort --><div ng-if="::!isComfort" class="cusCodeInputBox ng-scope ERR_lock ERR_lock_strict" ed-show="!award.$isExcelCode &amp;&amp; award.iscuscode" style="display: none;">
                                <textarea class="cusCodeBox awardTextArea awardMg ng-binding" ng-disabled="::game.$$isPublish"></textarea>
                                <div class="tipsColor awardMg  in-bl" style="width: 450px;">8000个券号以上请先输入奖品数量再上传，一行一个券号，券号数量与奖品数量需一致，发布后生成券号方式将无法更改</div>
                                <div class="checkCuscodeBtn in-bl pointer awardMg" ng-hide="::game.$$isPublish">检测格式</div>
                            </div><!-- end ngIf: ::!isComfort -->
                            <!-- ngIf: ::isComfort -->
                            <div class="uploadCusCode awardMg ERR_lock ERR_lock_strict" ed-show="award.$isExcelCode &amp;&amp; award.iscuscode" style="display: none;">

                                <div class="uploadBtn upload main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="application/msexcel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"><a id="file_upload_1-button" href="###" class="uploadify-button">上传文件</a></div>
                                <div class="cusCodeFile">
                                    <a href="###" ng-show="!game.$$isPublish &amp;&amp; award.excelName != ''" ng-click="downloadCusCode(false,index)" class="ng-binding ng-hide">兑奖码.xls</a>
                                    <span class="errMsg hide">请上传文件</span>
                                </div>

                                <div class="downloadBtn"><a ng-click="downloadCusCode(true,index)" href="###">下载模版</a></div>
                                <div class="uploadTip tipsColor in-bl">
                                    每个券号不超过20个字符，券号数量与奖品数量需一致，发布后生成券号方式将无法更改
                                </div>
                            </div>
                            <form class="exportCusCodeForm ng-pristine ng-valid" method="post" action="">
                                <textarea name="codeList" class="cusCodeStr hide"></textarea>
                            </form>
                        </div><!-- end ngIf: ::!isComfort || !game.$$afterComCodeModify -->

                        <div class="awardOtherSetting">

                            <div class="setAwardTimeLimitBox baseLine3 awardSettingLine" ed-show="award.$type.term" style="display: block;">
                                <span class="leftTitle2"><div class="awardTitle">可用时段：</div></span>
                                <input id="allTimeLimit4" ng-model="award.$timeLimitSelAll" ng-value="true" class="allTimeLimit ng-pristine ng-untouched ng-valid" type="radio" name="timeLimitType4" value="true"><label for="allTimeLimit4">全部时段</label>
                                <input id="someTimeLimit4" ng-model="award.$timeLimitSelAll" ng-value="false" class="someTimeLimit ng-pristine ng-untouched ng-valid" type="radio" name="timeLimitType4" value="false"><label for="someTimeLimit4">部分时段</label>
                                <div id="timeLimitSelBox4" class="timeLimitSelBox blurCheck awardMg ERR_lock ERR_lock_strict" ed-hide="award.$timeLimitSelAll" style="display: none;">
                                    <!-- ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome4_0" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay4" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome4_0" class="ng-binding">周一</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome4_1" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay4" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome4_1" class="ng-binding">周二</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome4_2" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay4" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome4_2" class="ng-binding">周三</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome4_3" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay4" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome4_3" class="ng-binding">周四</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome4_4" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay4" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome4_4" class="ng-binding">周五</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome4_5" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay4" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome4_5" class="ng-binding">周六</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome4_6" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay4" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome4_6" class="ng-binding">周日</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) -->
                                </div>
                            </div>
                            <div class="setAwardSubTitleBox baseLine3 awardSettingLine">
                                <span class="leftTitle2"><div class="awardTitle">副标题：</div></span>
                                <input ng-model="award.stl" class="awardSubTile input input1 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>

                            <div class="setServicePhoneBox baseLine3 awardSettingLine">
                                <span class="leftTitle2"><div class="awardTitle">客服电话：</div></span>
                                <input ng-model="award.servicepho" class="servicePhone input input1 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>

                        </div>

                        <div class="setCashInfoBox baseLine3 awardSettingLine ">
                            <span class="leftTitle2" style="vertical-align:top"><div class="awardTitle alignTop ng-binding">兑奖须知：</div></span>
                            <textarea ng-model="award.cashinfo" ng-trim="false" class="cashInfoContent input awardTextArea wxCardInput ng-pristine ng-untouched ng-valid"></textarea>
                        </div>

                        <div class="setAwardBtnBox baseLine3 awardSettingLine" ed-show="!award.$type.btn">
                            <span class="leftTitle2"><div class="awardTitle">自定义按钮：</div>
                            </span>
                            <input id="closeAwardBtn4" ng-model="award.attention" ng-value="::1" class="closeAwardBtn cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardBtn4" value="1"><label for="closeAwardBtn4">关闭</label>
                            <input id="openAwardBtn4" ng-model="award.attention" ng-value="::2" class="openAwardBtn cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardBtn4" value="2"><label for="openAwardBtn4">页面跳转</label>
                            <span ng-hide="award.awardtype == 4"><input id="newAttention4" ng-model="award.attention" ng-value="::3" type="radio" name="cusAwardBtn4" class="newAttention cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" value="3"><label for="newAttention4">一键关注</label></span>
                            <div class="awardBtnBox awardMg ERR_lock ERR_lock_strict" ed-hide="award.attention == 1" style="display: none;">
                                <div class="setAwardCusBtnBox baseLine3">
                                    <span class="leftTitle2"><span class="flag">*</span>按钮名称：</span>
                                    <input ng-model="award.btn" class="awartBtnTitle input input6 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                </div>
                                <div class="baseLine3 uploadQrCode">
                                    <span class="leftTitle2"><span class="AttentionName ng-binding">微信公众号：</span></span>
                                    <input ng-model="award.btl" ng-show="award.attention == 2" class="awardBtnLink input input6 wxCardInput ng-pristine ng-untouched ng-valid ng-valid-maxlength ng-hide" maxlength="1000" type="text">
                                    <div id="AttentionBox4" ng-show="award.attention == 3" style="display:inline-block" class="AttentionBox ng-hide">
                                        <div class="attentionImg comUploadImg">
                                            <img ng-src="//hd.faisys.com/image/qrcodeImg.jpg" onload="hdFaiOperateImg(this);" src="//hd.faisys.com/image/qrcodeImg.jpg" width="52" height="52" style="display: block;">
                                        </div>
                                        <div class="QRloaBox comUploadBox chooseImg">
                                            <span id="AtentionBtn4" class="btn main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="image/bmp,image/jpg,image/png,image/gif,image/jpeg"><a id="file_upload_1-button" href="###" class="uploadify-button">＋ 上传二维码</a></span>
                                            <a id="attentionBtn4" class="comUploadExplain aTips" target="_blank" href="http://jz.faisco.com/blog/1647" style="display:block;">如何找到公众号二维码？</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div><!-- end ngRepeat: award in ::game._awardList --><div class="awardSettingBox ng-scope hide" ng-repeat="award in ::game._awardList" ng-controller="awardCtrl" ng-class="::{'hide':index != game.$checkeIndex}" ed-lock="!award.$isOpenAward" style="left: -500px; display: none;">
                    <div class="baseLine awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖项等级：</div></span>
                        <input ng-model="award.style" class="awardStyle input input1 ng-pristine ng-untouched ng-valid" type="text">
                    </div>

                    <!-- ngIf: award.awardType != -1 --><div ng-if="award.awardType != -1" class="baseLine3 awardSettingLine ng-scope">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖品类型：</div></span>
                        <div class="awardTypeSetBox in-bl">
                            <div class="awardTypeValue divBeInput" ng-click="toggleAwardTypeBox()" ng-class="{'disableBg':award.$disabled}">
                                <span class="type ng-binding">礼品</span><!-- ngIf: award.$awardTypeItem.ver -->
                                <div class="detailIcon"></div>
                            </div>
                            <div class="awardTypeBox ng-hide" ng-show="showAwardTypeBox">
                                <!-- ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope checked"><span class="type ng-binding">礼品</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">门店优惠券</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">电商优惠券</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">微信口令红包</span><!-- ngIf: ::info.ver --><span ng-if="::info.ver" style="margin-left:3px;" class="powerIcon flag ng-scope ver_biz" ng-class="::game.$$verInfo.map[info.ver].class"></span><!-- end ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">微信优惠券</span><!-- ngIf: ::info.ver --><span ng-if="::info.ver" style="margin-left:3px;" class="powerIcon flag ng-scope ver_biz" ng-class="::game.$$verInfo.map[info.ver].class"></span><!-- end ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list -->
                            </div>
                        </div>
                        <div class="tipsColor awardMg">活动发布后类型将无法更改</div>
                        <!-- ngIf: ::!isComfort --><div ng-if="::!isComfort" ng-show="award.awardtype == 5" class="tipsColor awardMg passWordredTips ng-scope ng-hide">由于口令红包需关注后方可领取，有可能被微信封公众号，请慎用！</div><!-- end ngIf: ::!isComfort -->
                        <!-- ngIf: ::!isComfort&&game.$$afterWXCardModify --><div ng-if="::!isComfort&amp;&amp;game.$$afterWXCardModify" ng-show="award.awardtype == 4" class="tipsColor awardMg ng-scope ng-hide">生成卡券后，<span style="color:#f00">请勿</span>到微信公众平台内<span style="color:#f00">操作卡券</span></div><!-- end ngIf: ::!isComfort&&game.$$afterWXCardModify -->
                    </div><!-- end ngIf: award.awardType != -1 -->
                    <!-- ngIf: ::game.$$afterWXCardModify --><div ng-if="::game.$$afterWXCardModify" class="awardWXBrandNameBox baseLine3 awardSettingLine ng-scope ERR_lock ERR_lock_strict" ed-show="award.awardtype == 4" style="display: none;">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">卡券商户：</div></span>
                        <input id="wxCardName5" ng-model="award.wxcardcomname" class="input1 hd-wxCardName-value ng-pristine ng-untouched ng-valid" type="text" placeholder="请填写卡券的商户名称(如：海底捞)" ng-disabled="game.$$isPublish&amp;&amp;awardLast().genewxcard">
                        <div class="tipsColor awardMg">确认发布后无法修改，请认真选择！<a href="http://hd.faisco.com/news/4232" target="_blank" class="aTips">了解更多</a></div>
                        <div class="tipsColor awardMg">
                            注：卡券商户名称请勿与授权公众号名称相差太大，否则将有可能被<br>
                            微信视为代建而查封，卡券将无法使用！
                        </div>
                    </div><!-- end ngIf: ::game.$$afterWXCardModify -->
                    <div class="awardDescribeBox baseLine3 awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖项名称：</div></span>
                        <input ng-model="award.name" ng-disabled="award.$disabled" class="awardDescribe input input1 ng-pristine ng-untouched ng-valid" type="text">
                        <div class="tipsColor awardMg">活动发布后名称将无法更改</div>
                    </div>
                    <!-- ngIf: ::isComfort&&false -->
                    <!-- 奖品图片 HYKJ -->
                    <!-- ngIf: ::!isComfort && game.style == 48 -->

                    <!-- 未发布奖品显示逻辑 -->
                    <!-- ngIf: ::!isComfort && !game.$$isPublish --><div ng-if="::!isComfort &amp;&amp; !game.$$isPublish" class="baseLine3 amounLine awardSettingLine ng-scope">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖品数量：</div></span>
                        <input ng-model="award.amount" model-format="int" ng-blur="!award.amount&amp;&amp;(award.amount=0)" class="awardAmount input onlyNum input1 ng-pristine ng-untouched ng-valid ng-valid-maxlength" maxlength="5" type="text" name="">
                    </div><!-- end ngIf: ::!isComfort && !game.$$isPublish -->
                    <!-- ngIf: ::!isComfort && game.$$isPublish -->

                    <!-- ngIf: ::!isComfort && game.$$afterWXCardModify --><div ng-if="::!isComfort &amp;&amp; game.$$afterWXCardModify" class="setAwardQRCodeBox baseLine3 awardSettingLine ng-scope ERR_lock ERR_lock_strict" ed-show="award.awardtype == 4" style="display: none;">
                        <span class="leftTitle2"><div class="awardTitle">核销方式：</div></span>
                        <input id="openAwardQRC5" ng-model="award.opqrc" ng-value="true" ng-disabled="award.$disabled&amp;&amp;!award.opqrc" class="openAwardQRC ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardQRC5" value="true"><label for="openAwardQRC5">二维码</label>
                        <input id="closeAwardQRC5" ng-model="award.opqrc" ng-value="false" ng-disabled="award.$disabled&amp;&amp;award.opqrc" class="closeAwardQRC ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardQRC5" value="false"><label for="closeAwardQRC5">仅卡券号</label>
                        <div class="tipsColor awardMg">活动发布后核销方式将无法更改</div>
                    </div><!-- end ngIf: ::!isComfort && game.$$afterWXCardModify -->
                    <!-- ngIf: ::!isComfort && game.$$afterWxCard --><div ng-if="::!isComfort &amp;&amp; game.$$afterWxCard" ed-show="award.awardtype == 5" class="passwordrednumBox baseLine3 awardSettingLine hide ng-scope ERR_lock ERR_lock_strict" style="display: none;">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">单个金额：</div></span>
                        <input class="passwordrednum input input1 ng-pristine ng-untouched ng-valid ng-valid-maxlength" ng-model="award.passwordrednum" model-format="float ::passwordredFormat" ng-blur="!award.passwordrednum&amp;&amp;(award.passwordrednum=100)" ng-disabled="award.$disabled" maxlength="6" type="text" name=""> 元
                        <div class="tipsColor awardMg">微信规定单个红包金额必须高于1元低于200元</div>
                    </div><!-- end ngIf: ::!isComfort && game.$$afterWxCard -->
                    <!-- ngIf: ::!isComfort && game.style == 48 -->
                    <!-- ngIf: ::game.$$isAwardWithPot && !isComfort -->

                    <div class="setCashTypeBox baseLine3 awardSettingLine" ng-show="award.$type.showcashtype">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">兑奖方式：</div></span>
                        <input id="cashUnderline5" ng-model="award.cashtype" ng-value="::2" class="cashUnderline wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType5" value="2"><label for="cashUnderline5">线下兑奖</label>

                        <!-- ngIf: ::!isComfort || game.$$afterComCodeModify --><span ng-if="::!isComfort || game.$$afterComCodeModify" class="ng-scope"><input id="cashWx5" ng-model="award.cashtype" ng-value="::3" class="cashWx wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType5" ng-disabled="::!game.$$hasWXCash" value="3" disabled="disabled"><label for="cashWx5">公众号兑奖</label></span><!-- end ngIf: ::!isComfort || game.$$afterComCodeModify -->
                        <input id="cashWeb5" ng-model="award.cashtype" ng-value="::4" class="cashWeb wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType5" value="4"><label for="cashWeb5">网页兑奖</label>
                        <div class="tipsColor cashWxTip ng-hide" ng-show="award.cashtype == 3">开通公众号核销功能后，玩家回复兑奖码到公众号，将实现自动核销<a href="http://hd.faisco.com/news/6341" class="aTips" target="_blank">了解更多</a>
                        </div>

                    </div>
                    <div class="setAwardBox" ed-show="award.$type.showsitebox" style="display: block;">
                        <div class="setAwardOptInfoBox baseLine3 awardSettingLine">
                            <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">操作提示：</div></span>
                            <input ng-model="award.opti" class="awardOptInfo input input1 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                        </div>
                        <div class="setAwardCashSiteBox baseLine3 awardSettingLine clearfix" ed-hide="award.$type.sitetype=='none'">
                            <div class="leftTitle2"><span class="flag">*</span><div class="awardTitle ng-binding">兑奖地址：</div></div>
                            <div class="rightBox">

                                <div class="cashAddress" ed-hide="(award.awardtype == 0 || (award.awardtype == 2 &amp;&amp; award.cashtype == 2)) &amp;&amp; award.storeType != 1">
                                    <div class="cashSiteIpt" ed-show="award.$type.sitetype == 'text'" style="display: block;">
                                        <input ng-model="award.cashsite" class="awardCashSite input input1 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                    </div>
                                    <div class="cashUrlIpt ERR_lock ERR_lock_strict" ed-show="award.$type.sitetype == 'url'" style="display: none;">
                                        <input ng-model="award.$cashsiteurl" class="awardCashSiteUrl input input6 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="setCodeTimeBox baseLine baseLine3 awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="usePeriod awardTitle ng-binding">兑奖期限：</div></span>
                        <input ng-model="award.t_type" value="DATE_TYPE_FIX_TIME_RANGE" id="timeRangeType5" class="timeRangeType ng-pristine ng-untouched ng-valid" ng-disabled="(award.$disabled || (game.$$isPublish &amp;&amp; awardLast().genewxcard)) &amp;&amp; award.t_type == 'DATE_TYPE_FIX_TERM'" type="radio" name="timeType5"><label for="timeRangeType5">固定日期</label>
                        <input ng-model="award.t_type" value="DATE_TYPE_FIX_TERM" id="termType5" class="termType ng-pristine ng-untouched ng-valid" ng-disabled="(award.$disabled || (game.$$isPublish &amp;&amp; awardLast().genewxcard)) &amp;&amp; award.t_type == 'DATE_TYPE_FIX_TIME_RANGE'" type="radio" name="timeType5"><label for="termType5">固定时长</label>
                        <div class="codeTimeBox awardMg">
                            <div id="timeRangeBox5" class="timeRangeBox" ng-show="award.t_type == 'DATE_TYPE_FIX_TIME_RANGE'">
                                <input class="useCodeBeginTime input pointer wxCardInput hasDatepicker" style="width:202px" readonly="" type="text" ng-value="::award.cbt" value="2017-06-13 00:00" id="dp1497530394944"> 至
                                <input class="useCodeEndTime input pointer wxCardInput hasDatepicker" style="width:202px" readonly="" type="text" ng-value="::award.cet" value="2017-06-20 23:59" id="dp1497530394945">
                            </div>
                            <div id="termBox5" class="termBox ng-hide" ng-show="award.t_type == 'DATE_TYPE_FIX_TERM'">
                                领取后 <select ng-model="award.cfbt" ng-options="i as (i==0?'当天':i+'天') for i in award.$fixedBeginTermList track by i" class="codeFixedBeginTerm input wxCardInput ng-pristine ng-untouched ng-valid"><option value="0" label="当天" selected="selected">当天</option><option value="1" label="1天">1天</option><option value="2" label="2天">2天</option><option value="3" label="3天">3天</option><option value="4" label="4天">4天</option><option value="5" label="5天">5天</option><option value="6" label="6天">6天</option><option value="7" label="7天">7天</option><option value="8" label="8天">8天</option><option value="9" label="9天">9天</option><option value="10" label="10天">10天</option><option value="11" label="11天">11天</option><option value="12" label="12天">12天</option><option value="13" label="13天">13天</option><option value="14" label="14天">14天</option><option value="15" label="15天">15天</option><option value="16" label="16天">16天</option><option value="17" label="17天">17天</option><option value="18" label="18天">18天</option><option value="19" label="19天">19天</option><option value="20" label="20天">20天</option><option value="21" label="21天">21天</option><option value="22" label="22天">22天</option><option value="23" label="23天">23天</option><option value="24" label="24天">24天</option><option value="25" label="25天">25天</option><option value="26" label="26天">26天</option><option value="27" label="27天">27天</option><option value="28" label="28天">28天</option><option value="29" label="29天">29天</option><option value="30" label="30天">30天</option><option value="31" label="31天">31天</option><option value="32" label="32天">32天</option><option value="33" label="33天">33天</option><option value="34" label="34天">34天</option><option value="35" label="35天">35天</option><option value="36" label="36天">36天</option><option value="37" label="37天">37天</option><option value="38" label="38天">38天</option><option value="39" label="39天">39天</option><option value="40" label="40天">40天</option><option value="41" label="41天">41天</option><option value="42" label="42天">42天</option><option value="43" label="43天">43天</option><option value="44" label="44天">44天</option><option value="45" label="45天">45天</option><option value="46" label="46天">46天</option><option value="47" label="47天">47天</option><option value="48" label="48天">48天</option><option value="49" label="49天">49天</option><option value="50" label="50天">50天</option><option value="51" label="51天">51天</option><option value="52" label="52天">52天</option><option value="53" label="53天">53天</option><option value="54" label="54天">54天</option><option value="55" label="55天">55天</option><option value="56" label="56天">56天</option><option value="57" label="57天">57天</option><option value="58" label="58天">58天</option><option value="59" label="59天">59天</option><option value="60" label="60天">60天</option><option value="61" label="61天">61天</option><option value="62" label="62天">62天</option><option value="63" label="63天">63天</option><option value="64" label="64天">64天</option><option value="65" label="65天">65天</option><option value="66" label="66天">66天</option><option value="67" label="67天">67天</option><option value="68" label="68天">68天</option><option value="69" label="69天">69天</option><option value="70" label="70天">70天</option><option value="71" label="71天">71天</option><option value="72" label="72天">72天</option><option value="73" label="73天">73天</option><option value="74" label="74天">74天</option><option value="75" label="75天">75天</option><option value="76" label="76天">76天</option><option value="77" label="77天">77天</option><option value="78" label="78天">78天</option><option value="79" label="79天">79天</option><option value="80" label="80天">80天</option><option value="81" label="81天">81天</option><option value="82" label="82天">82天</option><option value="83" label="83天">83天</option><option value="84" label="84天">84天</option><option value="85" label="85天">85天</option><option value="86" label="86天">86天</option><option value="87" label="87天">87天</option><option value="88" label="88天">88天</option><option value="89" label="89天">89天</option><option value="90" label="90天">90天</option></select> 生效，有效天数 <select ng-model="award.cft" ng-options="i as i+'天' for i in award.$fixedTermList track by i" class="codeFixedTerm input wxCardInput ng-pristine ng-untouched ng-valid"><option value="1" label="1天">1天</option><option value="2" label="2天">2天</option><option value="3" label="3天">3天</option><option value="4" label="4天">4天</option><option value="5" label="5天">5天</option><option value="6" label="6天">6天</option><option value="7" label="7天">7天</option><option value="8" label="8天">8天</option><option value="9" label="9天">9天</option><option value="10" label="10天">10天</option><option value="11" label="11天">11天</option><option value="12" label="12天">12天</option><option value="13" label="13天">13天</option><option value="14" label="14天">14天</option><option value="15" label="15天">15天</option><option value="16" label="16天">16天</option><option value="17" label="17天">17天</option><option value="18" label="18天">18天</option><option value="19" label="19天">19天</option><option value="20" label="20天">20天</option><option value="21" label="21天">21天</option><option value="22" label="22天">22天</option><option value="23" label="23天">23天</option><option value="24" label="24天">24天</option><option value="25" label="25天">25天</option><option value="26" label="26天">26天</option><option value="27" label="27天">27天</option><option value="28" label="28天">28天</option><option value="29" label="29天">29天</option><option value="30" label="30天" selected="selected">30天</option><option value="31" label="31天">31天</option><option value="32" label="32天">32天</option><option value="33" label="33天">33天</option><option value="34" label="34天">34天</option><option value="35" label="35天">35天</option><option value="36" label="36天">36天</option><option value="37" label="37天">37天</option><option value="38" label="38天">38天</option><option value="39" label="39天">39天</option><option value="40" label="40天">40天</option><option value="41" label="41天">41天</option><option value="42" label="42天">42天</option><option value="43" label="43天">43天</option><option value="44" label="44天">44天</option><option value="45" label="45天">45天</option><option value="46" label="46天">46天</option><option value="47" label="47天">47天</option><option value="48" label="48天">48天</option><option value="49" label="49天">49天</option><option value="50" label="50天">50天</option><option value="51" label="51天">51天</option><option value="52" label="52天">52天</option><option value="53" label="53天">53天</option><option value="54" label="54天">54天</option><option value="55" label="55天">55天</option><option value="56" label="56天">56天</option><option value="57" label="57天">57天</option><option value="58" label="58天">58天</option><option value="59" label="59天">59天</option><option value="60" label="60天">60天</option><option value="61" label="61天">61天</option><option value="62" label="62天">62天</option><option value="63" label="63天">63天</option><option value="64" label="64天">64天</option><option value="65" label="65天">65天</option><option value="66" label="66天">66天</option><option value="67" label="67天">67天</option><option value="68" label="68天">68天</option><option value="69" label="69天">69天</option><option value="70" label="70天">70天</option><option value="71" label="71天">71天</option><option value="72" label="72天">72天</option><option value="73" label="73天">73天</option><option value="74" label="74天">74天</option><option value="75" label="75天">75天</option><option value="76" label="76天">76天</option><option value="77" label="77天">77天</option><option value="78" label="78天">78天</option><option value="79" label="79天">79天</option><option value="80" label="80天">80天</option><option value="81" label="81天">81天</option><option value="82" label="82天">82天</option><option value="83" label="83天">83天</option><option value="84" label="84天">84天</option><option value="85" label="85天">85天</option><option value="86" label="86天">86天</option><option value="87" label="87天">87天</option><option value="88" label="88天">88天</option><option value="89" label="89天">89天</option><option value="90" label="90天">90天</option></select>
                            </div>
                            <div class="tipsColor ng-hide" ng-show="award.awardtype!=5&amp;&amp;award.genewxcard">微信优惠券的使用期限在活动发布后只能延长不能缩短</div>
                        </div>
                    </div>
                    <div class="openContactAward awardSettingLine ERR_lock ERR_lock_strict" ed-show="!game._setting.linkInfoAll &amp;&amp; game._setting.linkInfotype == 4" style="display: none;">
                        <span class="leftTitle2"><span class="awardTitle">联系信息：</span></span>
                        <input type="radio" id="openContactAward5" ng-value="true" ng-model="award.oplink" class="openContact ng-pristine ng-untouched ng-valid" name="contactAward5" value="true"><label for="openContactAward5">开启</label>
                        <input type="radio" id="closeContactAward5" ng-value="false" ng-model="award.oplink" class="closeContact ng-pristine ng-untouched ng-valid" name="contactAward5" value="false"><label for="closeContactAward5">关闭</label>
                    </div>
                    <!-- ngIf: ::!game.$$afterWXCardModify && game.$$afterWxCard && !isComfort -->
                    <div class="baseLine3 awardSettingLine">
                        <div class="showAwardDetailLine pointer" style="padding-right:28px;">
                            <span style="margin-left: 30px;">详情设置</span>
                            <div class="detailIcon awardDetailIcon close"></div>
                        </div>
                        <div style="border-bottom:1px #DCDCDC dashed;width:545px;margin:auto;"></div>
                    </div>
                    <div class="awardDetailSetting">
                        <!-- ngIf: ::!isComfort || !game.$$afterComCodeModify --><div ng-if="::!isComfort || !game.$$afterComCodeModify" class="verTipsBox baseLine3 awardSettingLine setCusCodeBox ng-scope" ed-show="award.$type.cuscode" style="display: block;">
                            <span class="leftTitle2"><span class="powerIcon ver_biz flag"></span><div class="awardTitle">生成券号：</div></span>
                            <input id="sysAwardCode5" ng-model="award.iscuscode" ng-value="false" class="sysAwardCode ng-pristine ng-untouched ng-valid" type="radio" name="setCusCode5" ng-disabled="::game.$$isPublish &amp;&amp; award.iscuscode" value="false"><label for="sysAwardCode5">系统生成</label>
                            <input id="cusAwardCode5" ng-model="award.iscuscode" ng-value="true" class="cusAwardCode js_ver ng-pristine ng-untouched ng-valid" _ver="2" type="radio" name="setCusCode5" ng-disabled="::game.$$isPublish &amp;&amp; !award.iscuscode" value="true" disabled="disabled"><label for="cusAwardCode5">手工导入</label>
                            <!-- ngIf: ::!isComfort --><div ng-if="::!isComfort" class="cusCodeInputBox ng-scope ERR_lock ERR_lock_strict" ed-show="!award.$isExcelCode &amp;&amp; award.iscuscode" style="display: none;">
                                <textarea class="cusCodeBox awardTextArea awardMg ng-binding" ng-disabled="::game.$$isPublish"></textarea>
                                <div class="tipsColor awardMg  in-bl" style="width: 450px;">8000个券号以上请先输入奖品数量再上传，一行一个券号，券号数量与奖品数量需一致，发布后生成券号方式将无法更改</div>
                                <div class="checkCuscodeBtn in-bl pointer awardMg" ng-hide="::game.$$isPublish">检测格式</div>
                            </div><!-- end ngIf: ::!isComfort -->
                            <!-- ngIf: ::isComfort -->
                            <div class="uploadCusCode awardMg ERR_lock ERR_lock_strict" ed-show="award.$isExcelCode &amp;&amp; award.iscuscode" style="display: none;">

                                <div class="uploadBtn upload main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="application/msexcel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"><a id="file_upload_1-button" href="###" class="uploadify-button">上传文件</a></div>
                                <div class="cusCodeFile">
                                    <a href="###" ng-show="!game.$$isPublish &amp;&amp; award.excelName != ''" ng-click="downloadCusCode(false,index)" class="ng-binding ng-hide">兑奖码.xls</a>
                                    <span class="errMsg hide">请上传文件</span>
                                </div>

                                <div class="downloadBtn"><a ng-click="downloadCusCode(true,index)" href="###">下载模版</a></div>
                                <div class="uploadTip tipsColor in-bl">
                                    每个券号不超过20个字符，券号数量与奖品数量需一致，发布后生成券号方式将无法更改
                                </div>
                            </div>
                            <form class="exportCusCodeForm ng-pristine ng-valid" method="post" action="">
                                <textarea name="codeList" class="cusCodeStr hide"></textarea>
                            </form>
                        </div><!-- end ngIf: ::!isComfort || !game.$$afterComCodeModify -->

                        <div class="awardOtherSetting">

                            <div class="setAwardTimeLimitBox baseLine3 awardSettingLine" ed-show="award.$type.term" style="display: block;">
                                <span class="leftTitle2"><div class="awardTitle">可用时段：</div></span>
                                <input id="allTimeLimit5" ng-model="award.$timeLimitSelAll" ng-value="true" class="allTimeLimit ng-pristine ng-untouched ng-valid" type="radio" name="timeLimitType5" value="true"><label for="allTimeLimit5">全部时段</label>
                                <input id="someTimeLimit5" ng-model="award.$timeLimitSelAll" ng-value="false" class="someTimeLimit ng-pristine ng-untouched ng-valid" type="radio" name="timeLimitType5" value="false"><label for="someTimeLimit5">部分时段</label>
                                <div id="timeLimitSelBox5" class="timeLimitSelBox blurCheck awardMg ERR_lock ERR_lock_strict" ed-hide="award.$timeLimitSelAll" style="display: none;">
                                    <!-- ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome5_0" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay5" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome5_0" class="ng-binding">周一</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome5_1" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay5" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome5_1" class="ng-binding">周二</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome5_2" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay5" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome5_2" class="ng-binding">周三</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome5_3" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay5" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome5_3" class="ng-binding">周四</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome5_4" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay5" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome5_4" class="ng-binding">周五</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome5_5" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay5" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome5_5" class="ng-binding">周六</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome5_6" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay5" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome5_6" class="ng-binding">周日</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) -->
                                </div>
                            </div>
                            <div class="setAwardSubTitleBox baseLine3 awardSettingLine">
                                <span class="leftTitle2"><div class="awardTitle">副标题：</div></span>
                                <input ng-model="award.stl" class="awardSubTile input input1 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>

                            <div class="setServicePhoneBox baseLine3 awardSettingLine">
                                <span class="leftTitle2"><div class="awardTitle">客服电话：</div></span>
                                <input ng-model="award.servicepho" class="servicePhone input input1 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>

                        </div>

                        <div class="setCashInfoBox baseLine3 awardSettingLine ">
                            <span class="leftTitle2" style="vertical-align:top"><div class="awardTitle alignTop ng-binding">兑奖须知：</div></span>
                            <textarea ng-model="award.cashinfo" ng-trim="false" class="cashInfoContent input awardTextArea wxCardInput ng-pristine ng-untouched ng-valid"></textarea>
                        </div>

                        <div class="setAwardBtnBox baseLine3 awardSettingLine" ed-show="!award.$type.btn">
                            <span class="leftTitle2"><div class="awardTitle">自定义按钮：</div>
                            </span>
                            <input id="closeAwardBtn5" ng-model="award.attention" ng-value="::1" class="closeAwardBtn cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardBtn5" value="1"><label for="closeAwardBtn5">关闭</label>
                            <input id="openAwardBtn5" ng-model="award.attention" ng-value="::2" class="openAwardBtn cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardBtn5" value="2"><label for="openAwardBtn5">页面跳转</label>
                            <span ng-hide="award.awardtype == 4"><input id="newAttention5" ng-model="award.attention" ng-value="::3" type="radio" name="cusAwardBtn5" class="newAttention cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" value="3"><label for="newAttention5">一键关注</label></span>
                            <div class="awardBtnBox awardMg ERR_lock ERR_lock_strict" ed-hide="award.attention == 1" style="display: none;">
                                <div class="setAwardCusBtnBox baseLine3">
                                    <span class="leftTitle2"><span class="flag">*</span>按钮名称：</span>
                                    <input ng-model="award.btn" class="awartBtnTitle input input6 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                </div>
                                <div class="baseLine3 uploadQrCode">
                                    <span class="leftTitle2"><span class="AttentionName ng-binding">微信公众号：</span></span>
                                    <input ng-model="award.btl" ng-show="award.attention == 2" class="awardBtnLink input input6 wxCardInput ng-pristine ng-untouched ng-valid ng-valid-maxlength ng-hide" maxlength="1000" type="text">
                                    <div id="AttentionBox5" ng-show="award.attention == 3" style="display:inline-block" class="AttentionBox ng-hide">
                                        <div class="attentionImg comUploadImg">
                                            <img ng-src="//hd.faisys.com/image/qrcodeImg.jpg" onload="hdFaiOperateImg(this);" src="//hd.faisys.com/image/qrcodeImg.jpg" width="52" height="52" style="display: block;">
                                        </div>
                                        <div class="QRloaBox comUploadBox chooseImg">
                                            <span id="AtentionBtn5" class="btn main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="image/bmp,image/jpg,image/png,image/gif,image/jpeg"><a id="file_upload_1-button" href="###" class="uploadify-button">＋ 上传二维码</a></span>
                                            <a id="attentionBtn5" class="comUploadExplain aTips" target="_blank" href="http://jz.faisco.com/blog/1647" style="display:block;">如何找到公众号二维码？</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div><!-- end ngRepeat: award in ::game._awardList --><div class="awardSettingBox ng-scope hide" ng-repeat="award in ::game._awardList" ng-controller="awardCtrl" ng-class="::{'hide':index != game.$checkeIndex}" ed-lock="!award.$isOpenAward" style="left: -500px; display: none;">
                    <div class="baseLine awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖项等级：</div></span>
                        <input ng-model="award.style" class="awardStyle input input1 ng-pristine ng-untouched ng-valid" type="text">
                    </div>

                    <!-- ngIf: award.awardType != -1 --><div ng-if="award.awardType != -1" class="baseLine3 awardSettingLine ng-scope">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖品类型：</div></span>
                        <div class="awardTypeSetBox in-bl">
                            <div class="awardTypeValue divBeInput" ng-click="toggleAwardTypeBox()" ng-class="{'disableBg':award.$disabled}">
                                <span class="type ng-binding">礼品</span><!-- ngIf: award.$awardTypeItem.ver -->
                                <div class="detailIcon"></div>
                            </div>
                            <div class="awardTypeBox ng-hide" ng-show="showAwardTypeBox">
                                <!-- ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope checked"><span class="type ng-binding">礼品</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">门店优惠券</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">电商优惠券</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">微信口令红包</span><!-- ngIf: ::info.ver --><span ng-if="::info.ver" style="margin-left:3px;" class="powerIcon flag ng-scope ver_biz" ng-class="::game.$$verInfo.map[info.ver].class"></span><!-- end ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">微信优惠券</span><!-- ngIf: ::info.ver --><span ng-if="::info.ver" style="margin-left:3px;" class="powerIcon flag ng-scope ver_biz" ng-class="::game.$$verInfo.map[info.ver].class"></span><!-- end ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list -->
                            </div>
                        </div>
                        <div class="tipsColor awardMg">活动发布后类型将无法更改</div>
                        <!-- ngIf: ::!isComfort --><div ng-if="::!isComfort" ng-show="award.awardtype == 5" class="tipsColor awardMg passWordredTips ng-scope ng-hide">由于口令红包需关注后方可领取，有可能被微信封公众号，请慎用！</div><!-- end ngIf: ::!isComfort -->
                        <!-- ngIf: ::!isComfort&&game.$$afterWXCardModify --><div ng-if="::!isComfort&amp;&amp;game.$$afterWXCardModify" ng-show="award.awardtype == 4" class="tipsColor awardMg ng-scope ng-hide">生成卡券后，<span style="color:#f00">请勿</span>到微信公众平台内<span style="color:#f00">操作卡券</span></div><!-- end ngIf: ::!isComfort&&game.$$afterWXCardModify -->
                    </div><!-- end ngIf: award.awardType != -1 -->
                    <!-- ngIf: ::game.$$afterWXCardModify --><div ng-if="::game.$$afterWXCardModify" class="awardWXBrandNameBox baseLine3 awardSettingLine ng-scope ERR_lock ERR_lock_strict" ed-show="award.awardtype == 4" style="display: none;">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">卡券商户：</div></span>
                        <input id="wxCardName6" ng-model="award.wxcardcomname" class="input1 hd-wxCardName-value ng-pristine ng-untouched ng-valid" type="text" placeholder="请填写卡券的商户名称(如：海底捞)" ng-disabled="game.$$isPublish&amp;&amp;awardLast().genewxcard">
                        <div class="tipsColor awardMg">确认发布后无法修改，请认真选择！<a href="http://hd.faisco.com/news/4232" target="_blank" class="aTips">了解更多</a></div>
                        <div class="tipsColor awardMg">
                            注：卡券商户名称请勿与授权公众号名称相差太大，否则将有可能被<br>
                            微信视为代建而查封，卡券将无法使用！
                        </div>
                    </div><!-- end ngIf: ::game.$$afterWXCardModify -->
                    <div class="awardDescribeBox baseLine3 awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖项名称：</div></span>
                        <input ng-model="award.name" ng-disabled="award.$disabled" class="awardDescribe input input1 ng-pristine ng-untouched ng-valid" type="text">
                        <div class="tipsColor awardMg">活动发布后名称将无法更改</div>
                    </div>
                    <!-- ngIf: ::isComfort&&false -->
                    <!-- 奖品图片 HYKJ -->
                    <!-- ngIf: ::!isComfort && game.style == 48 -->

                    <!-- 未发布奖品显示逻辑 -->
                    <!-- ngIf: ::!isComfort && !game.$$isPublish --><div ng-if="::!isComfort &amp;&amp; !game.$$isPublish" class="baseLine3 amounLine awardSettingLine ng-scope">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖品数量：</div></span>
                        <input ng-model="award.amount" model-format="int" ng-blur="!award.amount&amp;&amp;(award.amount=0)" class="awardAmount input onlyNum input1 ng-pristine ng-untouched ng-valid ng-valid-maxlength" maxlength="5" type="text" name="">
                    </div><!-- end ngIf: ::!isComfort && !game.$$isPublish -->
                    <!-- ngIf: ::!isComfort && game.$$isPublish -->

                    <!-- ngIf: ::!isComfort && game.$$afterWXCardModify --><div ng-if="::!isComfort &amp;&amp; game.$$afterWXCardModify" class="setAwardQRCodeBox baseLine3 awardSettingLine ng-scope ERR_lock ERR_lock_strict" ed-show="award.awardtype == 4" style="display: none;">
                        <span class="leftTitle2"><div class="awardTitle">核销方式：</div></span>
                        <input id="openAwardQRC6" ng-model="award.opqrc" ng-value="true" ng-disabled="award.$disabled&amp;&amp;!award.opqrc" class="openAwardQRC ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardQRC6" value="true"><label for="openAwardQRC6">二维码</label>
                        <input id="closeAwardQRC6" ng-model="award.opqrc" ng-value="false" ng-disabled="award.$disabled&amp;&amp;award.opqrc" class="closeAwardQRC ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardQRC6" value="false"><label for="closeAwardQRC6">仅卡券号</label>
                        <div class="tipsColor awardMg">活动发布后核销方式将无法更改</div>
                    </div><!-- end ngIf: ::!isComfort && game.$$afterWXCardModify -->
                    <!-- ngIf: ::!isComfort && game.$$afterWxCard --><div ng-if="::!isComfort &amp;&amp; game.$$afterWxCard" ed-show="award.awardtype == 5" class="passwordrednumBox baseLine3 awardSettingLine hide ng-scope ERR_lock ERR_lock_strict" style="display: none;">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">单个金额：</div></span>
                        <input class="passwordrednum input input1 ng-pristine ng-untouched ng-valid ng-valid-maxlength" ng-model="award.passwordrednum" model-format="float ::passwordredFormat" ng-blur="!award.passwordrednum&amp;&amp;(award.passwordrednum=100)" ng-disabled="award.$disabled" maxlength="6" type="text" name=""> 元
                        <div class="tipsColor awardMg">微信规定单个红包金额必须高于1元低于200元</div>
                    </div><!-- end ngIf: ::!isComfort && game.$$afterWxCard -->
                    <!-- ngIf: ::!isComfort && game.style == 48 -->
                    <!-- ngIf: ::game.$$isAwardWithPot && !isComfort -->

                    <div class="setCashTypeBox baseLine3 awardSettingLine" ng-show="award.$type.showcashtype">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">兑奖方式：</div></span>
                        <input id="cashUnderline6" ng-model="award.cashtype" ng-value="::2" class="cashUnderline wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType6" value="2"><label for="cashUnderline6">线下兑奖</label>

                        <!-- ngIf: ::!isComfort || game.$$afterComCodeModify --><span ng-if="::!isComfort || game.$$afterComCodeModify" class="ng-scope"><input id="cashWx6" ng-model="award.cashtype" ng-value="::3" class="cashWx wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType6" ng-disabled="::!game.$$hasWXCash" value="3" disabled="disabled"><label for="cashWx6">公众号兑奖</label></span><!-- end ngIf: ::!isComfort || game.$$afterComCodeModify -->
                        <input id="cashWeb6" ng-model="award.cashtype" ng-value="::4" class="cashWeb wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType6" value="4"><label for="cashWeb6">网页兑奖</label>
                        <div class="tipsColor cashWxTip ng-hide" ng-show="award.cashtype == 3">开通公众号核销功能后，玩家回复兑奖码到公众号，将实现自动核销<a href="http://hd.faisco.com/news/6341" class="aTips" target="_blank">了解更多</a>
                        </div>

                    </div>
                    <div class="setAwardBox" ed-show="award.$type.showsitebox" style="display: block;">
                        <div class="setAwardOptInfoBox baseLine3 awardSettingLine">
                            <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">操作提示：</div></span>
                            <input ng-model="award.opti" class="awardOptInfo input input1 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                        </div>
                        <div class="setAwardCashSiteBox baseLine3 awardSettingLine clearfix" ed-hide="award.$type.sitetype=='none'">
                            <div class="leftTitle2"><span class="flag">*</span><div class="awardTitle ng-binding">兑奖地址：</div></div>
                            <div class="rightBox">

                                <div class="cashAddress" ed-hide="(award.awardtype == 0 || (award.awardtype == 2 &amp;&amp; award.cashtype == 2)) &amp;&amp; award.storeType != 1">
                                    <div class="cashSiteIpt" ed-show="award.$type.sitetype == 'text'" style="display: block;">
                                        <input ng-model="award.cashsite" class="awardCashSite input input1 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                    </div>
                                    <div class="cashUrlIpt ERR_lock ERR_lock_strict" ed-show="award.$type.sitetype == 'url'" style="display: none;">
                                        <input ng-model="award.$cashsiteurl" class="awardCashSiteUrl input input6 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="setCodeTimeBox baseLine baseLine3 awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="usePeriod awardTitle ng-binding">兑奖期限：</div></span>
                        <input ng-model="award.t_type" value="DATE_TYPE_FIX_TIME_RANGE" id="timeRangeType6" class="timeRangeType ng-pristine ng-untouched ng-valid" ng-disabled="(award.$disabled || (game.$$isPublish &amp;&amp; awardLast().genewxcard)) &amp;&amp; award.t_type == 'DATE_TYPE_FIX_TERM'" type="radio" name="timeType6"><label for="timeRangeType6">固定日期</label>
                        <input ng-model="award.t_type" value="DATE_TYPE_FIX_TERM" id="termType6" class="termType ng-pristine ng-untouched ng-valid" ng-disabled="(award.$disabled || (game.$$isPublish &amp;&amp; awardLast().genewxcard)) &amp;&amp; award.t_type == 'DATE_TYPE_FIX_TIME_RANGE'" type="radio" name="timeType6"><label for="termType6">固定时长</label>
                        <div class="codeTimeBox awardMg">
                            <div id="timeRangeBox6" class="timeRangeBox" ng-show="award.t_type == 'DATE_TYPE_FIX_TIME_RANGE'">
                                <input class="useCodeBeginTime input pointer wxCardInput hasDatepicker" style="width:202px" readonly="" type="text" ng-value="::award.cbt" value="2017-06-13 00:00" id="dp1497530394946"> 至
                                <input class="useCodeEndTime input pointer wxCardInput hasDatepicker" style="width:202px" readonly="" type="text" ng-value="::award.cet" value="2017-06-20 23:59" id="dp1497530394947">
                            </div>
                            <div id="termBox6" class="termBox ng-hide" ng-show="award.t_type == 'DATE_TYPE_FIX_TERM'">
                                领取后 <select ng-model="award.cfbt" ng-options="i as (i==0?'当天':i+'天') for i in award.$fixedBeginTermList track by i" class="codeFixedBeginTerm input wxCardInput ng-pristine ng-untouched ng-valid"><option value="0" label="当天" selected="selected">当天</option><option value="1" label="1天">1天</option><option value="2" label="2天">2天</option><option value="3" label="3天">3天</option><option value="4" label="4天">4天</option><option value="5" label="5天">5天</option><option value="6" label="6天">6天</option><option value="7" label="7天">7天</option><option value="8" label="8天">8天</option><option value="9" label="9天">9天</option><option value="10" label="10天">10天</option><option value="11" label="11天">11天</option><option value="12" label="12天">12天</option><option value="13" label="13天">13天</option><option value="14" label="14天">14天</option><option value="15" label="15天">15天</option><option value="16" label="16天">16天</option><option value="17" label="17天">17天</option><option value="18" label="18天">18天</option><option value="19" label="19天">19天</option><option value="20" label="20天">20天</option><option value="21" label="21天">21天</option><option value="22" label="22天">22天</option><option value="23" label="23天">23天</option><option value="24" label="24天">24天</option><option value="25" label="25天">25天</option><option value="26" label="26天">26天</option><option value="27" label="27天">27天</option><option value="28" label="28天">28天</option><option value="29" label="29天">29天</option><option value="30" label="30天">30天</option><option value="31" label="31天">31天</option><option value="32" label="32天">32天</option><option value="33" label="33天">33天</option><option value="34" label="34天">34天</option><option value="35" label="35天">35天</option><option value="36" label="36天">36天</option><option value="37" label="37天">37天</option><option value="38" label="38天">38天</option><option value="39" label="39天">39天</option><option value="40" label="40天">40天</option><option value="41" label="41天">41天</option><option value="42" label="42天">42天</option><option value="43" label="43天">43天</option><option value="44" label="44天">44天</option><option value="45" label="45天">45天</option><option value="46" label="46天">46天</option><option value="47" label="47天">47天</option><option value="48" label="48天">48天</option><option value="49" label="49天">49天</option><option value="50" label="50天">50天</option><option value="51" label="51天">51天</option><option value="52" label="52天">52天</option><option value="53" label="53天">53天</option><option value="54" label="54天">54天</option><option value="55" label="55天">55天</option><option value="56" label="56天">56天</option><option value="57" label="57天">57天</option><option value="58" label="58天">58天</option><option value="59" label="59天">59天</option><option value="60" label="60天">60天</option><option value="61" label="61天">61天</option><option value="62" label="62天">62天</option><option value="63" label="63天">63天</option><option value="64" label="64天">64天</option><option value="65" label="65天">65天</option><option value="66" label="66天">66天</option><option value="67" label="67天">67天</option><option value="68" label="68天">68天</option><option value="69" label="69天">69天</option><option value="70" label="70天">70天</option><option value="71" label="71天">71天</option><option value="72" label="72天">72天</option><option value="73" label="73天">73天</option><option value="74" label="74天">74天</option><option value="75" label="75天">75天</option><option value="76" label="76天">76天</option><option value="77" label="77天">77天</option><option value="78" label="78天">78天</option><option value="79" label="79天">79天</option><option value="80" label="80天">80天</option><option value="81" label="81天">81天</option><option value="82" label="82天">82天</option><option value="83" label="83天">83天</option><option value="84" label="84天">84天</option><option value="85" label="85天">85天</option><option value="86" label="86天">86天</option><option value="87" label="87天">87天</option><option value="88" label="88天">88天</option><option value="89" label="89天">89天</option><option value="90" label="90天">90天</option></select> 生效，有效天数 <select ng-model="award.cft" ng-options="i as i+'天' for i in award.$fixedTermList track by i" class="codeFixedTerm input wxCardInput ng-pristine ng-untouched ng-valid"><option value="1" label="1天">1天</option><option value="2" label="2天">2天</option><option value="3" label="3天">3天</option><option value="4" label="4天">4天</option><option value="5" label="5天">5天</option><option value="6" label="6天">6天</option><option value="7" label="7天">7天</option><option value="8" label="8天">8天</option><option value="9" label="9天">9天</option><option value="10" label="10天">10天</option><option value="11" label="11天">11天</option><option value="12" label="12天">12天</option><option value="13" label="13天">13天</option><option value="14" label="14天">14天</option><option value="15" label="15天">15天</option><option value="16" label="16天">16天</option><option value="17" label="17天">17天</option><option value="18" label="18天">18天</option><option value="19" label="19天">19天</option><option value="20" label="20天">20天</option><option value="21" label="21天">21天</option><option value="22" label="22天">22天</option><option value="23" label="23天">23天</option><option value="24" label="24天">24天</option><option value="25" label="25天">25天</option><option value="26" label="26天">26天</option><option value="27" label="27天">27天</option><option value="28" label="28天">28天</option><option value="29" label="29天">29天</option><option value="30" label="30天" selected="selected">30天</option><option value="31" label="31天">31天</option><option value="32" label="32天">32天</option><option value="33" label="33天">33天</option><option value="34" label="34天">34天</option><option value="35" label="35天">35天</option><option value="36" label="36天">36天</option><option value="37" label="37天">37天</option><option value="38" label="38天">38天</option><option value="39" label="39天">39天</option><option value="40" label="40天">40天</option><option value="41" label="41天">41天</option><option value="42" label="42天">42天</option><option value="43" label="43天">43天</option><option value="44" label="44天">44天</option><option value="45" label="45天">45天</option><option value="46" label="46天">46天</option><option value="47" label="47天">47天</option><option value="48" label="48天">48天</option><option value="49" label="49天">49天</option><option value="50" label="50天">50天</option><option value="51" label="51天">51天</option><option value="52" label="52天">52天</option><option value="53" label="53天">53天</option><option value="54" label="54天">54天</option><option value="55" label="55天">55天</option><option value="56" label="56天">56天</option><option value="57" label="57天">57天</option><option value="58" label="58天">58天</option><option value="59" label="59天">59天</option><option value="60" label="60天">60天</option><option value="61" label="61天">61天</option><option value="62" label="62天">62天</option><option value="63" label="63天">63天</option><option value="64" label="64天">64天</option><option value="65" label="65天">65天</option><option value="66" label="66天">66天</option><option value="67" label="67天">67天</option><option value="68" label="68天">68天</option><option value="69" label="69天">69天</option><option value="70" label="70天">70天</option><option value="71" label="71天">71天</option><option value="72" label="72天">72天</option><option value="73" label="73天">73天</option><option value="74" label="74天">74天</option><option value="75" label="75天">75天</option><option value="76" label="76天">76天</option><option value="77" label="77天">77天</option><option value="78" label="78天">78天</option><option value="79" label="79天">79天</option><option value="80" label="80天">80天</option><option value="81" label="81天">81天</option><option value="82" label="82天">82天</option><option value="83" label="83天">83天</option><option value="84" label="84天">84天</option><option value="85" label="85天">85天</option><option value="86" label="86天">86天</option><option value="87" label="87天">87天</option><option value="88" label="88天">88天</option><option value="89" label="89天">89天</option><option value="90" label="90天">90天</option></select>
                            </div>
                            <div class="tipsColor ng-hide" ng-show="award.awardtype!=5&amp;&amp;award.genewxcard">微信优惠券的使用期限在活动发布后只能延长不能缩短</div>
                        </div>
                    </div>
                    <div class="openContactAward awardSettingLine ERR_lock ERR_lock_strict" ed-show="!game._setting.linkInfoAll &amp;&amp; game._setting.linkInfotype == 4" style="display: none;">
                        <span class="leftTitle2"><span class="awardTitle">联系信息：</span></span>
                        <input type="radio" id="openContactAward6" ng-value="true" ng-model="award.oplink" class="openContact ng-pristine ng-untouched ng-valid" name="contactAward6" value="true"><label for="openContactAward6">开启</label>
                        <input type="radio" id="closeContactAward6" ng-value="false" ng-model="award.oplink" class="closeContact ng-pristine ng-untouched ng-valid" name="contactAward6" value="false"><label for="closeContactAward6">关闭</label>
                    </div>
                    <!-- ngIf: ::!game.$$afterWXCardModify && game.$$afterWxCard && !isComfort -->
                    <div class="baseLine3 awardSettingLine">
                        <div class="showAwardDetailLine pointer" style="padding-right:28px;">
                            <span style="margin-left: 30px;">详情设置</span>
                            <div class="detailIcon awardDetailIcon close"></div>
                        </div>
                        <div style="border-bottom:1px #DCDCDC dashed;width:545px;margin:auto;"></div>
                    </div>
                    <div class="awardDetailSetting">
                        <!-- ngIf: ::!isComfort || !game.$$afterComCodeModify --><div ng-if="::!isComfort || !game.$$afterComCodeModify" class="verTipsBox baseLine3 awardSettingLine setCusCodeBox ng-scope" ed-show="award.$type.cuscode" style="display: block;">
                            <span class="leftTitle2"><span class="powerIcon ver_biz flag"></span><div class="awardTitle">生成券号：</div></span>
                            <input id="sysAwardCode6" ng-model="award.iscuscode" ng-value="false" class="sysAwardCode ng-pristine ng-untouched ng-valid" type="radio" name="setCusCode6" ng-disabled="::game.$$isPublish &amp;&amp; award.iscuscode" value="false"><label for="sysAwardCode6">系统生成</label>
                            <input id="cusAwardCode6" ng-model="award.iscuscode" ng-value="true" class="cusAwardCode js_ver ng-pristine ng-untouched ng-valid" _ver="2" type="radio" name="setCusCode6" ng-disabled="::game.$$isPublish &amp;&amp; !award.iscuscode" value="true" disabled="disabled"><label for="cusAwardCode6">手工导入</label>
                            <!-- ngIf: ::!isComfort --><div ng-if="::!isComfort" class="cusCodeInputBox ng-scope ERR_lock ERR_lock_strict" ed-show="!award.$isExcelCode &amp;&amp; award.iscuscode" style="display: none;">
                                <textarea class="cusCodeBox awardTextArea awardMg ng-binding" ng-disabled="::game.$$isPublish"></textarea>
                                <div class="tipsColor awardMg  in-bl" style="width: 450px;">8000个券号以上请先输入奖品数量再上传，一行一个券号，券号数量与奖品数量需一致，发布后生成券号方式将无法更改</div>
                                <div class="checkCuscodeBtn in-bl pointer awardMg" ng-hide="::game.$$isPublish">检测格式</div>
                            </div><!-- end ngIf: ::!isComfort -->
                            <!-- ngIf: ::isComfort -->
                            <div class="uploadCusCode awardMg ERR_lock ERR_lock_strict" ed-show="award.$isExcelCode &amp;&amp; award.iscuscode" style="display: none;">

                                <div class="uploadBtn upload main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="application/msexcel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"><a id="file_upload_1-button" href="###" class="uploadify-button">上传文件</a></div>
                                <div class="cusCodeFile">
                                    <a href="###" ng-show="!game.$$isPublish &amp;&amp; award.excelName != ''" ng-click="downloadCusCode(false,index)" class="ng-binding ng-hide">兑奖码.xls</a>
                                    <span class="errMsg hide">请上传文件</span>
                                </div>

                                <div class="downloadBtn"><a ng-click="downloadCusCode(true,index)" href="###">下载模版</a></div>
                                <div class="uploadTip tipsColor in-bl">
                                    每个券号不超过20个字符，券号数量与奖品数量需一致，发布后生成券号方式将无法更改
                                </div>
                            </div>
                            <form class="exportCusCodeForm ng-pristine ng-valid" method="post" action="">
                                <textarea name="codeList" class="cusCodeStr hide"></textarea>
                            </form>
                        </div><!-- end ngIf: ::!isComfort || !game.$$afterComCodeModify -->

                        <div class="awardOtherSetting">

                            <div class="setAwardTimeLimitBox baseLine3 awardSettingLine" ed-show="award.$type.term" style="display: block;">
                                <span class="leftTitle2"><div class="awardTitle">可用时段：</div></span>
                                <input id="allTimeLimit6" ng-model="award.$timeLimitSelAll" ng-value="true" class="allTimeLimit ng-pristine ng-untouched ng-valid" type="radio" name="timeLimitType6" value="true"><label for="allTimeLimit6">全部时段</label>
                                <input id="someTimeLimit6" ng-model="award.$timeLimitSelAll" ng-value="false" class="someTimeLimit ng-pristine ng-untouched ng-valid" type="radio" name="timeLimitType6" value="false"><label for="someTimeLimit6">部分时段</label>
                                <div id="timeLimitSelBox6" class="timeLimitSelBox blurCheck awardMg ERR_lock ERR_lock_strict" ed-hide="award.$timeLimitSelAll" style="display: none;">
                                    <!-- ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome6_0" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay6" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome6_0" class="ng-binding">周一</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome6_1" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay6" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome6_1" class="ng-binding">周二</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome6_2" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay6" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome6_2" class="ng-binding">周三</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome6_3" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay6" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome6_3" class="ng-binding">周四</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome6_4" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay6" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome6_4" class="ng-binding">周五</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome6_5" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay6" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome6_5" class="ng-binding">周六</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome6_6" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay6" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome6_6" class="ng-binding">周日</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) -->
                                </div>
                            </div>
                            <div class="setAwardSubTitleBox baseLine3 awardSettingLine">
                                <span class="leftTitle2"><div class="awardTitle">副标题：</div></span>
                                <input ng-model="award.stl" class="awardSubTile input input1 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>

                            <div class="setServicePhoneBox baseLine3 awardSettingLine">
                                <span class="leftTitle2"><div class="awardTitle">客服电话：</div></span>
                                <input ng-model="award.servicepho" class="servicePhone input input1 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>

                        </div>

                        <div class="setCashInfoBox baseLine3 awardSettingLine ">
                            <span class="leftTitle2" style="vertical-align:top"><div class="awardTitle alignTop ng-binding">兑奖须知：</div></span>
                            <textarea ng-model="award.cashinfo" ng-trim="false" class="cashInfoContent input awardTextArea wxCardInput ng-pristine ng-untouched ng-valid"></textarea>
                        </div>

                        <div class="setAwardBtnBox baseLine3 awardSettingLine" ed-show="!award.$type.btn">
                            <span class="leftTitle2"><div class="awardTitle">自定义按钮：</div>
                            </span>
                            <input id="closeAwardBtn6" ng-model="award.attention" ng-value="::1" class="closeAwardBtn cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardBtn6" value="1"><label for="closeAwardBtn6">关闭</label>
                            <input id="openAwardBtn6" ng-model="award.attention" ng-value="::2" class="openAwardBtn cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardBtn6" value="2"><label for="openAwardBtn6">页面跳转</label>
                            <span ng-hide="award.awardtype == 4"><input id="newAttention6" ng-model="award.attention" ng-value="::3" type="radio" name="cusAwardBtn6" class="newAttention cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" value="3"><label for="newAttention6">一键关注</label></span>
                            <div class="awardBtnBox awardMg ERR_lock ERR_lock_strict" ed-hide="award.attention == 1" style="display: none;">
                                <div class="setAwardCusBtnBox baseLine3">
                                    <span class="leftTitle2"><span class="flag">*</span>按钮名称：</span>
                                    <input ng-model="award.btn" class="awartBtnTitle input input6 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                </div>
                                <div class="baseLine3 uploadQrCode">
                                    <span class="leftTitle2"><span class="AttentionName ng-binding">微信公众号：</span></span>
                                    <input ng-model="award.btl" ng-show="award.attention == 2" class="awardBtnLink input input6 wxCardInput ng-pristine ng-untouched ng-valid ng-valid-maxlength ng-hide" maxlength="1000" type="text">
                                    <div id="AttentionBox6" ng-show="award.attention == 3" style="display:inline-block" class="AttentionBox ng-hide">
                                        <div class="attentionImg comUploadImg">
                                            <img ng-src="//hd.faisys.com/image/qrcodeImg.jpg" onload="hdFaiOperateImg(this);" src="//hd.faisys.com/image/qrcodeImg.jpg" width="52" height="52" style="display: block;">
                                        </div>
                                        <div class="QRloaBox comUploadBox chooseImg">
                                            <span id="AtentionBtn6" class="btn main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="image/bmp,image/jpg,image/png,image/gif,image/jpeg"><a id="file_upload_1-button" href="###" class="uploadify-button">＋ 上传二维码</a></span>
                                            <a id="attentionBtn6" class="comUploadExplain aTips" target="_blank" href="http://jz.faisco.com/blog/1647" style="display:block;">如何找到公众号二维码？</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div><!-- end ngRepeat: award in ::game._awardList --><div class="awardSettingBox ng-scope hide" ng-repeat="award in ::game._awardList" ng-controller="awardCtrl" ng-class="::{'hide':index != game.$checkeIndex}" ed-lock="!award.$isOpenAward" style="left: 500px; display: none;">
                    <div class="baseLine awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖项等级：</div></span>
                        <input ng-model="award.style" class="awardStyle input input1 ng-pristine ng-untouched ng-valid" type="text">
                    </div>

                    <!-- ngIf: award.awardType != -1 --><div ng-if="award.awardType != -1" class="baseLine3 awardSettingLine ng-scope">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖品类型：</div></span>
                        <div class="awardTypeSetBox in-bl">
                            <div class="awardTypeValue divBeInput" ng-click="toggleAwardTypeBox()" ng-class="{'disableBg':award.$disabled}">
                                <span class="type ng-binding">礼品</span><!-- ngIf: award.$awardTypeItem.ver -->
                                <div class="detailIcon"></div>
                            </div>
                            <div class="awardTypeBox ng-hide" ng-show="showAwardTypeBox">
                                <!-- ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope checked"><span class="type ng-binding">礼品</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">门店优惠券</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">电商优惠券</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">微信口令红包</span><!-- ngIf: ::info.ver --><span ng-if="::info.ver" style="margin-left:3px;" class="powerIcon flag ng-scope ver_biz" ng-class="::game.$$verInfo.map[info.ver].class"></span><!-- end ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">微信优惠券</span><!-- ngIf: ::info.ver --><span ng-if="::info.ver" style="margin-left:3px;" class="powerIcon flag ng-scope ver_biz" ng-class="::game.$$verInfo.map[info.ver].class"></span><!-- end ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list -->
                            </div>
                        </div>
                        <div class="tipsColor awardMg">活动发布后类型将无法更改</div>
                        <!-- ngIf: ::!isComfort --><div ng-if="::!isComfort" ng-show="award.awardtype == 5" class="tipsColor awardMg passWordredTips ng-scope ng-hide">由于口令红包需关注后方可领取，有可能被微信封公众号，请慎用！</div><!-- end ngIf: ::!isComfort -->
                        <!-- ngIf: ::!isComfort&&game.$$afterWXCardModify --><div ng-if="::!isComfort&amp;&amp;game.$$afterWXCardModify" ng-show="award.awardtype == 4" class="tipsColor awardMg ng-scope ng-hide">生成卡券后，<span style="color:#f00">请勿</span>到微信公众平台内<span style="color:#f00">操作卡券</span></div><!-- end ngIf: ::!isComfort&&game.$$afterWXCardModify -->
                    </div><!-- end ngIf: award.awardType != -1 -->
                    <!-- ngIf: ::game.$$afterWXCardModify --><div ng-if="::game.$$afterWXCardModify" class="awardWXBrandNameBox baseLine3 awardSettingLine ng-scope ERR_lock ERR_lock_strict" ed-show="award.awardtype == 4" style="display: none;">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">卡券商户：</div></span>
                        <input id="wxCardName7" ng-model="award.wxcardcomname" class="input1 hd-wxCardName-value ng-pristine ng-untouched ng-valid" type="text" placeholder="请填写卡券的商户名称(如：海底捞)" ng-disabled="game.$$isPublish&amp;&amp;awardLast().genewxcard">
                        <div class="tipsColor awardMg">确认发布后无法修改，请认真选择！<a href="http://hd.faisco.com/news/4232" target="_blank" class="aTips">了解更多</a></div>
                        <div class="tipsColor awardMg">
                            注：卡券商户名称请勿与授权公众号名称相差太大，否则将有可能被<br>
                            微信视为代建而查封，卡券将无法使用！
                        </div>
                    </div><!-- end ngIf: ::game.$$afterWXCardModify -->
                    <div class="awardDescribeBox baseLine3 awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖项名称：</div></span>
                        <input ng-model="award.name" ng-disabled="award.$disabled" class="awardDescribe input input1 ng-pristine ng-untouched ng-valid" type="text">
                        <div class="tipsColor awardMg">活动发布后名称将无法更改</div>
                    </div>
                    <!-- ngIf: ::isComfort&&false -->
                    <!-- 奖品图片 HYKJ -->
                    <!-- ngIf: ::!isComfort && game.style == 48 -->

                    <!-- 未发布奖品显示逻辑 -->
                    <!-- ngIf: ::!isComfort && !game.$$isPublish --><div ng-if="::!isComfort &amp;&amp; !game.$$isPublish" class="baseLine3 amounLine awardSettingLine ng-scope">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖品数量：</div></span>
                        <input ng-model="award.amount" model-format="int" ng-blur="!award.amount&amp;&amp;(award.amount=0)" class="awardAmount input onlyNum input1 ng-pristine ng-untouched ng-valid ng-valid-maxlength" maxlength="5" type="text" name="">
                    </div><!-- end ngIf: ::!isComfort && !game.$$isPublish -->
                    <!-- ngIf: ::!isComfort && game.$$isPublish -->

                    <!-- ngIf: ::!isComfort && game.$$afterWXCardModify --><div ng-if="::!isComfort &amp;&amp; game.$$afterWXCardModify" class="setAwardQRCodeBox baseLine3 awardSettingLine ng-scope ERR_lock ERR_lock_strict" ed-show="award.awardtype == 4" style="display: none;">
                        <span class="leftTitle2"><div class="awardTitle">核销方式：</div></span>
                        <input id="openAwardQRC7" ng-model="award.opqrc" ng-value="true" ng-disabled="award.$disabled&amp;&amp;!award.opqrc" class="openAwardQRC ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardQRC7" value="true"><label for="openAwardQRC7">二维码</label>
                        <input id="closeAwardQRC7" ng-model="award.opqrc" ng-value="false" ng-disabled="award.$disabled&amp;&amp;award.opqrc" class="closeAwardQRC ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardQRC7" value="false"><label for="closeAwardQRC7">仅卡券号</label>
                        <div class="tipsColor awardMg">活动发布后核销方式将无法更改</div>
                    </div><!-- end ngIf: ::!isComfort && game.$$afterWXCardModify -->
                    <!-- ngIf: ::!isComfort && game.$$afterWxCard --><div ng-if="::!isComfort &amp;&amp; game.$$afterWxCard" ed-show="award.awardtype == 5" class="passwordrednumBox baseLine3 awardSettingLine hide ng-scope ERR_lock ERR_lock_strict" style="display: none;">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">单个金额：</div></span>
                        <input class="passwordrednum input input1 ng-pristine ng-untouched ng-valid ng-valid-maxlength" ng-model="award.passwordrednum" model-format="float ::passwordredFormat" ng-blur="!award.passwordrednum&amp;&amp;(award.passwordrednum=100)" ng-disabled="award.$disabled" maxlength="6" type="text" name=""> 元
                        <div class="tipsColor awardMg">微信规定单个红包金额必须高于1元低于200元</div>
                    </div><!-- end ngIf: ::!isComfort && game.$$afterWxCard -->
                    <!-- ngIf: ::!isComfort && game.style == 48 -->
                    <!-- ngIf: ::game.$$isAwardWithPot && !isComfort -->

                    <div class="setCashTypeBox baseLine3 awardSettingLine" ng-show="award.$type.showcashtype">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">兑奖方式：</div></span>
                        <input id="cashUnderline7" ng-model="award.cashtype" ng-value="::2" class="cashUnderline wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType7" value="2"><label for="cashUnderline7">线下兑奖</label>

                        <!-- ngIf: ::!isComfort || game.$$afterComCodeModify --><span ng-if="::!isComfort || game.$$afterComCodeModify" class="ng-scope"><input id="cashWx7" ng-model="award.cashtype" ng-value="::3" class="cashWx wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType7" ng-disabled="::!game.$$hasWXCash" value="3" disabled="disabled"><label for="cashWx7">公众号兑奖</label></span><!-- end ngIf: ::!isComfort || game.$$afterComCodeModify -->
                        <input id="cashWeb7" ng-model="award.cashtype" ng-value="::4" class="cashWeb wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType7" value="4"><label for="cashWeb7">网页兑奖</label>
                        <div class="tipsColor cashWxTip ng-hide" ng-show="award.cashtype == 3">开通公众号核销功能后，玩家回复兑奖码到公众号，将实现自动核销<a href="http://hd.faisco.com/news/6341" class="aTips" target="_blank">了解更多</a>
                        </div>

                    </div>
                    <div class="setAwardBox" ed-show="award.$type.showsitebox" style="display: block;">
                        <div class="setAwardOptInfoBox baseLine3 awardSettingLine">
                            <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">操作提示：</div></span>
                            <input ng-model="award.opti" class="awardOptInfo input input1 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                        </div>
                        <div class="setAwardCashSiteBox baseLine3 awardSettingLine clearfix" ed-hide="award.$type.sitetype=='none'">
                            <div class="leftTitle2"><span class="flag">*</span><div class="awardTitle ng-binding">兑奖地址：</div></div>
                            <div class="rightBox">

                                <div class="cashAddress" ed-hide="(award.awardtype == 0 || (award.awardtype == 2 &amp;&amp; award.cashtype == 2)) &amp;&amp; award.storeType != 1">
                                    <div class="cashSiteIpt" ed-show="award.$type.sitetype == 'text'" style="display: block;">
                                        <input ng-model="award.cashsite" class="awardCashSite input input1 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                    </div>
                                    <div class="cashUrlIpt ERR_lock ERR_lock_strict" ed-show="award.$type.sitetype == 'url'" style="display: none;">
                                        <input ng-model="award.$cashsiteurl" class="awardCashSiteUrl input input6 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="setCodeTimeBox baseLine baseLine3 awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="usePeriod awardTitle ng-binding">兑奖期限：</div></span>
                        <input ng-model="award.t_type" value="DATE_TYPE_FIX_TIME_RANGE" id="timeRangeType7" class="timeRangeType ng-pristine ng-untouched ng-valid" ng-disabled="(award.$disabled || (game.$$isPublish &amp;&amp; awardLast().genewxcard)) &amp;&amp; award.t_type == 'DATE_TYPE_FIX_TERM'" type="radio" name="timeType7"><label for="timeRangeType7">固定日期</label>
                        <input ng-model="award.t_type" value="DATE_TYPE_FIX_TERM" id="termType7" class="termType ng-pristine ng-untouched ng-valid" ng-disabled="(award.$disabled || (game.$$isPublish &amp;&amp; awardLast().genewxcard)) &amp;&amp; award.t_type == 'DATE_TYPE_FIX_TIME_RANGE'" type="radio" name="timeType7"><label for="termType7">固定时长</label>
                        <div class="codeTimeBox awardMg">
                            <div id="timeRangeBox7" class="timeRangeBox" ng-show="award.t_type == 'DATE_TYPE_FIX_TIME_RANGE'">
                                <input class="useCodeBeginTime input pointer wxCardInput hasDatepicker" style="width:202px" readonly="" type="text" ng-value="::award.cbt" value="2017-06-13 00:00" id="dp1497530394948"> 至
                                <input class="useCodeEndTime input pointer wxCardInput hasDatepicker" style="width:202px" readonly="" type="text" ng-value="::award.cet" value="2017-06-20 23:59" id="dp1497530394949">
                            </div>
                            <div id="termBox7" class="termBox ng-hide" ng-show="award.t_type == 'DATE_TYPE_FIX_TERM'">
                                领取后 <select ng-model="award.cfbt" ng-options="i as (i==0?'当天':i+'天') for i in award.$fixedBeginTermList track by i" class="codeFixedBeginTerm input wxCardInput ng-pristine ng-untouched ng-valid"><option value="0" label="当天" selected="selected">当天</option><option value="1" label="1天">1天</option><option value="2" label="2天">2天</option><option value="3" label="3天">3天</option><option value="4" label="4天">4天</option><option value="5" label="5天">5天</option><option value="6" label="6天">6天</option><option value="7" label="7天">7天</option><option value="8" label="8天">8天</option><option value="9" label="9天">9天</option><option value="10" label="10天">10天</option><option value="11" label="11天">11天</option><option value="12" label="12天">12天</option><option value="13" label="13天">13天</option><option value="14" label="14天">14天</option><option value="15" label="15天">15天</option><option value="16" label="16天">16天</option><option value="17" label="17天">17天</option><option value="18" label="18天">18天</option><option value="19" label="19天">19天</option><option value="20" label="20天">20天</option><option value="21" label="21天">21天</option><option value="22" label="22天">22天</option><option value="23" label="23天">23天</option><option value="24" label="24天">24天</option><option value="25" label="25天">25天</option><option value="26" label="26天">26天</option><option value="27" label="27天">27天</option><option value="28" label="28天">28天</option><option value="29" label="29天">29天</option><option value="30" label="30天">30天</option><option value="31" label="31天">31天</option><option value="32" label="32天">32天</option><option value="33" label="33天">33天</option><option value="34" label="34天">34天</option><option value="35" label="35天">35天</option><option value="36" label="36天">36天</option><option value="37" label="37天">37天</option><option value="38" label="38天">38天</option><option value="39" label="39天">39天</option><option value="40" label="40天">40天</option><option value="41" label="41天">41天</option><option value="42" label="42天">42天</option><option value="43" label="43天">43天</option><option value="44" label="44天">44天</option><option value="45" label="45天">45天</option><option value="46" label="46天">46天</option><option value="47" label="47天">47天</option><option value="48" label="48天">48天</option><option value="49" label="49天">49天</option><option value="50" label="50天">50天</option><option value="51" label="51天">51天</option><option value="52" label="52天">52天</option><option value="53" label="53天">53天</option><option value="54" label="54天">54天</option><option value="55" label="55天">55天</option><option value="56" label="56天">56天</option><option value="57" label="57天">57天</option><option value="58" label="58天">58天</option><option value="59" label="59天">59天</option><option value="60" label="60天">60天</option><option value="61" label="61天">61天</option><option value="62" label="62天">62天</option><option value="63" label="63天">63天</option><option value="64" label="64天">64天</option><option value="65" label="65天">65天</option><option value="66" label="66天">66天</option><option value="67" label="67天">67天</option><option value="68" label="68天">68天</option><option value="69" label="69天">69天</option><option value="70" label="70天">70天</option><option value="71" label="71天">71天</option><option value="72" label="72天">72天</option><option value="73" label="73天">73天</option><option value="74" label="74天">74天</option><option value="75" label="75天">75天</option><option value="76" label="76天">76天</option><option value="77" label="77天">77天</option><option value="78" label="78天">78天</option><option value="79" label="79天">79天</option><option value="80" label="80天">80天</option><option value="81" label="81天">81天</option><option value="82" label="82天">82天</option><option value="83" label="83天">83天</option><option value="84" label="84天">84天</option><option value="85" label="85天">85天</option><option value="86" label="86天">86天</option><option value="87" label="87天">87天</option><option value="88" label="88天">88天</option><option value="89" label="89天">89天</option><option value="90" label="90天">90天</option></select> 生效，有效天数 <select ng-model="award.cft" ng-options="i as i+'天' for i in award.$fixedTermList track by i" class="codeFixedTerm input wxCardInput ng-pristine ng-untouched ng-valid"><option value="1" label="1天">1天</option><option value="2" label="2天">2天</option><option value="3" label="3天">3天</option><option value="4" label="4天">4天</option><option value="5" label="5天">5天</option><option value="6" label="6天">6天</option><option value="7" label="7天">7天</option><option value="8" label="8天">8天</option><option value="9" label="9天">9天</option><option value="10" label="10天">10天</option><option value="11" label="11天">11天</option><option value="12" label="12天">12天</option><option value="13" label="13天">13天</option><option value="14" label="14天">14天</option><option value="15" label="15天">15天</option><option value="16" label="16天">16天</option><option value="17" label="17天">17天</option><option value="18" label="18天">18天</option><option value="19" label="19天">19天</option><option value="20" label="20天">20天</option><option value="21" label="21天">21天</option><option value="22" label="22天">22天</option><option value="23" label="23天">23天</option><option value="24" label="24天">24天</option><option value="25" label="25天">25天</option><option value="26" label="26天">26天</option><option value="27" label="27天">27天</option><option value="28" label="28天">28天</option><option value="29" label="29天">29天</option><option value="30" label="30天" selected="selected">30天</option><option value="31" label="31天">31天</option><option value="32" label="32天">32天</option><option value="33" label="33天">33天</option><option value="34" label="34天">34天</option><option value="35" label="35天">35天</option><option value="36" label="36天">36天</option><option value="37" label="37天">37天</option><option value="38" label="38天">38天</option><option value="39" label="39天">39天</option><option value="40" label="40天">40天</option><option value="41" label="41天">41天</option><option value="42" label="42天">42天</option><option value="43" label="43天">43天</option><option value="44" label="44天">44天</option><option value="45" label="45天">45天</option><option value="46" label="46天">46天</option><option value="47" label="47天">47天</option><option value="48" label="48天">48天</option><option value="49" label="49天">49天</option><option value="50" label="50天">50天</option><option value="51" label="51天">51天</option><option value="52" label="52天">52天</option><option value="53" label="53天">53天</option><option value="54" label="54天">54天</option><option value="55" label="55天">55天</option><option value="56" label="56天">56天</option><option value="57" label="57天">57天</option><option value="58" label="58天">58天</option><option value="59" label="59天">59天</option><option value="60" label="60天">60天</option><option value="61" label="61天">61天</option><option value="62" label="62天">62天</option><option value="63" label="63天">63天</option><option value="64" label="64天">64天</option><option value="65" label="65天">65天</option><option value="66" label="66天">66天</option><option value="67" label="67天">67天</option><option value="68" label="68天">68天</option><option value="69" label="69天">69天</option><option value="70" label="70天">70天</option><option value="71" label="71天">71天</option><option value="72" label="72天">72天</option><option value="73" label="73天">73天</option><option value="74" label="74天">74天</option><option value="75" label="75天">75天</option><option value="76" label="76天">76天</option><option value="77" label="77天">77天</option><option value="78" label="78天">78天</option><option value="79" label="79天">79天</option><option value="80" label="80天">80天</option><option value="81" label="81天">81天</option><option value="82" label="82天">82天</option><option value="83" label="83天">83天</option><option value="84" label="84天">84天</option><option value="85" label="85天">85天</option><option value="86" label="86天">86天</option><option value="87" label="87天">87天</option><option value="88" label="88天">88天</option><option value="89" label="89天">89天</option><option value="90" label="90天">90天</option></select>
                            </div>
                            <div class="tipsColor ng-hide" ng-show="award.awardtype!=5&amp;&amp;award.genewxcard">微信优惠券的使用期限在活动发布后只能延长不能缩短</div>
                        </div>
                    </div>
                    <div class="openContactAward awardSettingLine ERR_lock ERR_lock_strict" ed-show="!game._setting.linkInfoAll &amp;&amp; game._setting.linkInfotype == 4" style="display: none;">
                        <span class="leftTitle2"><span class="awardTitle">联系信息：</span></span>
                        <input type="radio" id="openContactAward7" ng-value="true" ng-model="award.oplink" class="openContact ng-pristine ng-untouched ng-valid" name="contactAward7" value="true"><label for="openContactAward7">开启</label>
                        <input type="radio" id="closeContactAward7" ng-value="false" ng-model="award.oplink" class="closeContact ng-pristine ng-untouched ng-valid" name="contactAward7" value="false"><label for="closeContactAward7">关闭</label>
                    </div>
                    <!-- ngIf: ::!game.$$afterWXCardModify && game.$$afterWxCard && !isComfort -->
                    <div class="baseLine3 awardSettingLine">
                        <div class="showAwardDetailLine pointer" style="padding-right:28px;">
                            <span style="margin-left: 30px;">详情设置</span>
                            <div class="detailIcon awardDetailIcon close"></div>
                        </div>
                        <div style="border-bottom:1px #DCDCDC dashed;width:545px;margin:auto;"></div>
                    </div>
                    <div class="awardDetailSetting">
                        <!-- ngIf: ::!isComfort || !game.$$afterComCodeModify --><div ng-if="::!isComfort || !game.$$afterComCodeModify" class="verTipsBox baseLine3 awardSettingLine setCusCodeBox ng-scope" ed-show="award.$type.cuscode" style="display: block;">
                            <span class="leftTitle2"><span class="powerIcon ver_biz flag"></span><div class="awardTitle">生成券号：</div></span>
                            <input id="sysAwardCode7" ng-model="award.iscuscode" ng-value="false" class="sysAwardCode ng-pristine ng-untouched ng-valid" type="radio" name="setCusCode7" ng-disabled="::game.$$isPublish &amp;&amp; award.iscuscode" value="false"><label for="sysAwardCode7">系统生成</label>
                            <input id="cusAwardCode7" ng-model="award.iscuscode" ng-value="true" class="cusAwardCode js_ver ng-pristine ng-untouched ng-valid" _ver="2" type="radio" name="setCusCode7" ng-disabled="::game.$$isPublish &amp;&amp; !award.iscuscode" value="true" disabled="disabled"><label for="cusAwardCode7">手工导入</label>
                            <!-- ngIf: ::!isComfort --><div ng-if="::!isComfort" class="cusCodeInputBox ng-scope ERR_lock ERR_lock_strict" ed-show="!award.$isExcelCode &amp;&amp; award.iscuscode" style="display: none;">
                                <textarea class="cusCodeBox awardTextArea awardMg ng-binding" ng-disabled="::game.$$isPublish"></textarea>
                                <div class="tipsColor awardMg  in-bl" style="width: 450px;">8000个券号以上请先输入奖品数量再上传，一行一个券号，券号数量与奖品数量需一致，发布后生成券号方式将无法更改</div>
                                <div class="checkCuscodeBtn in-bl pointer awardMg" ng-hide="::game.$$isPublish">检测格式</div>
                            </div><!-- end ngIf: ::!isComfort -->
                            <!-- ngIf: ::isComfort -->
                            <div class="uploadCusCode awardMg ERR_lock ERR_lock_strict" ed-show="award.$isExcelCode &amp;&amp; award.iscuscode" style="display: none;">

                                <div class="uploadBtn upload main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="application/msexcel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"><a id="file_upload_1-button" href="###" class="uploadify-button">上传文件</a></div>
                                <div class="cusCodeFile">
                                    <a href="###" ng-show="!game.$$isPublish &amp;&amp; award.excelName != ''" ng-click="downloadCusCode(false,index)" class="ng-binding ng-hide">兑奖码.xls</a>
                                    <span class="errMsg hide">请上传文件</span>
                                </div>

                                <div class="downloadBtn"><a ng-click="downloadCusCode(true,index)" href="###">下载模版</a></div>
                                <div class="uploadTip tipsColor in-bl">
                                    每个券号不超过20个字符，券号数量与奖品数量需一致，发布后生成券号方式将无法更改
                                </div>
                            </div>
                            <form class="exportCusCodeForm ng-pristine ng-valid" method="post" action="">
                                <textarea name="codeList" class="cusCodeStr hide"></textarea>
                            </form>
                        </div><!-- end ngIf: ::!isComfort || !game.$$afterComCodeModify -->

                        <div class="awardOtherSetting">

                            <div class="setAwardTimeLimitBox baseLine3 awardSettingLine" ed-show="award.$type.term" style="display: block;">
                                <span class="leftTitle2"><div class="awardTitle">可用时段：</div></span>
                                <input id="allTimeLimit7" ng-model="award.$timeLimitSelAll" ng-value="true" class="allTimeLimit ng-pristine ng-untouched ng-valid" type="radio" name="timeLimitType7" value="true"><label for="allTimeLimit7">全部时段</label>
                                <input id="someTimeLimit7" ng-model="award.$timeLimitSelAll" ng-value="false" class="someTimeLimit ng-pristine ng-untouched ng-valid" type="radio" name="timeLimitType7" value="false"><label for="someTimeLimit7">部分时段</label>
                                <div id="timeLimitSelBox7" class="timeLimitSelBox blurCheck awardMg ERR_lock ERR_lock_strict" ed-hide="award.$timeLimitSelAll" style="display: none;">
                                    <!-- ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome7_0" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay7" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome7_0" class="ng-binding">周一</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome7_1" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay7" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome7_1" class="ng-binding">周二</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome7_2" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay7" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome7_2" class="ng-binding">周三</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome7_3" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay7" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome7_3" class="ng-binding">周四</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome7_4" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay7" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome7_4" class="ng-binding">周五</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome7_5" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay7" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome7_5" class="ng-binding">周六</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome7_6" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay7" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome7_6" class="ng-binding">周日</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) -->
                                </div>
                            </div>
                            <div class="setAwardSubTitleBox baseLine3 awardSettingLine">
                                <span class="leftTitle2"><div class="awardTitle">副标题：</div></span>
                                <input ng-model="award.stl" class="awardSubTile input input1 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>

                            <div class="setServicePhoneBox baseLine3 awardSettingLine">
                                <span class="leftTitle2"><div class="awardTitle">客服电话：</div></span>
                                <input ng-model="award.servicepho" class="servicePhone input input1 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>

                        </div>

                        <div class="setCashInfoBox baseLine3 awardSettingLine ">
                            <span class="leftTitle2" style="vertical-align:top"><div class="awardTitle alignTop ng-binding">兑奖须知：</div></span>
                            <textarea ng-model="award.cashinfo" ng-trim="false" class="cashInfoContent input awardTextArea wxCardInput ng-pristine ng-untouched ng-valid"></textarea>
                        </div>

                        <div class="setAwardBtnBox baseLine3 awardSettingLine" ed-show="!award.$type.btn">
                            <span class="leftTitle2"><div class="awardTitle">自定义按钮：</div>
                            </span>
                            <input id="closeAwardBtn7" ng-model="award.attention" ng-value="::1" class="closeAwardBtn cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardBtn7" value="1"><label for="closeAwardBtn7">关闭</label>
                            <input id="openAwardBtn7" ng-model="award.attention" ng-value="::2" class="openAwardBtn cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardBtn7" value="2"><label for="openAwardBtn7">页面跳转</label>
                            <span ng-hide="award.awardtype == 4"><input id="newAttention7" ng-model="award.attention" ng-value="::3" type="radio" name="cusAwardBtn7" class="newAttention cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" value="3"><label for="newAttention7">一键关注</label></span>
                            <div class="awardBtnBox awardMg ERR_lock ERR_lock_strict" ed-hide="award.attention == 1" style="display: none;">
                                <div class="setAwardCusBtnBox baseLine3">
                                    <span class="leftTitle2"><span class="flag">*</span>按钮名称：</span>
                                    <input ng-model="award.btn" class="awartBtnTitle input input6 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                </div>
                                <div class="baseLine3 uploadQrCode">
                                    <span class="leftTitle2"><span class="AttentionName ng-binding">微信公众号：</span></span>
                                    <input ng-model="award.btl" ng-show="award.attention == 2" class="awardBtnLink input input6 wxCardInput ng-pristine ng-untouched ng-valid ng-valid-maxlength ng-hide" maxlength="1000" type="text">
                                    <div id="AttentionBox7" ng-show="award.attention == 3" style="display:inline-block" class="AttentionBox ng-hide">
                                        <div class="attentionImg comUploadImg">
                                            <img ng-src="//hd.faisys.com/image/qrcodeImg.jpg" onload="hdFaiOperateImg(this);" src="//hd.faisys.com/image/qrcodeImg.jpg" width="52" height="52" style="display: block;">
                                        </div>
                                        <div class="QRloaBox comUploadBox chooseImg">
                                            <span id="AtentionBtn7" class="btn main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="image/bmp,image/jpg,image/png,image/gif,image/jpeg"><a id="file_upload_1-button" href="###" class="uploadify-button">＋ 上传二维码</a></span>
                                            <a id="attentionBtn7" class="comUploadExplain aTips" target="_blank" href="http://jz.faisco.com/blog/1647" style="display:block;">如何找到公众号二维码？</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div><!-- end ngRepeat: award in ::game._awardList --><div class="awardSettingBox ng-scope hide ERR_lock ERR_lock_strict" ng-repeat="award in ::game._awardList" ng-controller="awardCtrl" ng-class="::{'hide':index != game.$checkeIndex}" ed-lock="!award.$isOpenAward">
                    <div class="baseLine awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖项等级：</div></span>
                        <input ng-model="award.style" class="awardStyle input input1 ng-pristine ng-untouched ng-valid" type="text">
                    </div>

                    <!-- ngIf: award.awardType != -1 --><div ng-if="award.awardType != -1" class="baseLine3 awardSettingLine ng-scope">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖品类型：</div></span>
                        <div class="awardTypeSetBox in-bl">
                            <div class="awardTypeValue divBeInput" ng-click="toggleAwardTypeBox()" ng-class="{'disableBg':award.$disabled}">
                                <span class="type ng-binding">礼品</span><!-- ngIf: award.$awardTypeItem.ver -->
                                <div class="detailIcon"></div>
                            </div>
                            <div class="awardTypeBox ng-hide" ng-show="showAwardTypeBox">
                                <!-- ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope checked"><span class="type ng-binding">礼品</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">门店优惠券</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list --><div ng-repeat="info in ::award.$$awardTypeList.list" ng-click="selectAwardType(info.val)" ng-mouseenter="award.$checkedType = info.val" ng-mouseleave="award.$checkedType = award.awardtype" ng-class="{'checked':award.$checkedType == info.val}" class="option ng-scope"><span class="type ng-binding">电商优惠券</span><!-- ngIf: ::info.ver --></div><!-- end ngRepeat: info in ::award.$$awardTypeList.list -->
                            </div>
                        </div>
                        <div class="tipsColor awardMg">活动发布后类型将无法更改</div>
                        <!-- ngIf: ::!isComfort -->
                        <!-- ngIf: ::!isComfort&&game.$$afterWXCardModify -->
                    </div><!-- end ngIf: award.awardType != -1 -->
                    <!-- ngIf: ::game.$$afterWXCardModify --><div ng-if="::game.$$afterWXCardModify" class="awardWXBrandNameBox baseLine3 awardSettingLine ng-scope ERR_lock ERR_lock_strict" ed-show="award.awardtype == 4" style="display: none;">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">卡券商户：</div></span>
                        <input id="wxCardName8" ng-model="award.wxcardcomname" class="input1 hd-wxCardName-value ng-pristine ng-untouched ng-valid" type="text" placeholder="请填写卡券的商户名称(如：海底捞)" ng-disabled="game.$$isPublish&amp;&amp;awardLast().genewxcard">
                        <div class="tipsColor awardMg">确认发布后无法修改，请认真选择！<a href="http://hd.faisco.com/news/4232" target="_blank" class="aTips">了解更多</a></div>
                        <div class="tipsColor awardMg">
                            注：卡券商户名称请勿与授权公众号名称相差太大，否则将有可能被<br>
                            微信视为代建而查封，卡券将无法使用！
                        </div>
                    </div><!-- end ngIf: ::game.$$afterWXCardModify -->
                    <div class="awardDescribeBox baseLine3 awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">奖项名称：</div></span>
                        <input ng-model="award.name" ng-disabled="award.$disabled" class="awardDescribe input input1 ng-pristine ng-untouched ng-valid" type="text">
                        <div class="tipsColor awardMg">活动发布后名称将无法更改</div>
                    </div>
                    <!-- ngIf: ::isComfort&&false -->
                    <!-- 奖品图片 HYKJ -->
                    <!-- ngIf: ::!isComfort && game.style == 48 -->

                    <!-- 未发布奖品显示逻辑 -->
                    <!-- ngIf: ::!isComfort && !game.$$isPublish -->
                    <!-- ngIf: ::!isComfort && game.$$isPublish -->

                    <!-- ngIf: ::!isComfort && game.$$afterWXCardModify -->
                    <!-- ngIf: ::!isComfort && game.$$afterWxCard -->
                    <!-- ngIf: ::!isComfort && game.style == 48 -->
                    <!-- ngIf: ::game.$$isAwardWithPot && !isComfort -->

                    <div class="setCashTypeBox baseLine3 awardSettingLine" ng-show="award.$type.showcashtype">
                        <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">兑奖方式：</div></span>
                        <input id="cashUnderline8" ng-model="award.cashtype" ng-value="::2" class="cashUnderline wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType8" value="2"><label for="cashUnderline8">线下兑奖</label>

                        <!-- ngIf: ::!isComfort || game.$$afterComCodeModify --><span ng-if="::!isComfort || game.$$afterComCodeModify" class="ng-scope"><input id="cashWx8" ng-model="award.cashtype" ng-value="::3" class="cashWx wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType8" ng-disabled="::!game.$$hasWXCash" value="3" disabled="disabled"><label for="cashWx8">公众号兑奖</label></span><!-- end ngIf: ::!isComfort || game.$$afterComCodeModify -->
                        <input id="cashWeb8" ng-model="award.cashtype" ng-value="::4" class="cashWeb wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cashType8" value="4"><label for="cashWeb8">网页兑奖</label>
                        <div class="tipsColor cashWxTip ng-hide" ng-show="award.cashtype == 3">开通公众号核销功能后，玩家回复兑奖码到公众号，将实现自动核销<a href="http://hd.faisco.com/news/6341" class="aTips" target="_blank">了解更多</a>
                        </div>

                    </div>
                    <div class="setAwardBox" ed-show="award.$type.showsitebox" style="display: block;">
                        <div class="setAwardOptInfoBox baseLine3 awardSettingLine">
                            <span class="leftTitle2"><span class="flag">*</span><div class="awardTitle">操作提示：</div></span>
                            <input ng-model="award.opti" class="awardOptInfo input input1 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                        </div>
                        <div class="setAwardCashSiteBox baseLine3 awardSettingLine clearfix" ed-hide="award.$type.sitetype=='none'">
                            <div class="leftTitle2"><span class="flag">*</span><div class="awardTitle ng-binding">兑奖地址：</div></div>
                            <div class="rightBox">

                                <div class="cashAddress" ed-hide="(award.awardtype == 0 || (award.awardtype == 2 &amp;&amp; award.cashtype == 2)) &amp;&amp; award.storeType != 1">
                                    <div class="cashSiteIpt" ed-show="award.$type.sitetype == 'text'" style="display: block;">
                                        <input ng-model="award.cashsite" class="awardCashSite input input1 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                    </div>
                                    <div class="cashUrlIpt ERR_lock ERR_lock_strict" ed-show="award.$type.sitetype == 'url'" style="display: none;">
                                        <input ng-model="award.$cashsiteurl" class="awardCashSiteUrl input input6 blurCheck wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="setCodeTimeBox baseLine baseLine3 awardSettingLine">
                        <span class="leftTitle2"><span class="flag">*</span><div class="usePeriod awardTitle ng-binding">兑奖期限：</div></span>
                        <input ng-model="award.t_type" value="DATE_TYPE_FIX_TIME_RANGE" id="timeRangeType8" class="timeRangeType ng-pristine ng-untouched ng-valid" ng-disabled="(award.$disabled || (game.$$isPublish &amp;&amp; awardLast().genewxcard)) &amp;&amp; award.t_type == 'DATE_TYPE_FIX_TERM'" type="radio" name="timeType8"><label for="timeRangeType8">固定日期</label>
                        <input ng-model="award.t_type" value="DATE_TYPE_FIX_TERM" id="termType8" class="termType ng-pristine ng-untouched ng-valid" ng-disabled="(award.$disabled || (game.$$isPublish &amp;&amp; awardLast().genewxcard)) &amp;&amp; award.t_type == 'DATE_TYPE_FIX_TIME_RANGE'" type="radio" name="timeType8"><label for="termType8">固定时长</label>
                        <div class="codeTimeBox awardMg">
                            <div id="timeRangeBox8" class="timeRangeBox" ng-show="award.t_type == 'DATE_TYPE_FIX_TIME_RANGE'">
                                <input class="useCodeBeginTime input pointer wxCardInput hasDatepicker" style="width:202px" readonly="" type="text" ng-value="::award.cbt" value="2017-06-13 00:00" id="dp1497530394950"> 至
                                <input class="useCodeEndTime input pointer wxCardInput hasDatepicker" style="width:202px" readonly="" type="text" ng-value="::award.cet" value="2017-06-20 23:59" id="dp1497530394951">
                            </div>
                            <div id="termBox8" class="termBox ng-hide" ng-show="award.t_type == 'DATE_TYPE_FIX_TERM'">
                                领取后 <select ng-model="award.cfbt" ng-options="i as (i==0?'当天':i+'天') for i in award.$fixedBeginTermList track by i" class="codeFixedBeginTerm input wxCardInput ng-pristine ng-untouched ng-valid"><option value="0" label="当天" selected="selected">当天</option><option value="1" label="1天">1天</option><option value="2" label="2天">2天</option><option value="3" label="3天">3天</option><option value="4" label="4天">4天</option><option value="5" label="5天">5天</option><option value="6" label="6天">6天</option><option value="7" label="7天">7天</option><option value="8" label="8天">8天</option><option value="9" label="9天">9天</option><option value="10" label="10天">10天</option><option value="11" label="11天">11天</option><option value="12" label="12天">12天</option><option value="13" label="13天">13天</option><option value="14" label="14天">14天</option><option value="15" label="15天">15天</option><option value="16" label="16天">16天</option><option value="17" label="17天">17天</option><option value="18" label="18天">18天</option><option value="19" label="19天">19天</option><option value="20" label="20天">20天</option><option value="21" label="21天">21天</option><option value="22" label="22天">22天</option><option value="23" label="23天">23天</option><option value="24" label="24天">24天</option><option value="25" label="25天">25天</option><option value="26" label="26天">26天</option><option value="27" label="27天">27天</option><option value="28" label="28天">28天</option><option value="29" label="29天">29天</option><option value="30" label="30天">30天</option><option value="31" label="31天">31天</option><option value="32" label="32天">32天</option><option value="33" label="33天">33天</option><option value="34" label="34天">34天</option><option value="35" label="35天">35天</option><option value="36" label="36天">36天</option><option value="37" label="37天">37天</option><option value="38" label="38天">38天</option><option value="39" label="39天">39天</option><option value="40" label="40天">40天</option><option value="41" label="41天">41天</option><option value="42" label="42天">42天</option><option value="43" label="43天">43天</option><option value="44" label="44天">44天</option><option value="45" label="45天">45天</option><option value="46" label="46天">46天</option><option value="47" label="47天">47天</option><option value="48" label="48天">48天</option><option value="49" label="49天">49天</option><option value="50" label="50天">50天</option><option value="51" label="51天">51天</option><option value="52" label="52天">52天</option><option value="53" label="53天">53天</option><option value="54" label="54天">54天</option><option value="55" label="55天">55天</option><option value="56" label="56天">56天</option><option value="57" label="57天">57天</option><option value="58" label="58天">58天</option><option value="59" label="59天">59天</option><option value="60" label="60天">60天</option><option value="61" label="61天">61天</option><option value="62" label="62天">62天</option><option value="63" label="63天">63天</option><option value="64" label="64天">64天</option><option value="65" label="65天">65天</option><option value="66" label="66天">66天</option><option value="67" label="67天">67天</option><option value="68" label="68天">68天</option><option value="69" label="69天">69天</option><option value="70" label="70天">70天</option><option value="71" label="71天">71天</option><option value="72" label="72天">72天</option><option value="73" label="73天">73天</option><option value="74" label="74天">74天</option><option value="75" label="75天">75天</option><option value="76" label="76天">76天</option><option value="77" label="77天">77天</option><option value="78" label="78天">78天</option><option value="79" label="79天">79天</option><option value="80" label="80天">80天</option><option value="81" label="81天">81天</option><option value="82" label="82天">82天</option><option value="83" label="83天">83天</option><option value="84" label="84天">84天</option><option value="85" label="85天">85天</option><option value="86" label="86天">86天</option><option value="87" label="87天">87天</option><option value="88" label="88天">88天</option><option value="89" label="89天">89天</option><option value="90" label="90天">90天</option></select> 生效，有效天数 <select ng-model="award.cft" ng-options="i as i+'天' for i in award.$fixedTermList track by i" class="codeFixedTerm input wxCardInput ng-pristine ng-untouched ng-valid"><option value="1" label="1天">1天</option><option value="2" label="2天">2天</option><option value="3" label="3天">3天</option><option value="4" label="4天">4天</option><option value="5" label="5天">5天</option><option value="6" label="6天">6天</option><option value="7" label="7天">7天</option><option value="8" label="8天">8天</option><option value="9" label="9天">9天</option><option value="10" label="10天">10天</option><option value="11" label="11天">11天</option><option value="12" label="12天">12天</option><option value="13" label="13天">13天</option><option value="14" label="14天">14天</option><option value="15" label="15天">15天</option><option value="16" label="16天">16天</option><option value="17" label="17天">17天</option><option value="18" label="18天">18天</option><option value="19" label="19天">19天</option><option value="20" label="20天">20天</option><option value="21" label="21天">21天</option><option value="22" label="22天">22天</option><option value="23" label="23天">23天</option><option value="24" label="24天">24天</option><option value="25" label="25天">25天</option><option value="26" label="26天">26天</option><option value="27" label="27天">27天</option><option value="28" label="28天">28天</option><option value="29" label="29天">29天</option><option value="30" label="30天" selected="selected">30天</option><option value="31" label="31天">31天</option><option value="32" label="32天">32天</option><option value="33" label="33天">33天</option><option value="34" label="34天">34天</option><option value="35" label="35天">35天</option><option value="36" label="36天">36天</option><option value="37" label="37天">37天</option><option value="38" label="38天">38天</option><option value="39" label="39天">39天</option><option value="40" label="40天">40天</option><option value="41" label="41天">41天</option><option value="42" label="42天">42天</option><option value="43" label="43天">43天</option><option value="44" label="44天">44天</option><option value="45" label="45天">45天</option><option value="46" label="46天">46天</option><option value="47" label="47天">47天</option><option value="48" label="48天">48天</option><option value="49" label="49天">49天</option><option value="50" label="50天">50天</option><option value="51" label="51天">51天</option><option value="52" label="52天">52天</option><option value="53" label="53天">53天</option><option value="54" label="54天">54天</option><option value="55" label="55天">55天</option><option value="56" label="56天">56天</option><option value="57" label="57天">57天</option><option value="58" label="58天">58天</option><option value="59" label="59天">59天</option><option value="60" label="60天">60天</option><option value="61" label="61天">61天</option><option value="62" label="62天">62天</option><option value="63" label="63天">63天</option><option value="64" label="64天">64天</option><option value="65" label="65天">65天</option><option value="66" label="66天">66天</option><option value="67" label="67天">67天</option><option value="68" label="68天">68天</option><option value="69" label="69天">69天</option><option value="70" label="70天">70天</option><option value="71" label="71天">71天</option><option value="72" label="72天">72天</option><option value="73" label="73天">73天</option><option value="74" label="74天">74天</option><option value="75" label="75天">75天</option><option value="76" label="76天">76天</option><option value="77" label="77天">77天</option><option value="78" label="78天">78天</option><option value="79" label="79天">79天</option><option value="80" label="80天">80天</option><option value="81" label="81天">81天</option><option value="82" label="82天">82天</option><option value="83" label="83天">83天</option><option value="84" label="84天">84天</option><option value="85" label="85天">85天</option><option value="86" label="86天">86天</option><option value="87" label="87天">87天</option><option value="88" label="88天">88天</option><option value="89" label="89天">89天</option><option value="90" label="90天">90天</option></select>
                            </div>
                            <div class="tipsColor ng-hide" ng-show="award.awardtype!=5&amp;&amp;award.genewxcard">微信优惠券的使用期限在活动发布后只能延长不能缩短</div>
                        </div>
                    </div>
                    <div class="openContactAward awardSettingLine ERR_lock ERR_lock_strict" ed-show="!game._setting.linkInfoAll &amp;&amp; game._setting.linkInfotype == 4" style="display: none;">
                        <span class="leftTitle2"><span class="awardTitle">联系信息：</span></span>
                        <input type="radio" id="openContactAward8" ng-value="true" ng-model="award.oplink" class="openContact ng-pristine ng-untouched ng-valid" name="contactAward8" value="true"><label for="openContactAward8">开启</label>
                        <input type="radio" id="closeContactAward8" ng-value="false" ng-model="award.oplink" class="closeContact ng-pristine ng-untouched ng-valid" name="contactAward8" value="false"><label for="closeContactAward8">关闭</label>
                    </div>
                    <!-- ngIf: ::!game.$$afterWXCardModify && game.$$afterWxCard && !isComfort -->
                    <div class="baseLine3 awardSettingLine">
                        <div class="showAwardDetailLine pointer" style="padding-right:28px;">
                            <span style="margin-left: 30px;">详情设置</span>
                            <div class="detailIcon awardDetailIcon close"></div>
                        </div>
                        <div style="border-bottom:1px #DCDCDC dashed;width:545px;margin:auto;"></div>
                    </div>
                    <div class="awardDetailSetting">
                        <!-- ngIf: ::!isComfort || !game.$$afterComCodeModify -->

                        <div class="awardOtherSetting">

                            <div class="setAwardTimeLimitBox baseLine3 awardSettingLine" ed-show="award.$type.term" style="display: block;">
                                <span class="leftTitle2"><div class="awardTitle">可用时段：</div></span>
                                <input id="allTimeLimit8" ng-model="award.$timeLimitSelAll" ng-value="true" class="allTimeLimit ng-pristine ng-untouched ng-valid" type="radio" name="timeLimitType8" value="true"><label for="allTimeLimit8">全部时段</label>
                                <input id="someTimeLimit8" ng-model="award.$timeLimitSelAll" ng-value="false" class="someTimeLimit ng-pristine ng-untouched ng-valid" type="radio" name="timeLimitType8" value="false"><label for="someTimeLimit8">部分时段</label>
                                <div id="timeLimitSelBox8" class="timeLimitSelBox blurCheck awardMg ERR_lock ERR_lock_strict" ed-hide="award.$timeLimitSelAll" style="display: none;">
                                    <!-- ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome8_0" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay8" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome8_0" class="ng-binding">周一</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome8_1" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay8" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome8_1" class="ng-binding">周二</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome8_2" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay8" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome8_2" class="ng-binding">周三</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome8_3" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay8" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome8_3" class="ng-binding">周四</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome8_4" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay8" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome8_4" class="ng-binding">周五</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome8_5" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay8" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome8_5" class="ng-binding">周六</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) --><span ng-repeat="i in ::getIntList(0,6)" class="ng-scope"><input id="timeLimitSome8_6" ng-model="award._tlmt[i]" type="checkbox" name="timeLimitDay8" class="ng-pristine ng-untouched ng-valid"><label for="timeLimitSome8_6" class="ng-binding">周日</label> </span><!-- end ngRepeat: i in ::getIntList(0,6) -->
                                </div>
                            </div>
                            <div class="setAwardSubTitleBox baseLine3 awardSettingLine">
                                <span class="leftTitle2"><div class="awardTitle">副标题：</div></span>
                                <input ng-model="award.stl" class="awardSubTile input input1 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>

                            <div class="setServicePhoneBox baseLine3 awardSettingLine">
                                <span class="leftTitle2"><div class="awardTitle">客服电话：</div></span>
                                <input ng-model="award.servicepho" class="servicePhone input input1 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>

                        </div>

                        <div class="setCashInfoBox baseLine3 awardSettingLine ">
                            <span class="leftTitle2" style="vertical-align:top"><div class="awardTitle alignTop ng-binding">兑奖须知：</div></span>
                            <textarea ng-model="award.cashinfo" ng-trim="false" class="cashInfoContent input awardTextArea wxCardInput ng-pristine ng-untouched ng-valid"></textarea>
                        </div>

                        <div class="setAwardBtnBox baseLine3 awardSettingLine" ed-show="!award.$type.btn">
                            <span class="leftTitle2"><div class="awardTitle">自定义按钮：</div>
                            </span>
                            <input id="closeAwardBtn8" ng-model="award.attention" ng-value="::1" class="closeAwardBtn cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardBtn8" value="1"><label for="closeAwardBtn8">关闭</label>
                            <input id="openAwardBtn8" ng-model="award.attention" ng-value="::2" class="openAwardBtn cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" type="radio" name="cusAwardBtn8" value="2"><label for="openAwardBtn8">页面跳转</label>
                            <span ng-hide="award.awardtype == 4"><input id="newAttention8" ng-model="award.attention" ng-value="::3" type="radio" name="cusAwardBtn8" class="newAttention cusAwardBtn wxCardInput ng-pristine ng-untouched ng-valid" value="3"><label for="newAttention8">一键关注</label></span>
                            <div class="awardBtnBox awardMg ERR_lock ERR_lock_strict" ed-hide="award.attention == 1" style="display: none;">
                                <div class="setAwardCusBtnBox baseLine3">
                                    <span class="leftTitle2"><span class="flag">*</span>按钮名称：</span>
                                    <input ng-model="award.btn" class="awartBtnTitle input input6 wxCardInput ng-pristine ng-untouched ng-valid" type="text">
                                </div>
                                <div class="baseLine3 uploadQrCode">
                                    <span class="leftTitle2"><span class="AttentionName ng-binding">微信公众号：</span></span>
                                    <input ng-model="award.btl" ng-show="award.attention == 2" class="awardBtnLink input input6 wxCardInput ng-pristine ng-untouched ng-valid ng-valid-maxlength ng-hide" maxlength="1000" type="text">
                                    <div id="AttentionBox8" ng-show="award.attention == 3" style="display:inline-block" class="AttentionBox ng-hide">
                                        <div class="attentionImg comUploadImg">
                                            <img ng-src="//hd.faisys.com/image/qrcodeImg.jpg" onload="hdFaiOperateImg(this);" src="//hd.faisys.com/image/qrcodeImg.jpg" width="52" height="52" style="display: block;">
                                        </div>
                                        <div class="QRloaBox comUploadBox chooseImg">
                                            <span id="AtentionBtn8" class="btn main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="image/bmp,image/jpg,image/png,image/gif,image/jpeg"><a id="file_upload_1-button" href="###" class="uploadify-button">＋ 上传二维码</a></span>
                                            <a id="attentionBtn8" class="comUploadExplain aTips" target="_blank" href="http://jz.faisco.com/blog/1647" style="display:block;">如何找到公众号二维码？</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div><!-- end ngRepeat: award in ::game._awardList -->
            </div>
        </div>
    </div>
</div>
                    <div id="shareSetBox" class="settingBox hide" style="display: none;">

                        <div class="baseLine baseLine1">
                            <span class="leftTitle"><span class="baseSettingTitle">分享活动：</span></span>
                            <input id="offForbidShareActivity" ng-model="game._flagB.f32768" ng-value="false" type="radio" name="shareActivity" checked="" class="ng-untouched ng-valid ng-dirty ng-valid-parse" value="false"><label for="offForbidShareActivity">允许分享</label>
                            <input id="onForbidShareActivity" ng-model="game._flagB.f32768" ng-value="true" type="radio" name="shareActivity" class="ng-untouched ng-valid ng-dirty" value="true"><label for="onForbidShareActivity">禁止分享</label>
                        </div>

                        <div class="baseLine baseLine1" ng-show="!game._flagB.f32768">
                            <span class="leftTitle"><span class="baseSettingTitle">微信分享图标：</span>
                            </span>
                            <input id="defWxShare" ng-model="game._flag.f128" ng-value="false" type="radio" name="wxShare" checked="" class="ng-untouched ng-valid ng-dirty ng-valid-parse" value="false"><label for="defWxShare">默认</label>
                            <input id="cusWxShare" ng-model="game._flag.f128" ng-value="true" type="radio" name="wxShare" class="ng-untouched ng-valid ng-dirty" value="true"><label for="cusWxShare">自定义</label>
                        </div>
                        <div id="uploadWxShare" class="comUploadWarp commMg ng-hide" ng-show="game._flag.f128&amp;&amp;!game._flagB.f32768">
                            <div class="wxShareImg comUploadImg" style="overflow:hidden;">
                                <img src="//hd.faisys.com/image/game/l_zhuanpan.jpg?v=201508111845" onload="hdFaiOperateImg(this,7)" width="80" height="80" style="display: block;">
                            </div>
                            <div class="comUploadBox chooseImg">
                                <span id="wxShareUploadButton" class="btn main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="image/bmp,image/jpg,image/png,image/gif,image/jpeg"><a id="file_upload_1-button" href="###" class="uploadify-button">＋ 选择图片</a></span>
                                <div class="comUploadExplain">请上传5M以内，格式为jpg、bmp、png、gif的图片</div>
                            </div>
                        </div>
                        <div class="baseLine1 verTipsBox" ng-show="!game._flagB.f32768">
                            <span class="leftTitle"><span class="powerIcon marginLeft7 ver_by flag"></span><span class="baseSettingTitle">微信分享内容：</span></span>
                            <input id="defWxShareText" ng-model="game._flag.f1024" ng-value="false" type="radio" name="wxShareText" checked="" class="ng-pristine ng-untouched ng-valid" value="false"><label for="defWxShareText">默认</label>
                            <input class="js_ver ng-pristine ng-untouched ng-valid" _ver="1" ng-model="game._flag.f1024" ng-value="true" id="cusWxShareText" type="radio" name="wxShareText" value="true" disabled="disabled"><label for="cusWxShareText">自定义</label>
                            <div id="wxShareTextWrap" ed-show="game._flag.f1024" ed-strict="false" ng-show="!game._flagB.f32768" class="ERR_lock" style="display: none;">

                            <div class="commMg wxShareTextBox hide">
                                <div class="wxShareTextTitelBox commBg" style="color: #555;">
                                    <div class="wxShareTextTitel">null</div>

                                        <div class="wxShareTextOther" style="border-left:0;" unselectable="on" onmousedown="return false"><span class="insertIco" unselectable="on"></span>插入</div>
                                        <div class="tagOptionsBox" style="background-color:#fff">

                                        </div>

                                </div>
                                <div class="wxShareTextContent input" style="background-color:#fff;" contenteditable="true">&#8203;null<br></div>
                            </div>

                            <div class="commMg wxShareTextBox ">
                                <div class="wxShareTextTitelBox commBg" style="color: #555;">
                                    <div class="wxShareTextTitel">分享内容（<span style="color:#949494">没有获奖的玩家</span>）</div>

                                        <div class="wxShareTextOther" style="border-left:0;" unselectable="on" onmousedown="return false"><span class="insertIco" unselectable="on"></span>插入</div>
                                        <div class="tagOptionsBox" style="background-color:#fff">

                                            <div class="tagOptions" unselectable="on">玩家名称</div>

                                        </div>

                                </div>
                                <div class="wxShareTextContent input" style="background-color:#fff;" contenteditable="true">&#8203;轻轻松松就能抽到大奖，积攒多年的人品终于有用了，你也赶紧来抽奖吧！！<br></div>
                            </div>

                            <div class="commMg wxShareTextBox hide">
                                <div class="wxShareTextTitelBox commBg" style="color: #555;">
                                    <div class="wxShareTextTitel">分享内容（<span style="color:#949494">没有获奖有成绩的玩家</span>）</div>

                                        <div class="wxShareTextOther" style="border-left:0;" unselectable="on" onmousedown="return false"><span class="insertIco" unselectable="on"></span>插入</div>
                                        <div class="tagOptionsBox" style="background-color:#fff">

                                            <div class="tagOptions" unselectable="on">玩家名称</div>

                                            <div class="tagOptions" unselectable="on">游戏成绩</div>

                                            <div class="tagOptions" unselectable="on">游戏排名</div>

                                        </div>

                                </div>
                                <div class="wxShareTextContent input" style="background-color:#fff;" contenteditable="true">&#8203;<span class="tag" contenteditable="false">玩家名称</span>以<span class="tag" contenteditable="false">游戏成绩</span>的成绩傲视群雄，你敢来挑战Ta赢取丰厚奖品吗？<br></div>
                            </div>

                            <div class="commMg wxShareTextBox ">
                                <div class="wxShareTextTitelBox commBg" style="color: #555;">
                                    <div class="wxShareTextTitel">分享内容（<span style="color:#949494">获奖的玩家</span>）</div>

                                        <div class="wxShareTextOther" style="border-left:0;" unselectable="on" onmousedown="return false"><span class="insertIco" unselectable="on"></span>插入</div>
                                        <div class="tagOptionsBox" style="background-color:#fff">

                                            <div class="tagOptions" unselectable="on">玩家名称</div>

                                            <div class="tagOptions" unselectable="on">奖项等级</div>

                                            <div class="tagOptions" unselectable="on">奖品名称</div>

                                        </div>

                                </div>
                                <div class="wxShareTextContent input" style="background-color:#fff;" contenteditable="true">&#8203;我已经在活动中抽到了奖品，你也快来抽大奖吧！<br></div>
                            </div>

                        <div id="wxShareWarm" class="hide commMg">注：若奖品名称、奖项等级中含有敏感词如”红包“，分享时系统会自动屏蔽敏感词。</div>
                        </div>
                        <div id="wxShareWarm2" class="tipsColor commMg" ng-show="!game._flagB.f32768">注：页面及分享信息请遵守微信朋友圈管理规定，请勿出现违规信息，否则有可能导致活动分享到朋友圈仅自己可见
                            <!-- <a href='http://hd.faisco.com/news/4454' target="_blank" class="aTips">了解更多</a> -->
                        </div>
                        </div>
                    </div>
                    <div id="moreSetting" class="settingBox hide" style="display: block;">
                        <div id="activeTabSubMenu"><!--
                            --><div class="column checked" onclick="changeTabSubMenu(this,event);">企业信息</div><!--
                            --><div class="column" onclick="changeTabSubMenu(this,event);">游戏设置</div><!--
                            --><div class="slideBar">
                                <div class="slideBarTip transitionPanel"></div>
                            </div>
                        </div>
                        <div id="footSetting" class="footSetting">
                            <div id="companySetBox" class="subTabsettingBox">

                                <div class="hostNameWrap baseLine2">
                                    <div>
                                        <span class="leftTitle"><span class="flag">*</span><span class="baseSettingTitle">主办单位：</span></span>
                                        <input type="text" id="hostName" class="input input1 ng-pristine ng-untouched ng-valid" ng-model="game._setting.hn">
                                    </div>
                                    <div class="baseLine baseLine1">
                                        <span class="leftTitle"><span class="baseSettingTitle">链接地址：</span></span>
                                        <input class="input input1 ng-pristine ng-untouched ng-valid" id="hostLink" type="text" ng-model="game._setting.hl">
                                    </div>
                                </div>

                                <div id="uploadLogoWrap">
                                    <div class="baseLine baseLine1">
                                        <span class="leftTitle"><span class="baseSettingTitle">企业Logo：</span></span>
                                        <input id="hideLogo" ng-model="game._flag.f32" ng-value="false" type="radio" name="isShowLogo" class="ng-pristine ng-untouched ng-valid" value="false"><label for="hideLogo">隐藏</label>
                                        <input id="showLogo" ng-model="game._flag.f32" ng-value="true" type="radio" name="isShowLogo" style="margin-left: 10px;" checked="" class="ng-pristine ng-untouched ng-valid" value="true"><label for="showLogo">显示</label>
                                    </div>
                                    <div id="uploadLogo" class="commMg comUploadWarp ng-hide" ng-show="game._flag.f32">
                                        <div class="logoImg comUploadImg">
                                            <img src="//hd.faisys.com/version2/image/nopic.jpg" onload="hdFaiOperateImg(this)" width="80" height="80" style="display: block;">
                                        </div>
                                        <div class="comUploadBox chooseImg">
                                            <span id="uploadButton" class="btn main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="image/bmp,image/jpg,image/png,image/gif,image/jpeg"><a id="file_upload_1-button" href="###" class="uploadify-button">＋ 选择图片</a></span>
                                            <div class="comUploadExplain">请上传jpg、bmp、png、gif格式的图片</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="baseLine baseLine1">
                                    <span class="leftTitle"><span class="baseSettingTitle">页面加载图片：</span></span>
                                    <input id="loadingDef" ng-model="game._setting.ls" ng-value="::1" type="radio" name="loadingStyle" class="ng-pristine ng-untouched ng-valid" value="1"><label for="loadingDef">默认</label>
                                    <input id="loadingCustom" ng-model="game._setting.ls" ng-value="::3" type="radio" name="loadingStyle" class="ng-pristine ng-untouched ng-valid" value="3"><label for="loadingCustom">自定义</label>
                                </div>
                                <div id="loadingCustomBox" class="commMg comUploadWarp ng-hide" ng-show="game._setting.ls == 3">
                                    <div class="loadingCustomImg comUploadImg">
                                        <img src="//hd.faisys.com/image/pic2.jpg" onload="hdFaiOperateImg(this)" width="80" height="80" style="display: block;">
                                    </div>
                                    <div class="comUploadBox chooseImg">
                                        <span id="loadingCustomButton" class="btn main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="image/bmp,image/jpg,image/png,image/gif,image/jpeg"><a id="file_upload_1-button" href="###" class="uploadify-button">＋ 选择图片</a></span>
                                        <div class="comUploadExplain">请上传jpg、bmp、png、gif格式的图片</div>
                                    </div>
                                </div>
                                <div class="menuBoxWrap baseLine1">
                                    <div class="baseLine baseLine1">
                                        <span class="leftTitle"><span class="baseSettingTitle">功能按钮：</span></span>
                                        <input id="closeMenu" ng-model="game._setting.ms" ng-value="::1" type="radio" name="menuStyle" class="ng-untouched ng-valid ng-dirty ng-valid-parse" value="1"><label for="closeMenu">隐藏</label>
                                        <input id="jumpPage" ng-model="game._setting.ms" ng-value="::2" type="radio" name="menuStyle" class="ng-untouched ng-valid ng-dirty" value="2"><label for="jumpPage">页面跳转</label>
                                        <input id="attention" ng-model="game._setting.ms" ng-value="::3" type="radio" name="menuStyle" class="ng-untouched ng-valid ng-dirty" value="3"><label for="attention">一键关注</label>
                                    </div>
                                    <div id="menuBox" class="menuBox commMg ERR_lock" style="display: none;">
                                        <div class="baseLine">
                                            <span class="leftTitle2"><span class="flag">*</span>按钮名称：</span>
                                            <input type="text" id="menuName" class="menuName input input2 ng-pristine ng-untouched ng-valid" ng-model="game._setting.mun">
                                        </div>
                                        <div id="menuLinkBox1" class="baseLine1 ERR_lock" style="display: none;">
                                            <span class="leftTitle2"><span>按钮链接：</span></span>
                                            <input type="text" id="menuLink" class="input input2 ng-pristine ng-untouched ng-valid" ng-model="game._setting.ml" ng-value="::game._setting.ms == 2 ? game._setting.ml : ''" value="">
                                        </div>
                                        <div id="menuLinkBox2" class="baseLine1 ERR_lock" style="display: none;">
                                            <span class="leftTitle2"><span>微信公众号：</span></span>
                                            <div id="QRCodeBox" class="uploadQrCode">
                                                <div class="QRImg comUploadImg">
                                                    <img ng-src="//hd.faisys.com/image/qrcodeImg.jpg" onload="hdFaiOperateImg(this)" src="//hd.faisys.com/image/qrcodeImg.jpg" width="52" height="52" style="display: block;">
                                                </div><div class="QRloaBox comUploadBox chooseImg">
                                                    <span id="QRloadButton" class="btn main-Button"><input id="select_btn_1" class="selectbtn" style="display:none;" type="file" name="fileselect[]" accept="image/bmp,image/jpg,image/png,image/gif,image/jpeg"><a id="file_upload_1-button" href="###" class="uploadify-button">＋ 上传二维码</a></span>
                                                    <a id="attentionUnderstand" class="comUploadExplain aTips hide" target="_blank" href="http://jz.faisco.com/blog/1647">如何找到公众号二维码？</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="gameSetBox" class="subTabsettingBox hide">
                                <div class="baseLine1 verTipsBox">
                                    <span class="leftTitle"><span class="powerIcon  flag"></span><span class="baseSettingTitle">广告：</span></span>
                                    <input type="radio" id="ShowSkillSup" ng-model="game._flag.f4" ng-value="true" name="isShowSkillSup" checked="" class="ng-pristine ng-untouched ng-valid" value="true"><label for="ShowSkillSup">显示</label>
                                    <input type="radio" ng-class="::{js_ver:game.isOldSkill}" _ver="2" id="hideSkillSup" ng-disabled="!game.isOldSkill&amp;&amp;!game._flagB.f8192" ng-model="game._flag.f4" ng-value="false" name="isShowSkillSup" style="margin-left: 10px;" class="ng-pristine ng-untouched ng-valid" value="false" disabled="disabled"><label for="hideSkillSup">隐藏</label>
                                </div>
                                <div class="skillMsg commMg baseLine tipsColor">
                                <!-- ngIf: !game._flagB.f8192 --><span ng-if="!game._flagB.f8192" class="ng-scope">隐藏广告需要单独购买 <a class="aTips" target="_blank" onclick="linkToShop()">立即购买</a></span><!-- end ngIf: !game._flagB.f8192 -->

                                </div>



                                <div class="baseLine1 verTipsBox">
                                    <span class="leftTitle"><span class="powerIcon ver_by flag"></span><span class="baseSettingTitle">轮播获奖信息：</span></span>
                                    <input class="js_ver ng-pristine ng-untouched ng-valid" _ver="1" type="radio" id="openSlide" ng-model="game._flag.f536870912" ng-value="true" name="showSlide" value="true" disabled="disabled"><label for="openSlide">开启</label>
                                    <input type="radio" id="hideSlide" ng-model="game._flag.f536870912" ng-value="false" name="showSlide" class="ng-pristine ng-untouched ng-valid" value="false"><label for="hideSlide">关闭</label>
                                    <div class="introTips commMg">有三名以上玩家获奖后，活动首页将轮播展示玩家中奖信息，优先展示等级较高的获奖者 <br></div>
                                </div>

                                <div class="baseLine1 verTipsBox">
                                    <span class="leftTitle"><span class="powerIcon ver_by flag"></span><span class="baseSettingTitle">可参与地区：</span></span>
                                    <input type="radio" ng-model="game._flagB.f64" ng-value="false" id="allArea" name="openAreaLimit" class="ng-pristine ng-untouched ng-valid" value="false"><label for="allArea">全部</label>
                                    <input type="radio" ng-model="game._flagB.f64" ng-value="true" id="someArea" name="openAreaLimit" class="js_ver ng-pristine ng-untouched ng-valid" _ver="1" value="true" disabled="disabled"><label for="someArea">部分</label>
                                    <div id="areaSelectBox" class="commMg ng-hide" ng-show="game._flagB.f64" style="margin-top:8px;"><div class="faiArea"><div class="choiceBtn">请选择地区</div><div class="areaPanel hide"><div class="area"><div class="provice"><ul><li class="fontBlue" id="provice110000" data="{&quot;name&quot;:&quot;北京&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;110000&quot;}"><div class="label"></div>北京<span class="num"></span></li><li id="provice120000" data="{&quot;name&quot;:&quot;天津&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;120000&quot;}">天津<span class="num"></span></li><li id="provice130000" data="{&quot;name&quot;:&quot;河北省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;130000&quot;}">河北省<span class="num"></span></li><li id="provice140000" data="{&quot;name&quot;:&quot;山西省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;140000&quot;}">山西省<span class="num"></span></li><li id="provice150000" data="{&quot;name&quot;:&quot;内蒙古自治区&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;150000&quot;}">内蒙古自治区<span class="num"></span></li><li id="provice210000" data="{&quot;name&quot;:&quot;辽宁省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;210000&quot;}">辽宁省<span class="num"></span></li><li id="provice220000" data="{&quot;name&quot;:&quot;吉林省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;220000&quot;}">吉林省<span class="num"></span></li><li id="provice230000" data="{&quot;name&quot;:&quot;黑龙江省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;230000&quot;}">黑龙江省<span class="num"></span></li><li id="provice310000" data="{&quot;name&quot;:&quot;上海&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;310000&quot;}">上海<span class="num"></span></li><li id="provice320000" data="{&quot;name&quot;:&quot;江苏省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;320000&quot;}">江苏省<span class="num"></span></li><li id="provice330000" data="{&quot;name&quot;:&quot;浙江省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;330000&quot;}">浙江省<span class="num"></span></li><li id="provice340000" data="{&quot;name&quot;:&quot;安徽省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;340000&quot;}">安徽省<span class="num"></span></li><li id="provice350000" data="{&quot;name&quot;:&quot;福建省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;350000&quot;}">福建省<span class="num"></span></li><li id="provice360000" data="{&quot;name&quot;:&quot;江西省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;360000&quot;}">江西省<span class="num"></span></li><li id="provice370000" data="{&quot;name&quot;:&quot;山东省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;370000&quot;}">山东省<span class="num"></span></li><li id="provice410000" data="{&quot;name&quot;:&quot;河南省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;410000&quot;}">河南省<span class="num"></span></li><li id="provice420000" data="{&quot;name&quot;:&quot;湖北省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;420000&quot;}">湖北省<span class="num"></span></li><li id="provice430000" data="{&quot;name&quot;:&quot;湖南省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;430000&quot;}">湖南省<span class="num"></span></li><li id="provice440000" data="{&quot;name&quot;:&quot;广东省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;440000&quot;}">广东省<span class="num"></span></li><li id="provice450000" data="{&quot;name&quot;:&quot;广西壮族自治区&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;450000&quot;}">广西壮族自治区<span class="num"></span></li><li id="provice460000" data="{&quot;name&quot;:&quot;海南省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;460000&quot;}">海南省<span class="num"></span></li><li id="provice500000" data="{&quot;name&quot;:&quot;重庆&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;500000&quot;}">重庆<span class="num"></span></li><li id="provice510000" data="{&quot;name&quot;:&quot;四川省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;510000&quot;}">四川省<span class="num"></span></li><li id="provice520000" data="{&quot;name&quot;:&quot;贵州省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;520000&quot;}">贵州省<span class="num"></span></li><li id="provice530000" data="{&quot;name&quot;:&quot;云南省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;530000&quot;}">云南省<span class="num"></span></li><li id="provice540000" data="{&quot;name&quot;:&quot;西藏自治区&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;540000&quot;}">西藏自治区<span class="num"></span></li><li id="provice610000" data="{&quot;name&quot;:&quot;陕西省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;610000&quot;}">陕西省<span class="num"></span></li><li id="provice620000" data="{&quot;name&quot;:&quot;甘肃省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;620000&quot;}">甘肃省<span class="num"></span></li><li id="provice630000" data="{&quot;name&quot;:&quot;青海省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;630000&quot;}">青海省<span class="num"></span></li><li id="provice640000" data="{&quot;name&quot;:&quot;宁夏回族自治区&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;640000&quot;}">宁夏回族自治区<span class="num"></span></li><li id="provice650000" data="{&quot;name&quot;:&quot;新疆维吾尔自治区&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;650000&quot;}">新疆维吾尔自治区<span class="num"></span></li><li id="provice710000" data="{&quot;name&quot;:&quot;台湾省&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;710000&quot;}">台湾省<span class="num"></span></li><li id="provice810000" data="{&quot;name&quot;:&quot;香港特别行政区&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;810000&quot;}">香港特别行政区<span class="num"></span></li><li id="provice820000" data="{&quot;name&quot;:&quot;澳门特别行政区&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;820000&quot;}">澳门特别行政区<span class="num"></span></li><li id="provice990000" data="{&quot;name&quot;:&quot;海外&quot;,&quot;parentid&quot;:&quot;1&quot;,&quot;id&quot;:&quot;990000&quot;}">海外<span class="num"></span></li></ul></div><div class="city"><div class="title"><span class="name">北京</span><div class="warning hide">最多可选择10个地区</div></div><div class="cityList"><div class="all cityBlock " data="110000">全部</div><div class="otherCity"><div class="cityBlock left " data="110100">北京市</div></div></div></div></div><div class="btnList"><div class="center"><div class="submitBtn">确定</div><div class="canlceBtn">取消</div></div></div></div></div></div>
                                    <div id="checkAreaList" ng-show="game._flagB.f64" class="ng-hide"></div>
                                </div>
                                <div class="clear"></div>
                                <div class="baseLine1 autoPopupOption" style="display: none;">
                                    <span class="leftTitle"><span class="baseSettingTitle">自动弹出活动说明：</span></span>
                                    <input type="radio" id="openAwardExp" ng-model="game._flagB.f2048" ng-value="true" name="openAutoAwardExp" checked="" class="ng-pristine ng-untouched ng-valid" value="true"><label for="openAwardExp">开启</label>
                                    <input type="radio" id="closeAwardExp" ng-model="game._flagB.f2048" ng-value="false" name="openAutoAwardExp" class="ng-pristine ng-untouched ng-valid" value="false"><label for="closeAwardExp">关闭</label>
                                    <div class="introTips" style="margin-left:155px;">开启后，玩家第一次进入活动将弹出活动说明</div>
                                </div>

                                <!-- 强制关注功能 -->
                                <div class="verTipsBox baseLine1">
                                    <span class="leftTitle"><span class="powerIcon ver_biz flag"></span><span class="baseSettingTitle">强制关注：</span></span>
                                    <input disabled="disabled" type="radio" class="js_ver ng-pristine ng-untouched ng-valid" _ver="2" _strict="true" id="openFansOnly" name="forFansOnly" ng-model="game._flagB.f512" ng-value="true" value="true"><label for="openFansOnly">开启</label>
                                    <input type="radio" id="closeFansOnly" name="forFansOnly" ng-model="game._flagB.f512" ng-value="false" style="margin-left: 10px;" class="ng-pristine ng-untouched ng-valid" value="false"><label for="closeFansOnly">关闭</label>


                                </div>
                                <!-- 强制关注的上传图片盒子 -->
                                <div class="commMg baseLine uploadWXCountPicBox ng-hide" ng-show="game._flagB.f512">
                                    <div class="strongAttTxt tipsColor">

                                            <div class="strongAttTxt_diff">由于微信接口问题，非已认证服务号体验会稍差，敬请见谅！</div>

                                        <div>开启后有被微信封停公众号的风险，请慎用！</div>
                                    </div>
                                </div>
                                <div class=" commMg tipsColor"><span class="theInnerTxt">请先到个人中心开通强制关注功能</span><a href="http://hd.faisco.com/news/5249" target="_blank" class="aTips knowMore">详细教程</a></div>

                            </div>
                        </div>
                    </div>
                    <div id="gameTypeSetting" class="settingBox hide" style="display: none;">
                        <div class="commBg pd10 text">请选择活动派奖方式（活动发布后将无法修改）</div>
                        <div class="setGameTypeBox relative commBg">
                            <!-- ngRepeat: info in ::game.$$gameTypeInfo --><div class="iconBox pointer in-bl setGameType ng-scope checked" ng-repeat="info in ::game.$$gameTypeInfo" ng-class="{'checked':game.gameType == info.type}" ng-click="game.$$checkedGameType(info.type)">
                                <div class="drawIcon typeIcon"></div>
                                <div class="font ng-binding">抽奖派发</div>
                            </div><!-- end ngRepeat: info in ::game.$$gameTypeInfo -->
                        </div>
                        <div id="gameTypeDesc" class="tipsColor center">
                            <div class="text pd12 ">顾客完成活动要求后就可获得抽奖机会，您可以按需设置中奖率和每人最多可中奖次数。</div>
                        </div>

                        <div id="drawSetBox" class="subTabsettingBox">


                            <div id="drawInfoBox">

                            <div id="drawTimesSettingBox">
                                <div class="settingLine inputLh" id="totalDrawTimes">
                                    <span class="leftTitle ng-binding">总抽奖机会：</span>
                                    <input type="radio" ng-model="game._flag.f268435456" ng-value="false" id="noLimitDrawTimes" name="isLimitDrawTimes" class="ng-pristine ng-untouched ng-valid" value="false"><label for="noLimitDrawTimes">不限</label>
                                    <input type="radio" ng-model="game._flag.f268435456" ng-value="true" id="limitDrawTimes" name="isLimitDrawTimes" class="ng-pristine ng-untouched ng-valid" value="true"><label for="limitDrawTimes">限制</label>
                                    <span id="setDrawTotalBox" ed-show="game._flag.f268435456" class="ng-binding ERR_lock ERR_lock_strict" style="display: none;">每人最多有<input id="drawTotalTimes" ng-model="game._setting.drawTotal" model-format="int" maxlength="2" class="onlyNum ng-pristine ng-untouched ng-valid ng-valid-maxlength" type="text"> 次</span>
                                </div>
                                <!-- ngIf: !game.$$drawTimes.none --><div class="settingLine ng-binding ng-scope" ng-if="!game.$$drawTimes.none" id="dayDrawTimes">
                                    <span class="leftTitle ng-binding">每日抽奖机会：</span>
                                    每人每日有 <input id="drawTimesLimit" ng-model="game._setting.dtl" model-format="int" maxlength="2" class="onlyNum ng-pristine ng-untouched ng-valid ng-valid-maxlength" type="text"> 次抽奖机会
                                </div><!-- end ngIf: !game.$$drawTimes.none -->
                            </div>

                                <div id="prizedTotalBox" ed-show="game.gameType == 0 || game.gameType == 4">
                                    <div class="settingLine">
                                        <span class="leftTitle">每人中奖次数：</span>
                                        每人最多可中奖 <input id="awardTimesLimit" ng-model="game._setting.awardTimesLimit" model-format="int" maxlength="2" class="onlyNum ng-pristine ng-untouched ng-valid ng-valid-maxlength" type="text"> 次
                                    </div>
                                </div>

                                <div class="settingLine" style="margin-bottom:8px;">
                                    <span class="leftTitle">总中奖率：</span>
                                    <input id="winningRate" ng-model="game._setting.winningRate" model-format="float" class="input onlyNum input4 ng-pristine ng-untouched ng-valid" type="text">  %&nbsp;<a id="simulationSum">模拟计算</a>
                                </div>
                                <div class="inputErrMsg commMg hide" style="display: none;"></div>
                                <div id="winningRateTip" class="g_tip commMg ng-binding" _expplayer="10">这意味着每10次抽奖3次获奖 <a class="aTips" href="http://hd.faisco.com/news/4706" target="_blank">了解更多</a></div>

                            </div>


                            <div id="playTimesSettingBox" class="ERR_lock" style="display: none;">
                                <div class="settingLine inputLh">
                                    <span class="leftTitle">总参与机会：</span>
                                    <input type="radio" ng-model="game._flagB.f16384" ng-value="false" id="noLimitPlayTimes" name="isLimitPlayTimes" class="ng-pristine ng-untouched ng-valid" value="false"><label for="noLimitPlayTimes">不限</label>
                                    <input type="radio" ng-model="game._flagB.f16384" ng-value="true" id="limitPlayTimes" name="isLimitPlayTimes" class="ng-pristine ng-untouched ng-valid" value="true"><label for="limitPlayTimes">限制</label>
                                    <span id="setDrawTotalBox" ed-show="game._flagB.f16384" class="ERR_lock ERR_lock_strict" style="display: none;">每人最多有
                                    <input id="playTotalTimes" ng-model="game._setting.playTotalLimit" model-format="int" maxlength="2" class="onlyNum ng-pristine ng-untouched ng-valid ng-valid-maxlength" type="text"> 次</span>
                                </div>
                                <div id="playTotalLimitErr" class="inputErrTips">限制总参与机会必须大于或等于每日参与机会</div>
                                <div class="settingLine">
                                    <span class="leftTitle">每日参与机会：</span>
                                    每人每日有<input id="playTimesLimit" maxlength="2" class="onlyNum ng-pristine ng-untouched ng-valid ng-valid-maxlength" type="text" ng-model="game._setting.playTimesLimit" model-format="int">
                                    次参与机会
                                </div>
                                <span id="playTimesLimitErr" class="inputErrTips">最少1次最多10次 </span>
                            </div>


                            <div id="helpSettingBox" ed-show="game.gameType == HdGameDef.GameType.DIRECT||(game.gameType == HdGameDef.GameType.RANK &amp;&amp; game.$$showPlayTimeSetting)">
                                <div class="verTipsBox settingLine">
                                    <span class="leftTitle"><span class="powerIcon ver_by flag"></span>好友助力：</span>
                                    <input type="radio" id="closeHelpSetting" ng-model="game._setting.helpType" ng-value="::1" name="HelpSetting" ng-disabled="::(game.$$isPublish &amp;&amp; game._setting.helpType != 1)" class="ng-pristine ng-untouched ng-valid" value="1"><label for="closeHelpSetting">关闭</label>
                                    <input type="radio" id="openHelpShare" ng-model="game._setting.helpType" ng-value="::2" class="js_ver ng-pristine ng-untouched ng-valid" _ver="1" name="HelpSetting" ng-disabled="::(game.$$isPublish &amp;&amp; game._setting.helpType != 2)" value="2" disabled="disabled"><label for="openHelpShare">分享奖励</label>
                                    <input type="radio" id="openHelpInvite" ng-model="game._setting.helpType" ng-value="::3" class="js_ver ng-pristine ng-untouched ng-valid" _ver="1" name="HelpSetting" ng-disabled="::(game.$$isPublish &amp;&amp; game._setting.helpType != 3)" value="3" disabled="disabled"><label for="openHelpInvite">邀请奖励</label>
                                    <span class="tipsColor">发布后不可切换选择</span>
                                </div>

								<div id="HelpDetailSettingBox" class="settingLine commMg ERR_lock ERR_lock_strict" ed-show="game._setting.helpType != 1" style="display: none;">
									<div>
										<div id="settingForShare" ed-show="game._setting.helpType == 2" class="ERR_lock ERR_lock_strict" style="display: none;">
											<span>分享给好友或朋友圈，当天将额外获得</span>
											<input id="addDrawTime1" ng-model="game._setting.addDrawTime" maxlength="2" class="onlyNum ng-pristine ng-untouched ng-valid ng-valid-maxlength" model-format="int" type="text">
											<span>次<span class="drawText">抽奖</span>机会</span>
											<div id="addDrawTimeErrForShare" class="inputErrTips">最少1次最多99次</div>
										</div>
										<div id="settingForInvite" ed-show="game._setting.helpType == 3" class="ERR_lock ERR_lock_strict" style="display: none;">

											<span>每成功邀请一位好友，当天将额外获得一次<span class="drawText">抽奖</span>机会，每天最多获得</span>
											<input id="inviteTimeLimit" ng-model="game._setting.inviteTimeLimit" maxlength="2" class="onlyNum ng-pristine ng-untouched ng-valid ng-valid-maxlength" model-format="int" type="text">
											<span>次</span>

											<div id="addDrawTimeErrForInvite" class="inputErrTips" style="display: none;">最少1次最多99次</div>
										</div>
										<div id="addDrawTimeErr" class="inputErrTips">最少1次最多99次</div>
									</div>
									<div class="tipsColor tipsForShare ERR_lock ERR_lock_strict" ed-show="game._setting.helpType == 2" style="display: none;">分享奖励仅当日首次分享有效；</div>
									<div class="tipsColor tipsForInvite ERR_lock ERR_lock_strict" ed-show="game._setting.helpType == 3" style="display: none;">好友成功参与后才能获得奖励，邀请同一位好友无效；</div>
									<div class="tipsColor">分享提示语仅在<span class="drawText">抽奖</span>次数为零时提示，次数不为零时分享也会额外增加<span class="drawText">抽奖</span>机会；<br>开启有被微信拉黑朋友圈仅自己可见的风险，请慎用！</div>
								</div>
                            </div>


                            <div id="openAwardLinkNoDrawBox" ng-hide="!game.$$afterLinkModify &amp;&amp; game.gameType == HdGameDef.GameType.DIRECT">
                                <div class="verTipsBox settingLine">
                                    <span class="leftTitle ng-binding"><span class="powerIcon ver_by flag"></span>联系信息：</span>
                                    <!-- ngIf: ::game.$$afterLinkModify --><span ng-if="::game.$$afterLinkModify" class="ng-scope">
                                        <input type="radio" id="closeAwardLinkNoDraw" ng-model="game._setting.linkInfotype" ng-value="::1" name="awardLinkNoDraw" class="ng-pristine ng-untouched ng-valid" value="1"><label for="closeAwardLinkNoDraw">关闭</label>
                                        <input type="radio" _ver="1" _strict="true" id="beforeJoinLink" class="showContactBox js_ver ng-pristine ng-untouched ng-valid" ng-model="game._setting.linkInfotype" ng-value="::2" name="awardLinkNoDraw" value="2" disabled="disabled"><label for="beforeJoinLink">参与前填写</label>
                                        <!-- ZHUANPAN GUAGUALE ZAJINDAN YAOYIYAO HSPFZHLWY -->
                                        <!-- ngIf: ::![0,1,2,24,54,55].contains(game.style) -->
                                        <span id="setAfterAwardBox" ng-hide="game.$hideAfterAward">
                                            <input type="radio" _ver="1" _strict="true" id="afterAwardLink" class="showContactBox js_ver ng-pristine ng-untouched ng-valid" ng-model="game._setting.linkInfotype" ng-value="::4" name="awardLinkNoDraw" value="4" disabled="disabled"><label for="afterAwardLink">中奖后填写</label>
                                        </span>
                                    </span><!-- end ngIf: ::game.$$afterLinkModify -->
                                    <!-- ngIf: ::!game.$$afterLinkModify -->
                                </div>
                                 <div id="concactAward" class="contactBox commMg ERR_lock ERR_lock_strict" ed-show="game._setting.linkInfotype == 4" style="display: none;">
                                    <span class="filedSpan">对应奖项：</span>
                                    <input id="openAllAward" type="radio" ng-value="true" ng-model="game._setting.linkInfoAll" name="isOpenAllAward" class="ng-pristine ng-untouched ng-valid" value="true"><label for="openAllAward">全部奖项</label>
                                    <input id="openPartAward" type="radio" ng-value="false" ng-model="game._setting.linkInfoAll" name="isOpenAllAward" class="ng-pristine ng-untouched ng-valid" value="false"><label for="openPartAward">部分奖项</label>
                                    <span class="toAwardTip tipsColor ng-hide" ng-show="!game._setting.linkInfoAll">请到对应的奖项中设置 <a class="aTips" href="###" onclick="clickAwardTab()">前往设置</a></span>
                                </div>
                                <div id="contactBoxNoDraw" class="contactBox commMg ERR_lock" ed-show="game.$$afterLinkModify?(game._setting.linkInfotype != 1):game._flagB.f2" ed-strict="false" style="display: none;">
                                    <span class="filedSpan">需填信息：</span>
                                    <input id="checkNameBtnNoDraw" class="checkContBtn ng-pristine ng-untouched ng-valid" ng-model="game._setting._nodrawcontact[0]" type="checkbox" name="checkNameBtnNoDraw "><label for="checkNameBtnNoDraw">姓名</label>
                                    <input id="checkPhoneBtnNoDraw" class="checkContBtn ng-pristine ng-untouched ng-valid" ng-model="game._setting._nodrawcontact[1]" type="checkbox" name="checkPhoneBtnNoDraw"><label for="checkPhoneBtnNoDraw">联系电话</label>
                                    <input id="checkAddressBtnNoDraw" class="checkContBtn ng-pristine ng-untouched ng-valid" ng-model="game._setting._nodrawcontact[2]" type="checkbox" name="checkAddressBtnNoDraw"><label for="checkAddressBtnNoDraw">联系地址</label>
									<span class="hide" style="color: #74b7e6;text-decoration: underline;cursor: pointer;" onclick="showUserDefineView()">自定义</span>
                                    <div id="contactErrNodraw" class="contactErr inputErrTips" style="display: none;">至少选择一个选项！</div>
                                    <!-- ngIf: ::game.$$afterLinkModify --><div class="tipsColor ng-binding ng-scope" ng-if="::game.$$afterLinkModify"></div><!-- end ngIf: ::game.$$afterLinkModify -->
                                    <!-- ngIf: ::!game.$$afterLinkModify -->
                                </div>
                            </div>

                        </div>
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
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style lang="css">
</style>
