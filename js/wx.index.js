$(document).ready(function(){
	//轮播图
	   //初始化
	$("#banner ul li").eq(0).css("display","block").siblings().css("display","none");
    $("#banner ol li").eq(0).css("background","white")
    //默认的循环轮播图；
    var wx_lunbo=null;
	wx_lunbo=setInterval(function(){
		doMove("wx_banner_next")
	},5000)
	var wx_banner_num=0;
function doMove(direction){
	//点击next
	if(direction=="wx_banner_next"){
		wx_banner_num++;
		 $("#banner ol li").eq(wx_banner_num).css("background","white").siblings().css("background","transparent")
		$("#banner ul li").fadeOut(600)
		setTimeout(function(){
		  $("#banner ul li").eq(wx_banner_num).css("display","block").siblings().css("display","none")
		},600)
		if(wx_banner_num>=$("#banner ul li").length-1){
			wx_banner_num=-1;
		};
	};
	//点击prov
	if(direction=="wx_banner_prov"){
        wx_banner_num--;
        $("#banner ol li").eq(wx_banner_num).css("background","white").siblings().css("background","transparent")
		$("#banner ul li").fadeOut(600)
		setTimeout(function(){
		  $("#banner ul li").eq(wx_banner_num).css("display","block").siblings().css("display","none")
		},600)
		if(wx_banner_num<0){
			wx_banner_num=$("#banner ul li").length-1;
		};
	};	
};
//悬停停止定时器
  $("#banner").hover(function(){
  	  clearInterval(wx_lunbo);
  	  $(".wx_banner_prov,.wx_banner_next").css("display","block")
  },function(){
  	$(".wx_banner_prov,.wx_banner_next").css("display","none")
  	wx_lunbo=setInterval(function(){
		doMove("wx_banner_next")
	},5000);
  });
//点击 .wx_banner_prov,.wx_banner_next
 $(".wx_banner_prov").click(function(){
 	doMove("wx_banner_prov")
 });
 $(".wx_banner_next").click(function(){
 	doMove("wx_banner_next")
 });
 //点击圆点
$("#banner ol li").click(function(){
	 $("#banner ol li").eq($(this).index()).css("background","white").siblings().css("background","transparent")
		$("#banner ul li").fadeOut(600);
		var banner_num=$(this).index();
		    wx_banner_num=banner_num;
		setTimeout(function(){
		  $("#banner ul li").eq(banner_num).css("display","block").siblings().css("display","none")
		},600)
});
//吸顶条
$(document).scroll(function(){
	if($(document).scrollTop()>131){
	$(".wx_header_bottom").css("position","fixed").css("animation","wx_header_bottom 1.5s 1");
	   $("#wx_header").css("padding-bottom","91px");
	}else{
	$(".wx_header_bottom").css("position","relative").css("animation","");
	   $("#wx_header").css("padding-bottom","0px")
	};
});
//六项技术
//".wx_con_tp a相对定位定位
 for(var i=0;i<$(".wx_con_tp a").length;i++){
 	if(i%2==0){
 		var one=i/2;
 		$(".wx_con_tp a").eq(i).css("left","0").css("top",one*100)
 	}else{
 		$(".wx_con_tp a").eq(i).css("right","0").css("top",one*100)
 	}
 }
function wx_jishu_left(num,ber){
	$(".wx_con_tp a").eq(num).hover(function(){
		$(this).css("background","#49b44f").stop().animate({
			width:"800px"
		},800).find("em h3,em p").css("color","white")
		$(".wx_con_tp a").eq(ber).stop().css("width","100px").css("margin-left","90px").find("em").css("display","none");
		$(".wx_con_tp_imgone").eq(num).css("display","none")
		$(".wx_con_tp_imgtwo").eq(num).css("display","block")
	},function(){
		$(this).css("background","transparent").stop().animate({
			width:"498px"
		},800).find("em h3").css("color","#3d3d3d").end().find("em p").css("color","#888888")
		$(".wx_con_tp a").eq(ber).css("margin-left","0px").stop().animate({
			width:"498px"
		},800).find("em").css("display","block");
		$(".wx_con_tp_imgone").eq(num).css("display","block");
		$(".wx_con_tp_imgtwo").eq(num).css("display","none")
	});
};	
function wx_jishu_right(num,ber){
	$(".wx_con_tp a").eq(num).hover(function(){
		$(this).css("background","#49b44f").stop().animate({
			width:"800px"
		},800).find("em h3,em p").css("color","white")
		$(".wx_con_tp a").eq(ber).stop().css("width","100px").css("margin-right","90px").find("em").css("display","none");	
		$(".wx_con_tp_imgone").eq(num).css("display","none")
		$(".wx_con_tp_imgtwo").eq(num).css("display","block")
	},function(){
		$(this).css("background","transparent").stop().animate({
			width:"498px"
		},800).find("em h3").css("color","#3d3d3d").end().find("em p").css("color","#888888")
		$(".wx_con_tp a").eq(ber).css("margin-right","0px").stop().animate({
			width:"498px"
		},800).find("em").css("display","block");
		$(".wx_con_tp_imgone").eq(num).css("display","block");
		$(".wx_con_tp_imgtwo").eq(num).css("display","none")
	});
};
wx_jishu_left(0,1);
wx_jishu_left(2,3);
wx_jishu_left(4,5);
wx_jishu_right(1,0);
wx_jishu_right(3,2);
wx_jishu_right(5,4);
//nav    left 图片
$(".wx_nav_left ul li i")
for(var j=0;j<$(".wx_nav_left ul li i").length;j++){
	$(".wx_nav_left ul li i").css("background-position-y","-15px");
	$(".wx_nav_left ul li i").eq(j).css("background-position-x",j*-35)
};
//点击nav left
$(".wx_nav_left").hover(function(){
	$(".wx_nav_left ul").stop().animate({
	  height:parseInt($(".wx_nav_left ul").find("li").css("height"))*$(".wx_nav_left ul").find("li").length+"px"
	},600);
},function(){
	$(".wx_nav_left ul").stop().animate({
	  height:"0px"
	},600);
});
//点击nav left里的li	
$(".wx_nav_left ul li").hover(function(){
	$(".wx_nav_left ul").css("width","682px");
	$(this).find("div").css("display","block").css("width","340px").stop().animate({
		width:'467px'
	},500)
},function(){
	$(".wx_nav_left ul").css("width","215px");
	$(this).find("div").css("display","none");
});
//功能体系选项卡
$(".wx_con_tx_con").eq(0).css("display","block").siblings().css("display","none") //初始化
 $(".wx_con_tx_nav li").click(function(){
 	$(this).addClass("wx_con_tx_nav_this").siblings().removeClass();
 	$(".wx_con_tx_con").eq($(this).index()).css("display","block").siblings().css("display","none")
 });
//QQ客服
  $(".tel").click(function(){
  	$(".dir").css("display","block");
  	$(".this").css("display","none");
  })
  //在线客户
   $(".close_contact").click(function(){
  	$(".dir").css("display","none");
  	$(".tel").css("display","block")
  });
//导航的图标
for(var k=0;k<$(".wx_nav_gn ul li").length;k++){
	$(".wx_nav_gn ul li").eq(k).find("h2 i").css("background-position-x",-(35*k+4)).css("background-position-y","-49px")
}
//wx_con_nav悬停
$(".wx_con_nav").hover(function(){
	 //alert($(this).index()-1)
	$(this).find("a").css("background","url(img/wx_lefetnav.png) no-repeat  center bottom");
	//alert($(".wx_con_nav_bot_auto span").eq($(this).index()-1).css("height"))
	$(".wx_con_nav_bot").stop().animate({
		height:$(".wx_con_nav_bot_auto span").eq($(this).index()-1).css("height")},500)
	$(".wx_con_nav_bot_auto span").eq($(this).index()-1).css("display","block")
},function(){
	$(this).find("a").css("background","transparent");
	$(".wx_con_nav_bot").css("height","0px")
	$(".wx_con_nav_bot_auto span").eq($(this).index()-1).css("display","none")
})
});
