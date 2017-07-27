'use strict'
var ggl = {};
ggl.init = function(){
  var c1 = document.getElementById('card_canvas');
  var ctx = null;      //画笔
  var ismousedown = false;  //标志用户是否按下鼠标或开始触摸
  var isOk;     //标志用户是否已经刮开了一半以上
  var fontem = parseInt(window.getComputedStyle(document.documentElement, null)['font-size']);//


  //这里很关键，canvas自带两个属性width、height,我理解为画布的分辨率，跟style中的width、height意义不同。
  //最好设置成跟画布在页面中的实际大小一样
  //不然canvas中的坐标跟鼠标的坐标无法匹配
  c1.width = c1.clientWidth;
  c1.height = c1.clientHeight;
  ctx = c1.getContext('2d');

  //PC端的处理
  c1.addEventListener('mousemove',eventMove,false);
  c1.addEventListener('mousedown',eventDown,false);
  c1.addEventListener('mouseup',eventUp,false);

  //移动端的处理
  c1.addEventListener('touchstart', eventDown,false);
  c1.addEventListener('touchend', eventUp,false);
  c1.addEventListener('touchmove', eventMove,false);

  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = '#aaaaaa';
  ctx.fillRect(0,0,c1.clientWidth,c1.clientHeight);
  ctx.fill();

  ctx.font = 'Bold 30px Arial';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#999999';
      ctx.fillText('刮一刮',c1.width/2,50);

  //把这个属性设为这个就可以做出圆形橡皮擦的效果
  //有些老的手机自带浏览器不支持destination-out,下面的代码中有修复的方法
  ctx.globalCompositeOperation = 'destination-out';

  //鼠标按下 和 触摸开始
  function eventDown(e){
    e.preventDefault();
    ismousedown = true;
  }

  //鼠标抬起 和 触摸结束
  function eventUp(e){
    e.preventDefault();

    //得到canvas的全部数据
    var a = ctx.getImageData(0,0,c1.width,c1.height);
    var j = 0;
    for(var i = 3;i<a.data.length;i += 4){
        if(a.data[i] == 0) j++;
    }

    //当被刮开的区域等于一半时，则可以开始处理结果
    if(j >= a.data.length/8){
      isOk = 1;
    }
    ismousedown = false;

    if(isOk){
      $('.cardButton').css('z-index','3');
    }
  }

  //鼠标移动 和 触摸移动
  function eventMove(e){
    e.preventDefault();
    if(ismousedown) {
       if(e.changedTouches){
         e = e.changedTouches[e.changedTouches.length-1];
    }
    var topY = $('.card_ggl').offset().top;
    var oX = c1.offsetLeft,
        oY = c1.offsetTop+topY;

    var x = (e.clientX + document.body.scrollLeft || e.pageX) - oX || 0,
      y = (e.clientY + document.body.scrollTop || e.pageY) - oY || 0;

      //画360度的弧线，就是一个圆，因为设置了ctx.globalCompositeOperation = 'destination-out';
      //画出来是透明的
       ctx.beginPath();
       ctx.arc(x, y, fontem*1.2, 0, Math.PI * 2,true);

       //下面3行代码是为了修复部分手机浏览器不支持destination-out
       //我也不是很清楚这样做的原理是什么
       c1.style.display = 'none';
       c1.offsetHeight;
       c1.style.display = 'inherit';

       ctx.fill();
    }
  }
};
