'use strict'
// 大转盘初始参数
var turnplate = {
  restaraunts:[],             //大转盘奖品名称
  colors:['#FFF4D6', '#FFFFFF', '#FFF4D6', '#FFFFFF','#FFF4D6', '#FFFFFF', '#FFF4D6', '#FFFFFF','#FFF4D6', '#FFFFFF'],                  //大转盘奖品区块对应背景颜色
  outsideRadius:192,          //大转盘外圆的半径
  textRadius:155,             //大转盘奖品位置距离圆心的距离
  insideRadius:68,            //大转盘内圆的半径
  startAngle:0,               //开始角度
  bRotate:false,              //false:停止;ture:旋转
  award_id:''                  // 返回中奖结果id
};

//旋转转盘 item:奖品位置; txt：提示语;
turnplate.rotateFn = function (item, duration, fn){
    let angles = item * (360 / turnplate.restaraunts.length) - (360 / (turnplate.restaraunts.length*2));
    if(angles<270){
        angles = 270 - angles;
    }else{
        angles = 360 - angles + 270;
    }
    // $('#wheelcanvas').stopRotate();
    $('#wheelcanvas').rotate({
        angle:0,
        animateTo:angles+1800,
        duration:duration || 10000,
        callback:function (){
            fn&&fn();
            turnplate.bRotate = !turnplate.bRotate;
        }
    });
};

//页面所有元素加载完毕后执行drawRouletteWheel()方法对转盘进行渲染

turnplate.drawRouletteWheel = function() {
  let canvas = document.getElementById('wheelcanvas');
  if (canvas.getContext) {
      //根据奖品个数计算圆周角度
      let arc = Math.PI / (turnplate.restaraunts.length/2);
      let ctx = canvas.getContext('2d');
      //在给定矩形内清空一个矩形
      ctx.clearRect(0,0,422,422);
      //strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式
      ctx.strokeStyle = '#FFBE04';
      //font 属性设置或返回画布上文本内容的当前字体属性
      ctx.font = '16px Microsoft YaHei';
      for(let i = 0; i < turnplate.restaraunts.length; i++) {
          let angle = turnplate.startAngle + i * arc;
          ctx.fillStyle = turnplate.colors[i];
          ctx.beginPath();
          //arc(x,y,r,起始角,结束角,绘制方向) 方法创建弧/曲线（用于创建圆或部分圆）
          ctx.arc(211, 211, turnplate.outsideRadius, angle, angle + arc, false);
          ctx.arc(211, 211, turnplate.insideRadius, angle + arc, angle, true);
          ctx.stroke();
          ctx.fill();
          //锁画布(为了保存之前的画布状态)
          ctx.save();

          //----绘制奖品开始----
          ctx.fillStyle = '#E5302F';
          let text = turnplate.restaraunts[i].award_name;
          let line_height = 17;
          //translate方法重新映射画布上的 (0,0) 位置
          ctx.translate(211 + Math.cos(angle + arc / 2) * turnplate.textRadius, 211 + Math.sin(angle + arc / 2) * turnplate.textRadius);

          //rotate方法旋转当前的绘图
          ctx.rotate(angle + arc / 2 + Math.PI / 2);

          /** 下面代码根据奖品类型、奖品名称长度渲染不同效果，如字体、颜色、图片效果。(具体根据实际情况改变) **/
          if(text.indexOf('M')>0){//流量包
              let texts = text.split('M');
              for(let j = 0; j<texts.length; j++){
                  ctx.font = j == 0?'bold 20px Microsoft YaHei':'16px Microsoft YaHei';
                  if(j == 0){
                      ctx.fillText(texts[j]+'M', -ctx.measureText(texts[j]+'M').width / 2, j * line_height);
                  }else{
                      ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * line_height);
                  }
              }
          }else if(text.indexOf('M') == -1 && text.length>6){//奖品名称长度超过一定范围
              text = text.substring(0,6)+'||'+text.substring(6);
              let texts = text.split('||');
              for(let j = 0; j<texts.length; j++){
                  ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * line_height);
              }
          }else{
              //在画布上绘制填色的文本。文本的默认颜色是黑色
              //measureText()方法返回包含一个对象，该对象包含以像素计的指定字体宽度
              ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
          }

          //把当前画布返回（调整）到上一个save()状态之前
          ctx.restore();
          //----绘制奖品结束----
      }
  }
}
