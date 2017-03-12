$(".nav_auto li").eq(0).addClass('active_nav');
$(".content_box .content").eq(0).show();
$(".nav_auto li").click(function (){
	var index = $(this).index();
	$(".nav_auto li").removeClass('active_nav');
	$(".nav_auto li").eq(index).addClass('active_nav');
	$(".content_box .content").eq(index).show().siblings().hide();
})

   		//代码初始化
      	var size=$(".num li").size();
         //手动控制轮播效果
        $(".img li").eq(0).show();
        $(".num li").eq(0).addClass("active_num");
        $(".num li").click(function() {
            $(this).addClass("active_num").siblings().removeClass("active_num");
            var index1 = $(this).index();
            i=index1;
            $(".img li").eq(index1).fadeIn(500).siblings().fadeOut(500);
        })


		//自动
        var i = 0;
        var t = setInterval(move, 3000);
        //核心向左的函数
        function moveLeft(){
            i--;
            if (i == -1) {
                  i = size-1;
            }
            
            $(".num li").eq(i).addClass("active_num").siblings().removeClass("active_num");
            $(".img li").eq(i).fadeIn(500).siblings().fadeOut(500);
        }
        //核心向右的函数
        function move() {
            i++;
            if (i == size) {
                i = 0;
            }
            $(".num li").eq(i).addClass("active_num").siblings().removeClass("active_num");
            $(".img li").eq(i).fadeIn(500).siblings().fadeOut(500);
        }
        //定时器的开始与结束
        $(".content").hover(function(){
            clearInterval(t);
        }, function(){
            t = setInterval(move, 3000)
        })
		//左边按钮的点击事件
        $(".content .left").click(function() {
            moveLeft();
        })
        //右边按钮的点击事件
        $(".content .right").click(function() {
            move();
        })
       
				$(".barToggle").css('display','none');
				$(".rightBar .barClosed").click(function (){
					$(".rightBar").fadeOut();
					$(".barToggle").fadeIn();
				})
				$(".barToggle").click(function (){
					$(".rightBar").fadeIn();
					$(".barToggle").fadeOut();
				})
		