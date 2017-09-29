$(function(){
  var shareUrl = window.location.href.replace(/#.*$/,"");
  // var token = window.location.href.match(/[^/]*$/,'');
  //     console.log('微信=========================='+token);

  var redirect_url;
  var code;
  $.ajax({
      url: "/api/wechat/jsapi/signature?url="+encodeURIComponent(shareUrl)+'&code='+code,
      type: "get",
      dataType:"json",
      success: function (result) {
        if(result.status == 0){
          redirect_url = result.data.redirect_url
          wx.config({
              debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: result.data.appid, // 必填，公众号的唯一标识
              timestamp: result.data.timestamp, // 必填，生成签名的时间戳
              nonceStr: result.data.noncestr, // 必填，生成签名的随机串
              signature: result.data.signature,// 必填，签名，见附录
              redirect_url: result.data.redirect_url,
              jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          });
        }
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        // alert(textStatus)
      }
  });
  wx.ready(function(){
      var option =  {
          title: activity.base_setting.activity_name, // 分享标题
          desc: activity.sharing_setting.wx_sharing_winner_content, // 分享描述
          link: redirect_url,
          imgUrl: 'http://img.ruwe.cn/group1/M00/01/BD/ChiijVlsiTqATrWyAACEJgopKP4607.png', // 分享图标
          success: function () {// 用户确认分享后执行的回调函数
          },
          cancel: function () {// 用户取消分享后执行的回调函
          }
      };
      wx.onMenuShareTimeline(option);
      wx.onMenuShareAppMessage(option);
      wx.onMenuShareQQ(option);
      wx.onMenuShareQZone(option);
  });
  wx.error(function(res){
      // alert("error:"+JSON.stringify(res));
      console.log('error:'+JSON.stringify(res));
  });
});
