(function($){
      // 活动说明tab
      $(".rules-tab li").click(function(){
          $(".rules-tab li").eq($(this).index()).addClass("cur").siblings().removeClass('cur');
          $(".rules-content").hide().eq($(this).index()).show();
      });
      $('.rules-icon').click(function(){
        $('#rules-box').show()
      });
      $('.close').click(function(){
        $('#rules-box').hide()
        $('.main').show()
      });
      // 判断当前页面环境是否是在iframe中
      if(location != top.location){
        // 移入添加border
        $('.edit-layer').hover(function(){
          $('.edit-layer').removeClass('layer-border');
          $(this).addClass('layer-border');
          // 点击事件
        },function(){
          $('.layer-border').removeClass('layer-border');
        });

        // 点击激活编辑状态
        $('.edit-layer').click(function(){
          $('.edit-layer').removeClass('layer-border-active');
          $(this).addClass('layer-border-active');
          if($('.tool-bar')){
            $('.tool-bar').remove();
          }
          setTimeout(function(){
            $(this).removeClass('layer-border-active');
          }, 3000);
          $(this).append('<div class="tool-bar"><span>编辑</span></div>');
          $('.edit-layer .tool-bar').on('click',function(e){
            e.stopPropagation();
            var label_name = $(this).parent().attr('data-layer');
            var label_type = $(this).parent().attr('data-type');
            parent._setProperty(label_name,label_type)
          });
        });
      }
    })(jQuery);
